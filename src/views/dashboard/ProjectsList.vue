<template>
  <div>
    <v-container fluid class="pa-4">
      <div class="ma-2">
        <router-link to="/" class="text-decoration-none">
          <v-icon large> mdi-home</v-icon>
        </router-link>
        <v-icon large> mdi-chevron-right</v-icon>
        <router-link to="/dashboard" class="text-decoration-none black--text">
          Dashboard
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
            :src="`data:image/png;base64,${companyresponse.logo}`"
            width="80%"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="1" md="1">
          <v-row class="mt-4 font-weight-regular">
            {{ companyresponse.companyName }}
          </v-row>
          <v-rating
            v-model="companyresponse.review"
            color="warning"
            dense
            half-increments
            size="14"
            class="mt-4 ml-n4"
            readonly
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
              class="my-5 font-weight-regular"
              v-if="row.status === 'Confirmed'"
            >
            </v-row>
            <v-row
              v-if="row.status === 'Confirmed'"
              class="font-weight-regular text-body-2"
            >
              Approve By : {{ row.approvedBy }}</v-row
            >
            <v-row
              v-if="row.status === 'Confirmed'"
              class="font-weight-regular text-body-2"
            >
              Date & Time :{{ row.approvedDate }}
            </v-row>
          </div>
        </v-col>
        <v-col v-else cols="12" sm="2" md="3"> </v-col>
        <v-col
          cols="12"
          sm="2"
          md="2"
          v-if="
            category != 'Company' && response.bidList[0].status === 'Initiated'
          "
        >
          <v-btn
            class="white--text font-weight-light text-capitalize rounded"
            depressed
            color="primary"
            @click="toggleBid = 'true'"
          >
            Bid This Project
          </v-btn>
        </v-col>
        <v-col v-else cols="12" sm="2" md="2"> </v-col>
        <v-col cols="12" sm="2" md="2" class="mt-2">
          <v-btn
            class="white--text font-weight-light text-capitalize rounded mt-n2"
            depressed
            color="primary"
            @click="toggleCancel = 'true'"
            v-if="
              category != 'Company' &&
              response.bidList[0].status === 'Initiated'
            "
          >
            Cancel
          </v-btn>
          <span
            v-else-if="category === 'Company'"
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
                  v-model="approvelRequest.message"
                ></v-select>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="white--text font-weight-light text-capitalize rounded"
                  depressed
                  color="primary"
                  @click="ApproveBid('Rejected')"
                >
                  save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="toggleBid" width="500">
            <v-card class="px-6" elevation="8">
              <v-card-title>
                Bid Project
                <v-spacer></v-spacer>
                <v-btn @click="toggleBid = false" icon>
                  <v-icon id="close-button">mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="mt-4">
                <v-row>
                  <v-col>
                    <div class="mb-2">
                      Price <span class="red--text">*</span>
                    </div>
                    <v-text-field
                      outlined
                      dense
                      label="Enter Price"
                      v-model="bidRequest.price"
                      :rules="Rules"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mt-n5">
                  <v-col>
                    <div class="mb-2">
                      Credit Period <span class="red--text">*</span>
                    </div>
                    <v-text-field
                      outlined
                      dense
                      label="Enter Credit Period"
                      v-model="bidRequest.creditPeriod"
                      :rules="Rules"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mt-n5">
                  <v-col>
                    <div class="mb-2">
                      Delivery Period <span class="red--text">*</span>
                    </div>
                    <v-text-field
                      outlined
                      dense
                      label="Enter Delivery Period"
                      v-model="bidRequest.deliveryPeriod"
                      :rules="Rules"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions class="mt-n5">
                <v-spacer></v-spacer>
                <v-btn
                  class="white--text font-weight-light text-capitalize rounded"
                  depressed
                  color="primary mb-4"
                  @click="BidProject()"
                >
                  Submit
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
            :class="
              row.status === 'Confirmed' && category === 'Company'
                ? 'deep-orange'
                : ''
            "
            v-if="row.requestPrice != null"
          >
            <v-row
              :class="
                row.status === 'Confirmed' && category === 'Company'
                  ? 'deep-orange lighten-3 black--text'
                  : ''
              "
            >
              <v-row
                class="ma-1"
                v-if="row.status === 'Confirmed' && category === 'Company'"
              >
                <v-col>
                  <h4>Confirmed Project</h4>
                </v-col>
              </v-row>

              <v-row class="ma-1">
                <v-col cols="12" sm="1" md="1" v-if="category === 'Company'">
                  <v-img
                    :src="`data:image/png;base64,${row.companyLogo}`"
                    width="70%"
                  ></v-img>
                </v-col>
                <v-col v-else cols="12" sm="1" md="1"> </v-col>

                <v-col
                  class="mx-1"
                  cols="12"
                  sm="2"
                  md="3"
                  v-if="category === 'Company'"
                >
                  <v-row class="ma-1">
                    <h4>{{ row.companyName }}</h4>
                  </v-row>
                  <v-row>
                    <v-rating
                      v-model="row.review"
                      color="warning"
                      dense
                      half-increments
                      readonly
                    ></v-rating>
                  </v-row>
                </v-col>
                <v-col v-else class="mx-1" cols="12" sm="2" md="3"> </v-col>
                <v-col cols="12" md="7">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead
                        :class="
                          row.status === 'Confirmed' && category === 'Company'
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
                          <th v-if="category === 'Company'">Action</th>
                        </tr>
                      </thead>
                      <tbody
                        :class="
                          row.status === 'Confirmed' && category === 'Company'
                            ? 'deep-orange lighten-3 black--text'
                            : ''
                        "
                      >
                        <tr>
                          <td>
                            {{ row.submittedBy }} <br />{{ row.submittedDate }}
                          </td>
                          <td
                            v-if="
                              row.status === 'PendingApproval' &&
                              category != 'Company'
                            "
                          >
                            <v-text-field
                              outlined
                              dense
                              class="mt-4"
                              v-model="row.requestPrice"
                            ></v-text-field>
                          </td>

                          <td class="blue--text" v-else>
                            Rs.{{ row.requestPrice }}
                          </td>
                          <td
                            v-if="
                              row.status === 'PendingApproval' &&
                              category != 'Company'
                            "
                          >
                            <v-text-field
                              outlined
                              dense
                              class="mt-4"
                              v-model="row.creditPeriod"
                            ></v-text-field>
                          </td>
                          <td class="red--text" v-else>
                            {{ row.creditPeriod }}
                            days
                          </td>
                          <td
                            v-if="
                              row.status === 'PendingApproval' &&
                              category != 'Company'
                            "
                          >
                            <v-text-field
                              outlined
                              dense
                              class="mt-4"
                              v-model="row.deliveryDate"
                            ></v-text-field>
                          </td>
                          <td class="green--text" v-else>
                            {{ row.deliveryDate }}
                            days
                          </td>
                          <td v-if="category === 'Company'">
                            <v-btn
                              class="
                                white--text
                                font-weight-light
                                text-capitalize
                                rounded
                                ml-2
                              "
                              depressed
                              color="primary"
                              v-if="row.status === 'Approved'"
                              @click="ApproveBid('Confirmed')"
                            >
                              Approve
                            </v-btn>
                            <span v-else-if="row.status === 'Completed'">
                              <v-btn
                                class="
                                  white--text
                                  font-weight-light
                                  text-capitalize
                                  rounded
                                  mt-2
                                "
                                depressed
                                color="primary"
                                @click="toggleReview = true"
                              >
                                review
                              </v-btn>
                            </span>
                            <span
                              v-else-if="
                                row.status === 'Confirmed' ||
                                row.status === 'Rejected'
                              "
                            >
                              {{ row.status }}
                            </span>
                            <span v-else>Auth for Approval</span>
                          </td>
                          <td v-else-if="category != 'Company'">
                            <v-btn
                              class="
                                white--text
                                font-weight-light
                                text-capitalize
                                rounded
                                mt-2
                                mr-2
                              "
                              depressed
                              color="primary"
                              v-if="row.status === 'PendingApproval'"
                            >
                              Save
                            </v-btn>
                            <v-btn
                              class="
                                white--text
                                font-weight-light
                                text-capitalize
                                rounded
                                mt-2
                              "
                              depressed
                              color="primary"
                              v-if="row.status === 'PendingApproval'"
                              @click="ApproveBid('Approved')"
                            >
                              Approve
                            </v-btn>
                            <span
                              v-else-if="
                                row.status === 'Approved' ||
                                row.status === 'Rejected'
                              "
                            >
                              {{ row.status }}</span
                            >
                            <div v-else-if="row.status === 'Confirmed'">
                              <v-btn
                                class="
                                  white--text
                                  font-weight-light
                                  text-capitalize
                                  rounded
                                  mt-2
                                  mr-2
                                "
                                depressed
                                color="red lighten-1"
                                @click="toggleNoShow = true"
                              >
                                No Show
                              </v-btn>
                              <v-btn
                                class="
                                  white--text
                                  font-weight-light
                                  text-capitalize
                                  rounded
                                  mt-2
                                "
                                depressed
                                color="primary"
                                @click="toggleReview = true"
                              >
                                review
                              </v-btn>
                            </div>
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
      <v-dialog v-model="toggleNoShow" width="500">
        <v-card class="px-6" elevation="8">
          <v-card-title>
            NoShow
            <v-spacer></v-spacer>
            <v-btn @click="toggleNoShow = false" icon>
              <v-icon id="close-button">mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-select
              :items="noResponseItems"
              :menu-props="{ offsetY: true }"
              label="No Response"
              class="shrink py-6"
              dense
              hide-details
              v-model="approvelRequest.message"
            ></v-select>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="white--text font-weight-light text-capitalize rounded mb-3"
              depressed
              color="primary"
              @click="ApproveBid('Rejected')"
            >
              save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="toggleReview" width="500">
        <v-card class="px-6" elevation="8">
          <v-card-title>
            ReView
            <v-spacer></v-spacer>
            <v-btn @click="toggleReview = false" icon>
              <v-icon id="close-button">mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <div class="my-4">Review Here</div>
            <v-rating
              v-model="reviewRequest.ReviewRating"
              color="warning"
              dense
              half-increments
              size="30"
              class="ml-n4"
            ></v-rating>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="white--text font-weight-light text-capitalize rounded mb-3"
              depressed
              color="primary"
              @click="Review()"
            >
              Review Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
  ApproveRequestModel,
  BidRequestModel,
  BitReceivedModel,
  DashboardModel,
  DashboardRequestModel,
  GetCompanyModel,
  ReviewRequestModel,
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
  public Rules: any = [(v: any) => !!v || "Enter the Value"];
  public request = new DashboardRequestModel();

  public companyresponse = new GetCompanyModel();
  public bidRequest = new BidRequestModel();
  public approvelRequest = new ApproveRequestModel();
  public reviewRequest = new ReviewRequestModel();
  public response = new DashboardModel();
  public toggleBid: boolean = false;
  public toggleCancel: boolean = false;
  public toggleReview: boolean = false;
  public toggleNoShow: boolean = false;
  public toggleSummaryView: boolean = false;
  public snackbarText: string = "";
  public snackbar: boolean = false;

  created() {
    this.GetProjectEnquiry();
    if (this.category != "Company") {
      this.BitReceivedheaders.splice(0, 4);
      this.BitReceivedheaders.push(
        "Bit Submit & Approve",
        "Price",
        "Your Credit Period",
        "Your Delivery Period",
        "Status"
      );
    } else {
      this.GetCompany(this.SelectedProject.CompanyId);
    }
  }
  public GetCompany(CompanyId: string) {
    this.DashboardService.GetCompany(CompanyId).then((response) => {
      this.companyresponse = response;
    });
  }

  public GetProjectEnquiry() {
    this.request.id = this.SelectedProject.Id;
    this.DashboardService.GetProjectEnquiry(this.request).then((response) => {
      this.response = response;
      if (this.category != "Company") {
        this.GetCompany(this.response.bidList[0].companyId);
      }
      this.response.bidList.forEach((b) => {
        this.DashboardService.GetCompany(b.companyId).then((c) => {
          b.companyName = c.companyName;
          b.companyLogo = c.logo;
          b.review = c.review;
        });
      });
    });
  }
  public BidProject() {
    this.bidRequest.projectId = this.response.Id;
    this.bidRequest.id = this.response.bidList[0].id;
    this.DashboardService.BidProject(this.bidRequest).then((response) => {
      this.snackbarText = response;
      this.snackbar = true;
      this.toggleBid = false;
      this.GetProjectEnquiry();
    });
  }
  public ApproveBid(status: string) {
    this.approvelRequest.bidId = this.response.bidList[0].id;
    this.approvelRequest.status = status;
    this.approvelRequest.projectId = this.response.Id;
    this.DashboardService.ApproveBid(this.approvelRequest).then((response) => {
      this.snackbarText = response;
      this.snackbar = true;
      this.toggleCancel = false;
      this.toggleNoShow = false;
      this.GetProjectEnquiry();
    });
  }

  public Review() {
    this.DashboardService.Review(this.reviewRequest).then((response) => {
      this.snackbarText = response;
      this.snackbar = true;
      this.toggleReview = false;
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
  noResponseItems: any = ["No Response", "Not Initiated"];
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
