<template>
  <div>
    <v-container fluid class="pa-4">
      <div class="ma-2">
        <router-link link to="/" class="text-decoration-none">
          <v-icon large> mdi-home</v-icon>
        </router-link>
        <v-icon large> mdi-chevron-right</v-icon>
        <span v-if="response.InStages == 'Confirmed'"> Confirmed Project</span>
        <span v-else> New Project</span>
      </div>
    </v-container>

    <div class="mx-5">
      <v-row>
        <v-col cols="12" sm="2" md="1" class="pt-6">
          <v-img
            :src="`data:image/png;base64,${response.logo}`"
            width="80%"
          ></v-img>
        </v-col>

        <v-col cols="12" md="4">
          <v-row class="mt-4">
            <h4>{{ response.EnquiryName }}</h4>
          </v-row>
          <v-row> Created By : {{ response.CreatedBy }}</v-row>
          <v-row> Date & Time :{{ response.CreatedDate }} </v-row>
        </v-col>
        <v-col cols="12" md="5" v-if="response.InStages === 'Confirmed'">
          <div v-for="row in response.bidList" :key="row.status">
            <v-row class="mt-4" v-if="row.status === 'Approved'"> </v-row>
            <v-row v-if="row.status === 'Approved'">
              Approve By : {{ row.ApprovedBy }}</v-row
            >
            <v-row v-if="row.status === 'Approved'">
              Date & Time :{{ row.ApprovedDateTime }}
            </v-row>
          </div>
        </v-col>
        <v-col v-else cols="12" md="5"> </v-col>
        <v-col cols="12" md="2">
          <!-- <v-icon large color="green darken-4" class="ml-3 pt-3">
            mdi-filter
          </v-icon>
          <v-icon large color="green darken-4" class="ml-2 pt-3">
            mdi-sort-ascending
          </v-icon> -->
          <span class="orange darken-1 white--text font-weight-light pa-3 ml-4 mt-4 rounded">
            Bids Received :{{ response.bidsReceived }}
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="my-5">
          <v-simple-table>
            <template v-slot:default>
              <thead class="teal lighten-4 text-subtitle-2">
                <tr>
                  <th
                    class="text-left"
                    v-for="(tableHeader, index) in ProjectRequestheaders"
                    :key="index"
                  >
                    {{ tableHeader }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ response.EnquiryName }}</td>
                  <td>{{ response.Category }}</td>
                  <td>{{ response.Subcategory }}</td>
                  <td class="blue--text">Rs.{{ response.requestPrice }}</td>
                  <td class="red--text">{{ response.creditPeriod }} days</td>
                  <td class="green--text">{{ response.deliveryDate }} days</td>
                  <td>
                    <v-btn
                      class="white--text font-weight-light text-capitalize"
                      depressed
                      color="orange darken-1"
                      @click="toggleSummaryView == true"
                    >
                      View
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <ProjectSummary
            :response="response"
            v-if="toggleSummaryView"
            @closeModel="closeModel"
          />
        </v-col>
      </v-row>
      <div v-if="response.bidList">
        <v-row v-for="row in response.bidList" :key="row.status">
          <v-row
            class="pa-4 ma-2"
            :class="row.status === 'Approved' ? 'deep-orange' : ''"
          >
            <v-row
              :class="
                row.status === 'Approved'
                  ? 'deep-orange lighten-3 black--text'
                  : ''
              "
            >
              <v-row class="ma-1" v-if="row.status === 'Approved'">
                <v-col>
                  <h4>Confirmed Project</h4>
                </v-col>
              </v-row>

              <v-row class="ma-1">
                <v-col cols="12" sm="1" md="1">
                  <v-img
                    :src="`data:image/png;base64,${row.logo}`"
                    width="70%"
                  ></v-img>
                </v-col>

                <v-col class="mx-1" cols="12" sm="2" md="2">
                  <v-row class="ma-1 ">
                    <h4>{{ row.companyName }}</h4>
                  </v-row>
                  <v-row>
                    <v-rating
                      v-model="row.review"
                      color="warning"
                      dense
                      half-increments
                    ></v-rating>
                  </v-row>
                </v-col>

                <v-col cols="12" sm="8" md="8">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead
                        :class="
                          row.status === 'Approved'
                            ? 'deep-orange lighten-2 black--text'
                            : 'teal lighten-4 text-subtitle-2'
                        "
                      >
                        <tr>
                          <th
                            class="text-left"
                            v-for="(tableHeader, index) in BitReceivedheaders"
                            :key="index"
                          >
                            {{ tableHeader }}
                          </th>
                          <th v-if="row.status != 'Approved'">Action</th>
                        </tr>
                      </thead>
                      <tbody
                        :class="
                          row.status === 'Approved'
                            ? 'deep-orange lighten-3 black--text'
                            : ''
                        "
                      >
                        <tr>
                          <td>
                            {{ row.approvedBy }} <br />{{ row.approvedDate }}
                          </td>
                          <td class="blue--text">Rs.{{ row.requestPrice }}</td>
                          <td class="red--text">
                            {{ row.creditPeriod }}
                            days
                          </td>
                          <td class="green--text">
                            {{ row.deliveryDate }}
                            days
                          </td>
                          <td v-if="row.status != 'Approved'">
                            Auth for Approval
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </v-row>
          </v-row>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { DashboardModel, DashboardRequestModel } from "@/model";
import { IDashboardService } from "@/service";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";

import ProjectSummary from "./ProjectSummary.vue";
@Component({
  components: { ProjectSummary },
})
export default class ProjectsList extends Vue {
  @Prop() SelectedProject: DashboardModel;
  @Inject("DashboardService") DashboardService: IDashboardService;
  public request = new DashboardRequestModel();
  public response = new DashboardModel();
  toggleSummaryView: boolean = false;
  created() {
    this.GetProjectEnquiry();
  }
  public GetProjectEnquiry() {
    this.request.id = this.SelectedProject.Id;
    this.DashboardService.GetProjectEnquiry(this.request).then((response) => {
      this.response = response;
    });
  }
  public closeModel() {
    this.toggleSummaryView = false;
  }

  ProjectRequestheaders: any = [
    "Project Name",
    "Category",
    "SubCategory",
    "Requested Price",
    "Requested Credit",
    "Requested Delivery",
    "Action",
  ];
  BitReceivedheaders: any = [
    "Auth Approve",
    "Requested Price",
    "Requested Credit",
    "Requested Delivery",
  ];
}
</script>
