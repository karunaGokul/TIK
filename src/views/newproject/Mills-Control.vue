 <template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { ProjectFormModel, ProjectFormControlModel } from "./Model";

@Component
export default class MillsControl extends Vue {
  @Prop() control: ProjectFormControlModel;

  controlClicked(control: ProjectFormControlModel) {
    control.active = true;
    this.$emit("activateChildModel", control);
  }
}
</script>

