<template>
  <div>
    <v-container fluid class="pa-8">
      <div class="ma-2">
        <router-link link to="/" class="text-decoration-none">
          <v-icon large> mdi-home</v-icon>
        </router-link>
        <v-icon large> mdi-chevron-right</v-icon>
        {{ option }} Employee
      </div>
    </v-container>

    <v-card class="mx-3 mb-5" elevation="8">
      <v-form>
        <v-row class="pl-12 pt-5">
          <div class="font-weight-regular">{{ option }} Employee</div>
        </v-row>

        <v-row class="ml-5">
          <v-col cols="12" md="3" class="mr-5">
            <v-label>
              First Name
              <span class="red--text">*</span>
            </v-label>
            <v-text-field
              outlined
              dense
              placeholder="Enter First Name"
              v-model="request.FirstName"
              class="pt-2"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3" class="mr-5">
            <v-label>
              Last Name
              <span class="red--text">*</span>
            </v-label>
            <v-text-field
              outlined
              dense
              placeholder="Enter Last Name"
              v-model="request.LastName"
              class="pt-2"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-label>
              Gender
              <span class="red--text">*</span>
            </v-label>
            <v-select
              class="pt-2"
              :menu-props="{ offsetY: true }"
              label="Select Gender"
              :items="gender"
              v-model="request.Gender"
              outlined
              dense
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="ml-5">
          <v-col cols="12" md="3" class="mr-5">
            <v-label>
              Email Id
              <span class="red--text">*</span>
            </v-label>
            <v-text-field
              class="pt-2"
              label="Enter Email Id"
              v-model="request.EmailAddress"
              outlined
              dense
              :rules="emailRules"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3" class="mr-5">
            <v-label>
              Password
              <span class="red--text">*</span>
            </v-label>
            <v-text-field
              class="pt-2"
              label="Enter Password"
              v-model="request.Password"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-label>
              Phone
              <span class="red--text">*</span>
            </v-label>
            <v-text-field
              class="pt-2"
              label="Enter Phone Number"
              v-model="request.PhoneNumber"
              outlined
              dense
              :rules="phoneRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="ml-5">
          <v-col cols="12" md="3" class="mr-5">
            <v-label>
              Address
              <span class="red--text">*</span>
            </v-label>
            <v-text-field
              class="pt-2"
              label="Enter Address"
              v-model="request.Address"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-label>
              Role
              <span class="red--text">*</span>
            </v-label>
            <v-select
              class="pt-2"
              :menu-props="{ offsetY: true }"
              :items="role"
              label="Select Employee Role"
              item-text="EmployeeRole"
              item-value="EmployeeRole"
              v-model="request.EmployeeRole"
              outlined
              dense
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="ml-5">
          <v-col
            cols="12"
            md="3"
            class="mr-5"
            v-if="
              request.ApprovalAdminId ||
              !(
                request.EmployeeRole === 'MasterAdmin' ||
                request.EmployeeRole === 'Approval Admin' ||
                request.EmployeeRole === ' '
              )
            "
          >
            <v-label>
              Approval Admin
              <span class="red--text">*</span>
            </v-label>
            <v-select
              class="pt-2"
              :menu-props="{ offsetY: true }"
              label="Select Approval Admin"
              :items="ApprovalAdmin"
              item-text="ApprovalAdmin"
              item-value="Id"
              outlined
              v-model="request.ApprovalAdminId"
              dense
            >
              <template v-slot:prepend-item v-if="option === 'Edit'">
                <v-list-item @click="request.ApprovalAdminId = null">
                  <v-list-item-title> Remove  </v-list-item-title>
                </v-list-item>
              </template>
            </v-select>
          </v-col>
          <v-col
            cols="12"
            md="3"
            v-if="
              request.MasterAdminId ||
              !(
                request.EmployeeRole === 'MasterAdmin' ||
                request.EmployeeRole === ' '
              )
            "
          >
            <v-label>
              Master Admin
              <span class="red--text">*</span>
            </v-label>
            <v-select
              class="pt-2"
              :menu-props="{ offsetY: true }"
              label="Select Master Admin"
              :items="MasterAdmin"
              item-text="MasterAdmin"
              item-value="Id"
              v-model="request.MasterAdminId"
              outlined
              dense
            >
              <template v-slot:prepend-item v-if="option === 'Edit'">
                <v-list-item @click="request.MasterAdminId = null">
                  <v-list-item-title>  Remove </v-list-item-title>
                </v-list-item>
              </template>
            </v-select>
          </v-col>
        </v-row>

        <v-row class="ml-7 mb-2">
          <v-checkbox
            false-value="0"
            true-value="1"
            label="Approval Admin Access"
            type="checkbox"
            required
            v-model="request.ApprovalAdminAccess"
          ></v-checkbox>
        </v-row>
        <v-row justify="center my-5">
          <v-btn
            x-large
            class="mb-7 indigo darken-4 white--text rounded-0 text-capitalize"
            @click="option === 'Create' ? createEmployee() : updateEmployee()"
            >{{ option }}</v-btn
          >
        </v-row>

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
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject, Prop } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import {
  AdminRequestModel,
  ApprovalAdminResponseModel,
  EmployeeModel,
  MasterAdminResponseModel,
  RoleResponseModel,
} from "@/model";
import { IEmployeeService } from "@/service";

