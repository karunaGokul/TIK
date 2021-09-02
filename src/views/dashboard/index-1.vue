<template>
  <div class="my-3">
    <v-container fluid class="pa-8">
      <div class="ma-2 font-weight-regular">
        <v-icon medium class="pr-2"> mdi-home</v-icon
        ><span class="pr-3 large">></span> Dashboard
      </div>
    </v-container>
    <template>
      <v-card class="mx-3" elevation="8">
        <v-card-title>
          <v-select
            :items="items"
            :menu-props="{ offsetY: true }"
            label="Select"
            class="shrink pt-3"
            outlined
            dense
          ></v-select>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Search"
            append-icon="mdi-magnify"
            class="shrink pt-4"
            outlined
            dense
          ></v-text-field>

          <v-icon large class="ml-7 pa-1">mdi-plus-circle</v-icon>
          <v-icon large class="pa-1">mdi-blinds</v-icon>
          <v-icon large class="pa-1">mdi-format-align-bottom</v-icon>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          class="elevation-1"
        >
        </v-data-table>
      </v-card>
    </template>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Dashboard extends Vue {
  search: any = "";
  items: any = ["New Enquiry", "Conformed Project", "Completed Project"];
  headers: any = [
    {
      text: "Enquiry Name",
      align: "start",
      sortable: false,
      value: "EnquiryName",
      class: "teal lighten-4 title",
    },
    {
      text: "Merchandiser",
      value: "Merchandiser",
      class: "teal lighten-4 title",
    },
    { text: "Category", value: "Category", class: "teal lighten-4 title" },
    {
      text: "Subcategory",
      value: "Subcategory",
      class: "teal lighten-4 title",
    },
    { text: "In Stages", value: "InStages", class: "teal lighten-4 title" },
    { text: "Status", value: "Status", class: "teal lighten-4 title" },
    { text: "Action", value: "Action", class: "teal lighten-4 title" },
  ];
  desserts: any = [
    {
      EnquiryName: "10",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "xx",
      Action: "xx",
    },
    {
      EnquiryName: "10",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "xx",
      Action: "xx",
    },
    {
      EnquiryName: "10",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "xx",
      Action: "xx",
    },
    {
      EnquiryName: "10",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "xx",
      Action: "xx",
    },
    {
      EnquiryName: "10",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "xx",
      Action: "xx",
    },
    {
      EnquiryName: "10",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "xx",
      Action: "xx",
    },
  ];
}
</script>