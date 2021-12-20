<template>
  <div>
    <v-row class="pt-6">
      <v-label>GG:</v-label>
      <v-text-field
        class="mx-2"
        outlined
        dense
        v-model="response.gg"
        v-if="tubular === null"
        :disabled="edit === false || tubular === false"
      ></v-text-field>
      <v-text-field
        class="mx-2"
        outlined
        dense
        v-model="response.gg"
       v-if="width === null"
        :disabled="edit === false || width === false"
      ></v-text-field>
    </v-row>
    <v-row>
      <v-label>DIA:</v-label>
      <v-text-field
        class="mx-2"
        outlined
        dense
        v-model="response.dia"
        v-if="tubular === null"
        :disabled="edit === false || tubular === false"
      ></v-text-field>
      <v-text-field
        class="mx-2"
        outlined
        dense
        v-model="response.dia"
         v-if="width === null"
        :disabled="edit === false || width === false"
      ></v-text-field>
    </v-row>
    <v-row>
      <v-label>Lycra:</v-label>
      <v-checkbox
        class="mt-n2 ml-4"
        v-model="response.allFeeder"
        v-if="tubular === null"
        :disabled="edit === false || tubular === false"
      ></v-checkbox>
      <v-checkbox
        class="mt-n2 ml-4"
        v-model="response.allFeeder"
         v-if="width === null"
        :disabled="edit === false || width === false"
      ></v-checkbox>
      <v-label>All Feeder</v-label>
      <v-checkbox
        class="mt-n2 ml-4"
        v-model="response.alternateFeeder"
        v-if="tubular === null"
        :disabled="edit === false || tubular === false"
      ></v-checkbox>
      <v-checkbox
        class="mt-n2 ml-4"
        v-model="response.alternateFeeder"
        v-if="width === null"
        :disabled="edit === false || width === false"
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
  @Prop() tubular: boolean;
  @Prop() width: boolean;
}
</script>
