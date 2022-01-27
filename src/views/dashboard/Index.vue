<template>
  <v-container fluid class="pa-6">
    <v-row class="align-center my-4" justify="space-between">
      <v-col>
        <div class="text-h4" v-if="userResponse.fullName">
          Welcome back, {{ userResponse.fullName }}
        </div>
      </v-col>
      <v-col>
        <div class="text-right">
          {{ userResponse.currentDate }}, {{ userResponse.currentDay }}
        </div>
      </v-col>
    </v-row>

    <div class="pa-3">
      <div class="subtitle-1 text-uppercase font-weight-black mb-4">
        Browse Projects
      </div>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(nav, index) in filteredProjectNavs"
          :key="index"
        >
          <v-card @click="navigateToProjects(nav.status)">
            <div class="d-flex flex-no-wrap justify-space-between align-center">
              <div>
                <v-card-title class="overline font-weight-bold">{{
                  nav.text
                }}</v-card-title>

                <v-card-actions>
                  <v-avatar
                    class="ml-2"
                    color="primary"
                    size="40"
                    v-if="nav.count"
                  >
                    <span class="white--text text-h6">{{ nav.count }}</span>
                  </v-avatar>
                  <v-btn
                    v-else
                    class="ml-2 grey lighten-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon color="primary">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="elevation-2 mr-3" color="teal" size="70">
                <v-icon x-large dark>{{ nav.icon }}</v-icon>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <div class="subtitle-1 text-uppercase font-weight-black mt-8 pt-4 mb-4">
        Other Links
      </div>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(nav, index) in otherNavs"
          :key="index"
        >
          <v-card>
            <router-link :to="nav.link ? nav.link : '/dashboard'" tag="div">
              <div
                class="d-flex flex-no-wrap justify-space-between align-center"
              >
                <div>
                  <v-card-title class="overline font-weight-bold">{{
                    nav.text
                  }}</v-card-title>

                  <v-card-actions>
                    <v-badge
                      :content="nav.count"
                      :value="nav.count ? nav.count : 0"
                      overlap
                      color="teal"
                    >
                      <v-btn
                        class="ml-2 grey lighten-3"
                        fab
                        icon
                        height="40px"
                        right
                        width="40px"
                      >
                        <v-icon color="teal">mdi-chevron-right</v-icon>
                      </v-btn>
                    </v-badge>
                  </v-card-actions>
                </div>

                <v-avatar class="elevation-2 mr-2" color="primary" size="70">
                  <v-icon x-large dark>{{ nav.icon }}</v-icon>
                </v-avatar>
              </div>
            </router-link>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { IDashboardService } from "@/service";
import {
  ProjectSearchModel,
  DashboardModel,
  UserInfomodel,
  NotificationModel,
} from "@/model";
@Component
export default class Dashboard extends Vue {
  @Inject("DashboardService") service: IDashboardService;

  public userResponse = new UserInfomodel();
  filteredProjectNavs: any = [];

  created() {
    this.userInfo();
    this.notification();

    this.filteredProjectNavs = this.projectNavs.filter(
      (n: any) =>
        (!n.roles || n.roles.includes(this.role)) &&
        (n.company == undefined ||
          (n.company && this.category == "Company") ||
          (!n.company && this.category !== "Company")) &&
        (!n.approvalAdminAccess ||
          (n.approvalAdminAccess && this.approvalAdminAccess === "1"))
    );
  }

  get category(): string {
    return this.$store.getters.category;
  }

  get role(): string {
    return this.$store.getters.role;
  }

  get approvalAdminAccess(): string {
    return this.$store.getters.approvalAdminAccess;
  }

  public navigateToProjects(status: string) {
    this.$router.push(`/projectlist/${status}`);
  }

  public userInfo() {
    this.service.GetUserFullName().then((response) => {
      this.userResponse = response;
    });
  }