@Component({
  mixins: [validationMixin],
})
export default class CreateEmployee extends Vue {
  @Inject("EmployeeService") EmployeeService: IEmployeeService;
  @Prop() editRequest: EmployeeModel;
  @Prop() option: string;
  public emailRules: any = [
    (v: any) => !!v || "E-mail is required",
    (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  public phoneRules: any = [
    (v: any) => !!v || "Phone Number is required",
    (v: any) =>
      (!isNaN(parseInt(v)) && v >= 0) || "Phone Number must be Valid Number",

    (v: any) => (v && v.length == 10) || "Phone Number must be 10 Numbers",
  ];

  public value: boolean = true;
  public request: EmployeeModel = new EmployeeModel();
  public adminRequest: AdminRequestModel = new AdminRequestModel();
  public role: Array<RoleResponseModel> = [];
  public MasterAdmin: Array<MasterAdminResponseModel> = [];
  public ApprovalAdmin: Array<ApprovalAdminResponseModel> = [];
  gender: any = ["Male", "Female"];
  snackbarText: string = "";
  snackbar: boolean = false;
  created() {
    if (this.option == "Edit") this.request = this.editRequest;
    this.GetRoles();
    this.GetMasterAdmin();
    this.GetApprovalAdmin();
  }
  private GetRoles() {
    this.EmployeeService.GetRoles().then(
      (response: Array<RoleResponseModel>) => {
        this.role = response;
      }
    );
  }
  private GetMasterAdmin() {
    this.adminRequest.companyId = this.$store.getters.companyId;
    this.EmployeeService.GetMasterAdmin(this.adminRequest).then(
      (response: Array<MasterAdminResponseModel>) => {
        this.MasterAdmin = response;
      }
    );
  }
  private GetApprovalAdmin() {
    this.adminRequest.companyId = this.$store.getters.companyId;
    this.EmployeeService.GetApprovalAdmin(this.adminRequest).then(
      (response: Array<ApprovalAdminResponseModel>) => {
        this.ApprovalAdmin = response;
      }
    );
  }
  public createEmployee() {
    this.EmployeeService.CreateEmployee(this.request).then(
      (response) => {
        this.snackbarText = response;
        this.snackbar = true;
        this.$router.push("/employee");
      },
      (err) => {
        if (err.response.status == 400) {
          this.snackbarText = err.response.data;
          this.snackbar = true;
        }
      }
    );
  }
  public updateEmployee() {
    this.EmployeeService.EditEmployee(
      this.request,
      this.request.EmployeeId
    ).then(
      (response) => {
        this.snackbarText = response;
        this.snackbar = true;
        this.$router.push("/employee");
      },
      (err) => {
        if (err.response.status == 400) {
          this.snackbarText = err.response.data;
          this.snackbar = true;
        }
      }
    );
  }
}
</script>
