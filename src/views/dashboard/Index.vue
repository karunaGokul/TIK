<template>
  <div style="overflow: hidden">
    <v-container fluid class="pa-4">
      <v-row class="ma-2">
        <v-col md="4">
          <router-link to="/" class="text-decoration-none">
            <v-icon large dark class="teal"> mdi-home</v-icon>
          </router-link>
          <v-icon large> mdi-chevron-right</v-icon>
          Dashboard
        </v-col>
        <v-col md="2" offset-md="6">
          <div class="d-flex justify-end">{{ userResponse.currentDate }}</div>
          <div class="d-flex justify-end">{{ userResponse.currentDay }}</div>
        </v-col>
      </v-row>
    </v-container>

    <v-card class="mx-7 mt-n3 px-6" elevation="8">
      <v-row>
        <v-col md="4">
          <v-card-subtitle class="font-weight-black mt-3 ml-5"
            >Hi {{ userResponse.fullName }}</v-card-subtitle
          >
        </v-col>
        <v-col md="3" offset-md="5">
          <v-text-field
            v-model="search"
            label="Search"
            append-icon="mdi-magnify"
            class="shrink ma-4 pl-2"
            outlined
            dense
            hide-details
            v-if="searchToggle"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-container class="mb-16 mt-10">
        <div v-if="dashboard">
          <v-row class="mb-5">
            <v-col cols="12" sm="4" md="2" v-if="category === 'Company'">
              <v-icon
                x-large
                dark
                class="teal"
                @click="searchProject('New Projects')"
                >mdi-clipboard-minus-outline</v-icon
              >
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                new projects
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2" v-else>
              <v-icon
                x-large
                dark
                class="teal"
                @click="searchProject('Initiated')"
                >mdi-clipboard-minus-outline</v-icon
              >
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                new projects
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2" v-if="category === 'Company'">
              <v-icon
                x-large
                dark
                class="teal"
                @click="searchProject('Bid Received')"
                >mdi-human-dolly</v-icon
              >
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                bids received
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2" v-else>
              <v-icon
                x-large
                dark
                class="teal"
                @click="searchProject('Approved')"
                >mdi-human-dolly</v-icon
              >
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                approved bids
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2" v-if="category === 'Company'">
              <v-icon
                x-large
                dark
                class="teal"
                @click="searchProject('Approval Pending')"
                >mdi-clock-alert-outline</v-icon
              >
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                approval pending
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2" v-else>
              <v-icon
                x-large
                dark
                class="teal"
                @click="searchProject('Awaiting Approval')"
                >mdi-clock-alert-outline</v-icon
              >
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                approval pending
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2">
              <v-icon x-large dark class="teal">mdi-clipboard-remove</v-icon>
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                no response<br />
                projects
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2" v-if="category === 'Company'">
              <v-icon
                x-large
                dark
                class="teal"
                @click="searchProject('Cancelled Projects')"
                >mdi-close-network</v-icon
              >
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                no show projects
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2" v-else>
              <v-icon x-large dark class="teal" @click="searchProject('NoShow')"
                >mdi-close-network</v-icon
              >
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                no show projects
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2" v-if="category === 'Company'">
              <v-icon
                x-large
                dark
                class="teal"
                @click="searchProject('Completed Projects')"
                >mdi-clipboard-check-outline</v-icon
              >
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                completed <br />projects
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2" v-else>
              <v-icon
                x-large
                dark
                class="teal"
                @click="searchProject('Completed')"
                >mdi-clipboard-check-outline</v-icon
              >
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                completed <br />projects
              </v-card-subtitle>
            </v-col>
          </v-row>
          <v-row class="mb-5 pb-6">
            <v-col cols="12" sm="4" md="2">
              <v-icon x-large dark class="teal">mdi-account-switch</v-icon>
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                communication<br />
                received
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2">
              <v-icon x-large dark class="teal" @click="pendingReview()"
                >mdi-card-account-details-star</v-icon
              >
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                project reviews
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2">
              <router-link to="/profile" class="text-decoration-none">
                <v-icon x-large dark class="teal">mdi-account-cog</v-icon>
              </router-link>
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                company profile
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2">
              <v-icon x-large dark class="teal">mdi-image-move</v-icon>
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                advertise in tik
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2" v-if="role === 'MasterAdmin'">
              <router-link
                :to="{ name: 'CreateEmployee', params: { Id: 'Create' } }"
                tag="button"
                class="text-decoration-none"
              >
                <v-icon x-large dark class="teal">mdi-account-group</v-icon>
              </router-link>
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                create users
              </v-card-subtitle>
            </v-col>
            <v-col cols="12" sm="4" md="2">
              <router-link to="/contactUs" class="text-decoration-none">
                <v-icon x-large dark class="teal">mdi-phone-check</v-icon>
              </router-link>
              <v-card-subtitle class="text-capitalize font-weight-black ml-n6">
                contact tik support
              </v-card-subtitle>
            </v-col>
          </v-row>
        </div>
        <DashboardProjectList
          v-if="dataTable"
          :response="response"
          :search="search"
          :stagesRequest="stagesRequest"
          :stagesMyProject="stagesMyProject"
          :tabValue="tabValue"
        />
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { IDashboardService } from "@/service";
import { ProjectSearchModel, DashboardModel, UserInfomodel } from "@/model";
import DashboardProjectList from "./components/DashboardProjectList.vue";
@Component({
  components: { DashboardProjectList },
})
export default class Dashboard extends Vue {
  @Inject("DashboardService") DashboardService: IDashboardService;

  public search: string = "";
  public stagesRequest: string = "";
  public dataTable: boolean = false;
  public dashboard: boolean = true;
  public searchToggle: boolean = false;
  public searchRequest = new ProjectSearchModel();
  public response: Array<DashboardModel> = [];
  public userResponse = new UserInfomodel();
  public stagesMyProject: string = "";
  public tabValue: boolean;

  created() {
    this.userInfo();
  }

  get category(): string {
    return this.$store.getters.category;
  }

  get role(): string {
    return this.$store.getters.role;
  }

  public searchProject(stages: string) {
    if (this.role === "Merchandiser" || this.role === "Quote InCharge") {
      this.tabValue = true;
    } else {      
      this.tabValue = false;
    }
    this.stagesRequest = stages;
    this.stagesMyProject = stages;
    this.searchRequest.stages = this.stagesRequest;
    this.DashboardService.GetProjectListByFilter(this.searchRequest).then(
      (response) => {
        this.response = response;
        this.dashboard = false;
        this.dataTable = true;
        this.searchToggle = true;
      }
    );
  }

  public pendingReview() {
    this.tabValue = false;
    this.DashboardService.PendingReview().then((response) => {
      this.response = response;
      this.dashboard = false;
      this.dataTable = true;
    });
  }

  public userInfo() {
    this.DashboardService.GetUserFullName().then((response) => {
      this.userResponse = response;
    });
  }
}
</script>
