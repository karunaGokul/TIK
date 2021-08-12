<template>
  <div>
    <div class="mb-16">
      <v-icon color="teal" large class="ma-5"> mdi-home</v-icon>
    </div>

    <div class="ml-10">
      <v-btn class="mr-2 text-capitalize white--text teal color rounded-0"
        >yarn</v-btn
      >
      <v-btn class="text-capitalize white--text teal color rounded-0"
        >fabric</v-btn
      >
    </div>

    <v-card elevation="4" class="ml-10 mt-5 mr-5 mb-10">
      <v-tabs class="pt-10 ml-7">
        <v-tab class="text-capitalize">regular yarn</v-tab>
        <v-tab class="text-capitalize">melange/slub yarn</v-tab>
        <v-tab class="text-capitalize">SPL yarn</v-tab>
        <v-tab class="text-capitalize">dyed yarn</v-tab>
      </v-tabs>
      <v-divider class="ml-7"></v-divider>

      <div class="mx-6">
        <div class="d-flex justify-center mt-10">
          <v-card-title> {{ data.formHeading }} </v-card-title>
        </div>

       <ProductControls />

        <h3>
          <v-text class="font-weight-regular">Counts:</v-text>
        </h3>

        <v-text-field solo ></v-text-field>

        <h3>
          <v-text class="font-weight-regular">Enter AVG Credit Time you offer</v-text>
        </h3>

        <v-text-field solo ></v-text-field>

        <div 
            justify="center" 
            align="center"
            class="mt-10 pb-16"
        >
        <v-btn 
            color="#ff6500"
            class="white--text font-weight-light text-capitalize rounded-0"
        >save</v-btn>
        </div>
        
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductControls from "./ProductControls.vue";
import { FabricFormModel, FabricFormControlModel } from "./Model";

@Component({
  components: { ProductControls },
})
export default class productDetails extends Vue {
  data: FabricFormModel = new FabricFormModel();

  created() {
    this.data.formHeading =
      "Choose the Single & Blend Contents you offer in regular yarn";
    this.data.subHeading = "Single Content";
    

  }
}
</script>

<style scoped></style>
