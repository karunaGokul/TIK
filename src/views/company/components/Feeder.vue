<template>
  <div>
    <v-row class="pt-6">
      <v-label>GG:</v-label>
      <v-text-field
        class="mx-2"
        outlined
        dense
        v-model="response.gg"
        :disabled="edit === false || enable === false"
      ></v-text-field>
      <!-- <v-autocomplete
        v-model="response.gg"
        :items="values"
        class="mx-2"
        outlined
        dense
        chips
        small-chips
        multiple
        :disabled="edit === false || enable === false"
      ></v-autocomplete> -->
    </v-row>
    <v-row>
      <v-label>DIA:</v-label>
      <v-text-field
        class="mx-2"
        outlined
        dense
        v-model="response.dia"
        :disabled="edit === false || enable === false"
      ></v-text-field>
      <!-- <v-autocomplete
        v-model="response.gg"
        :items="values"
        class="mx-2"
        outlined
        dense
        chips
        small-chips
        multiple
        :disabled="edit === false || enable === false"
      ></v-autocomplete> -->
    </v-row>
    <v-row>
      <v-label>Lycra:</v-label>
      <v-checkbox
        class="mt-n2 ml-4"
        v-model="response.allFeeder"
        :disabled="edit === false || enable === false"
      ></v-checkbox>

      <v-label>All Feeder</v-label>
      <v-checkbox
        class="mt-n2 ml-4"
        v-model="response.alternateFeeder"
        :disabled="edit === false || enable === false"
      ></v-checkbox>

      <v-label>Alternate Feeder</v-label>
    </v-row>
  </div>
</template>

<script lang="ts">
import { ProductDetailModel, tubularModel } from "@/model";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Feeder extends Vue {
  @Prop() response: ProductDetailModel;
  @Prop() option: string;
  @Prop() edit: boolean;
  @Prop() enable: boolean;

  values: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
}
</script>
