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
          <div v-if="mode == StepMode.Summary">
            <h4 class="text-h6 mb-4">Summary</h4>
            <v-row>
              <v-col cols="6" v-for="(c, i) in request.controls" :key="i">
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
            <v-row>
              <v-col cols="6">
                <v-text-field
                  outlined
                  dense
                  required
                  v-model="request.name"
                  label="Enquiry Name"
                  :readonly="mode == StepMode.Summary"
                  @input="$v.request.name.$touch"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  outlined
                  dense
                  required
                  v-model="request.noOfKgs"
                  label="Enter No of Kgs"
                  :readonly="mode == StepMode.Summary"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  outlined
                  dense
                  required
                  hide-details
                  v-model="request.price"
                  label="Your Price"
                  :readonly="mode == StepMode.Summary"
                  :disabled="request.requestPrice"
                ></v-text-field>
                <div class="text-left px-4 pt-2">OR</div>
                <v-checkbox
                  label="Request Price"
                  color="red"
                  dense
                  v-model="request.requestPrice"
                  :readonly="mode == StepMode.Summary"
                ></v-checkbox>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  outlined
                  dense
                  required
                  v-model="request.creditPeriod"
                  label="Your required Credit Period"
                  :readonly="mode == StepMode.Summary"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
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
                      :value="request.confirmationDate | dateDisplay"
                      readonly
                      v-on="on"
                      outlined
                      dense
                      required
                      hide-details
                      label="Order Confirmation Date"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="request.confirmationDate"
                    no-title
                    @input="confirmationDateControl = false"
                    v-if="mode != StepMode.Summary"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="6">
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
                      :value="request.deliveryDate | dateDisplay"
                      readonly
                      v-on="on"
                      outlined
                      dense
                      required
                      hide-details
                      label="Delivery Date"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="request.deliveryDate"
                    no-title
                    @input="deliveryDateControl = false"
                    v-if="mode != StepMode.Summary"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </div>
          <div v-else-if="mode == StepMode.Result">
            <ProjectResult :request="request" />
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
          v-if="mode != StepMode.Summary"
        >
          Next
        </v-btn>
        <v-btn
          elevation="2"
          class="px-8 ma-4 text-capitalize white--text"
          color="#00365C"
           @click="create"
          v-if="mode == StepMode.Summary"
        >
          Submit
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
import { required } from "vuelidate/lib/validators";
import {
  ProjectFormModel,
  ProjectFormStep,
  ProjectFormStepControl,
  CreateProjectModel,
} from "@/model";
import { IProjectService } from "@/service";
import ProjectControl from "./ProjectControl.vue";
import ProjectResult from "./ProjectResult.vue";

const validations: any = {
  request: {
    name: { required },
    noOfKgs: { required },
    price: { required },
    creditPeriod: { required },
    confirmationDate: { required },
    deliveryDate: { required },
  },
};

@Component({
  validations: validations,
  components: { ProjectControl, ProjectResult },
})
export default class ProjectForm extends Vue {
  @Inject("ProjectService") service: IProjectService;
  @Prop() categoryName: string;
  @Prop() projectName: string;
  StepMode = StepMode;

  data: ProjectFormModel = new ProjectFormModel();

  steps: Array<ProjectFormStep> = [];
  stepNumber: number = 1;
  mode: StepMode = StepMode.Form;

  path: string = "";
  error: boolean = false;

  confirmationDateControl: boolean = false;
  deliveryDateControl: boolean = false;

  request: CreateProjectModel = new CreateProjectModel();

  created() {
    this.request.name = this.projectName;
    this.request.category = this.categoryName;

    this.service
      .newProject(this.categoryName, this.projectName)
      .then((response: ProjectFormModel) => {
        this.data = response;

        const step = this.$vuehelper.clone(this.data.steps[0]);
        step.stepNumber = 1;
        this.steps.push(step);
      });
  }

  controlChanged(control: ProjectFormStepControl) {
    //this.currentStep.selectedOption = control.options.find((o) => o.selected);
  }

  create() {
    this.service.createProject(this.request).then(response => {
      this.$router.push("/dashboard");
    });
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
      this.mode = StepMode.Detail;
    } else if (this.mode == StepMode.Detail) {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.error = true;
      } else {
        this.mode = StepMode.Summary;
        console.log(JSON.stringify(this.request));
      }
    } else {
      let valid = true;
      this.steps.forEach((s) => {
        s.controls.forEach((c) => {
          if (!c.value) valid = false;
        });
      });

      if (!valid) {
        this.error = true;
        return false;
      }

      const selector = this.currentStep.controls.find((c) => c.selector);
      if (!selector) {
        this.request.controls = [];

        this.steps.forEach((s) => {
          s.controls.forEach((c) => {
            let dataId = c.data_id;
            if (c.options) {
              const selected = c.options.find((o) => o.selected);
              if (selected && selected.data_id) dataId = selected.data_id;
            }
            this.request.controls.push({
              id: c.id,
              value: c.value,
              path: s.path[0],
              label: c.label,
              data_path: c.data_path,
              data_id: dataId,
            });
          });
        });

        this.mode = StepMode.Result;

        console.log(JSON.stringify(this.request));
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
      } else this.mode = StepMode.Result;
    }
  }

  get progress() {
    if (this.mode == StepMode.Result || this.mode == StepMode.Detail) return 90;
    else if (this.mode == StepMode.Summary) return 100;
    else
      return this.steps.length > 1
        ? ((this.steps.length - 1) / this.data.maxSteps) * 100
        : 0;
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
