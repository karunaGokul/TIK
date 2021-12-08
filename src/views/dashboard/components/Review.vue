<template>
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

          <v-card-text>
            <div class="my-4">Review Here</div>
            <v-rating
              v-model="reviewRequest.reviewRating"
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
</template>

<script lang="ts">
import { DashboardModel, ReviewRequestModel, BitReceivedModel } from "@/model";
import { Component, Inject, Prop, Vue } from "vue-property-decorator"
import { IDashboardService } from "@/service";
@Component
export default class Review extends Vue {

    @Prop() response: DashboardModel;  
    @Inject("DashboardService") DashboardService: IDashboardService;

  public reviewRequest = new ReviewRequestModel();
  public dialog: boolean = true;
  public snackbarText: string = "";
  public bid = new BitReceivedModel();
 
 
  public Review() {
    this.reviewRequest.projectId = this.response.Id;
    this.reviewRequest.biddingId = this.bid.id;
    this.DashboardService.Review(this.reviewRequest).then((response) => {
    this.snackbarText = response;
    this.close();      
    });
  }
  
  public close() {
    this.$emit("closeModel",this.snackbarText);
  }

 

}
 
</script>
