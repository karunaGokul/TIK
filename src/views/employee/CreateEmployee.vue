<template>
  <div>
    <v-container fluid class="pa-4">
      <div class="ma-2">
        <router-link to="/dashboard" class="text-decoration-none">
          <v-icon large dark class="teal"> mdi-home</v-icon>
        </router-link>
        <v-icon large> mdi-chevron-right</v-icon>
        <router-link to="/employee" class="text-decoration-none black--text"
          >Employee</router-link
        >
        <v-icon large> mdi-chevron-right</v-icon>
        {{ option }} Employee
      </div>
    </v-container>

    <v-card class="mx-5 mb-5 pt-4" elevation="8">
      <v-form class="ml-10" ref="form" autocomplete="off">
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
              autofocus
              v-model="request.FirstName"
              class="py-2"
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
              v-model="request.LastName"
              class="py-2"
              :rules="nameRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-label>
              Gender
              <span class="red--text">*</span>
            </v-label>
            <v-select
              class="py-2"
              :menu-props="{ offsetY: true }"
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
              class="py-2"
              v-model="request.EmailAddress"
              outlined
              dense
              :rules="emailRules"
              required
              autocomplete="new-password"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3" class="mr-5">
            <div v-if="option === 'Create'">
              <v-label>
                Password
                <span class="red--text">*</span>
              </v-label>
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="py-2"
                    v-model="request.Password"
                    :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value = !value)"
                    :type="value ? 'password' : 'text'"
                    outlined
                    dense
                    required
                    v-bind="attrs"
                    v-on="on"
                    autocomplete="new-password"
                    :rules="passwordRules"
                  ></v-text-field>
                </template>
                <span
                  >Your password must be at least 8 characters long,<br />
                  with 1 uppercase & 1 lowercase character, 1 number <br />and a
                  special character.</span
                >
              </v-tooltip>
            </div>
            <div v-else>
              <v-label> Password </v-label>
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="py-2"
                    v-model="request.Password"
                    :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value = !value)"
                    :type="value ? 'password' : 'text'"
                    outlined
                    dense
                    v-bind="attrs"
                    v-on="on"
                    :rules="request.Password ? passwordRules1 : []"
                    autocomplete="new-password"
                  ></v-text-field>
                </template>
                <span
                  >Your password must be at least 8 characters long, <br />with
                  1 uppercase & 1 lowercase character, 1 number<br />
                  and a special character.</span
                >
              </v-tooltip>
            </div>
          </v-col>

          <v-col cols="12" md="3">
            <v-label>
              Phone
              <span class="red--text">*</span>
            </v-label>
            <v-text-field
              class="py-2"
              v-model="request.PhoneNumber"
              outlined
              dense
              :rules="phoneRules"
              required
              onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
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
              class="py-2"
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
              class="py-2"
              :menu-props="{ offsetY: true }"
              :items="role"
              item-text="EmployeeRole"
              item-value="EmployeeRole"
              v-model="request.EmployeeRole"
              outlined
              dense
              :rules="[(v) => !!v || 'Role is required']"
            >
            </v-select>
          </v-col>
          <v-col cols="12" md="3" class="ml-4">
            <v-label>
              Category
              <span class="red--text">*</span>
            </v-label>
            <v-select
              class="py-2"
              :menu-props="{ offsetY: true }"
              :items="CategoryResponse"
              item-text="categoryName"
              item-value="categoryName"
              outlined
              v-model="request.Category"
              dense
              :rules="[(v) => !!v || 'Category is required']"
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <v-card
              color="transparent"
              flat
              class="pa-5"
              style="border:solid 1px rgba(0, 0, 0, 0.38) !important"
            >
              <v-label>
                Notification
              </v-label>
              <v-select
                multiple
                outlined
                dense
                :items="NotificationResponse"
                item-text="status"
                item-value="id"
                v-model="request.StatusList"
              >
              </v-select>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    fab
                    plain
                    x-large
                    class="pr-2"
                    v-bind="attrs"
                    v-on="on"
                    v-model="request.IsSMS"
                    @click="request.IsSMS = !request.IsSMS"
                  >
                    <v-icon v-if="request.IsSMS" color="primary"
                      >mdi-message-processing</v-icon
                    >
                    <v-icon v-else color="grey">mdi-message-processing</v-icon>
                  </v-btn>
                </template>
                <span>SMS </span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    fab
                    plain
                    x-large
                    class="pr-2"
                    v-bind="attrs"
                    v-on="on"
                    v-model="request.IsEmail"
                    @click="request.IsEmail = !request.IsEmail"
                  >
                    <v-icon v-if="request.IsEmail" color="primary"
                      >mdi-email-multiple</v-icon
                    >
                    <v-icon v-else color="grey">mdi-email-multiple</v-icon>
                  </v-btn>
                </template>
                <span>E-Mail</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    fab
                    plain
                    x-large
                    class="pr-2"
                    v-bind="attrs"
                    v-on="on"
                    v-model="request.IsWhatsApp"
                    @click="request.IsWhatsApp = !request.IsWhatsApp"
                  >
                    <v-icon v-if="request.IsWhatsApp" color="primary"
                      >mdi-whatsapp</v-icon
                    >
                    <v-icon v-else color="grey">mdi-whatsapp</v-icon>
                  </v-btn>
                </template>
                <span>WhatsApp</span>
              </v-tooltip>
            </v-card>
            <div class="red--text" v-if="notification">
              "Please Select atleast one media method..."
            </div>
          </v-col>
        </v-row>
        <v-row>
          <!-- <span v-for="(item, index) in icons" :key="index">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    large
                    color="primary"
                    class="mt-7 mr-4"
                    @click="bindData(request, item.data)"
                    v-bind="attrs"
                    v-on="on"
                    >{{ item.icon }}</v-icon
                  >
                </template>
                <span>{{ item.tip }}</span>
              </v-tooltip>
            </span> -->
        </v-row>
        <v-row
          class="ml-2 mb-2 mt-n2"
          v-if="
            (category === 'Company' &&
              request.EmployeeRole === 'Merchandiser') ||
              (category != 'Company' &&
                request.EmployeeRole === 'Quote InCharge')
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
            v-if="option === 'Create'"
            class="indigo darken-4 white--text rounded-0 text-capitalize my-5"
            @click.prevent="createEmployee()"
            type="submit"
            >{{ option }}</v-btn
          >
          <v-btn
            large
            v-else
            class="indigo darken-4 white--text rounded-0 text-capitalize my-5"
            @click.prevent="updateEmployee()"
            type="submit"
          >
            Update
          </v-btn>
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
            <v-btn color="red" text v-bind="attrs" @click="snackbar1 = false">
              <v-icon> mdi-close-box</v-icon>
            </v-btn>
          </template>
        </v-snackbar>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import {
  AdminRequestModel,
  ApprovalAdminResponseModel,
  CategoryResponseModel,
  EmployeeModel,
  MasterAdminResponseModel,
  MerchandiserResponseModel,
  RoleResponseModel,
  GetNotificationResponseModel,
} from "@/model";
import { IEmployeeService, IRegistrationService } from "@/service";

