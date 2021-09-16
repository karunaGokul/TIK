<template>
  <div>
    <v-breadcrumbs class="py-8">
      <v-breadcrumbs-item><v-icon medium>mdi-home</v-icon> </v-breadcrumbs-item>
      <v-breadcrumbs-item
        ><v-icon small>mdi-chevron-right</v-icon>
      </v-breadcrumbs-item>
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
        :item-class="row_classes"
        show-expand
        :expanded.sync="expanded"
        item-key="EnquiryName"
        class="elevation-1"
      >
        <template v-slot:[`item.Status`]="{ item }">
          <span
            v-if="item.Status === 'Active'"
            class="green px-2 rounded-circle"
          ></span>
          <span v-else class="red px-2 rounded-circle"></span>
          <span class="pl-2">{{ item.Status }}</span>
        </template>

        <template v-slot:expanded-item="{ headers }">
          <!-- <v-data-table
            :headers="headers1"
            :items="items1"
            :colspan="headers.length"
          >
          </v-data-table> -->
          <td :colspan="headers.length">
            <v-simple-table>
              <thead>
                <tr class="teal lighten-4">
                  <th>Approve</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>masteradmin</td>
                  <td>98</td>
                  <td>
                    <v-btn
                      small
                      color="#ff6500"
                      class="rounded-0 white--text text-capitalize"
                      >Approve</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </td>
        </template>
      </v-data-table>
      <v-dialog v-model="showDialog" max-width="500">
        <v-card>
          <v-row class="my-4 px-4">
            <v-card-title>Project Details </v-card-title>
            <v-spacer></v-spacer>
            <v-btn @click="close" icon>
              <v-icon id="close-button">mdi-close</v-icon>
            </v-btn>
          </v-row>
          <v-card-text>
            <div v-for="(value, name) in request" :key="name">
              <v-text-field
                :label="name"
                v-model="request[name]"
                outlined
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-btn class="ml-auto" color="primary" @click="save(request)">
                Save
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>
 
<script lang="ts">
import { DashboardRequestModel } from "@/model";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Dashboard extends Vue {
  search: string = "";
  showDialog: boolean = false;
  expanded: [];
  request: DashboardRequestModel = new DashboardRequestModel();
  public editItem(item: DashboardRequestModel) {
    console.log(item);
    this.showDialog = true;
    this.request = item;
  }
  // public save(request: DashboardRequestModel) {
  //   this.request = request;
  //   this.showDialog = false;
  // }

  public close() {
    this.showDialog = false;
  }
  public row_classes(item: any) {
    return item.Status === "Active" ? "white" : "blue lighten-5";
  }
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
    { text: "Review", value: "Review", class: "teal lighten-4 subtitle-2" },
    {
      text: "",
      value: "data-table-expand",
      class: "teal lighten-4 subtitle-2",
    },
  ];
  desserts: any = [
    {
      EnquiryName: "10",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "Active",
      Class: "white",
    },
    {
      EnquiryName: "20",
      Merchandiser: 159,
      Category: "fabric",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "Active",
      Class: "orange",
    },
    {
      EnquiryName: "30",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "Inactive",
      Class: "white",
    },
    {
      EnquiryName: "40",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "Active",
      Class: "orange",
    },
    {
      EnquiryName: "50",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "Inactive",
      Class: "white",
    },
    {
      EnquiryName: "60",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "Inactive",
      Class: "orange",
    },
  ];
  headers1: any = [
    {
      text: "Approve",
      align: "start",
      sortable: false,
      value: "Approve",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Price",
      value: "Price",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Your CreditPereiod",
      value: "Your CreditPereiod",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Your DeliveryPeriod",
      value: "Your DeliveryPeriod",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Action",
      value: "Action",
      class: "teal lighten-4 subtitle-2",
    },
  ];
  items1: any = [
    {
      Approve: "masterdamin",
      Price: "98",
      YourCreditPereiod: "40",
      YourDeliveryPeriod: "34s",
      Action: "Approve",
    },
  ];
}
</script>