  public notification() {
    this.service.GetNotification().then((response) => {
      this.projectNavs
        .filter((n: any) => n.text == "New Projects")
        .forEach((n: any) => (n.count = response.newProjectCount));
      this.projectNavs
        .filter((n: any) => n.text == "Bids Received")
        .forEach((n: any) => (n.count = response.bidReceivedCount));
      this.projectNavs
        .filter((n: any) => n.text == "Pending Authentication")
        .forEach((n: any) => (n.count = response.pendingAuthenticationCount));
      this.projectNavs
        .filter((n: any) => n.text == "Approved Bids")
        .forEach((n: any) => (n.count = response.approvedBidsCount));
      this.projectNavs
        .filter((n: any) => n.text == "Approval Pending")
        .forEach((n: any) => (n.count = response.approvalPendingCount));
      this.projectNavs
        .filter((n: any) => n.text == "No Response Projects")
        .forEach((n: any) => (n.count = response.noResponseCount));
      this.projectNavs
        .filter((n: any) => n.text == "No Show Projects")
        .forEach((n: any) => (n.count = response.noShowCount));
      this.projectNavs
        .filter((n: any) => n.text == "Confirmed Projects")
        .forEach((n: any) => (n.count = response.confirmedCount));
      this.projectNavs
        .filter((n: any) => n.text == "Completed Projects")
        .forEach((n: any) => (n.count = response.completedCount));
      this.projectNavs
        .filter((n: any) => n.text == "Project Reviews")
        .forEach((n: any) => (n.count = response.projectReviewCount));
    });
  }

  projectNavs: any = [
    {
      text: "New Projects",
      icon: "mdi-folder-plus",
      count: 0,
      company: false,
      roles: ["MasterAdmin", "Quote InCharge"],
      status: "Initiated",
    },
    {
      text: "New Projects",
      icon: "mdi-folder-plus",
      count: 0,
      company: true,
      roles: ["MasterAdmin", "Quote InCharge"],
      status: "NewProjects",
    },
    {
      text: "Bids Received",
      icon: "mdi-cash-multiple",
      count: 0,
      company: true,
      roles: ["MasterAdmin", "Quote InCharge"],
      status: "BidReceived",
    },
    {
      text: "Approved Bids",
      icon: "mdi-check-decagram",
      count: 0,
      company: false,
      roles: ["MasterAdmin", "Quote InCharge"],
      status: "Approved",
    },
    {
      text: "Pending Authentication",
      icon: "mdi-account-clock",
      count: 0,
      company: true,
      roles: ["MasterAdmin", "Merchandiser"],
      status: "AwaitingAuthentication",
    },
    {
      text: "Approval Pending",
      icon: "mdi-clock-check-outline",
      count: 0,
      company: false,
      roles: ["MasterAdmin", "Approval Admin"],
      status: "Awaiting Approval",
      approvalAdminAccess: true,
    },
    {
      text: "Approval Pending",
      icon: "mdi-clock-check-outline",
      count: 0,
      company: true,
      roles: ["MasterAdmin", "Approval Admin"],
      status: "ApprovalPending",
      approvalAdminAccess: true,
    },
    {
      text: "No Response Projects",
      icon: "mdi-book-cancel",
      count: 0,
      company: false,
      status: "No Response",
    },
    {
      text: "No Response Projects",
      icon: "mdi-book-cancel",
      count: 0,
      company: true,
      status: "NoResponse",
    },
    {
      text: "No Show Projects",
      icon: "mdi-thumb-down",
      count: 0,
      status: "NoShow",
    },
    {
      text: "Confirmed Projects",
      icon: "mdi-thumb-up",
      count: 0,
      company: false,
      status: "ConfirmedProjects",
    },
    {
      text: "Confirmed Projects",
      icon: "mdi-thumb-up",
      count: 0,
      company: true,
      status: "ConfirmedProjects",
    },
    {
      text: "Completed Projects",
      icon: "mdi-playlist-check",
      count: 0,
      company: true,
      status: "CompletedProjects",
    },
    {
      text: "Completed Projects",
      icon: "mdi-playlist-check",
      count: 0,
      company: false,
      status: "Completed",
    },
    {
      text: "Canceled Projects",
      icon: "mdi-cancel",
      count: 0,
      company: true,
      status: "CancelledProjects",
    },
    {
      text: "Canceled Projects",
      icon: "mdi-cancel",
      count: 0,
      company: false,
      status: "Cancelled",
    },
    {
      text: "Project Reviews",
      icon: "mdi-message-star",
      count: 0,
      status: "ProjectReviews",
    },
  ];

  otherNavs: any = [
    {
      text: "Communications",
      icon: "mdi-email-multiple",
      count: 0,
    },
    {
      text: "Company profile",
      icon: "mdi-domain",
      count: 0,
      link: "/profile",
    },
    {
      text: "Advertise in TIK",
      icon: "mdi-advertisements",
      count: 0,
    },
    {
      text: "Contact TIK Support",
      icon: "mdi-phone-outgoing",
      count: 0,
      link: "/contact",
    },
    {
      text: "Manage Users",
      icon: "mdi-account-multiple",
      count: 0,
      link: "/employee",
      roles: ["MasterAdmin"],
    },
  ];
}
</script>
