<template>
  <div>
    <v-container fluid class="pa-8">
      <div class="ma-2">
        <router-link to="/" class="text-decoration-none">
          <v-icon large> mdi-home</v-icon>
        </router-link>
        <v-icon large> mdi-chevron-right</v-icon>
        <router-link to="/employee" class="text-decoration-none black--text"
          >Employee</router-link
        >
        <v-icon large> mdi-chevron-right</v-icon>
        {{ option }} Employee
      </div>
    </v-container>

    <v-card class="mx-3 mb-5" elevation="8">
      <v-form class="ml-8" ref="form">
        <v-row class="pl-3 pt-5">
          <div class="font-weight-regular">{{ option }} Employee</div>
        </v-row>

        <v-row>
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
              :rules="nameRules"
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
              :rules="nameRules"
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
              :rules="[(v) => !!v || 'Gender is required']"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="my-n8">
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
              <span class="red--text" v-if="option === 'Create'">*</span>
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
              :rules="passwordRules"
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
        <v-row class="my-n8">
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
              :rules="[(v) => !!v || 'Address is required']"
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
              :rules="[(v) => !!v || 'Role is required']"
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            md="3"
            class="ml-4"
            v-if="
              request.MerchandiserId ||
              !(
                request.EmployeeRole === 'Merchandiser' ||
                request.EmployeeRole === 'MasterAdmin' ||
                request.EmployeeRole === 'Approval Admin' ||
                request.EmployeeRole === ' '
              )
            "
          >
            <!-- request.EmployeeRole === 'Quote InCharge' ||
              request.EmployeeRole != ' ' -->
            <v-label>
              Merchandiser
              <span class="red--text">*</span>
            </v-label>
            <v-select
              class="pt-2"
              :menu-props="{ offsetY: true }"
              label="Select Merchandiser"
              :items="Merchandiser"
              item-text="Merchandiser"
              item-value="Id"
              outlined
              v-model="request.MerchandiserId"
              dense
            >
              <template v-slot:prepend-item v-if="option === 'Edit'">
                <v-list-item @click="request.MerchandiserId = null">
                  <v-list-item-title> Remove </v-list-item-title>
                </v-list-item>
              </template>
            </v-select>
          </v-col>
        </v-row>

        <v-row class="mt-n8 mb-2">
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
                  <v-list-item-title> Remove </v-list-item-title>
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
                  <v-list-item-title> Remove </v-list-item-title>
                </v-list-item>
              </template>
            </v-select>
          </v-col>
        </v-row>

        <v-row
          class="ml-2 mb-2 mt-n2"
          v-if="
            (category === 'Company' &&
              request.EmployeeRole === 'Merchandiser') ||
            (category != 'Company' && request.EmployeeRole === 'Quote InCharge')
          "
        >
          <v-checkbox
            false-value="0"
            true-value="1"
            label="Approval Admin Access"
            type="checkbox"
            required
            v-model="request.ApprovalAdminAccess"
          ></v-checkbox>
        </v-row>
        <v-row justify="center">
          <v-btn
            large
            class="indigo darken-4 white--text rounded-0 text-capitalize mb-5"
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
  MerchandiserResponseModel,
  RoleResponseModel,
} from "@/model";
import { IEmployeeService } from "@/service";

@Component({
  mixins: [validationMixin],
})
export default class CreateEmployee extends Vue {
  @Inject("EmployeeService") EmployeeService: IEmployeeService;

  public nameRules: any = [
    (v: any) => !!v || "Name is required",
    (v: any) => (v && v.length <= 10) || "Name must be less than 10 characters",
  ];

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

  public passwordRules: any = [
    (v: any) => !!v || "Password is required",
    (v: any) =>
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v) ||
      "Password must contain at least one lowercase letter, one number, a special character and one uppercase letter",
  ];

  public value: boolean = true;
  public request: EmployeeModel = new EmployeeModel();
  public adminRequest: AdminRequestModel = new AdminRequestModel();
  public role: Array<RoleResponseModel> = [];
  public Merchandiser: Array<MerchandiserResponseModel> = [];
  public MasterAdmin: Array<MasterAdminResponseModel> = [];
  public ApprovalAdmin: Array<ApprovalAdminResponseModel> = [];
  public gender: any = ["Male", "Female"];
  public EmployeeId: string = "";
  public option: string = "";
  public snackbarText: string = "";
  public snackbar: boolean = false;

  created() {
    if (this.$route.params.Id != "Create") {
      this.option = "Edit";
      this.GetEmployee();
    } else {
      this.option = "Create";
    }

    this.GetRoles();
    this.GetMerchandiser();
    this.GetMasterAdmin();
    this.GetApprovalAdmin();
  }
  public GetEmployee() {
    this.EmployeeService.GetEmployee(this.$route.params.Id).then((response) => {
      this.request = response;
    });
  }

  private GetRoles() {
    this.EmployeeService.GetRoles().then(
      (response: Array<RoleResponseModel>) => {
        this.role = response;
      }
    );
  }
  private GetMerchandiser() {
    this.adminRequest.companyId = this.$store.getters.companyId;
    this.EmployeeService.GetMerchandiser(this.adminRequest).then(
      (response: Array<MerchandiserResponseModel>) => {
        this.Merchandiser = response;
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
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
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
  }
  public updateEmployee() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.request.EmployeeId=this.$route.params.Id;
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

  get category(): string {
    return this.$store.getters.category;
  }
}
</script>
