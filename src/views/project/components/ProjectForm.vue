<template>
  <v-row v-if="steps && steps.length" class="ma-2">
    <v-col cols="8">
      <v-card
        class="ma-2 d-flex flex-column"
        color="cyan lighten-4"
        min-height="500"
        elevation="0"
      >
        <v-card-title> {{ data.category }} </v-card-title>
        <v-card-text>
          <div v-if="mode == StepMode.Summary">
            <h4 class="text-h6 mb-4">Summary</h4>
            <v-row>
              <v-col
                cols="6"
                v-for="(c, i) in getSummaryControls(request.controls)"
                :key="i"
              >
                <v-text-field
                  :value="c.value"
                  :label="c.label"
                  outlined
                  readonly
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
          <div v-if="mode == StepMode.Detail || mode == StepMode.Summary">
            <ProjectDetailControl
              :request="request"
              :controls="detailControls"
              :isSummary="mode == StepMode.Summary"
            />
          </div>
          <div v-else-if="mode == StepMode.Result">
            <ProjectResult :request="request" />
          </div>
          <div v-else>
            <h4 class="text-h6 mb-4">
              {{ currentStep.stepNumber }}. {{ currentStep.title }}
            </h4>
            <div v-for="(control, j) in currentStep.controls" :key="j">
              <ProjectControl :control="control" />
            </div>
          </div>
          <v-alert outlined dense type="error" class="ma-6" v-if="error">
            Please complete all fields.
          </v-alert>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-row class="ma-2">
            <v-spacer></v-spacer>
            <v-col cols="3">
              <div>Completed</div>
              <v-progress-linear :value="progress" color="#8BBEE7" height="25">
                <template v-slot:default="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
      <v-row>
        <v-col cols="auto" class="mr-auto">
          <v-btn
            elevation="2"
            class="px-8 ma-4 text-capitalize"
            @click="reset"
            color="primary"
          >
            Reset
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            elevation="2"
            color="primary"
            class="px-8 ma-4 text-capitalize"
            @click="back"
            v-if="steps.length > 1"
          >
            Back
          </v-btn>
          <v-btn
            elevation="2"
            class="px-8 ma-4 text-capitalize"
            color="primary"
            @click="next"
            v-if="mode != StepMode.Summary"
          >
            Next
          </v-btn>
          <v-btn
            elevation="2"
            class="px-8 ma-4 text-capitalize"
            color="primary"
            @click="create"
            v-if="mode == StepMode.Summary"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>
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
  ProjectFormModel,
  ProjectFormStep,
  ProjectFormStepControl,
  CreateProjectModel,
  CreateProjectControlModel,
} from "@/model";
import { IProjectService } from "@/service";
import ProjectControl from "./ProjectControl.vue";
import ProjectDetailControl from "./ProjectDetailControl.vue";
import ProjectResult from "./ProjectResult.vue";

@Component({
  components: { ProjectControl, ProjectDetailControl, ProjectResult },
})
export default class ProjectForm extends Vue {
  @Inject("ProjectService") service: IProjectService;
  @Prop() categoryName: string;
  @Prop() projectName: string;
  @Prop() merchandiser: string;
  @Prop() employeeID: string;

  StepMode = StepMode;

  data: ProjectFormModel = new ProjectFormModel();

  steps: Array<ProjectFormStep> = [];
  stepNumber: number = 1;
  mode: StepMode = StepMode.Form;

  path: string = "";
  error: boolean = false;

  request: CreateProjectModel = new CreateProjectModel();
  detailControls: Array<any> = [];

  detailJson: Array<any> = [];

  created() {
    this.buildForm();
  }

  buildForm() {
    this.request.name = this.projectName;
    this.request.category = this.categoryName;
    this.request.merchandiserId = this.merchandiser;
    this.request.userList = this.employeeID;

    this.steps = [];
    this.mode = StepMode.Form;
    this.path = "";
    if (this.categoryName === "Mills") {
      this.data = this.$vuehelper.clone(
        this.service.getProjectForm(this.categoryName)
      );
    } else if(this.categoryName === "Dyeing") {
      this.data = this.$vuehelper.clone(
        this.service.getProjectFormDyeing(this.categoryName)
      );
    }
    
    const step = this.data.steps[0];
    step.stepNumber = 1;
    this.steps.push(step);

    this.detailJson = this.service.getProjectDetail(this.categoryName);
  }

