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
        <v-col cols="12" md="1">
          <v-img src="@/assets/textile3.png"></v-img>
        </v-col>

        <v-col cols="12" md="3">
          <v-row class="mt-4">
            <h4>{{ response.EnquiryName }}</h4>
          </v-row>
          <v-row> Created By : {{ response.CreatedBy }}</v-row>
          <v-row> Date & Time :{{ response.CreatedDateTime }} </v-row>
        </v-col>
        <v-col cols="12" md="3" v-if="response.InStages === 'Confirmed'">
          <v-row class="mt-4"> </v-row>
          <v-row> Approve By : {{ response.BitReceived.ApprovedBy }}</v-row>
          <v-row>
            Date & Time :{{ response.BitReceived.ApprovedDateTime }}
          </v-row>
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
                      class="
                        white--text
                        font-weight-light
                        text-capitalize
                        rounded-0
                      "
                      depressed
                      color="#ff6500"
                      @click="toggleSummaryView = true"
                      >View
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <ProjectsListView :response="response" v-if="toggleSummaryView" @closeModel="closeModel" />
        </v-col>
      </v-row>
      <div v-if="response.InStages != 'Enquiry Sent'">
        <v-row
          class="py-5 mb-10"
          :class="response.BitReceived.Approved ? 'deep-orange lighten-3 black--text' : ''"
        >
       <v-row><v-col class="mx-4" cols="12" md="4"><h4>Confirmed Project</h4></v-col></v-row>
       <v-row>
          <v-col  class="mx-4" cols="12" md="1">
            <v-img src="@/assets/textile3.png" width="50%"></v-img>
          </v-col>

          <v-col  class="mx-4" cols="12" md="2">
            <v-row class="mt-4">
              <h4>{{ response.BitReceived.BitReceivedCompanyName }}</h4>
            </v-row>
            <v-row>
              <v-rating
                v-model="response.BitReceived.Rating"
                color="warning"
                dense
              ></v-rating>
            </v-row>
          </v-col>

          <v-col cols="8">
            <v-simple-table>
              <template v-slot:default>
                <thead 
                :class="response.BitReceived.Approved ? 'deep-orange lighten-2 black--text' : 'teal lighten-4 text-subtitle-2'">
                  <tr>
                    <th
                      class="text-left"
                      v-for="(tableHeader, index) in BitReceivedheaders"
                      :key="index"
                    >
                      {{ tableHeader }}
                    </th>
                    <th v-if="response.InStages === 'Bid Received'">Action</th>
                  </tr>
                </thead>
                <tbody :class="response.BitReceived.Approved ? 'deep-orange lighten-3 black--text' : ''">
                  <tr>
                    <td >{{ response.BitReceived.AuthApprove }}</td>
                    <td class="blue--text">
                      Rs.{{ response.BitReceived.BitReceivedRequestedPrice }}
                    </td>
                    <td class="red--text">
                      {{ response.BitReceived.BitReceivedRequestedCredit }} days
                    </td>
                    <td class="green--text">
                      {{ response.BitReceived.BitReceivedRequestedDelivery }}
                      days
                    </td>
                    <td v-if="response.InStages === 'Bid Received'">
                      Auth for Approval
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          </v-row>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { DashboardModel } from "@/model";
import { Component, Prop, Vue } from "vue-property-decorator";

import ProjectsListView from "./ProjectsListView.vue";
@Component({
  components: { ProjectsListView },
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
