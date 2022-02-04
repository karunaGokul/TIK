<template>
  <div>
    <v-carousel :show-arrows="false" height="200" cycle>
      <v-carousel-item
        v-for="(item, i) in ads"
        :key="i"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-sheet tile>
          <v-img :src="item.src" contain></v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container fluid class="pa-6">
      <v-banner tile class="pt-8">
        <div class="text-h5" v-if="userResponse.fullName">
          Welcome back, {{ userResponse.fullName }}
        </div>

        <template v-slot:actions>
          {{ userResponse.currentDate }}, {{ userResponse.currentDay }}
        </template>
      </v-banner>
      <div class="pa-3 mt-8">
        <!-- <div class="text-h5 text-uppercase mb-4">Browse Projects</div> -->
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            xl="3"
            v-for="(nav, index) in filteredProjectNavs"
            :key="index"
          >
            <v-card
              @click="navigateToProjects(nav.status)"
              class="pt-4 pr-4"
              :color="nav.color"
            >
              <v-img
                :src="nav.icon"
                :alt="nav.text"
                class="white--black"
                height="160"
                contain
                position="right center"
              >
                <div
                  class="d-flex align-start flex-column"
                  style="height: 100%"
                >
                  <v-avatar
                    color="grey lighten-2"
                    size="50"
                    class="ml-4 mt-4"
                    v-if="nav.count"
                  >
                    <span class="teal--text text-h5">{{ nav.count }}</span>
                  </v-avatar>
                  <v-card-title
                    v-text="nav.text"
                    class="mt-auto"
                  ></v-card-title>
                </div>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-banner tile class="my-8">
          <div class="text-h5">Other Links</div>
        </v-banner>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(nav, index) in otherNavs"
            :key="index"
          >
            <v-card color="orange lighten-4">
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
        <!-- <v-row class="mt-5">
        <v-img src="@/assets/banner/banner.png" height="50%"></v-img>
      </v-row> -->
      </div>
    </v-container>
  </div>
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
          this.role == "MasterAdmin" ||
          this.role == "Approval Admin" ||
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
      color: "amber lighten-3",
      icon: require("@/assets/icons/new project.png"),
      count: 0,
      company: false,
      roles: ["MasterAdmin", "Quote InCharge"],
      status: "Initiated",
    },
    {
      text: "New Projects",
      color: "amber lighten-3",
      icon: require("@/assets/icons/new project.png"),
      count: 0,
      company: true,
      roles: ["MasterAdmin", "Quote InCharge"],
      status: "NewProjects",
    },
    {
      text: "Bids Received",
      color: "teal lighten-3",
      icon: require("@/assets/icons/bid received.png"),
      count: 0,
      company: true,
      roles: ["MasterAdmin", "Quote InCharge"],
      status: "BidReceived",
    },
    {
      text: "Approved Bids",
      color: "light-blue lighten-2",
      icon: require("@/assets/icons/approved bid.png"),
      count: 0,
      company: false,
      roles: ["MasterAdmin", "Quote InCharge"],
      status: "Approved",
    },
    {
      text: "Pending Authentication",
      color: "cyan lighten-3",
      icon: require("@/assets/icons/pending.png"),
      count: 0,
      company: true,
      roles: ["MasterAdmin", "Merchandiser"],
      status: "AwaitingAuthentication",
    },
    {
      text: "Approval Pending",
      color: "light-blue lighten-2",
      icon: require("@/assets/icons/approval pending.png"),
      count: 0,
      company: false,
      roles: ["MasterAdmin", "Approval Admin", "Quote InCharge"],
      status: "AwaitingApproval",
      approvalAdminAccess: true,
    },
    {
      text: "Approval Pending",
      color: "light-blue lighten-2",
      icon: require("@/assets/icons/approval pending.png"),
      count: 0,
      company: true,
      roles: ["MasterAdmin", "Approval Admin", "Merchandiser"],
      status: "ApprovalPending",
      approvalAdminAccess: true,
    },
    {
      text: "No Response Projects",
      color: "deep-orange accent-1",
      icon: require("@/assets/icons/no response.png"),
      count: 0,
      company: false,
      status: "NoResponse",
    },
    {
      text: "No Response Projects",
      color: "deep-orange accent-1",
      icon: require("@/assets/icons/no response.png"),
      count: 0,
      company: true,
      status: "NoResponse",
    },
    {
      text: "No Show Projects",
      color: "brown lighten-2",
      icon: require("@/assets/icons/no show project.png"),
      count: 0,
      status: "NoShow",
    },
    {
      text: "Confirmed Projects",
      color: "green lighten-2",
      icon: require("@/assets/icons/confirmed project.png"),
      count: 0,
      company: false,
      status: "ConfirmedProjects",
    },
    {
      text: "Confirmed Projects",
      color: "green lighten-2",
      icon: require("@/assets/icons/confirmed project.png"),
      count: 0,
      company: true,
      status: "ConfirmedProjects",
    },
    {
      text: "Completed Projects",
      color: "light-green lighten-1",
      icon: require("@/assets/icons/completed project.png"),
      count: 0,
      company: true,
      status: "CompletedProjects",
    },
    {
      text: "Completed Projects",
      color: "light-green lighten-1",
      icon: require("@/assets/icons/completed project.png"),
      count: 0,
      company: false,
      status: "Completed",
    },
    {
      text: "Canceled Projects",
      color: "red lighten-2",
      icon: require("@/assets/icons/canceled project.png"),
      count: 0,
      company: true,
      status: "CancelledProjects",
    },
    {
      text: "Canceled Projects",
      color: "red lighten-2",
      icon: require("@/assets/icons/canceled project.png"),
      count: 0,
      company: false,
      status: "Cancelled",
    },
    {
      text: "Project Reviews",
      color: "yellow lighten-4",
      icon: require("@/assets/icons/project review.png"),
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
      text: "Contact Support",
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

  ads: any = [
    {
      src: require("@/assets/ads-2.jpg"),
    },
    {
      src: require("@/assets/ads-1.jpg"),
    },
  ];
}
</script>
