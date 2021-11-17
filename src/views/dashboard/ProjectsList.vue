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
          <v-row class="mt-4 font-weight-regular">
            {{ response.EnquiryName }}
          </v-row>
          <v-row class="font-weight-regular text-caption">
            Created By : {{ response.CreatedBy }}
          </v-row>
          <v-row class="font-weight-regular text-caption">
            Date & Time :{{ response.CreatedDate }}</v-row
          >
        </v-col>

        <v-col
          cols="12"
          md="2"
          v-if="bitAuditResponse.approveBy && category === 'Company'"
        >
          <v-row class="font-weight-regular mt-8 text-caption">
            Approve &Authenticate By : {{ bitAuditResponse.approveBy }}
          </v-row>
          <v-row class="font-weight-regular text-caption">
            Date & Time :{{ bitAuditResponse.approveDate }}
          </v-row>
        </v-col>
        <v-col v-else cols="12" sm="2" md="2"> </v-col>
        <v-col
          cols="12"
          md="2"
          v-if="bitAuditResponse.selectedBy && category === 'Company'"
        >
          <v-row class="font-weight-regular mt-8 text-caption">
            Select By : {{ bitAuditResponse.selectedBy }}</v-row
          >
          <v-row class="font-weight-regular text-caption">
            Date & Time :{{ bitAuditResponse.selectedDate }}
          </v-row>
        </v-col>
        <v-col v-else cols="12" sm="2" md="2"> </v-col>
        <v-col
          cols="12"
          md="2"
          v-if="bitAuditResponse.confirmedBy && category === 'Company'"
        >
          <v-row class="font-weight-regular mt-8 text-caption">
            confirm By : {{ bitAuditResponse.confirmedBy }}</v-row
          >
          <v-row class="font-weight-regular text-caption">
            Date & Time :{{ bitAuditResponse.confirmedDate }}
          </v-row>
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
          <span
            v-else-if="category === 'Company'"
            class="primary white--text font-weight-light pa-2 rounded"
          >
            Bids Received : {{ response.bidsReceived }}
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
      <div v-if="response.bidList">
        <v-row v-for="row in response.bidList" :key="row.status">
          <v-row
            class="pa-4 ma-1"
            :class="
              row.status === 'Confirmed' && category === 'Company'
                ? 'deep-orange'
                : ''
            "
            v-if="row.status != 'Initiated'"
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
                            ></v-text-field>
                          </td>

                          <td v-else class="blue--text">
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
                                ma-2
                              "
                              depressed
                              color="primary"
                              v-if="
                                (role === 'Merchandiser' ||
                                  role === 'Quote InCharge' ||
                                  role === 'Approval Admin') &&
                                row.status === 'Approved'
                              "
                              @click="ApproveBid('Selected', row)"
                            >
                              Accept
                            </v-btn>
                            <v-btn
                              class="
                                white--text
                                font-weight-light
                                text-capitalize
                                rounded
                                ma-2
                              "
                              depressed
                              color="primary"
                              v-else-if="
                                (role === 'Merchandiser' ||
                                  role === 'Approval Admin') &&
                                row.status === 'Selected'
                              "
                              @click="ApproveBid('BidApproved', row)"
                            >
                              Approve
                            </v-btn>
                            <v-btn
                              class="
                                white--text
                                font-weight-light
                                text-capitalize
                                rounded
                                ma-2
                              "
                              depressed
                              color="primary"
                              v-else-if="
                                (role === 'Approval Admin' ||
                                  role === 'MasterAdmin' ||
                                  (role === 'Merchandiser' &&
                                    approvalAdminAccess === '1')) &&
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
                              class="my-1"
                            >
                              Not Approved By Approval Admin
                            </div>
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
                              v-else-if="row.status === 'Completed'"
                              @click="toggleReview = true"
                            >
                              review
                            </v-btn>
                            <div
                              v-else-if="
                                row.status === 'Confirmed' ||
                                row.status === 'Rejected'
                              "
                              class="my-1"
                            >
                              {{ row.status }}
                            </div>
                            <div v-else>Auth for Approval</div>
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
                              v-if="
                                role === 'Merchandiser' &&
                                row.status === 'Approved'
                              "
                              class="my-1"
                            >
                              Not Approved By Quote Incharge
                            </div>
                          </td>
                          <td v-else-if="category != 'Company'">
                            <span  v-if="
                                (role === 'Approval Admin' ||
                                  role === 'MasterAdmin') &&
                                row.status === 'Authenticated'
                              ">
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
                            </span>
                            <span
                              v-else-if="
                                row.status === 'Approved' ||
                                row.status === 'Rejected'
                              "
                            >
                              {{ row.status }}
                            </span>
                            <span v-else-if="row.status === 'Authenticated'">
                              Waiting for Approval
                            </span>
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
        <RejectedProject
          :response="response.bidList"
          :projectId="response.Id"
          v-if="category === 'Company'"
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
  DashboardModel,
  DashboardRequestModel,
  GetCompanyModel,
  BitReceivedModel,
  BitAuditmodel,
} from "@/model";
import { IDashboardService } from "@/service";
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
  public Rules: any = [(v: any) => !!v || "Enter the Value"];

  public request = new DashboardRequestModel();
  public companyResponse = new GetCompanyModel();
  public approvelRequest = new ApproveRequestModel();
  public response = new DashboardModel();
  public bitAuditResponse = new BitAuditmodel();
  public toggleBid: boolean = false;
  public toggleCancel: boolean = false;
  public toggleReview: boolean = false;
  public toggleNoShow: boolean = false;
  public toggleSummaryView: boolean = false;
  public showText: boolean = false;
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
    }
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
      if (this.category != "Company") {
        this.GetCompany(this.response.bidList[0].companyId);
      } else {
        this.GetCompany(this.response.CompanyId);
      }
      this.GetBidAudit();
    });
  }

  public GetBidAudit() {
    this.DashboardService.GetBidAudit(this.response.Id).then((response) => {
      this.bitAuditResponse = response;
    });
  }
  public ApproveBid(status: string, bid: BitReceivedModel) {
    this.approvelRequest.bidId = bid.id;
    this.approvelRequest.status = status;
    this.approvelRequest.projectId = this.response.Id;
    this.DashboardService.ApproveBid(this.approvelRequest).then((response) => {
      this.snackbarText = response;
      this.snackbar = true;
      this.GetProjectEnquiry();
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
