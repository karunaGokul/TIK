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
          <v-img src="@/assets/textile3.png" width="80%"></v-img>
        </v-col>

        <v-col cols="12" md="3">
          <v-row class="mt-4">
            <h4>{{ response.EnquiryName }}</h4>
          </v-row>
          <v-row> Created By : {{ response.CreatedBy }}</v-row>
          <v-row> Date & Time :{{ response.CreatedDateTime }} </v-row>
        </v-col>
        <v-col cols="12" md="5" v-if="response.InStages === 'Confirmed'">
          <div v-for="row in response.BitReceived" :key="row.Approved">
            <v-row class="mt-4" v-if="row.Approved"> </v-row>
            <v-row v-if="row.Approved">
              Approve By : {{ row.ApprovedBy }}</v-row
            >
            <v-row v-if="row.Approved">
              Date & Time :{{ row.ApprovedDateTime }}
            </v-row>
          </div>
        </v-col>
        <v-col v-else cols="12" md="5"> </v-col>
        <v-col cols="12" md="3">
          <v-icon large color="green darken-4" class="ml-3 pt-3">
            mdi-filter
          </v-icon>
          <v-icon large color="green darken-4" class="ml-2 pt-3">
            mdi-sort-ascending
          </v-icon>
          <span
            class="
              orange
              darken-1
              white--text
              font-weight-light
              pa-3
              ml-4
              mt-4
              rounded
            "
          >
            Bids Received :{{ response.No_Of_Bits }}
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
                  <td class="blue--text">Rs.{{ response.RequestedPrice }}</td>
                  <td class="red--text">{{ response.RequestedCredit }} days</td>
                  <td class="green--text">
                    {{ response.RequestedDelivery }} days
                  </td>
                  <td>
                    <v-btn
                      class="white--text font-weight-light text-capitalize"
                      depressed
                      color="orange darken-1"
                      @click="toggleSummaryView = true"
                      >View
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
      <div v-if="response.InStages != 'Enquiry Sent'">
        <v-row v-for="row in response.BitReceived" :key="row.Approved">
          <div class="pa-4 my-5" :class="row.Approved ? 'deep-orange' : ''">
            <v-row
              :class="row.Approved ? 'deep-orange lighten-3 black--text' : ''"
            >
              <v-row class="mx-4 mt-4" v-if="row.Approved">
                <v-col>
                  <h4>Confirmed Project</h4>
                </v-col>
              </v-row>

              <v-row class="mx-4 mb-4">
                <v-col cols="12" md="1">
                  <v-img src="@/assets/textile3.png" width="70%"></v-img>
                </v-col>

                <v-col class="mx-4" cols="12" md="2">
                  <v-row class="mt-4">
                    <h4>{{ row.BitReceivedCompanyName }}</h4>
                  </v-row>
                  <v-row>
                    <v-rating
                      v-model="row.Rating"
                      color="warning"
                      dense
                      half-increments
                    ></v-rating>
                  </v-row>
                </v-col>

                <v-col cols="8">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead
                        :class="
                          row.Approved
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
                          <th v-if="!row.Approved">Action</th>
                        </tr>
                      </thead>
                      <tbody
                        :class="
                          row.Approved
                            ? 'deep-orange lighten-3 black--text'
                            : ''
                        "
                      >
                        <tr>
                          <td>{{ row.AuthApprove }}</td>
                          <td class="blue--text">
                            Rs.{{ row.BitReceivedRequestedPrice }}
                          </td>
                          <td class="red--text">
                            {{ row.BitReceivedRequestedCredit }}
                            days
                          </td>
                          <td class="green--text">
                            {{ row.BitReceivedRequestedDelivery }}
                            days
                          </td>
                          <td v-if="!row.Approved">Auth for Approval</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </v-row>
          </div>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { DashboardModel } from "@/model";
import { Component, Prop, Vue } from "vue-property-decorator";

import ProjectSummary from "./ProjectSummary.vue";
@Component({
  components: { ProjectSummary },
})
export default class ProjectsList extends Vue {
  @Prop() response: DashboardModel;
  toggleSummaryView: boolean = false;

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

  items1: any = [
    {
      AuthApprove: "Apple1A1(Sadmin) ",
      RequestedPrice: "120",
      RequestedCredit: "5 Days",
      RequestedDelivery: "22 Days",
      action: "Auth for Approval",
    },
  ];
}
</script>
