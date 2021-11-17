<template>
  <v-dialog v-model="dialog" width="500">
      <v-card class="px-6" elevation="8">
              <v-card-title>
                Bid Project
                <v-spacer></v-spacer>
                <v-btn @click="close()" icon>
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
                  @click="BidProject"
                >
                  Submit
                </v-btn>
              </v-card-actions>
            </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { BidRequestModel, DashboardModel } from "@/model";
import { Component, Inject, Prop, Vue } from "vue-property-decorator"
import { IDashboardService } from "@/service";
@Component
export default class BidProject extends Vue {

     @Prop() response: DashboardModel;
     @Inject("DashboardService") DashboardService: IDashboardService;

     public bidRequest = new BidRequestModel();
public dialog: boolean = true;
public snackbarText: string = "";

public BidProject() {
    this.bidRequest.projectId = this.response.Id;
    this.bidRequest.id = this.response.bidList[0].id;
    this.DashboardService.BidProject(this.bidRequest).then((response) => {
      this.snackbarText = response;
      this.close();
      
    });
  }
  
public close() {
    this.$emit("closeModel",this.snackbarText);
  }
}
</script>
