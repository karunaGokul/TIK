<template>
  <v-dialog v-model="dialog" width="500">
    <v-form ref="form" name="forms" onsubmit="return validation()">
      <v-card class="px-6" elevation="8" style="overflow: hidden">
        <v-card-title class="mb-n2">
          Bid Project
          <v-spacer></v-spacer>
          <v-btn @click="close()" icon>
            <v-icon id="close-button">mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-1">
          <v-row>
            <v-col>
              <div class="mb-2">Price <span class="red--text">*</span></div>
              <v-text-field
                outlined
                dense
                label="Enter Price per KG"
                v-model="bidRequest.price"
                :rules="priceRules"
                required
                onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-n7">
            <v-col>
              <div class="mb-2">
                Credit Period<span class="red--text">*</span>
              </div>
              <v-text-field
                outlined
                dense
                label="Enter Credit Period in Days"
                v-model="bidRequest.creditPeriod"
                :rules="[(v) => !!v || 'Credit Period is required']"
                required
                onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-n7">
            <v-col>
              <div class="mb-2">
                Delivery Period <span class="red--text">*</span>
              </div>
              <v-text-field
                outlined
                dense
                label="Enter Delivery Period in Days"
                v-model="bidRequest.deliveryPeriod"
                :rules="[(v) => !!v || 'Delivery Period is required']"
                required
                onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-n7">
            <v-col>
              <div class="mb-2">
                Approval Admin <span class="red--text">*</span>
              </div>
              <v-select
                :menu-props="{ offsetY: true }"
                label="Select Approval Admin"
                :items="ApprovalAdmin"
                item-text="ApprovalAdmin"
                item-value="Id"
                outlined
                v-model="bidRequest.approvalAdminId"
                dense
                :rules="[(v) => !!v || 'Approval Admin role is required']"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="mt-n9">
          <v-spacer></v-spacer>
          <v-btn
            class="white--text font-weight-light text-capitalize rounded"
            depressed
            color="primary mb-2"
            @click="BidProject"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script lang="ts">
import {
  BidRequestModel,
  DashboardModel,
  AdminRequestModel,
  ApprovalAdminResponseModel,
} from "@/model";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { IDashboardService, EmployeeService } from "@/service";
import { validationMixin } from "vuelidate";

@Component({
  mixins: [validationMixin],
})
export default class BidProject extends Vue {
  @Prop() response: DashboardModel;
  @Inject("DashboardService") DashboardService: IDashboardService;
  @Inject("EmployeeService") EmployeeService: EmployeeService;

  public bidRequest = new BidRequestModel();
  public dialog: boolean = true;
  public snackbarText: string = "";
  public adminRequest: AdminRequestModel = new AdminRequestModel();
  public ApprovalAdmin: Array<ApprovalAdminResponseModel> = [];

  created() {
    this.GetApprovalAdmin();
  }

  public BidProject() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.bidRequest.projectId = this.response.Id;
      this.bidRequest.id = this.response.bidList[0].id;
      this.DashboardService.BidProject(this.bidRequest).then((response) => {
        this.snackbarText = response;
        this.close();
      });
    }
  }

  public GetApprovalAdmin() {
    this.adminRequest.companyId = this.$store.getters.companyId;
    this.EmployeeService.GetApprovalAdmin(this.adminRequest).then(
      (response: Array<ApprovalAdminResponseModel>) => {
        this.ApprovalAdmin = response;
      }
    );
  }

  public priceRules: any = [
    (v: any) => !!v || "Price is required",
    (v: any) => (!isNaN(parseInt(v)) && v >= 0) || "Price must be Valid Number",
  ];

  public close() {
    this.$emit("closeModel", this.snackbarText);
  }
}
</script>
