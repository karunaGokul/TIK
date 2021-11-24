<template>
  <div class="ml-4 mt-6">
    <v-row>
      <v-select
        :items="items"
        v-model="stages"
        :menu-props="{ offsetY: true }"
        label="Select"
        class="shrink my-4"
        dense
        hide-details
        @change="searchProject()"
      ></v-select>

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        label="Search"
        append-icon="mdi-magnify"
        class="shrink ma-4 pl-2"
        outlined
        dense
        hide-details
      ></v-text-field>
    </v-row>
    <v-row>
      <v-col col="12" md="12">
        <v-data-table
          :headers="headers"
          :items="response"
          :search="search"
          item-key="EnquiryName"
          class="elevation-1 mb-5"
          :loading="loading"
        >
          <template v-slot:[`header.Merchandiser`]="{ header }">
            {{ header.text }}
            <v-icon small @click="autocomplete = true"> mdi-filter </v-icon>
          </template>

          <template v-slot:[`item.Status`]="{ item }">
            <v-badge
              dot
              v-if="
                item.InStages === 'Confirmed' || item.InStages === 'Completed'
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
                class="white--text font-weight-light text-capitalize rounded"
                depressed
                color="primary"
                >View
              </v-btn>
            </router-link>
          </template>
        </v-data-table>
        <!-- <v-card>
          <v-autocomplete
            v-if="autocomplete"
            v-model="values"
            :items="items"
            outlined
            dense
            chips
            small-chips
            label="Outlined"
            multiple
          ></v-autocomplete>
        </v-card> -->
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { IDashboardService } from "@/service";
import ProjectsList from "../ProjectsList.vue";
import { DashboardModel, ProjectSearchModel } from "@/model";
@Component({
  components: { ProjectsList },
})
export default class DashboardProjectList extends Vue {
  @Inject("DashboardService") DashboardService: IDashboardService;
  @Prop() response: Array<DashboardModel> = [];
  @Prop() myproject: boolean;
  public searchRequest = new ProjectSearchModel();
  public search: string = "";
  public stages: string = "";
  public values: string = "";
  public loading: boolean = false;
  public autocomplete: boolean = false;

  created() {
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

  get role(): string {
    return this.$store.getters.role;
  }
  public searchProject() {
    this.searchRequest.myproject = this.myproject;
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
