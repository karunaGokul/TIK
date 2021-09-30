 <template>
  <div>
    <v-row class="pa-3" v-if="control.type === 'dropdown'">
      <v-col cols="6">
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
    <v-row class="pa-3" v-if="control.type === 'textbox'">
      <v-col cols="6">
        <v-label>{{ control.label }}</v-label>
        <v-text-field
          outlined
          dense
          hide-details
          required
          @change="textChanged"
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="pa-3" v-if="control.type === 'text-group'">
      <v-label>{{ control.label }}</v-label>
      <v-row>
        <v-col v-for="(item, index) in control.items" :key="index">
          <v-label>{{ item.label }}</v-label>
          <v-text-field
            outlined
            dense
            hide-details
            required
            @change="textChanged"
          ></v-text-field>
        </v-col>
      </v-row>
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { ProjectFormStepControl, ProjectFormStepControlOption } from "@/model";

@Component
export default class ProjectControl extends Vue {
  @Prop() control: ProjectFormStepControl;
  items: any = ["100% Cotton", "100% Viscose", "100% Modal", "100% polyster"];

  controlSelected(option: ProjectFormStepControlOption) {
    this.control.options.forEach((o) => (o.selected = false));

    option.selected = true;

    this.control.value = option.text;
    this.$emit("change");
  }

  textChanged(value: any) {
    this.control.value = value;
  }

  get buttonValue() {
    return this.control.options.findIndex((o) => o.selected);
  }

  set buttonValue(value: any) {}

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

