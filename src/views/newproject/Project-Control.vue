 <template>
  <div>
    <template v-if="control.controlType === 'select'">
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
    <template v-else-if="control.controlType === 'toggle-button'">
      <v-btn
        class="rounded-lg white text-capitalize"
        elevation="3"
        x-large
        block
        @click="controlClicked(control)"
      >
        <span class="teal lighten-1 rounded-lg px-2 py-1 mr-2">
          {{ control.option }}
        </span>
        {{ control.label }}
      </v-btn>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { ProjectFormResponseModel, ProjectFormControlModel } from "@/model";

@Component
export default class MillsControl extends Vue {
  @Prop() control: ProjectFormControlModel;
  items: any = ["100% Cotton", "100% Viscose", "100% Modal", "100% polyster"];

  controlClicked(control: ProjectFormControlModel) {
    control.active = true;
    this.$emit("activateChildModel", control);
  }
}
</script>

