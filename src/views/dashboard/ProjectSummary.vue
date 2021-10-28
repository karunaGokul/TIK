<template>
  <div>
    <v-dialog style="overscroll-behavior: auto;" v-model="dialog" width="80%" max-height="auto">
      <v-card style="overflow: hidden;">
        <v-row class="my-4 px-4">
          <v-card-title> Summary </v-card-title>
          <v-spacer></v-spacer>
          <v-btn @click="close" icon>
            <v-icon id="close-button">mdi-close</v-icon>
          </v-btn>
        </v-row>

        <v-row>
          <v-col>
            <v-card
              color="teal lighten-4 subtitle-2"
              elevation="5"
              class="mx-10 pa-10 mb-7"
            >
              <v-row>
                <v-col
                  col="12"
                  sm="6"
                  md="6"
                  v-for="(SummaryItem, index) in response.summary"
                  :key="index"
                >
                  <v-label> {{ SummaryItem.label }} </v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="SummaryItem.value"
                    background-color="primary"  
                    class="my-1 mb-n7"                
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col col="12" md="6">
                  <v-label>Enquiry Name</v-label>
                  <v-text-field
                    outlined
                    dense
                    background-color="white"
                    v-model="response.EnquiryName"
                    class="my-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="my-n8">
                <v-col>
                  <v-label>Price</v-label>
                  <v-text-field
                    outlined
                    dense
                    background-color="white"
                    v-model="response.RequestedPrice"
                    class="my-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>required Credit Period</v-label>
                  <v-text-field
                    outlined
                    dense
                    background-color="white"
                    v-model="response.RequestedCredit"
                    class="my-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- <v-row class="my-n8">
                <v-col>
                  <v-label>Order Confirmation Date</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.OrderConfirmationDate"
                    class="my-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Delivery Date</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.DeliveryDate"
                    class="my-2"
                  ></v-text-field>
                </v-col>
              </v-row> -->
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { DashboardModel } from "@/model";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class ProjectSummary extends Vue {
  @Prop() response: DashboardModel;
  dialog: boolean = true;

  public close() {
    this.$emit("closeModel");
  }
}
</script>
