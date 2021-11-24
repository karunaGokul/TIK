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
        <v-tabs v-model="tabValue" v-if="tab">
          <v-tab @click="getMyProjectList()"> My Projects </v-tab>
          <v-tab @click="getProjectList()">All Projects</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabValue" v-if="tab">
          <v-tab-item>
            <DashboardProjectList :response="response" :myproject="tab" />
          </v-tab-item>
          <v-tab-item>
            <DashboardProjectList :response="response" :myproject="tab" />
          </v-tab-item>
        </v-tabs-items>
        <DashboardProjectList :response="response" :myproject="tab" v-if="(tab === false)" />
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
import DashboardProjectList from "./components/DashboardProjectList.vue";
// import Category from "@/components/Category.vue";
@Component({
  components: { ProjectsList, DashboardProjectList },
})
export default class Dashboard extends Vue {
  @Inject("DashboardService") DashboardService: IDashboardService;
  public search: string = "";
  public stages: string = "";
  public tabValue: string = "";
  public tab: boolean = false;
  public toggleProjectList: boolean = false;
  public showDialog: boolean = false;
  public request = new DashboardRequestModel();
  public searchRequest = new ProjectSearchModel();
  public response: Array<DashboardModel> = [];
  public snackbarText: string = "";
  public snackbar: boolean = false;
  public SelectedProject: DashboardModel = new DashboardModel();
  public loading: boolean = false;
  public myproject: boolean = false;

  created() {
    if (this.role === "Merchandiser" || this.role === "Quote InCharge") {
      this.tab = true;
      this.getMyProjectList();
    } else {
      this.getProjectList();
    }
  }
  get category(): string {
    return this.$store.getters.category;
  }

  get role(): string {
    return this.$store.getters.role;
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
