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
            :src="`data:image/png;base64,${companyResponse.logo}`"
            width="80%"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="1" md="1">
          <v-row class="mt-4 font-weight-regular">
            {{ companyResponse.companyName }}
          </v-row>
          <v-rating
            v-model="companyResponse.review"
            color="warning"
            dense
            half-increments
            size="14"
            class="mt-4 ml-n4"
            readonly
          ></v-rating>
        </v-col>
        <v-col cols="12" sm="2" md="2">
          <p class="font-weight-regular mt-4 text-caption">
            Created By : {{ response.CreatedBy }} <br />
            Date & Time :{{ response.CreatedDate }}
          </p>
        </v-col>

        <v-col
          cols="12"
          md="2"
          v-if="bitAuditResponse.selectedBy && category === 'Company'"
          class="ml-n7 mr-n16"
        >
          <p class="font-weight-regular mt-4 text-caption text-wrap">
            Selected By : {{ bitAuditResponse.selectedBy }} <br />
            Date & Time :{{ bitAuditResponse.selectedDate }}
          </p>
        </v-col>
        <v-col cols="12" md="1" else></v-col>
        <v-col
          cols="12"
          md="2"
          v-if="bitAuditResponse.approveBy && category === 'Company'"
          class="ml-n16 mr-n16"
        >
          <p class="font-weight-regular mt-4 text-caption text-wrap">
            Approve & Authenticate By : {{ bitAuditResponse.approveBy }} <br />
            Date & Time :{{ bitAuditResponse.approveDate }}
          </p>
        </v-col>
        <v-col cols="12" md="1" else></v-col>
        <v-col
          cols="12"
          md="2"
          v-if="bitAuditResponse.confirmedBy && category === 'Company'"
          class="ml-n10"
        >
          <p class="font-weight-regular mt-4 text-caption text-wrap">
            Confirm By : {{ bitAuditResponse.confirmedBy }} <br />
            Date & Time :{{ bitAuditResponse.confirmedDate }}
          </p>
        </v-col>

        <v-col
          cols="12"
          sm="2"
          md="2"
          v-if="
            category != 'Company' && response.bidList[0].status === 'Initiated'
          "
        >
          <v-btn
            class="white--text font-weight-light text-capitalize rounded mt-7"
            depressed
            color="primary"
            @click="toggleBid = 'true'"
          >
            Bid This Project
          </v-btn>
        </v-col>
        <v-col v-else-if="category != 'Company'" cols="12" sm="2" md="2">
        </v-col>
        <v-col cols="12" sm="2" md="2">
          <v-btn
            class="white--text font-weight-light text-capitalize rounded mt-7"
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

          <v-btn
            v-else-if="category === 'Company'"
            depressed
            class="
              primary
              white--text
              font-weight-light
              text-capitalize
              rounded
              mt-7
            "
          >
            Bids Received : {{ response.bidsReceived }}
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="mb-n10">
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
                        ml-n4
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
          <RejectProject
            :response="response"
            title="Reasons"
            v-if="toggleCancel"
            @closeModel="closeModel"
          />
          <BidProject
            :response="response"
            v-if="toggleBid"
            @closeModel="closeModel"
          />
          <ProjectSummary
            :response="response"
            v-if="toggleSummaryView"
            @closeModel="closeModel"
          />
        </v-col>
      </v-row>
      <div v-if="response.bidList" class="mt-5">
        <v-row v-for="row in response.bidList" :key="row.status">
          <v-row
            class="pa-4 ma-1"
            :class="
              (row.status === 'Confirmed' || row.status === 'Completed') &&
              category === 'Company'
                ? 'deep-orange'
                : ''
            "
            v-if="row.status != 'Initiated'"
          >
            <v-row
              :class="
                (row.status === 'Confirmed' || row.status === 'Completed') &&
                category === 'Company'
                  ? 'deep-orange lighten-3 black--text'
                  : ''
              "
            >
              <v-row
                class="ma-1"
                v-if="
                  (row.status === 'Confirmed' || row.status === 'Completed') &&
                    category === 'Company'
                "
              >
                <v-col>
                  <h4>Confirmed Project</h4>
                </v-col>
              </v-row>

              <v-row
                class="ma-1"
                v-if="
                  (row.status != 'Rejected' && category === 'Company') ||
                    category != 'Company'
                "
              >
                <v-col cols="12" sm="1" md="1" v-if="category === 'Company'">
                  <v-img
                    :src="`data:image/png;base64,${row.logo}`"
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
                          (row.status === 'Confirmed' ||
                            row.status === 'Completed') &&
                          category === 'Company'
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
                          (row.status === 'Confirmed' ||
                            row.status === 'Completed') &&
                          category === 'Company'
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
                              (role === 'Approval Admin' ||
                                role === 'MasterAdmin') &&
                                row.status === 'Authenticated' &&
                                category != 'Company'
                            "
                          >
                            <v-text-field
                              outlined
                              dense
                              class="mt-4"
                              v-model="row.requestPrice"
                              :rules="priceRules"
                              onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
                            ></v-text-field>
                          </td>

                          <td v-else class="blue--text" vertical-align: middle>
                            Rs.{{ row.requestPrice }}
                          </td>
                          <td
                            v-if="
                              (role === 'Approval Admin' ||
                                role === 'MasterAdmin') &&
                                row.status === 'Authenticated' &&
                                category != 'Company'
                            "
                          >
                            <v-text-field
                              outlined
                              dense
                              class="mt-4"
                              v-model="row.creditPeriod"
                              :rules="creditRules"
                              onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
                            ></v-text-field>
                          </td>
                          <td v-else class="red--text">
                            {{ row.creditPeriod }} days
                          </td>
                          <td
                            v-if="
                              (role === 'Approval Admin' ||
                                role === 'MasterAdmin') &&
                                row.status === 'Authenticated' &&
                                category != 'Company'
                            "
                          >
                            <v-text-field
                              outlined
                              dense
                              class="mt-4"
                              v-model="row.deliveryDate"
                              :rules="deliveryRules"
                              onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
                            ></v-text-field>
                          </td>
                          <td v-else class="green--text">
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
                                ml-n5
                              "
                              depressed
                              color="primary"
                              v-if="
                                (role === 'Quote InCharge' ||
                                  role === 'MasterAdmin') &&
                                  row.status === 'Approved'
                              "
                              @click="ApproveBid('Selected', row)"
                            >
                              Accept
                            </v-btn>
                            <span
                              v-else-if="
                                (role === 'Merchandiser' ||
                                  role === 'MasterAdmin') &&
                                  row.status === 'Selected'
                              "
                            >
                              <v-select
                                :menu-props="{ offsetY: true }"
                                label="Select Approval Admin"
                                :items="ApprovalAdmin"
                                item-text="ApprovalAdmin"
                                item-value="Id"
                                outlined
                                v-model="approvalRequest.approvalAdminId"
                                dense
                                class="my-3"
                                :rules="
                                  (v) =>
                                    !!v || 'Approval Admin role is required'
                                "
                              >
                              </v-select>
                              <v-btn
                                class="
                                  white--text
                                  font-weight-light
                                  text-capitalize
                                  rounded
                                  mt-n7
                                "
                                depressed
                                color="primary"
                                @click="ApproveBid('BidApproved', row)"
                              >
                                Authenticate
                              </v-btn>
                            </span>
                            <v-btn
                              class="
                                white--text
                                font-weight-light
                                text-capitalize
                                rounded
                                ml-n6
                              "
                              depressed
                              color="primary"
                              v-else-if="
                                (role === 'Approval Admin' ||
                                  (role === 'Merchandiser' &&
                                    approvalAdminAccess === '1') ||
                                  role === 'MasterAdmin') &&
                                  row.status === 'BidApproved'
                              "
                              @click="ApproveBid('Confirmed', row)"
                            >
                              Confirm
                            </v-btn>

                            <div
                              v-else-if="
                                role === 'MasterAdmin' &&
                                  (row.status === 'Approved' ||
                                    row.status === 'Selected')
                              "
                              class="my-2"
                            >
                              Pending for Approval
                            </div>
                            <!-- <v-btn
                              class="
                                white--text
                                font-weight-light
                                text-capitalize
                                rounded
                                mt-2
                              "
                              depressed
                              color="primary"
                              v-else-if="
                                role === 'MasterAdmin' &&
                                  row.status === 'Completed'
                              "
                              @click="toggleReview = true"
                            >
                              review
                            </v-btn> -->
                            <div
                              v-else-if="row.status === 'Rejected'"
                              class="my-1"
                            >
                              {{ row.status }}
                            </div>
                            <div v-else-if="(row.status === 'NoShow') || (row.status === 'Cancelled')">
                              {{ row.status }} <br />
                              {{ row.message }}
                            </div>

                            <div
                              v-else-if="
                                row.status === 'BidApproved' &&
                                  role === 'Merchandiser'
                              "
                            >
                              Waiting for Approval
                            </div>

                            <!-- <v-btn
                              class="
                                white--text
                                font-weight-light
                                text-capitalize
                                rounded
                                my-1
                              "
                              depressed
                              color="primary"
                              v-if="
                                (role === 'MasterAdmin' ||
                                  role === 'Approval Admin' ||
                                  role === 'Merchandiser') &&
                                row.status === 'BidApproved'
                              "
                              @click="ApproveBid('Rejected', row)"
                            >
                              Reject
                            </v-btn> -->
                            <div
                              class="ml-n7"
                              v-if="
                                (role === 'Quote InCharge' ||
                                  role === 'Approval Admin') &&
                                  row.status === 'Selected'
                              "
                            >
                              Waiting for Authentication
                            </div>
                            <div
                              class="ml-n7"
                              v-if="
                                role === 'Quote InCharge' &&
                                  row.status === 'BidApproved'
                              "
                            >
                              Waiting for Approval
                            </div>
                            <div
                              v-if="
                                row.status === 'Approved' &&
                                  (role === 'Approval Admin' ||
                                    role === 'Merchandiser')
                              "
                              class="my-1 ml-n9"
                            >
                              Pending Approval from <br />Quote InCharge
                            </div>
                            <div
                              v-if="
                                row.status === 'Confirmed' &&
                                  role === 'MasterAdmin'
                              "
                            >
                              <div v-if="row.ratings === null">
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
                            </div>

                            <div
                              v-if="
                                row.status === 'Confirmed' && (row.ratings === null) &&
                                  (role === 'Approval Admin' || role === 'Quote InCharge' || role === 'Merchandiser')
                              "
                            >
                              {{ row.status }}
                            </div>
                            <div
                              v-else-if="
                                (row.status === 'Confirmed' &&
                                  row.ratings !== null) ||
                                  row.status === 'Completed' 
                              "
                              class="text-wrap ml-n7"
                            >
                              <v-rating
                                v-model="row.ratings"
                                color="warning"
                                dense
                                half-increments
                                readonly
                              ></v-rating>
                            </div>
                          </td>
                          <td v-else-if="category != 'Company'">
                            <div
                              v-if="
                                (role === 'Approval Admin' ||
                                  role === 'MasterAdmin') &&
                                  row.status === 'Authenticated'
                              "
                            >
                              <v-btn
                                class="
                                  white--text
                                  font-weight-light
                                  text-capitalize
                                  rounded
                                  mt-2
                                  ml-3
                                "
                                depressed
                                color="primary"
                                @click="Save(row)"
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
                                @click="ApproveBid('Approved', row)"
                              >
                                Approve
                              </v-btn>
                            </div>
                            <span
                              class="ml-n3"
                              v-else-if="
                                (row.status === 'Authenticated' &&
                                  role === 'Quote InCharge') ||
                                  row.status === 'Approved' ||
                                  row.status === 'Rejected'
                              "
                            >
                              {{ row.status }}
                            </span>
                            <span
                              v-else-if="(row.status === 'NoShow') || (row.status === 'Cancelled')"
                            >
                              {{ row.status }}<br />
                              {{ row.message }}
                            </span>
                            <!-- <div
                              v-else-if="
                                role === 'Quote Incharge' &&
                                  row.status === 'Authenticated'
                              "
                            >
                              Waiting for Approval
                              {{ row.status }}
                            </div> -->
                            <div
                              v-else-if="
                                row.status === 'Confirmed' &&
                                  role === 'MasterAdmin'
                              "
                            >
                              <div v-if="row.ratings === null">
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
                            </div>
                            <div
                              v-if="
                                row.status === 'Confirmed' && (row.ratings === null) &&
                                  (role === 'Approval Admin' ||
                                    role === 'Quote InCharge')
                              "
                            >
                              {{ row.status }}
                            </div>
                            <div
                              v-else-if="
                                (row.status === 'Confirmed' &&
                                  row.ratings !== null) ||
                                  row.status === 'Completed'
                              "
                              class="text-wrap ml-n7"
                            >
                              <v-rating
                                v-model="row.ratings"
                                color="warning"
                                dense
                                half-increments
                                readonly
                              ></v-rating>
                            </div>
                            <!-- <span
                              class="ml-n3"
                              v-else-if="
                                (row.status === 'Approved') || (row.status != 'Confirmed')
                              "
                            >
                              {{ row.status }}
                            </span> -->
                            <!-- <span v-else>
                              {{ row.status }}
                            </span> -->
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
        <RejectedProject
          :response="response.bidList"
          :projectId="response.Id"
          v-if="category === 'Company' && isRejected === true"
        />
      </div>

      <RejectProject
        :response="response"
        title="Noshow"
        v-if="toggleNoShow"
        @closeModel="closeModel"
      />
      <Review
        :response="response"
        v-if="toggleReview"
        @closeModel="closeModel"
      />
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
  DashboardModel,
  DashboardRequestModel,
  GetCompanyModel,
  BitReceivedModel,
  BitAuditmodel,
  BidRequestModel,
  ApprovalAdminResponseModel,
  AdminRequestModel,
} from "@/model";
import { IDashboardService, EmployeeService } from "@/service";
import { Component, Inject, Vue } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import BidProject from "./components/BidProject.vue";
import RejectProject from "./components/RejectProject.vue";
import Review from "./components/Review.vue";
import ProjectSummary from "./components/ProjectSummary.vue";
import RejectedProject from "./components/RejectedProject.vue";
@Component({
  mixins: [validationMixin],
  components: {
    Review,
    ProjectSummary,
    BidProject,
    RejectProject,
    RejectedProject,
  },
})
export default class ProjectsList extends Vue {
  @Inject("DashboardService") DashboardService: IDashboardService;
  @Inject("EmployeeService") EmployeeService: EmployeeService;

