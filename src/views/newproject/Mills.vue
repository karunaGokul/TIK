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
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { ProjectFormModel, ProjectFormControlModel } from "./Model";
import MillsControl from "./Mills-Control.vue";

@Component({
  components: { MillsControl },
})
export default class ProjectFormBuilder extends Vue {
  data: ProjectFormModel = new ProjectFormModel();
  progress: any = 0;
  created() {
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
    cchildren.controlType = "toggle-button";
    cchildren.label = "Blend";
    cchildren.option = "A";
    childControl.controls.push(cchildren);
    cchildren.controlType = "toggle-button";
    cchildren.label = "Blend";
    cchildren.option = "B";
    childControl.controls.push(cchildren);
    control.children.push(childControl);
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
    cchildren.label = "Blend";
    cchildren.option = "A";
    childControl.controls.push(cchildren);
    cchildren.controlType = "toggle-button";
    cchildren.label = "Blend";
    cchildren.option = "B";
    childControl.controls.push(cchildren);
    control.children.push(childControl);
    this.data.controls.push(control);
  }
  public activateChildModel(control: ProjectFormModel) {
    this.data.visibility = false;
    this.progress = this.progress + 20;
    this.data = control;
    console.log(this.data);
  }
}
</script>
