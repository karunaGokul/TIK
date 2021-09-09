 <template>
  <div>
    <template v-if="control.type === 'dropdown'">
      <v-row>
        <v-col cols="8">
          <v-select
            :items="control.options"
            v-model="dropdownValue"
            item-text="text"
            item-value="id"
            label="Select"
            class="pt-3"
            outlined
            dense
          ></v-select>
        </v-col>
      </v-row>
    </template>
    <template v-else-if="control.type === 'toggle-button'">
      <v-btn-toggle v-model="buttonValue" flat rounded>
        <v-btn
          class="rounded-lg text-capitalize mr-5"
          elevation="3"
          block
          v-for="(option, index) in control.options"
          :key="index"
          @click="controlSelected(option)"
        >
          <v-col class="text-left">
            <span class="teal lighten-1 rounded-lg px-2 py-1 mr-2">
              {{ option.label }}
            </span>
            {{ option.text }}</v-col
          >
        </v-btn>
      </v-btn-toggle>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import {
  ProjectFormResponseModel,
  ProjectFormStepControl,
  ProjectFormStepControlOption,
} from "@/model";

@Component
export default class ProjectControl extends Vue {
  @Prop() control: ProjectFormStepControl;
  items: any = ["100% Cotton", "100% Viscose", "100% Modal", "100% polyster"];

  controlSelected(option: ProjectFormStepControlOption) {
    this.control.options.forEach((o) => (o.selected = false));

    option.selected = true;

    this.$emit("change");
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

      this.$emit("change");
    }
  }
}
</script>

