<template>
  <div class="ml-4 mt-6">
    <v-row>
      <!-- <v-select
        :items="items"
        v-model="stages"
        :menu-props="{ offsetY: true }"
        label="Select"
        class="shrink my-4"
        dense
        hide-details
        @change="searchProject()"
      ></v-select> -->

      <!-- <v-spacer></v-spacer> -->

      <!-- <v-text-field
        v-model="search"
        label="Search"
        append-icon="mdi-magnify"
        class="shrink ma-4 pl-2"
        outlined
        dense
        hide-details
      ></v-text-field> -->
    </v-row>
    <v-row>
      <v-tabs v-if="tabValue">
        <v-tab
          @click="searchProject('true')"
          v-if="
            category === 'Company' ||
              (category !== 'Company' &&
                searchRequest.stages !== 'Initiated' &&
                searchRequest.stages !== 'Cancelled')
          "
          >my project</v-tab
        >
        <v-tab
          @click="searchProject('false')"
          v-if="
            category === 'Company' ||
              (category !== 'Company' &&
                searchRequest.stages !== 'Initiated' &&
                searchRequest.stages !== 'Cancelled')
          "
          >all project</v-tab
        >
      </v-tabs>
    </v-row>

    <v-row>
      <v-col col="12" md="12">
        <v-data-table
          :headers="headers"
          :items="response"
          :search="search"
          item-key="EnquiryName"
          class="elevation-1 mb-16"
          :loading="loading"
          loading-text="Loading... Please wait"
        >
          <!-- <template v-slot:[`header.Merchandiser`]="{ header }">
            {{ header.text }}
            <v-icon small> mdi-filter </v-icon>
          </template> -->

          <template v-slot:[`item.Status`]="{ item }">
            <v-badge
              dot
              v-if="item.Status === 'Green'"
              color="green"
              class="ml-4"
            >
            </v-badge>
            <v-badge
              dot
              v-else-if="item.Status === 'Orange'"
              color="orange"
              class="ml-4"
            >
            </v-badge>
            <v-badge dot v-else color="red" class="ml-4"> </v-badge>
          </template>

          <template v-slot:[`item.Action`]="{ item }">
            <router-link
              :to="{
                name: 'ProjectDetail',
                params: { Id: item.Id },
              }"
              tag="button"
            >
              <v-btn
                class="white--text font-weight-light text-capitalize rounded"
                depressed
                color="primary"
                >View
              </v-btn>
            </router-link>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { IDashboardService } from "@/service";
import ProjectsList from "../ProjectsList.vue";
import {
  DashboardModel,
  DashboardRequestModel,
  ProjectSearchModel,
} from "@/model";
@Component({
  components: { ProjectsList },
})
export default class DashboardProjectList extends Vue {
  @Inject("DashboardService") DashboardService: IDashboardService;
  @Prop() response: Array<DashboardModel>;
  @Prop() search: string;
  @Prop() stagesMyProject: string;
  @Prop() stagesRequest: string;
  @Prop() tabValue: boolean;

  public searchRequest = new ProjectSearchModel();
  public stages: string = "";
  public loading: boolean = false;
  public values: string = "";
  public autocomplete: boolean = false;
  public request = new DashboardRequestModel();

  created() {
    // if (this.role !== "MasterAdmin" && this.role !== "Approval Admin" ) {
    //   this.searchProject(true);
    // }
    // if (this.role === "Merchandiser") {
    //   this.searchProject(true);
    // }

    if (
      this.category === "Company" &&
      (this.role === "Quote InCharge" || this.role === "Merchandiser") &&
      (this.stagesRequest === "New Projects" ||
        this.stagesRequest === "Bid Received" ||
        this.stagesRequest === "Awaiting Authentication" ||
        this.stagesRequest === "Approval Pending" ||
        this.stagesRequest === "Cancelled Projects" ||
        this.stagesRequest === "Confirmed Projects" ||
        this.stagesRequest === "Completed Projects")
    ) {
      this.searchProject(true);
    }

    if (
      this.category !== "Company" &&
      this.role === "Quote InCharge" &&
      (this.stagesRequest === "Approved" ||
        this.stagesRequest === "Awaiting Approval" ||
        this.stagesRequest === "NoShow" ||
        this.stagesRequest === "Confirmed" ||
        this.stagesRequest === "Completed")
    ) {
      this.searchProject(true);
    }

    if (
      this.category !== "Company" &&
      (this.stagesRequest === "Initiated" || this.stagesRequest === "Cancelled")
    ) {
      this.searchProject(false);
    }

    if (this.category != "Company") {
      this.headers.find((o: any) => {
        if (o.text === "Merchandiser") {
          o.text = "Approval Admin";
          o.value = "ApprovalAdmin";
        }
      });
      this.items.splice(1, 5);
      this.items.push(
        "Initiated",
        "Awaiting Approval",
        "Approved",
        "Confirmed",
        "Completed",
        "Rejected"
      );
    }
  }

  // public getProjectList() {
  //   this.request.id = this.$store.getters.id;
  //   this.loading = true;
  //   this.DashboardService.GetProjectList(this.request).then((response) => {
  //     this.loading = false;
  //     this.myproject = false;
  //     this.response = response;
  //   });
  // }
  // public getMyProjectList() {
  //   this.request.id = this.$store.getters.id;
  //   this.loading = true;
  //   this.DashboardService.GetMyProjectList(this.request).then((response) => {
  //     this.loading = false;
  //     this.myproject = true;
  //     this.response = response;
  //   });
  // }
  get category(): string {
    return this.$store.getters.category;
  }

  get role(): string {
    return this.$store.getters.role;
  }

  public searchProject(myproject: boolean) {
    // this.searchRequest.myproject = this.myproject;
    this.searchRequest.myproject = myproject;
    this.searchRequest.stages = this.stagesMyProject;
    this.DashboardService.GetProjectListByFilter(this.searchRequest).then(
      (response) => {
        this.loading = false;
        this.response = response;
      }
    );
  }

  items: any = [
    "All",
    "New Enquiry",
    "Submitted Enquirys",
    "Confirmed Projects",
    "Completed Projects",
  ];
  headers: any = [
    {
      text: "Enquiry Name",
      align: "start",
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
      value: "Action",
      sortable: false,
      align: "center",
      class: "teal lighten-3 subtitle-2",
    },
  ];
}
</script>

<style>
tbody tr:nth-of-type(even) {
  background-color: #ecf7f6;
}
tr:nth-of-type(even):hover {
  background-color: #e0f2f1 !important;
}
tr:nth-of-type(odd):hover {
  background-color: transparent !important;
}
</style>
