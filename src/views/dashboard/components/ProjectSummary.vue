<template>
  <div>
    <v-dialog v-model="dialog" width="70%" style="overflow: hidden">
      <v-card elevation="2" style="overflow: hidden">
        <v-card-title>
          Summary
          <v-spacer></v-spacer>
          <v-btn @click="close" icon>
            <v-icon id="close-button">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

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
                  v-for="(control, index) in summaryControls"
                  :key="index"
                >
                  <v-label>
                    {{ control.label ? control.label : "&nbsp;" }}
                  </v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="control.value"
                    background-color="primary"
                    class="my-1 mb-n7"
                    disabled
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
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col col="12" md="6">
                  <v-label>No Of KGs</v-label>
                  <v-text-field
                    outlined
                    dense
                    background-color="white"
                    v-model="response.data.noOfKgs"
                    class="my-2"
                    disabled
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-n8">
                <v-col col="12" md="6">
                  <v-label>Price</v-label>
                  <v-text-field
                    v-if="response.data.requestPrice === false"
                    outlined
                    dense
                    background-color="white"
                    v-model="response.data.price"
                    class="my-2"
                    disabled
                  ></v-text-field>
                  <v-text-field
                    v-else
                    outlined
                    dense
                    background-color="white"
                    placeholder="Requested"
                    class="my-2"
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Required Credit Period in Days</v-label>
                  <v-text-field
                    outlined
                    dense
                    background-color="white"
                    v-model="response.data.creditPeriod"
                    class="my-2"
                    disabled
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="my-n8">
                <v-col col="12" md="6">
                  <v-label>Order Confirmation Date</v-label>
                  <v-text-field
                    outlined
                    dense
                    background-color="white"
                    v-model="response.data.confirmationDate"
                    class="my-2"
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Expected Delivery Date</v-label>
                  <v-text-field
                    outlined
                    dense
                    background-color="white"
                    v-model="response.data.deliveryDate"
                    class="my-2"
                    disabled
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="my-n8">
                <v-col col="12" md="6">
                  <v-label>Certification</v-label>
                  <v-text-field
                    outlined
                    dense
                    background-color="white"
                    v-model="response.data.certification"
                    class="my-2"
                    disabled
                  ></v-text-field>
                </v-col>
              </v-row>
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
  public dialog: boolean = true;

  get summaryControls() {
    return this.response.summary.filter((s) => s.value);
  }

  public close() {
    this.$emit("closeModel");
  }
}
</script>
