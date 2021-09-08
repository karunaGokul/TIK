 <template>
  <div>
    <template v-if="control.type === 'select'">
      <v-select
        :items="items"
        :menu-props="{ offsetY: true }"
        v-model="control.commandValue"
        label="Select"
        class="shrink pt-3"
        outlined
        dense
        @change="controlClicked(control)"
      ></v-select>
    </template>
    <template v-else-if="control.type === 'toggle-button'">
      <v-btn-toggle v-model="selectedValue" group>
        <v-btn
          class="rounded-lg text-capitalize"
          elevation="3"
          block
          v-for="(option, index) in control.options" :key="index"
          @click="controlSelected(option)"
        >
          <span class="teal lighten-1 rounded-lg px-2 py-1 mr-2">
            {{ option.label }}
          </span>
          {{ option.text }}
        </v-btn>
      </v-btn-toggle>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { ProjectFormResponseModel, ProjectFormStepControl, ProjectFormStepControlOption } from "@/model";

@Component
export default class ProjectControl extends Vue {
  @Prop() control: ProjectFormStepControl;
  items: any = ["100% Cotton", "100% Viscose", "100% Modal", "100% polyster"];

  controlSelected(option: ProjectFormStepControlOption) {
    this.control.options.forEach(o => o.selected = false);

    option.selected = true;

    this.$emit("change");
  }

  controlClicked(control: ProjectFormStepControl) {
    this.$emit("change");
  }

  get selectedValue() {
    return this.control.options.findIndex(o => o.selected);
  }

  set selectedValue(value: any) {
    console.log(value);
  }
}
</script>

