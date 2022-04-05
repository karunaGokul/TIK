<template>
  <v-container fluid class="pa-8">
    <v-row>
      <v-col>
        <router-link to="/dashboard" class="text-decoration-none">
          <v-icon large dark class="teal"> mdi-home</v-icon>
        </router-link>
        <v-icon large> mdi-chevron-right</v-icon>
        {{ stagesRequest.replace(/([a-zA-Z])([A-Z])([a-z])/g, "$1 $2$3") }}
      </v-col>
    </v-row>

    <v-row class="pa-4">
      <v-tabs v-if="showTabs">
        <v-tab
          @click="searchProject('true')"
          v-if="
            (category === 'Company' ||
              (category !== 'Company' &&
                searchRequest.stages !== 'Initiated' &&
                searchRequest.stages !== 'Cancelled')) &&
              this.stagesRequest !== 'ProjectReviews'
          "
          >my project</v-tab
        >
        <v-tab
          @click="searchProject('false')"
          v-if="
            (category === 'Company' ||
              (category !== 'Company' &&
                searchRequest.stages !== 'Initiated' &&
                searchRequest.stages !== 'Cancelled')) &&
              this.stagesRequest !== 'ProjectReviews'
          "
          >all project</v-tab
        >
      </v-tabs>
    </v-row>

    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          label="Search"
          append-icon="mdi-magnify"
          class="shrink ma-2"
          outlined
          dense
          hide-details
          v-if="searchToggle"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="response"
        :search="search"
        item-key="EnquiryName"
        :loading="loading"
        loading-text="Loading... Please wait"
      >
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
              params: { id: item.Id, status: stagesRequest },
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
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { IDashboardService } from "@/service";
import {
  DashboardModel,
  DashboardRequestModel,
  ProjectSearchModel,
} from "@/model";
@Component({})
export default class ProjectList extends Vue {
  @Inject("DashboardService") service: IDashboardService;

  public response: Array<DashboardModel> = [];
  public search: string = "";
  public stagesRequest: string;
  public searchToggle: boolean = false;
  public searchRequest = new ProjectSearchModel();
  public stages: string = "";
  public loading: boolean = false;
  public values: string = "";
  public autocomplete: boolean = false;
  public request = new DashboardRequestModel();

  created() {
    this.stagesRequest = this.$route.params.status;

    if (this.stagesRequest === "ProjectReviews") {
      this.searchProject(false);
    }
    if (this.category === "Company") {
      if (this.role === "MasterAdmin" || this.role === "Approval Admin") {
        this.searchProject(false);
      } else if (
        (this.role === "Quote InCharge" || this.role === "Merchandiser") &&
        (this.stagesRequest === "NewProjects" ||
          this.stagesRequest === "BidReceived" ||
          this.stagesRequest === "AwaitingAuthentication" ||
          this.stagesRequest === "ApprovalPending" ||
          this.stagesRequest === "NoResponse" ||
          this.stagesRequest === "NoShow" ||
          this.stagesRequest === "CancelledProjects" ||
          this.stagesRequest === "ConfirmedProjects" ||
          this.stagesRequest === "CompletedProjects")
      ) {
        this.searchProject(true);
      }
    } else {
      if (this.role === "MasterAdmin" || this.role === "Approval Admin") {
        this.searchProject(false);
      } else if (
        this.role === "Quote InCharge" &&
        (this.stagesRequest === "Approved" ||
          this.stagesRequest === "AwaitingApproval" ||
          this.stagesRequest === "NoResponse" ||
          this.stagesRequest === "NoShow" ||
          this.stagesRequest === "ConfirmedProjects" ||
          this.stagesRequest === "Completed")
      ) {
        this.searchProject(true);
      } else if (
        this.category !== "Company" &&
        (this.stagesRequest === "Initiated" ||
          this.stagesRequest === "Cancelled")
      ) {
        this.searchProject(false);
      }
    }
    if (this.category != "Company") {
      this.headers.splice(5, 2);
      this.headers.find((o: any) => {
        if (o.text === "Merchandiser") {
          o.text = "Approval Admin";
          o.value = "ApprovalAdmin";
        }
      });
      this.items.splice(1, 5);
      this.items.push(
        "Initiated",
        "AwaitingApproval",
        "Approved",
        "Confirmed",
        "Completed",
        "Rejected"
      );
    }
    if(this.category === "Company") {
    if(this.stagesRequest === "NewProjects"){
      this.headers.splice(5, 2);
    } else if (this.stagesRequest === "BidReceived") {
      this.headers.splice(6, 1);
    }
    }
  }

  get showTabs(): boolean {
    return this.role === "Merchandiser" || this.role === "Quote InCharge";
  }

  get category(): string {
    return this.$store.getters.category;
  }

  get role(): string {
    return this.$store.getters.role;
  }

  public searchProject(myproject: boolean) {
    if (this.stagesRequest == "ProjectReviews") {
      this.service.PendingReview().then((response) => {
        this.response = response;
      });
    } else {
      this.searchRequest.myproject = myproject;
      this.searchRequest.stages = this.stagesRequest;
      this.loading = true;
      this.service
        .GetProjectListByFilter(this.searchRequest)
        .then((response) => {
          this.loading = false;
          this.response = response;

          this.searchToggle = true;
        });
    }
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
    {
      text: "Bids Received",
      value: "bidsReceived",
      class: "teal lighten-3 subtitle-2",
    },
    {
      text: "Bidding Time",
      value: "biddingTime",
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
