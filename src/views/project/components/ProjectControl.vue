<template>
  <div>
    <v-row class="pa-3" v-if="control.type === 'heading'">
      <div class="subtitle-1">{{ control.label }}</div>
    </v-row>
    <v-row class="pa-3" v-if="control.type === 'sub-heading'">
      <div class="text-md-h6">{{ control.label }}</div>
    </v-row>
    <v-row class="pa-2" v-if="control.type === 'dropdown'">
      <v-col :cols="fullWidth ? 10 : 6">
        <v-label>{{ control.label }}</v-label>
        <v-select
          :items="control.options"
          v-model="dropdownValue"
          item-text="text"
          item-value="id"
          placeholder="Select"
          outlined
          dense
          hide-details
          required
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="pa-2" v-if="control.type === 'dropdown-multi'">
      <v-col :cols="fullWidth ? 10 : 6">
        <v-label>{{ control.label }}</v-label>
        <v-select
          :items="control.options"
          v-model="dropdownValue"
          item-text="text"
          item-value="id"
          placeholder="Select"
          outlined
          dense
          multiple
          hide-details
          required
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="pa-3" v-if="control.type === 'dropdown-range'">
      <v-col :cols="fullWidth ? 10 : 6">
        <v-label>{{ control.label }}</v-label>
        <v-select
          :items="rangeValues"
          v-model="control.value"
          placeholder="Select"
          outlined
          dense
          :multiple="control.multiple"
          hide-details
          required
          @change="rangeChanged"
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="pa-3" v-if="control.type === 'textbox'">
      <v-col :cols="fullWidth ? 10 : 6">
        <v-label>{{ control.label }}</v-label>
        <v-text-field
          outlined
          dense
          hide-details
          required
          v-model="control.value"
          @change="textChanged"
          onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="pa-3" v-if="control.type === 'text-group'">
      <v-label>{{ control.label }}</v-label>
      <v-row>
        <v-col v-for="(item, index) in control.items" :key="index">
          <v-text-field
            outlined
            dense
            hide-details
            required
            v-model="item.value"
            @change="textGroupChanged"
            onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
    <div class="pa-3" v-else-if="control.type === 'radio-button'">
      <v-radio-group v-model="radioValue">
        <div v-for="(option, index) in control.options" :key="index">
          <v-radio @click="controlSelected(option)" :label="option.text" dense class="mb-3">
            <template v-slot:label>
              <div class="d-flex align-center">
                <span>{{ option.text }}</span>
                <v-card :disabled="!option.selected" flat color="transparent">
                <div
                  v-for="(tControl, j) in option.controls"
                  :key="j"
                  class="pb-2"
                >
                  <ProjectControl :control="tControl" :fullWidth="true" />
                </div></v-card>
              </div>
            </template>
          </v-radio>
        </div>
      </v-radio-group>
    </div>
    <div class="pa-3" v-else-if="control.type === 'toggle-button'">
      <v-btn-toggle
        v-model="buttonValue"
        group
        borderless
        style="display: block"
        class="pb-4"
      >
        <v-btn
          class="rounded-lg text-capitalize mr-5"
          elevation="3"
          v-for="(option, index) in control.options"
          :key="index"
          @click="controlSelected(option)"
          min-width="300"
        >
          <div class="text-left" style="width: 100%">
            <span
              class="teal lighten-1 rounded-lg px-2 py-1 mr-2 text-center"
              >{{ option.label }}</span
            >
            {{ option.text }}
          </div>
        </v-btn>
      </v-btn-toggle>
    </div>
    <!-- <div class="pa-3" v-else-if="control.type === 'radio-group'">
      <v-radio-group row v-model="control.data">
        <v-row>
          <v-col v-for="(option, index) in control.options" :key="index">
            <v-radio :label="option.text" :value="index"></v-radio>
            <v-card :disabled="control.data !== index" flat color="transparent">
              <div
                v-for="(tControl, j) in option.controls"
                :key="j"
                class="pa-4"
              >
                <ProjectControl
                  :control="tControl"
                  @change="tabControlChanged(tab, control, tControl)"
                  :fullWidth="true"
                />
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-radio-group>
    </div> -->
    <div class="pa-3" v-else-if="control.type === 'radio-group'">
      <v-row>
        <v-col cols="6" v-for="(option, index) in control.options" :key="index">
          <v-checkbox
            :label="option.text"
            v-model="option.value"
            hide-details
            @change="radioGroupChanged(control, option, index, null)"
          ></v-checkbox>
          <v-card :disabled="!option.value" flat color="transparent">
            <div v-for="(tControl, j) in option.controls" :key="j" class="pa-4">
              <ProjectControl
                :control="tControl"
                @change="radioGroupChanged(control, option, index, tControl)"
                :fullWidth="true"
              />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="pa-3" v-else-if="control.type === 'tab'">
      <v-tabs
        v-model="control.data"
        background-color="transparent"
        color="black accent-4"
        grow
      >
        <v-tab v-for="(tab, index) in control.options" :key="index">
          <v-icon left color="green"> mdi-check-circle </v-icon>
          {{ tab.text }}
        </v-tab>
      </v-tabs>
      <v-tabs-items
        v-model="control.data"
        style="background-color: transparent"
      >
        <v-tab-item v-for="(tab, index) in control.options" :key="index">
          <div v-for="(tControl, j) in tab.controls" :key="j" class="pa-4">
            <ProjectControl
              :control="tControl"
              @change="tabControlChanged(tab, control, tControl)"
              :fullWidth="true"
            />
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { ProjectFormStepControl, ProjectFormStepControlOption } from "@/model";

