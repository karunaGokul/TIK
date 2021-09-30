<template>
  <div>
    <h1>hello</h1>
    <v-container fluid class="pa-4">
      <div class="ma-2">
        <router-link link to="/" class="text-decoration-none">
          <v-icon large> mdi-home</v-icon>
        </router-link>
        <v-icon large> mdi-chevron-right</v-icon>
        New Project
      </div>
    </v-container>

    <v-data-table :headers="headers" :items="items">
      <template v-slot:[`item.action`]>
        <v-btn
          class="white--text font-weight-light text-capitalize rounded-0"
          depressed
          color="#ff6500"
          >View
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
@Component

export default class ProjectsList extends Vue {
   
  headers: any = [
    {
      text: "Project Name",
      align: "start",
      sortable: false,
      value: "ProjectName",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Category",
      value: "Category",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "SubCategory",
      value: "SubCategory",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Requested Price",
      value: "RequestedPrice",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Requested Credit",
      value: "RequestedCredit",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Requested Delivery",
      value: "RequestedDelivery",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Action",
      value: "action",
      align: "center",
      class: "teal lighten-4 subtitle-2",
    },
  ];
  items: any = [
    {
      ProjectName: "10",
      Category: "Mill",
      SubCategory: "Yarn",
      RequestedPrice: "Rs.100",
      RequestedCredit: "10 Days",
      RequestedDelivery: "7 Days",
    },
  ];
}
</script>
