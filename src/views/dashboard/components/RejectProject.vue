<template>
  <v-dialog v-model="dialog" width="500">
    <v-card class="px-6" elevation="8">
      <v-card-title>
        {{ title }}
        <v-spacer></v-spacer>
        <v-btn @click="close()" icon>
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
          v-if="title === 'Reasons'"
        ></v-select>
        <v-select
          :items="noResponseItems"
          :menu-props="{ offsetY: true }"
          label="No Response"
          class="shrink py-6"
          dense
          hide-details
          v-model="approvelRequest.message"
          v-else-if="title === 'Noshow'"
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
</template>

<script lang="ts">
import { ApproveRequestModel, DashboardModel } from "@/model";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { IDashboardService } from "@/service";
@Component
export default class RejectProject extends Vue {
  @Prop() response: DashboardModel;
  @Prop() title: string;
  @Inject("DashboardService") DashboardService: IDashboardService;

  public approvelRequest = new ApproveRequestModel();
  public dialog: boolean = true;
  public snackbarText: string = "";

  public ApproveBid(status: string) {
    this.approvelRequest.bidId = this.response.bidList[0].id;
    this.approvelRequest.status = status;
    this.approvelRequest.projectId = this.response.Id;
    this.DashboardService.ApproveBid(this.approvelRequest).then((response) => {
      this.snackbarText = response;
      this.close();
    });
  }

  public close() {
    this.$emit("closeModel", this.snackbarText);
  }

  items: any = [
    "Cannot supply",
    "Pricing not Workable",
    "No Spare Capacity Available",
    "Audi",
  ];

  noResponseItems: any = ["No Response", "Not Initiated"];
}
</script>
