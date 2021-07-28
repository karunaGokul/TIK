<template>
  <div>
    <v-row justify="center mt-3">
      <v-col cols="12" sm="8">
        <v-card class="ma-2" color="cyan lighten-4" height="600" elevation="0">
          <div v-if="data.visibility">
            <v-card-title> {{ data.formHeading }} </v-card-title>
            <v-card-subtitle class="text-h5 font-weight-regular my-4">
              {{ data.formSubHeading }}
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-col v-for="(control, index) in data.controls" :key="index">
                  <mills-control
                    :control="control"
                    @activateChildModel="activateChildModel"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </div>
          <v-row class="mb-16 pt-16" justify="space-between">
            <v-col cols="12" sm="2"></v-col>
            <v-col cols="12" sm="2">
              <div>Completed</div>
              <v-progress-linear v-model="progress" color="warning" height="25">
                <template v-slot:default="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <div class="text-h5">Summary</div>
        <div class="py-2 text-subtitle-1">
          <div v-for="(Selection, index) in summary" :key="index">
            Choose Yarn Content <br />
            <span class="orange--text"> {{ Selection }} </span>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-btn
          elevation="2"
          class="px-8 ma-4 text-capitalize"
          large
          color="warning"
          @click="reset"
        >
          Reset
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6">
        <v-btn
          elevation="2"
          class="px-8 ma-4 text-capitalize"
          large
          color="warning"
          v-if="active"
          @click="back"
        >
          Back
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import { ProjectFormModel, ProjectFormControlModel } from "./Model";
import MillsControl from "./Mills-Control.vue";

@Component({
  components: { MillsControl },
})
export default class ProjectFormBuilder extends Vue {
  @Prop() categoryName: any;
  data: ProjectFormModel = new ProjectFormModel();
  backForm: Array<ProjectFormModel> = [];
  progress: any = 0;
  summary: Array<any> = [];
  active: boolean;
  SelectOption: any = " ";
  created() {
    this.initial();
  }
  public initial() {
    this.data.formHeading = "Mills";
    this.data.formSubHeading = "1. Choose Your Content";
    this.data.visibility = true;
    this.data.controls = [];

    let control = new ProjectFormControlModel();
    control.controlType = "toggle-button";
    control.label = "Yarn";
    control.option = "A";
    let childControl = new ProjectFormModel();
    childControl.formHeading = "Mills";
    childControl.formSubHeading = "2. Choose Your Content";
    childControl.visibility = true;
    childControl.controls = [];
    let cchildren = new ProjectFormControlModel();
    cchildren.controlType = "select";
    childControl.controls.push(cchildren);

    cchildren = new ProjectFormControlModel();
    cchildren.controlType = "toggle-button";
    cchildren.label = "Single";
    cchildren.option = "A";

    let cchildControl = new ProjectFormModel();
    cchildControl.formHeading = "Mills";
    cchildControl.formSubHeading = "3. Choose Your Content";
    cchildControl.visibility = true;
    cchildControl.controls = [];
    let ccchildren = new ProjectFormControlModel();
    ccchildren.controlType = "toggle-button";
    ccchildren.label = "Spum";
    ccchildren.option = "A";
    cchildControl.controls.push(ccchildren);
    ccchildren = new ProjectFormControlModel();
    ccchildren.controlType = "toggle-button";
    ccchildren.label = "filament";
    ccchildren.option = "B";
    cchildControl.controls.push(ccchildren);
    cchildren.child = cchildControl;
    childControl.controls.push(cchildren);
    cchildren = new ProjectFormControlModel();
    cchildren.controlType = "toggle-button";
    cchildren.label = "Blend";
    cchildren.option = "B";
    childControl.controls.push(cchildren);
    control.child = childControl;
    this.data.controls.push(control);

    control = new ProjectFormControlModel();
    control.controlType = "toggle-button";
    control.label = "Fabric";
    control.option = "B";
    childControl = new ProjectFormModel();
    childControl.formHeading = "Mills";
    childControl.formSubHeading = "2. Choose Your Content";
    childControl.visibility = true;
    childControl.controls = [];
    cchildren = new ProjectFormControlModel();
    cchildren.controlType = "toggle-button";
    cchildren.label = "Single";
    cchildren.option = "A";
    childControl.controls.push(cchildren);
    cchildren.controlType = "toggle-button";
    cchildren.label = "Blend";
    cchildren.option = "B";
    childControl.controls.push(cchildren);
    control.child = childControl;
    this.data.controls.push(control);
  }
  public activateChildModel(control: ProjectFormControlModel) {
    if (control.controlType === "select") {
      this.SelectOption = control.commandValue;
    } else {
      this.backForm.push(this.data);
      this.data.visibility = false;
      this.progress = this.progress + 20;
      this.summary.push(this.SelectOption + control.label);
      this.SelectOption = "";
      this.active = control.active;
      this.data = control.child;
    }
  }
  back() {
    this.data = this.backForm.pop();
    if (!this.backForm.length) {
      this.active = false;
    }
    this.data.visibility = true;
    this.progress = this.progress - 20;
    this.summary.pop();
  }
  reset() {
    this.progress = 0;
    this.summary = [];
    this.initial();
  }
}
</script>
