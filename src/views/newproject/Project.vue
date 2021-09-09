<template>
  <div>
    <v-row v-if="steps && steps.length">
      <v-col cols="12" md="8">
        <v-card class="ma-2" color="cyan lighten-4" height="600" elevation="0">
          <v-card-title> {{ data.category }} </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <h4 class="text-h6 mb-4">
                  {{ currentStep.stepNumber }}. {{ currentStep.title }}
                </h4>
                <div v-for="(control, j) in currentStep.controls" :key="j">
                  <ProjectControl
                    :control="control"
                    @change="controlChanged(control)"
                  />
                </div>
              </v-col>
            </v-row>
            <v-row
              class="mb-16 pt-16"
              justify="space-between"
              style="margin-top: 200px"
            >
              <v-col cols="10" md="2"></v-col>
              <v-col cols="10" md="2" class="mx-2">
                <div>Completed</div>
                <v-progress-linear
                  v-model="progress"
                  color="warning"
                  height="25"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <div class="text-h5 ml-2">Summary</div>
        <div class="py-2 text-subtitle-1">
          <v-timeline dense align-top clipped>
            <v-timeline-item
              fill-dot
              small
              v-for="(step, index) in steps"
              :key="index"
            >
              <template v-slot:icon>
                <span>{{ step.stepNumber }}</span>
              </template>
              <div>
                {{ step.title }}
              </div>
              <div v-if="step.selectedOption" class="font-weight-medium">
                {{ step.selectedOption.text }}
              </div>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-col cols="6" md="6">
        <v-btn
          elevation="2"
          class="px-8 ma-4 text-capitalize"
          color="warning"
          @click="back"
        >
          Back
        </v-btn>
      </v-col>
      <v-col cols="6" md="6">
        <v-btn
          elevation="2"
          class="px-8 ma-4 text-capitalize"
          color="warning"
          @click="next"
        >
          Next
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import {
  ProjectFormRequestModel,
  ProjectFormModel,
  ProjectFormStep,
  ProjectFormStepControl,
} from "@/model";
import { IProjectService } from "@/service";
import ProjectControl from "./Project-Control.vue";

@Component({
  components: { ProjectControl },
})
export default class ProjectFormBuilder extends Vue {
  @Inject("ProjectService") ProjectService: IProjectService;
  @Prop() categoryName: string;
  @Prop() projectName: string;

  data: ProjectFormModel = new ProjectFormModel();

  steps: Array<ProjectFormStep> = [];
  stepNumber: number = 1;

  created() {
    const request = new ProjectFormRequestModel();

    request.categoryName = this.categoryName;
    request.projectName = this.projectName;

    this.ProjectService.newProject(request).then(
      (response: ProjectFormModel) => {
        this.data = response;

        this.steps.push(this.$vuehelper.clone(this.data.steps[0]));
      }
    );
  }

  back() {
    if (this.stepNumber > 0) {
      this.stepNumber--;
      this.steps.pop();
    }
  }

  next() {
    if (
      !this.currentStep.controls.some((c) => c.options.some((o) => o.selected))
    ) {
      return false;
    }

    if (this.data.steps.some((s) => s.stepNumber == this.stepNumber + 1)) {
      const nextSteps = this.data.steps.filter(
        (s) => s.stepNumber == this.stepNumber + 1
      );

      if (nextSteps.length == 1) {
        if (!this.steps.some((s) => s.stepNumber == this.stepNumber + 1)) {
          this.steps = this.steps.filter(
            (s) => s.stepNumber <= this.stepNumber
          );
          this.steps.push(this.$vuehelper.clone(nextSteps[0]));
        }
      } else if (nextSteps.length > 1) {
        const selectedOption = this.currentStep.selectedOption;

        if (selectedOption) {
          const nextStep = nextSteps.find(
            (s) => s.parentOptionId == selectedOption.id
          );

          if (
            nextStep &&
            !this.steps.some(
              (s) =>
                s.stepNumber == this.stepNumber + 1 &&
                s.parentOptionId == selectedOption.id
            )
          ) {
            this.steps = this.steps.filter(
              (s) => s.stepNumber <= this.stepNumber
            );
            this.steps.push(this.$vuehelper.clone(nextStep));
          }
        } else return;
      }

      this.stepNumber++;
    }
  }

  controlChanged(control: ProjectFormStepControl) {
    this.currentStep.selectedOption = control.options.find((o) => o.selected);
  }

  get progress() {
    const totalSteps = Math.max(...this.data.steps.map((s) => s.stepNumber));

    return this.currentStep.stepNumber > 1
      ? ((this.currentStep.stepNumber - 1) / totalSteps) * 100
      : 0;
  }

  get currentStep() {
    return this.steps.find((s) => s.stepNumber == this.stepNumber);
  }
}
</script>
