<template>
  <div>
    <v-container fluid class="pa-4">
      <div class="ma-2">
        <router-link link to="/" class="text-decoration-none">
          <v-icon large> mdi-home</v-icon>
        </router-link>
        <v-icon large> mdi-chevron-right</v-icon>
        New Project
      </div>
    </v-container>

<div  class="mx-5">
  <v-row>
    <v-col>
    <v-data-table :headers="headers" :items="items">
      <template v-slot:[`item.action`] >
        <v-btn
          class="white--text font-weight-light text-capitalize rounded-0"
          depressed
          color="#ff6500"
          @click="toggleView = true"
          >View
        </v-btn>
      </template>
    </v-data-table>
    <ProjectsListView v-if="toggleView" />
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <v-img src="@/assets/textile3.png" width="50%"></v-img>
    </v-col>

    <v-col>
      <v-row class="mt-4">
        <h4>Apple</h4>
      </v-row>
      <v-row>
        <v-icon>mdi-star</v-icon>
      </v-row>
    </v-col>

    <v-col cols=8>
      <v-data-table
        :headers="headers1"
        :items="items1"      
      ></v-data-table>
    </v-col>
  </v-row>
</div>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
import ProjectsListView from "./ProjectsListView.vue";
@Component({
  components: { ProjectsListView },
})

export default class ProjectsList extends Vue {
   toggleView: boolean = true;

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
   headers1: any = [
    {
      text: "Auth Approve",
      align: "start",
      sortable: false,
      value: "AuthApprove",
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
      class: "teal lighten-4 subtitle-2",
    },
  ];
  items1: any = [
    {
      AuthApprove: "Apple1A1(Sadmin) ",
      RequestedPrice: "120",
      RequestedCredit: "5 Days",
      RequestedDelivery: "22 Days",
      action: "Auth for Approval",
    },
  ];
}
</script>
