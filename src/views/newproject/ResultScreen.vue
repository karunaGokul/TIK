<template>
  <div class="px-16">
    <h1>Mills</h1>
    <v-row>
      <v-col cols="2"> <h3>send enquiries by:</h3></v-col>
      <v-col>
        <v-select
          solo
          label="Selected Units"
          :items="item"
          dark
          dense
        ></v-select
      ></v-col>
      <v-col>
        <v-select solo label="For All" :items="item" dark dense></v-select>
      </v-col>
      <v-col>
        <v-select solo label="Rating Above" :items="item" dark dense></v-select>
      </v-col>
      <v-col>
        <v-select
          solo
          label="Certifications"
          :items="certificate"
          dark
          dense
        ></v-select>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="item"
      v-model="selected"
      item-key="MillName"
      show-select
      class="elevation-1"
      
    >
    </v-data-table
    ><br /><br />

    <span class="mr-5"> <v-btn dark>back</v-btn></span>
    <v-btn dark>next</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class ResultScreen extends Vue {
  selected: [];
  
  headers: any = [
    {
      text: "S.No",
      value: "SNo",
      align: "start",
    },
    {
      text: "Mill Name",
      value: "MillName",
    },
    {
      text: "Content",
      value: "Content",
    },
    {
      text: "Type",
      value: "Type",
    },
    {
      text: "Count",
      value: "Count",
    },
    {
      text: "Credit Period",
      value: "CreditPeriod",
    },
    {
      text: "Reviews",
      value: "Reviews",
    },
  ];

  item: any = [
    {
      SNo: "1",
      MillName: "apple 1",
      Content: "100%cotton",
      Type: "combined",
      Count: "30",
      CreditPeriod: "10-15 days",
      Reviews: "",
    },
    {
      SNo: "2",
      MillName: "apple 2",
      Content: "100%cotton",
      Type: "combined",
      Count: "40",
      CreditPeriod: "10-15 days",
      Reviews: "",
    },
    {
      SNo: "3",
      MillName: "apple 3",
      Content: "100%cotton",
      Type: "combined",
      Count: "20",
      CreditPeriod: "10-15 days",
      Reviews: "",
    },
    {
      SNo: "4",
      MillName: "apple 4",
      Content: "100%cotton",
      Type: "combined",
      Count: "30",
      CreditPeriod: "10-15 days",
      Reviews: "",
    },
  ];
  certificate: any = [
    "certification one",
    "certification two",
    "certification three",
    "certification four",
    "certification five",
  ];
}
</script>
