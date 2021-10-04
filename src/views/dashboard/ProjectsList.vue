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
        <v-col cols="12" md="3" v-if="response.InStages != 'Enquiry Sent'">
          <v-row class="mt-4"> </v-row>
          <v-row> Approve By : {{ response.Approved.ApprovedBy }}</v-row>
          <v-row> Date & Time :{{ response.Approved.ApprovedDateTime }} </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead class="teal lighten-4 text-subtitle-2">
                <tr>
                  <th
                    class="text-left"
                    v-for="(tableHeader, index) in headers"
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
                      @click="toggleView = true"
                      >View
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <ProjectsListView v-if="toggleView" @closeModel="closeModel" />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img src="@/assets/textile3.png" width="50%"></v-img>
        </v-col>

        <v-col>
          <v-row class="mt-4">
            <h4>Apple</h4>
          </v-row>
          <v-row>
            <v-icon>mdi-star</v-icon>
          </v-row>
        </v-col>

        <v-col cols="8">
          <v-data-table :headers="headers1" :items="items1"></v-data-table>
        </v-col>
      </v-row>
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
  toggleView: boolean = false;
  public closeModel() {
    this.toggleView = false;
  }

  headers: any = [
    "Project Name",
    "Category",
    "SubCategory",
    "Requested Price",
    "Requested Credit",
    "Requested Delivery",
    "Action",
  ];
  headers1: any = [
    {
      text: "Auth Approve",
      align: "start",
      sortable: false,
      value: "AuthApprove",
      class: "teal lighten-4 subtitle-2",
    },

    {
      text: "Requested Price",
      value: "RequestedPrice",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Requested Credit",
      value: "RequestedCredit",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Requested Delivery",
      value: "RequestedDelivery",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Action",
      value: "action",
      class: "teal lighten-4 subtitle-2",
    },
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
