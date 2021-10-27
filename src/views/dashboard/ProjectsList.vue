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
        <v-col cols="12" sm="1" md="1">
          <v-row class="mt-4 font-weight-regular">
            {{ response.Merchandiser }}
          </v-row>
          <v-rating
            value="4.5"
            color="warning"
            dense
            half-increments
            size="14"
            class="mt-4 ml-n4"
          ></v-rating>
        </v-col>
        <v-col cols="12" sm="2" md="3">
          <v-row class="mt-4 font-weight-regular">
            {{ response.EnquiryName }}
          </v-row>
          <v-row class="font-weight-regular text-body-2">
            Created By : {{ response.CreatedBy }}
          </v-row>
          <v-row class="font-weight-regular text-body-2">
            Date & Time :{{ response.CreatedDate }}</v-row
          >
        </v-col>
        <v-col cols="12" sm="2" md="3" v-if="response.InStages === 'Confirmed'">
          <div v-for="row in response.bidList" :key="row.status">
            <v-row
              class="mt-4 font-weight-regular"
              v-if="row.status === 'Approved'"
            >
            </v-row>
            <v-row
              v-if="row.status === 'Approved'"
              class="font-weight-regular text-body-2"
            >
              Approve By : {{ row.ApprovedBy }}</v-row
            >
            <v-row
              v-if="row.status === 'Approved'"
              class="font-weight-regular text-body-2"
            >
              Date & Time :{{ row.ApprovedDateTime }}
            </v-row>
          </div>
        </v-col>
        <v-col v-else cols="12" sm="2" md="3"> </v-col>
        <v-col cols="12" sm="2" md="2" v-if="category != 'Company'">
          <v-btn
            class="white--text font-weight-light text-capitalize rounded"
            depressed
            color="primary"
            @click="toggleBid = 'true'"
          >
            Bid This Project
          </v-btn>
        </v-col>
        <v-col cols="12" sm="2" md="2" class="mt-2">
          <v-btn
            class="white--text font-weight-light text-capitalize rounded mt-n2"
            depressed
            color="primary"
            @click="toggleCancel = 'true'"
            v-if="category != 'Company'"
          >
            Cancel
          </v-btn>
          <span
            v-else
            class="primary white--text font-weight-light pa-2 rounded"
          >
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
                      class="
                        white--text
                        font-weight-light
                        text-capitalize
                        rounded
                      "
                      depressed
                      color="primary"
                      @click="toggleSummaryView = true"
                    >
                      View
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-dialog v-model="toggleCancel" width="500">
            <v-card class="px-6" elevation="8">
              <v-card-title>
                Reasons
                <v-spacer></v-spacer>
                <v-btn @click="toggleCancel = false" icon>
                  <v-icon id="close-button">mdi-close</v-icon>
                </v-btn>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text>
                <v-select
                  :items="items"
                  :menu-props="{ offsetY: true }"
                  label="Select Reason"
                  class="shrink py-6"
                  dense
                  hide-details
                  v-on:change="save()"
                ></v-select>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="white--text font-weight-light text-capitalize rounded"
                  depressed
                  color="primary"
                >
                  save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-card v-if="toggleBid" class="my-8 px-6" elevation="8">
            <v-row>
              <v-col cols="12" sm="2" md="3">
                <div class="my-3">Price <span class="red--text">*</span> </div>
                <v-text-field
                  outlined
                  dense
                  label="Enter Price"
                  class="my-2"
                  v-model="bidRequest.price"
                  :rules="Rules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2" md="3">
                <div class="my-3">Credit Period <span class="red--text">*</span> </div>
                <v-text-field
                  outlined
                  dense
                  label="Enter Credit Period"
                  class="my-2"
                  v-model="bidRequest.creditPeriod"
                  :rules="Rules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2" md="3">
                <div class="my-3">Delivery Period <span class="red--text">*</span> </div>
                <v-text-field
                  outlined
                  dense
                  label="Enter Delivery Period"
                  class="my-2"
                  v-model="bidRequest.deliveryPeriod"
                  :rules="Rules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2" md="3" align="center" class="mt-10">
                <v-btn
                  class="white--text font-weight-light text-capitalize rounded"
                  depressed
                  color="primary"
                  @click="BidProject()"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
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

                <v-col class="mx-1" cols="12" sm="2" md="3">
                  <v-row class="ma-1">
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

                <v-col cols="12" md="7">
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
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="deep-orange lighten-5 pink--text"
      right
      top
    >
      <v-icon color="pink">mdi-exclamation-thick </v-icon>
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          <v-icon> mdi-close-box</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import {
  BidRequestModel,
  DashboardModel,
  DashboardRequestModel,
} from "@/model";
import { IDashboardService } from "@/service";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import ProjectSummary from "./ProjectSummary.vue";
@Component({
  mixins: [validationMixin],
  components: { ProjectSummary },
})
export default class ProjectsList extends Vue {
  @Prop() SelectedProject: DashboardModel;
  @Inject("DashboardService") DashboardService: IDashboardService;
  public Rules: any = [
    (v: any) => !!v || "Enter the Value",    
  ];
  public request = new DashboardRequestModel();
  public bidRequest = new BidRequestModel();
  public response = new DashboardModel();
  public toggleBid: boolean = false;
  public toggleCancel: boolean = false;
  public toggleSummaryView: boolean = false;
  public snackbarText: string = "";
  public snackbar: boolean = false;
  created() {
    this.GetProjectEnquiry();
  }
  public GetProjectEnquiry() {
    this.request.id = this.SelectedProject.Id;
    this.DashboardService.GetProjectEnquiry(this.request).then((response) => {
      this.response = response;
    });
  }
  public BidProject() {
    this.bidRequest.projectId = this.SelectedProject.Id;
    this.bidRequest.id = "";
    this.DashboardService.BidProject(this.bidRequest).then((response) => {
      this.snackbarText = response;
      this.snackbar = true;
      this.toggleBid = false;
      this.GetProjectEnquiry();
    });
  }
  public closeModel() {
    this.toggleSummaryView = false;
  }
  get category(): string {
    return this.$store.getters.category;
  }
  items: any = [
    "Cannot supply",
    "Pricing not Workable",
    "No Spare Capacity Available",
    "Audi",
  ];
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
