<template>
  <div>
    <v-row v-for="row in response.bidList" :key="row.status">
      <v-dialog v-model="dialog" width="500">
        <v-card class="px-6" elevation="8">
          <v-card-title>
            Review
            <v-spacer></v-spacer>
            <v-btn @click="close" icon>
              <v-icon id="close-button">mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text v-if="category === 'Company'">
            <!-- <div class="my-4">Review Here</div> -->
            <!-- <v-rating
              v-model="reviewRequest.reviewRating"
              color="warning"
              dense
              half-increments
              size="30"
              class="ml-n4"
            ></v-rating> -->
            <div class="mb-2 mt-4">Quality of the Product</div>
            <v-rating
              v-model="reviewRequest.productQualityRating"
              color="warning"
              dense
              half-increments
              size="30"
              class="ml-n2"
            ></v-rating><br />
            
            <div class="my-2">Timely Delivery</div>
            <v-rating
              v-model="reviewRequest.timelyDeliveryRating"
              color="warning"
              dense
              half-increments
              size="30"
              class="ml-n2"
            ></v-rating>
          </v-card-text>

          <v-card-text v-if="category !== 'Company'">
            
            <div class="mb-2 mt-4">Input time of the Product</div>
            <v-rating
              v-model="reviewRequest.inputMaterialRating"
              color="warning"
              dense
              half-increments
              size="30"
              class="ml-n2"
            ></v-rating><br />
            
            <div class="my-2">Payment</div>
            <v-rating
              v-model="reviewRequest.paymentRating"
              color="warning"
              dense
              half-increments
              size="30"
              class="ml-n2"
            ></v-rating>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="white--text font-weight-light text-capitalize rounded mb-3"
              depressed
              color="primary"
              @click="Review('Confirmed', row)"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
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
    <v-snackbar
      v-model="snackbar1"
      :timeout="2000"
      color="deep-orange lighten-5 pink--text"
      right
      top
    >
      <v-icon color="pink">mdi-exclamation-thick </v-icon>
      {{ snackbarText1 }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          <v-icon> mdi-close-box</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { DashboardModel, ReviewRequestModel, BitReceivedModel } from "@/model";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { IDashboardService } from "@/service";
@Component
export default class Review extends Vue {
  @Prop() response: DashboardModel;
  @Inject("DashboardService") DashboardService: IDashboardService;

  public reviewRequest = new ReviewRequestModel();
  public dialog: boolean = true;
  public snackbar: boolean;
  public snackbarText: string = "";
  public snackbar1: boolean;
  public snackbarText1: string = "";
  public bid = new BitReceivedModel();

  get category(): string {
    return this.$store.getters.category;
  }

  public Review() {
    this.reviewRequest.projectId = this.response.Id;
    this.response.bidList.forEach((b) => {
      if (b.status === "Confirmed" && b.ratings === null) {
        this.reviewRequest.biddingId = b.id;
        this.DashboardService.Review(this.reviewRequest).then(
          (response) => {
            this.snackbarText = response;
            this.snackbar = true;
            this.close();
          },
          (err) => {
            if (err.response.status === 400) {
              this.snackbarText1 = err.response.data;
              this.snackbar1 = true;
              this.close();
            }
          }
        );
      }
    });
  }

  public close() {
    this.$emit("closeModel", this.snackbarText);
  }
}
</script>
