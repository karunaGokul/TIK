<template>
  <div>
    <v-row>
      <v-col>
        <v-data-table>
          <v-text> {{ data.subHeading }} </v-text>
        </v-data-table>
      </v-col>

      <v-col>
        
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FabricFormModel, FabricFormControlModel } from "./Model";

@Component({

})

export default class Materials extends Vue {
  data: FabricFormModel = new FabricFormModel();

  created() {
    this.data.subHeading = "Single Content";
  }


}
</script>

<style scoped></style>