  public Rules: any = [(v: any) => !!v || "Enter the Value"];

  public request = new DashboardRequestModel();
  public companyResponse = new GetCompanyModel();
  public approvalRequest = new ApproveRequestModel();
  public response = new DashboardModel();
  public bitAuditResponse = new BitAuditmodel();
  public bidRequest = new BidRequestModel();
  public toggleBid: boolean = false;
  public toggleCancel: boolean = false;
  public toggleReview: boolean = false;
  public toggleNoShow: boolean = false;
  public toggleSummaryView: boolean = false;
  public showText: boolean = false;
  public snackbarText: string = "";
  public snackbar: boolean = false;
  public isRejected: boolean = false;
  public adminRequest: AdminRequestModel = new AdminRequestModel();
  public ApprovalAdmin: Array<ApprovalAdminResponseModel> = [];

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
    }
    this.GetApprovalAdmin();
  }

  public GetApprovalAdmin() {
    this.adminRequest.companyId = this.$store.getters.companyId;
    this.EmployeeService.GetApprovalAdmin(this.adminRequest).then(
      (response: Array<ApprovalAdminResponseModel>) => {
        this.ApprovalAdmin = response;
      }
    );
  }

  public GetCompany(CompanyId: string) {
    this.DashboardService.GetCompany(CompanyId).then((response) => {
      this.companyResponse = response;
    });
  }

  public GetProjectEnquiry() {
    this.request.id = this.$route.params.Id;
    this.DashboardService.GetProjectEnquiry(this.request).then((response) => {
      this.response = response;
      this.GetCompany(this.response.CompanyId);
      this.response.bidList.forEach((b) => {
        if (b.status == "Rejected") {
          this.isRejected = true;
        }
      });
      // if (this.category != "Company") {
      //   this.GetCompany(this.response.bidList[0].companyId);
      // } else {
      //   this.GetCompany(this.response.CompanyId);
      // }
      //       this.response.bidList.forEach((b) => {
      //        this.DashboardService.GetCompany(b.companyId).then((c) => {
      //          b.companyName = c.companyName;
      //          b.companyLogo = c.logo;
      //          b.review = c.review;
      //        });
      //      });
      this.GetBidAudit();
    });
  }

  public GetBidAudit() {
    this.DashboardService.GetBidAudit(this.response.Id).then((response) => {
      this.bitAuditResponse = response;
    });
  }
  public ApproveBid(status: string, bid: BitReceivedModel) {
    if (
      (this.role === "Merchandiser" || this.role === "MasterAdmin") &&
      bid.status === "Selected" &&
      this.approvalRequest.approvalAdminId === null
    ) {
      this.snackbarText = "Please select Approval Admin";
      this.snackbar = true;
    } else {
      this.approvalRequest.bidId = bid.id;
      this.approvalRequest.status = status;
      this.approvalRequest.projectId = this.response.Id;
      this.DashboardService.ApproveBid(this.approvalRequest).then(
        (response) => {
          this.snackbarText = response;
          this.snackbar = true;
          this.GetProjectEnquiry();
        }
      );
    }
  }

  public Save(bid: BitReceivedModel) {
    this.bidRequest.projectId = this.response.Id;
    this.bidRequest.id = bid.id;
    this.bidRequest.price = bid.requestPrice;
    this.bidRequest.creditPeriod = bid.creditPeriod;
    this.bidRequest.deliveryPeriod = bid.deliveryDate;
    this.DashboardService.BidProject(this.bidRequest).then((response) => {
      this.snackbarText = response;
      this.snackbar = true;
    });
  }

  public closeModel(responseMessage: string) {
    this.toggleSummaryView = false;
    this.toggleBid = false;
    this.toggleCancel = false;
    this.toggleNoShow = false;
    this.toggleReview = false;
    if (responseMessage) {
      this.snackbarText = responseMessage;
      this.snackbar = true;
    }
    this.GetProjectEnquiry();
  }

  get category(): string {
    return this.$store.getters.category;
  }

  get role(): string {
    return this.$store.getters.role;
  }

  get approvalAdminAccess(): string {
    return this.$store.getters.approvalAdminAccess;
  }

  public priceRules: any = [
    (v: any) => !!v || "Price is required",
    // (v: any) => (!isNaN(parseInt(v)) && v >= 0) || "Price must be Valid Number",
    (v: any) => (!isNaN(parseInt(v)) && v != 0) || "Price must be Valid Number",
  ];

  public creditRules: any = [
    (v: any) => !!v || "Credit Period is required",
    (v: any) => (v && v.length <= 4) || "Credit Period must be a Valid Date",
    (v: any) => (!isNaN(parseInt(v)) && v != 0) || "Credit Period must be Valid Number",
  
  ];

  public deliveryRules: any = [
    (v: any) => !!v || "Delivery Period is required",
    (v: any) => (v && v.length <= 4) || "Delivery Period must be a Valid Date",
    (v: any) => (!isNaN(parseInt(v)) && v != 0) || "Delivery Period must be Valid Number",
  
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