@Component({ name: "ProjectControl" })
export default class ProjectControl extends Vue {
  @Prop() control: ProjectFormStepControl;
  @Prop() fullWidth: boolean = false;

  items: any = ["100% Cotton", "100% Viscose", "100% Modal", "100% polyster"];

  controlSelected(option: ProjectFormStepControlOption) {
    this.control.options.forEach((o) => (o.selected = false));

    option.selected = true;

    this.control.value = option.text;
    this.$emit("change");
  }

  rangeChanged(value: any) {
    this.$emit("change");
  }

  textChanged(value: any) {
    this.control.value = value;
  }

  textGroupChanged() {
    this.control.value = this.control.items.map((i) => i.value).join(",");
  }

  radioGroupChanged(
    control: ProjectFormStepControl,
    option: ProjectFormStepControlOption,
    index: number,
    childControl: ProjectFormStepControl
  ) {
    if (!control.data) control.data = [];

    if (option.value)
      control.data[index] = {
        name: option.text,
        value: childControl ? childControl.value : null,
      };
    else control.data[index] = null;

    control.value = "";
    control.data.forEach((d: any) => {
      if (d)
        control.value = control.value ? `${control.value}, ${d.name}` : d.name;
    });
  }

  tabControlChanged(
    tab: ProjectFormStepControlOption,
    control: ProjectFormStepControl,
    tabControl: ProjectFormStepControl
  ) {
    control.options.forEach((o) => (o.selected = false));
    tab.selected = true;

    control.value = `${tab.text} - ${tabControl.value}`;
  }

  get rangeValues() {
    const items: Array<any> = [];

    for (let i = this.control.data.start; i <= this.control.data.end; i++) {
      items.push({ label: i, text: i });
    }

    return items;
  }

  get buttonValue() {
    return this.control.options.findIndex((o) => o.selected);
  }

  set buttonValue(value: any) {}

  get radioValue() {
    return this.control.options.findIndex((o) => o.selected);
  }

  set radioValue(value: any) {}

  get dropdownValue() {
    const option = this.control.options.find((o) => o.selected);
    if (option) return option.id;

    return null;
  }

  set dropdownValue(value: any) {
    const option = this.control.options.find((o) => o.id == value);
    if (option) {
      this.control.options.forEach((o) => (o.selected = false));

      option.selected = true;

      this.control.value = option.text;
      this.$emit("change");
    }
  }
}
</script>