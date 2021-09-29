<template>
  <v-row v-if="steps && steps.length" class="ma-2">
    <v-col cols="8">
      <v-card
        class="ma-2 d-flex flex-column"
        color="cyan lighten-4"
        min-height="600"
        elevation="0"
      >
        <v-card-title> {{ data.category }} </v-card-title>
        <v-card-text>
          <div v-if="lastStep">
            <v-row>
              <v-col cols="6">
                <v-label>Enquiry Name</v-label>
                <v-text-field
                  outlined
                  dense
                  hide-details
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-label>Enter No of Kgs</v-label>
                <v-text-field
                  outlined
                  dense
                  hide-details
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-label>Your Price</v-label>
                <v-text-field
                  outlined
                  dense
                  hide-details
                  required
                ></v-text-field>
                <div class="text-left px-4 pt-2">OR</div>
                <v-checkbox
                  label="Request Price"
                  color="red"
                  dense
                  hide-details
                ></v-checkbox>
              </v-col>
              <v-col cols="6">
                <v-label>Your required Credit Period</v-label>
                <v-text-field
                  outlined
                  dense
                  hide-details
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-label>Order Confirmation Date</v-label>
                <v-menu
                  v-model="confirmationDateControl"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="confirmationDate | dateDisplay"
                      readonly
                      v-on="on"
                      outlined
                      dense
                      hide-details
                      required
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="confirmationDate"
                    no-title
                    @input="confirmationDateControl = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="6">
                <v-label>Delivery Date</v-label>
                <v-menu
                  v-model="deliveryDateControl"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="deliveryDate | dateDisplay"
                      readonly
                      v-on="on"
                      outlined
                      dense
                      hide-details
                      required
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="deliveryDate"
                    no-title
                    @input="deliveryDateControl = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </div>
          <div v-else>
            <h4 class="text-h6 mb-4">
              {{ currentStep.stepNumber }}. {{ currentStep.title }}
            </h4>
            <div v-for="(control, j) in currentStep.controls" :key="j">
              <ProjectControl
                :control="control"
                @change="controlChanged(control)"
              />
            </div>
          </div>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-row class="ma-2">
            <v-spacer></v-spacer>
            <v-col cols="3">
              <div>Completed</div>
              <v-progress-linear v-model="progress" color="#8BBEE7" height="25">
                <template v-slot:default="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
      <div class="d-flex justify-end">
        <v-btn elevation="2" class="px-8 ma-4 text-capitalize" @click="back">
          Back
        </v-btn>
        <v-btn
          elevation="2"
          class="px-8 ma-4 text-capitalize white--text"
          color="#00365C"
          @click="next"
        >
          Next
        </v-btn>
      </div>
    </v-col>
    <v-col cols="4">
      <div class="text-h6 ml-2 pt-1">Summary</div>
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
            <div class="font-weight-medium">
              <span v-for="(control, k) in step.controls" :key="k">
                <template v-if="k > 0 && control.value"> - </template>
                {{ control.value }}
              </span>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-col>
  </v-row>
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
  lastStep: boolean = false;

  path: string = "";

  confirmationDateControl: boolean = false;
  confirmationDate: Date = null;

  deliveryDateControl: boolean = false;
  deliveryDate: Date = null;

  created() {
    const request = new ProjectFormRequestModel();

    request.categoryName = this.categoryName;
    request.projectName = this.projectName;

    this.ProjectService.newProject(request).then(
      (response: ProjectFormModel) => {
        this.data = response;

        const step = this.$vuehelper.clone(this.data.steps[0]);
        step.stepNumber = 1;
        this.steps.push(step);
      }
    );
  }

  controlChanged(control: ProjectFormStepControl) {
    //this.currentStep.selectedOption = control.options.find((o) => o.selected);
  }

  back() {
    console.log(this.path);
    if (this.lastStep) {
      this.lastStep = false;
    } else {
      this.path = this.path.substring(0, this.path.lastIndexOf("-"));

      if (this.steps.length > 1) this.steps.pop();
    }
  }

  next() {
    const selector = this.currentStep.controls.find((c) => c.selector);
    if (!selector) {
      this.lastStep = true;
      return false;
    }

    const selectedOption = selector.options.find((o) => o.selected);
    if (!selectedOption) return false;

    let path = this.$vuehelper.trimChar(
      `${this.path}-${selectedOption.id}`,
      "-"
    );
    if (!this.data.steps.some((s) => s.path.includes(path)))
      path = this.$vuehelper.trimChar(`${this.path}-${selector.id}`, "-");

    const nextStep = this.data.steps.find((s) => s.path.includes(path));
    if (nextStep) {
      this.path = path;
      nextStep.stepNumber = this.steps.length + 1;
      this.steps.push(nextStep);
    } else this.lastStep = true;

    // if (
    //   !this.currentStep.controls.some((c) => c.options.some((o) => o.selected))
    // ) {
    //   return false;
    // }

    // if (this.data.steps.some((s) => s.stepNumber == this.stepNumber + 1)) {
    //   const nextSteps = this.data.steps.filter(
    //     (s) => s.stepNumber == this.stepNumber + 1
    //   );

    //   if (!nextSteps.length) return;

    //   if (nextSteps.some(s => !s.parentOptionId)) {
    //     if (!this.steps.some((s) => s.stepNumber == this.stepNumber + 1)) {
    //       this.steps = this.steps.filter(
    //         (s) => s.stepNumber <= this.stepNumber
    //       );
    //       this.steps.push(this.$vuehelper.clone(nextSteps[0]));
    //     }
    //   } else {
    //     const selectedOption = this.currentStep.selectedOption;

    //     if (selectedOption) {
    //       const nextStep = nextSteps.find(
    //         (s) => s.parentOptionId == selectedOption.id
    //       );

    //       console.log(nextSteps)
    //       console.log(selectedOption.id)

    //       if (
    //         nextStep &&
    //         !this.steps.some(
    //           (s) =>
    //             s.stepNumber == this.stepNumber + 1 &&
    //             s.parentOptionId == selectedOption.id
    //         )
    //       ) {

    //         this.steps = this.steps.filter(
    //           (s) => s.stepNumber <= this.stepNumber
    //         );
    //         this.steps.push(this.$vuehelper.clone(nextStep));
    //       }
    //     } else return;
    //   }

    //   this.stepNumber++;
    // } else {
    //   this.lastStep = true;
    // }
  }

  get progress() {
    if (this.lastStep) return 90;
    else
      return this.steps.length > 1
        ? ((this.steps.length - 1) / this.data.maxSteps) * 100
        : 0;
  }

  get currentStep() {
    return this.steps.find((s) => s.path.includes(this.path));
  }
}
</script>
