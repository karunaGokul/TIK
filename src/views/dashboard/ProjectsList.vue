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
              <v-row
                v-else-if="row.status === 'Rejected' && category === 'Company'"
                class="mx-1 my-3"
              >
                <v-col col="12" md="4">
                  <span class="text-subtitle-1 font-weight-bold">
                    Rejected Projects
                  </span>
                </v-col>
                <v-col col="12" md="2">
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        large
                        color="green darken-4"
                        v-bind="attrs"
                        v-on="on"
                        >mdi-filter</v-icon
                      >
                    </template>

                    <v-card elevation="2">
                      <v-card-title>Filter</v-card-title>
                       
                        <v-select
                          offset-y
                          outlined
                          dense
                          label="Select Filter"
                          :items="items"
                          class="mx-5"
                          v-model="selectValue"
                          @change="filterValue = true"
                        >
                        </v-select>
                      <v-card-actions>
                        <v-text-field
                          v-if="filterValue"
                          label="Enter a value"
                          dense
                          outlined
                          class="ml-1 mr-5"
                          v-model="value"
                        ></v-text-field>

                        <v-btn
                          color="primary"
                          class="mt-n6 rounded-0"
                          @click="FilterRejectedBids"
                          >filter</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <!-- <v-select 
                    offset-y  
                    @change="FilterRejectedBids" 
                    :items="items" 
                    v-model="filterRequest.projectId"
                    color="green darken-4"
                    prepend-inner-icon="mdi-filter" >
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        large
                        color="green darken-4"
                        class="ml-4"
                        v-bind="attrs"
                        v-on="on"
                      >
                        mdi-filter
                      </v-icon>
                    </template>
                    <v-list>
                      <v-list-item> Price </v-list-item>
                      <v-list-item> Credit Period </v-list-item>
                      <v-list-item> Delivery Period </v-list-item>
                    </v-list>
                  </v-select> -->
                </v-col>
                <v-col col="12" md="1">
                  <v-icon large color="green darken-4" class="ml-2">
                    mdi-sort-ascending
                  </v-icon>
                </v-col>
                <!-- <v-col col="12" md=""></v-col> -->
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

                          <td v-else class="blue--text">
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
                          <td v-else class="red--text">
                            {{ row.creditPeriod }} days
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
                                ml-2
                              "
                              depressed
                              color="primary"
                              v-if="row.status === 'Approved'"
                              @click="ApproveBid('Confirmed')"
                            >
                              Accept
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
                              v-else-if="row.status === 'Completed'"
                              @click="toggleReview = true"
                            >
                              review
                            </v-btn>
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
                              {{ row.status }}
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
  FilterRequestModel,
  FilterModel,
} from "@/model";
import { IDashboardService } from "@/service";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import BidProject from "./components/BidProject.vue";
import RejectProject from "./components/RejectProject.vue";
import Review from "./components/Review.vue";
import ProjectSummary from "./components/ProjectSummary.vue";
@Component({
  mixins: [validationMixin],
  components: {
    Review,
    ProjectSummary,
    BidProject,
    RejectProject,
  },
})
export default class ProjectsList extends Vue {
  @Prop() SelectedProject: DashboardModel;
  @Inject("DashboardService") DashboardService: IDashboardService;
  public Rules: any = [(v: any) => !!v || "Enter the Value"];

  public request = new DashboardRequestModel();
  public companyresponse = new GetCompanyModel();
  public approvelRequest = new ApproveRequestModel();
  public response = new DashboardModel();
  public filterRequest = new FilterRequestModel();
  public filterResponse = new FilterModel();

  public toggleBid: boolean = false;
  public toggleCancel: boolean = false;
  public toggleReview: boolean = false;
  public toggleNoShow: boolean = false;
  public toggleSummaryView: boolean = false;
  public showText: boolean = false;
  public snackbarText: string = "";
  public snackbar: boolean = false;
  public dialog: boolean = false;
  public filterValue: boolean = false;
  selectValue:string = "";
  value: number;
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


  public FilterRejectedBids() {

    if(this.selectValue === "Price") { 
        this.filterRequest.price = this.value; 
    } else if(this.selectValue === "Credit Period") {
        this.filterRequest.creditPeriod = this.value
    } else {
        this.filterRequest.deliveryPeriod = this.value
    } 

    this.filterRequest.projectId = this.response.Id;
    this.DashboardService.FilterRejectedBids(this.filterRequest).then(
      (response) => {
        this.filterResponse = response;
        this.dialog = false;
      }
    );
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

  public ApproveBid(status: string) {
    this.approvelRequest.bidId = this.response.bidList[0].id;
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

  items: any = ["Price", "Credit Period", "Delivery Period"];
}
</script>
