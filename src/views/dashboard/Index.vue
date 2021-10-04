<template>
  <div>
    <div v-if="!toggleProjectList">
      <v-container fluid class="pa-4">
        <div class="ma-2">
          <router-link link to="/" class="text-decoration-none">
            <v-icon large> mdi-home</v-icon>
          </router-link>
          <v-icon large> mdi-chevron-right</v-icon>
          Dashboard
        </div>
      </v-container>
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
          :items="response"
          :search="search"
          :item-class="row_classes"
          item-key="EnquiryName"
          class="elevation-1"
        >
          <template v-slot:[`item.Status`]="{ item }">
            <span
              v-if="
                item.InStages === 'Confirmed' || item.InStages === 'Completed'
              "
              class="green px-2 rounded-circle"
            ></span>
            <span
              v-else-if="item.InStages === 'Enquiry Sent'"
              class="orange px-2 rounded-circle"
            ></span>
            <span v-else class="red px-2 rounded-circle"></span>
          </template>

          <template v-slot:[`item.action`]="{ item }">
            <v-btn
              class="white--text font-weight-light text-capitalize rounded-0"
              depressed
              color="#ff6500"
              @click="viewProject(item)"
              >View
            </v-btn>
          </template>

          <!-- <template v-slot:expanded-item="{ headers }">
         
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
        </template> -->
        </v-data-table>
      </v-card>
    </div>
    <ProjectsList :response="SelectedProject" v-if="toggleProjectList" />
  </div>
</template>
 
<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import { DashboardModel, DashboardRequestModel } from "@/model";
import { IDashboardService } from "@/service/dashboard.service";

import ProjectsList from "./ProjectsList.vue";
@Component({
  components: { ProjectsList },
})
export default class Dashboard extends Vue {
  @Inject("DashboardService") DashboardService: IDashboardService;
  search: string = "";
  toggleProjectList: boolean = false;
  showDialog: boolean = false;
  request: DashboardRequestModel = new DashboardRequestModel();
  response: Array<DashboardModel> = [];
  SelectedProject: DashboardModel = new DashboardModel();
  created() {
    this.request = this.$store.getters.id;
    this.DashboardService.getDashboardInfo(this.request).then(
      (response: Array<DashboardModel>) => {
        this.response = response;
      }
    );
  }
  public viewProject(item: DashboardModel) {
    this.toggleProjectList = true;
    this.SelectedProject = item;
  }
  public row_classes(item: any) {
    for (let i = 0; i < item.length; i++)
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
      text: "Action",
      value: "action",
      sortable: false,
      align: "center",
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
      Status: "Inactive",
    },
    {
      EnquiryName: "20",
      Merchandiser: 159,
      Category: "fabric",
      Subcategory: "Yarn",
      InStages: "Enquiry Sent",
      Status: "Active",
    },
    {
      EnquiryName: "30",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Confirmed",
      Status: "Inactive",
    },
    {
      EnquiryName: "40",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Enquiry Sent",
      Status: "Active",
    },
    {
      EnquiryName: "50",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Completed",
      Status: "Active",
    },
    {
      EnquiryName: "60",
      Merchandiser: 159,
      Category: "Mill",
      Subcategory: "Yarn",
      InStages: "Bid Received",
      Status: "Inactive",
    },
  ];
  // headers1: any = [
  //   {
  //     text: "Approve",
  //     align: "start",
  //     sortable: false,
  //     value: "Approve",
  //     class: "teal lighten-4 subtitle-2",
  //   },
  //   {
  //     text: "Price",
  //     value: "Price",
  //     class: "teal lighten-4 subtitle-2",
  //   },
  //   {
  //     text: "Your CreditPereiod",
  //     value: "Your CreditPereiod",
  //     class: "teal lighten-4 subtitle-2",
  //   },
  //   {
  //     text: "Your DeliveryPeriod",
  //     value: "Your DeliveryPeriod",
  //     class: "teal lighten-4 subtitle-2",
  //   },
  //   {
  //     text: "Action",
  //     value: "Action",
  //     class: "teal lighten-4 subtitle-2",
  //   },
  // ];
  // items1: any = [
  //   {
  //     Approve: "masterdamin",
  //     Price: "98",
  //     YourCreditPereiod: "40",
  //     YourDeliveryPeriod: "34s",
  //     Action: "Approve",
  //   },
  // ];
}
</script>