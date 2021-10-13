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
        <v-card-title class="mx-6">
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
          <v-icon color="green darken-4" class="ml-4 pt-3" @click="createProject">
            mdi-plus-circle</v-icon>
          <!-- <v-icon color="green darken-4" class="ml-3 pt-3"> mdi-filter</v-icon>
          <v-icon color="green darken-4" class="ml-2 pt-3">
            mdi-sort-ascending</v-icon> -->
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="response"
          :search="search"
          :item-class="row_classes"
          item-key="EnquiryName"
          class="elevation-1 ma-6"
        >
          <template v-slot:[`item.Status`]="{ item }">
            <v-badge
              dot
              v-if="item.InStages === 'Confirmed' || item.InStages === 'Completed'"
              color="green"
              class="ml-4"
            >
            </v-badge>
            <v-badge
              dot
              v-else-if="item.InStages === 'Enquiry Sent'"
              color="orange"
              class="ml-4"
            >
            </v-badge>
            <v-badge dot v-else color="red" class="ml-4"> </v-badge>
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
        </v-data-table>
      </v-card>
    </div>
    <v-snackbar
          v-model="snackbar"
          :timeout="2000"
          color="deep-orange lighten-5 pink--text"
          right
          top
        >
          <v-icon color="pink">mdi-exclamation-thick </v-icon>
          {{ snackbarText }}
          <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
              <v-icon> mdi-close-box</v-icon>
            </v-btn>
          </template>
        </v-snackbar>
    <ProjectsList :response="SelectedProject" v-if="toggleProjectList" />
  </div>
</template>
 
<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import { DashboardModel, DashboardRequestModel } from "@/model";
import { IDashboardService } from "@/service";

import ProjectsList from "./ProjectsList.vue";
@Component({
  components: { ProjectsList },
})
export default class Dashboard extends Vue {
  @Inject("DashboardService") DashboardService: IDashboardService;
  search: string = "";
  toggleProjectList: boolean = false;
  showDialog: boolean = false;
  public request = new DashboardRequestModel();
  public response: Array<DashboardModel> = [];
  snackbarText: string = "";
  snackbar: boolean = false;
  SelectedProject: DashboardModel = new DashboardModel();
  
  created() {
    // this.request = this.$store.getters.id;
    // this.DashboardService.getDashboardInfo(this.request).then(
    //   (response: Array<DashboardModel>) => {
    //     this.response = response;
    //   });
    this.getProjectList();
  }

public createProject() {
    this.DashboardService.CreateProject(this.SelectedProject).then(
      (response) => {
        this.$router.push("/dashboard");
      },
      (err) => {
        if (err.response.status == 400) {
          this.snackbarText = err.response.data;
          this.snackbar = true;
        }
      }
    );
  }
 public getProjectList() {
    this.request.id = this.$store.getters.id;
    this.DashboardService.GetProjectList(this.request).then((response) => {
      this.response = response;
    });
  }

  public viewProject(item: DashboardModel) {
    this.toggleProjectList = true;
    this.SelectedProject = item;
  }

  public row_classes(it: any) {
    // return it.Subcategory === "Fabric" ? "white" : "blue lighten-5";
  }

  items: any = ["New Enquiry", "Confirmed Project", "Completed Project"];
  headers: any = [
    {
      text: "Enquiry Name",
      align: "start",
      sortable: false,
      value: "EnquiryName",
      class: "teal lighten-3 subtitle-2",
    },
    {
      text: "Merchandiser",
      value: "Merchandiser",
      class: "teal lighten-3 subtitle-2",
    },
    { text: "Category", value: "Category", class: "teal lighten-3 subtitle-2" },
    {
      text: "Subcategory",
      value: "Subcategory",
      class: "teal lighten-3 subtitle-2",
    },
    {
      text: "In Stages",
      value: "InStages",
      class: "teal lighten-3 subtitle-2",
    },
    { text: "Status", value: "Status", class: "teal lighten-3 subtitle-2" },

    {
      text: "Action",
      value: "action",
      sortable: false,
      align: "center",
      class: "teal lighten-3 subtitle-2",
    },
  ];
}
</script>
<style scoped>
tbody tr:nth-of-type(even) {
  background-color: #e0f2f1;
}
tr:nth-of-type(even):hover {
  background-color: #e0f2f1 !important;
}
tr:nth-of-type(odd):hover {
  background-color: transparent !important;
}
</style>
