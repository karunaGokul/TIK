<template>
  <div>
    <div v-if="!toggleProjectList">
      <v-container fluid class="pa-4">
        <div class="ma-2">
          <router-link to="/" class="text-decoration-none">
            <v-icon large> mdi-home</v-icon>
          </router-link>
          <v-icon large> mdi-chevron-right</v-icon>
          Dashboard
        </div>
      </v-container>
      <v-card class="ma-3 px-6" elevation="8">
        <v-tabs v-model="tab">
          <v-tab
            v-if="
              category === 'Company' &&
              (role === 'Merchandiser' || role === 'Quote InCharge')
            "
            @click="getMyProjectList()"
          >
            My Projects
          </v-tab>
          <v-tab @click="getProjectList()">All Projects</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card-title>
              <v-select
                :items="items"
                v-model="stages"
                :menu-props="{ offsetY: true }"
                label="Select"
                class="shrink ma-1"
                dense
                hide-details
                @change="searchProject"
              ></v-select>

              <v-spacer></v-spacer>

              <v-text-field
                v-model="search"
                label="Search"
                append-icon="mdi-magnify"
                class="shrink ma-1 pl-2"
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="response"
              :search="search"
              item-key="EnquiryName"
              class="elevation-1"
              :loading="loading"
            >
              <template v-slot:[`item.Status`]="{ item }">
                <v-badge
                  dot
                  v-if="
                    item.InStages === 'Confirmed' ||
                    item.InStages === 'Completed'
                  "
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

              <template v-slot:[`item.Action`]="{ item }">
                <router-link
                  :to="{
                    name: 'ProjectDetail',
                    params: { Id: item.Id },
                  }"
                  tag="button"
                >
                  <v-btn
                    class="
                      white--text
                      font-weight-light
                      text-capitalize
                      rounded
                    "
                    depressed
                    color="primary"
                    >View
                  </v-btn>
                </router-link>
              </template>
            </v-data-table>
          </v-tab-item>
          <v-tab-item
            ><v-card-title>
              <v-select
                :items="items"
                v-model="stages"
                :menu-props="{ offsetY: true }"
                label="Select"
                class="shrink ma-1"
                dense
                hide-details
                @change="searchProject"
              ></v-select>

              <v-spacer></v-spacer>

              <v-text-field
                v-model="search"
                label="Search"
                append-icon="mdi-magnify"
                class="shrink ma-1 pl-2"
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="response"
              :search="search"
              item-key="EnquiryName"
              class="elevation-1"
              :loading="loading"
            >
              <template v-slot:[`item.Status`]="{ item }">
                <v-badge
                  dot
                  v-if="
                    item.InStages === 'Confirmed' ||
                    item.InStages === 'Completed'
                  "
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

              <template v-slot:[`item.Action`]="{ item }">
                <router-link
                  :to="{
                    name: 'ProjectDetail',
                    params: { Id: item.Id },
                  }"
                  tag="button"
                >
                  <v-btn
                    class="
                      white--text
                      font-weight-light
                      text-capitalize
                      rounded
                    "
                    depressed
                    color="primary"
                    >View
                  </v-btn>
                </router-link>
              </template>
            </v-data-table>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="green lighten-5 green--text"
      right
      top
    >
      <v-icon color="green">mdi-exclamation-thick </v-icon>
      {{ snackbarText }}
      <template v-slot:Action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          <v-icon> mdi-close-box</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
 
<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import {
  DashboardModel,
  DashboardRequestModel,
  ProjectSearchModel,
} from "@/model";
import { IDashboardService } from "@/service";

import ProjectsList from "./ProjectsList.vue";
// import Category from "@/components/Category.vue";
@Component({
  components: { ProjectsList },
})
export default class Dashboard extends Vue {
  @Inject("DashboardService") DashboardService: IDashboardService;
  public search: string = "";
  public stages: string = "";
  public tab: string = "";
  public toggleProjectList: boolean = false;
  public showDialog: boolean = false;
  public request = new DashboardRequestModel();
  public searchRequest = new ProjectSearchModel();
  public response: Array<DashboardModel> = [];
  public myProjectResponse: Array<DashboardModel> = [];
  public snackbarText: string = "";
  public snackbar: boolean = false;
  public SelectedProject: DashboardModel = new DashboardModel();
  public loading: boolean = false;

  created() {
    this.getMyProjectList();
    if (this.category != "Company") {
      this.headers.find((o: any) => {
        if (o.text === "Merchandiser") {
          o.text = "Approval Admin";
          o.value = "ApprovalAdmin";
        }
      });
      this.items.push("Submitted Enquirys", "Cancelled Projects");
    }
  }
  get category(): string {
    return this.$store.getters.category;
  }
  public getProjectList() {
    this.request.id = this.$store.getters.id;
    this.loading = true;
    this.DashboardService.GetProjectList(this.request).then((response) => {
      this.loading = false;
      this.response = response;
    });
  }
  public getMyProjectList() {
    this.request.id = this.$store.getters.id;
    this.loading = true;
    this.DashboardService.GetMyProjectList(this.request).then((response) => {
      this.loading = false;
      this.response = response;
    });
  }

  public searchProject() {
    this.searchRequest.stages = this.stages;
    this.DashboardService.GetProjectListByFilter(this.searchRequest).then(
      (response) => {
        this.response = response;
      }
    );
  }
  items: any = [
    "All",
    "New Enquiry",
    "Confirmed Projects",
    "Completed Projects",
  ];
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
      value: "Action",
      sortable: false,
      align: "center",
      class: "teal lighten-3 subtitle-2",
    },
  ];
}
</script>
<style >
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
