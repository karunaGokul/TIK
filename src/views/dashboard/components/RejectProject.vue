<template>
  <v-dialog v-model="dialog" width="500">
    <v-form ref="form">
      <v-card class="px-6" elevation="8">
        <v-card-title>
          {{ title }}
          <v-spacer></v-spacer>
          <v-btn @click="close()" icon>
            <v-icon >mdi-close</v-icon>
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
            v-model="approvelRequest.message"
            v-if="title === 'Reasons'"
            :rules="[(v) => !!v || 'Reason is required']"
          ></v-select>
          <v-select
            :items="noResponseItems"
            :menu-props="{ offsetY: true }"
            label="No Response"
            class="shrink py-6"
            dense
            v-model="approvelRequest.message"
            v-else-if="title === 'Noshow'"
            :rules="[(v) => !!v || 'NoShow reason is required']"
          ></v-select>
          <v-text-field
            dense
            label="Add your Comments"
            v-else-if="title === 'NoResponse'"
            :rules="[(v) => !!v || 'NoResponse reason is required']"
            v-model="approvelRequest.message"
          >
          </v-text-field>
        </v-card-text>

        <v-card-actions class="pb-5 mt-n8">
          <v-spacer></v-spacer>
          <v-btn
            class="white--text font-weight-light text-capitalize rounded"
            depressed
            color="primary"
            v-if="title === 'Reasons'"
            @click="ApproveBid('Cancelled')"
          >
            save
          </v-btn>
          <v-btn
            class="white--text font-weight-light text-capitalize rounded"
            depressed
            color="primary"
            v-else-if="title === 'Noshow'"
            @click="ApproveBid('NoShow')"
          >
            save
          </v-btn>
          <v-btn
            class="white--text font-weight-light text-capitalize rounded-0"
            depressed
            color="primary"
            v-else-if="title === 'NoResponse'"
            @click="UpdateNoResponse('NoResponse')"
          >
            submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script lang="ts">
import { ApproveRequestModel, DashboardModel, NoResponseRequestModel } from "@/model";
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
  public noResponseRequest = new NoResponseRequestModel();

  public ApproveBid(status: string) {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.approvelRequest.bidId = this.response.bidList[0].id;
      this.approvelRequest.status = status;
      this.approvelRequest.projectId = this.response.Id;
      this.DashboardService.ApproveBid(this.approvelRequest).then(
        (response) => {
          this.snackbarText = response;
          this.close();
        }
      );
    }
  }

  public UpdateNoResponse(status: string) {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.noResponseRequest.projectId = this.response.Id;
      this.noResponseRequest.status = status;
      this.DashboardService.UpdateNoResponse(this.noResponseRequest).then(
        (response) => {
          this.snackbarText = response;
          this.close();
        }
      );
    }
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