  create() {
    this.service.createProject(this.request).then((response) => {
      this.$router.push("/dashboard");
    });
  }

  reset() {
    this.buildForm();
  }

  back() {
    this.error = false;

    if (
      this.mode == StepMode.Detail ||
      this.mode == StepMode.Result ||
      this.mode == StepMode.Summary
    )
      this.mode = this.mode - 1;
    else {
      this.path = this.path.substring(0, this.path.lastIndexOf("-"));

      if (this.steps.length > 1) this.steps.pop();
    }
  }

  next() {
    this.error = false;
    if (this.mode == StepMode.Result) {
      if (this.request.bids.length > 0) this.renderDetail();
    } else if (this.mode == StepMode.Detail) {
      this.renderSummary();
    } else {
      let valid = true;
      this.steps.forEach((s) => {
        s.controls.forEach((c) => {
          if (!c.value && !c.optional) valid = false;
        });
      });

      if (!valid) {
        console.log(this.steps[1].controls);

        this.error = true;
        return false;
      }

      const selector = this.currentStep.controls.find((c) => c.selector);
      if (!selector) {
        this.request.controls = [];

        this.steps.forEach((s) => {
          s.controls.forEach((c) => {
            if (c.type == "tab") {
              c.options.forEach((o, i) => {
                if (c.data == i) {
                  if (o.controls) {
                    o.controls.forEach((oc) => {
                      this.addStepControl(s, oc);
                    });
                  }
                }
              });
            } else if (c.type != "heading") this.addStepControl(s, c);
          });
        });

        this.mode = StepMode.Result;
        console.log(this.steps[1].controls);

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
      } else {
        this.mode = StepMode.Result;
      }
    }
  }

  addStepControl(s: ProjectFormStep, c: ProjectFormStepControl) {
    let dataId = c.data_id;
    let dataPath = c.data_path;
    if (c.options) {
      const selected = c.options.find((o) => o.selected);
      if (selected && selected.data_id) dataId = selected.data_id;
      if (selected && selected.data_path) dataPath = selected.data_path;
    }
    this.request.controls.push({
      id: c.id,
      value: c.value,
      type: c.type,
      path: s.path[0],
      label: c.label,
      data_path: dataPath,
      data_id: dataId,
    });
  }

  renderDetail() {
    this.mode = StepMode.Detail;

    const category = this.request.controls[0].value;

    console.log(this.request);

    this.detailControls = this.detailJson.find(
      (d: any) => d.category == category
    ).controls;
  }

  renderSummary() {
    this.request.data = {};

    this.error = false;
    this.detailControls.forEach((c) => {
      if (c.type == "price") {
        if (!c.value.price && !c.value.requestPrice) this.error = true;
      } else if (c.type == "dia") {
        c.value.items.forEach((d: any) => {
          if (!d.kgs) this.error = true;
        });
      } else {
        if (!c.value) this.error = true;
      }

      if (!this.error) this.request.data[c.id] = c.value;
    });

    if (!this.error) this.mode = StepMode.Summary;
  }

  getSummaryControls(controls: Array<CreateProjectControlModel>) {
    return controls.filter((c) => c.type !== "heading");
  }

  get progress() {
    if (this.mode == StepMode.Result || this.mode == StepMode.Detail) return 90;
    else if (this.mode == StepMode.Summary) return 100;
    else {
      const p =
        this.steps.length > 1
          ? ((this.steps.length - 1) / this.data.maxSteps) * 100
          : 0;
      return p < 90 ? p : 90;
    }
  }

  get currentStep() {
    return this.steps.find((s) => s.path.includes(this.path));
  }
}

enum StepMode {
  Form,
  Result,
  Detail,
  Summary,
}
</script>