@Component({
  mixins: [validationMixin],
})
export default class CreateEmployee extends Vue {
  @Inject("EmployeeService") EmployeeService: IEmployeeService;
  @Inject("registrationService") registrationService: IRegistrationService;

  icons: any = [
    { icon: "mdi-message-processing", tip: "SMS", data: "IsSMS" },
    { icon: "mdi-email-multiple", tip: "E-Mail", data: "IsEmail" },
    { icon: "mdi-whatsapp", tip: "WhatsApp", data: "IsWhatsApp" },
  ];

  public nameRules: any = [
    (v: any) => !!v || "Name is required",
    (v: any) => (v && v.length <= 50) || "Name must be less than 10 characters",
    (v: any) => !/[ ]/.test(v) || "No spaces allowed",
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
      /(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v) ||
      "Your password must be at least 8 characters long with 1 uppercase & 1 lowercase character, 1 number and a special character.",
  ];

  public passwordRules1: any = [
    (v: any) =>
      /(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v) ||
      "Your password must be at least 8 characters long with 1 uppercase & 1 lowercase character, 1 number and a special character.",
  ];

  public data: string = "";
  public value: boolean = true;
  public request: EmployeeModel = new EmployeeModel();
  public adminRequest: AdminRequestModel = new AdminRequestModel();
  public role: Array<RoleResponseModel> = [];
  public Merchandiser: Array<MerchandiserResponseModel> = [];
  public MasterAdmin: Array<MasterAdminResponseModel> = [];
  public CategoryResponse: Array<CategoryResponseModel> = [];
  public NotificationResponse: Array<GetNotificationResponseModel> = [];
  public ApprovalAdmin: Array<ApprovalAdminResponseModel> = [];
  public gender: any = ["Male", "Female"];
  public EmployeeId: string = "";
  public option: string = "";
  public snackbarText: string = "";
  public snackbar: boolean = false;
  public snackbarText1: string = "";
  public snackbar1: boolean = false;
  public notification: boolean = false;

  created() {
    if (this.$route.params.Id != "Create") {
      this.option = "Edit";
      this.GetEmployee();
    } else {
      this.option = "Create";
    }
    this.GetRoles();
    this.getCategory();
    this.getNotificationList();
  }

  // bindData(request: EmployeeModel, data: any) {
  //   request[data] = !request[data];
  // }

  public getCategory() {
    this.registrationService
      .getCategory()
      .then((response: Array<CategoryResponseModel>) => {
        this.CategoryResponse = response;
      });
  }

  public getNotificationList() {
    this.EmployeeService.getNotificationList().then(
      (response: Array<GetNotificationResponseModel>) => {
        this.NotificationResponse = response;
      }
    );
  }

  public GetEmployee() {
    this.EmployeeService.GetEmployee(this.$route.params.Id).then((response) => {
      this.request = response;
    });
  }

  public GetRoles() {
    this.EmployeeService.GetRoles().then(
      (response: Array<RoleResponseModel>) => {
        this.role = response;
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
            this.snackbarText1 = err.response.data;
            this.snackbar1 = true;
          }
        }
      );
    }
  }
  public updateEmployee() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      if (
        (this.request.StatusList !== [] &&
          (this.request.IsSMS === true ||
            this.request.IsEmail === true ||
            this.request.IsWhatsApp === true)) ||
        this.request.StatusList === []
      ) {
        this.request.EmployeeId = this.$route.params.Id;
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
              this.snackbarText1 = err.response.data;
              this.snackbar1 = true;
            }
          }
        );
      }
      else {
        this.notification = true;
      }
    }
  }

  get category(): string {
    return this.$store.getters.category;
  }
}
</script>
