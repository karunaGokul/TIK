<template>
  <div>
    <v-row class="pt-6">
      <span class="my-2" >GG:</span>
     
      <v-autocomplete
        v-model="response.gg"
        :items="values"
        class="mx-2 my-1"
        outlined
        dense       
        multiple
        :disabled="edit === false || enable === false"
      ></v-autocomplete>
    </v-row>
    <v-row>
      <span class="my-2" >DIA:</span>
     
      <v-autocomplete
        v-model="response.dia"
        :items="values"
        class="mx-2"
        outlined
        dense       
        multiple
        :disabled="edit === false || enable === false"
      ></v-autocomplete>
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

    <!-- <div>
      <v-row class="pt-6">
      <span class="my-2" >Special Finishes:</span>
     
      <v-autocomplete
        v-model="response.gg"
        :items="values"
        class="mx-2 my-1"
        outlined
        dense       
        multiple
        :disabled="edit === false || enable === false"
      ></v-autocomplete>
    </v-row>
    <v-row>
      <span class="my-2" >Tubular Drying Process:</span>
     
      <v-autocomplete
        v-model="response.dia"
        :items="values"
        class="mx-2"
        outlined
        dense       
        multiple
        :disabled="edit === false || enable === false"
      ></v-autocomplete>
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
    </div> -->
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

  values: Array<string> = ['1','2','3','4', '5', '6', '7', '8', '9', '10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33',
  '34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74',
  '75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'];
}
</script>
