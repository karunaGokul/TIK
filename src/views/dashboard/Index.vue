<template>
  <div>
    <v-breadcrumbs class="py-8">      
      <v-breadcrumbs-item><v-icon medium>mdi-home</v-icon> </v-breadcrumbs-item>
      <v-breadcrumbs-item><v-icon small>mdi-chevron-right</v-icon> </v-breadcrumbs-item>
      <v-breadcrumbs-item><span>Dashboard</span> </v-breadcrumbs-item>
    </v-breadcrumbs>
    <v-card class="ma-3" elevation="8">
      <v-card-title>
        <v-select
          :items="items"
          :menu-props="{ offsetY: true }"
          label="Select"
          class="shrink pt-3"
          dense
          hide-details
        ></v-select>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          label="Search"
          append-icon="mdi-magnify"
          class="shrink pt-4"
          outlined
          dense
          hide-details
        ></v-text-field>

      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        class="elevation-1"
      >
      </v-data-table>
    </v-card>
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
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Merchandiser",
      value: "Merchandiser",
      class: "teal lighten-4 subtitle-2",
    },
    { text: "Category", value: "Category", class: "teal lighten-4 subtitle-2" },
    {
      text: "Subcategory",
      value: "Subcategory",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "In Stages",
      value: "InStages",
      class: "teal lighten-4 subtitle-2",
    },
    { text: "Status", value: "Status", class: "teal lighten-4 subtitle-2" },
    { text: "Action", value: "Action", class: "teal lighten-4 subtitle-2" },
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