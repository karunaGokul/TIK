<template>
  <div>
    <v-container fluid class="pa-8">
      <div class="ma-2">
        <router-link link to="/" class="text-decoration-none">
          <v-icon large> mdi-home</v-icon>
        </router-link>
        <v-icon large> mdi-chevron-right</v-icon>
        Create New Employee
      </div>
    </v-container>

    <v-card class="mx-3 mb-5" elevation="8">
      <v-form>
        <v-row class="pl-12 pt-5">
          <div class="font-weight-regular">Create New Employee</div>
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
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3" class="mr-5">
            <v-label>
              Category
              <span class="red--text">*</span>
            </v-label>
            <v-select
              class="pt-2"
              :menu-props="{ offsetY: true }"
              label="Select Your Category"
              :items="category"
              outlined
              dense
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-label>
              Role
              <span class="red--text">*</span>
            </v-label>
            <v-select
              class="pt-2"
              :menu-props="{ offsetY: true }"
              label="Merchandiser"
              :items="role"
              v-model="request.EmployeeRole"
              outlined
              dense
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="ml-5">
          <v-col cols="12" md="3" class="mr-5">
            <v-label>
              Approval Admin
              <span class="red--text">*</span>
            </v-label>
            <v-select
              class="pt-2"
              :menu-props="{ offsetY: true }"
              label="Select Approval Admin"
              :items="admin"
              outlined
              dense
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-label>
              Master Admin
              <span class="red--text">*</span>
            </v-label>
            <v-select
              class="pt-2"
              :menu-props="{ offsetY: true }"
              label="Select Master Admin"
              :items="master"
              outlined
              dense
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="ml-7 mb-2">
          <v-checkbox
            value="1"
            label="Approval Admin Access"
            type="checkbox"
            required
            :rules="checkboxRules"
          ></v-checkbox>
        </v-row>
        <v-row justify="center my-5">
          <v-btn
            x-large
            class="mb-7 indigo darken-4 white--text rounded-0 text-capitalize"
            @click="Create"
            >Create</v-btn
          >
        </v-row>
      </v-form>
      <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        color="deep-orange lighten-5 pink--text"
        absolute
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
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { EmployeeResponse } from "@/model";
import { IEmployeeService } from "@/service";

@Component
export default class CreateEmployee extends Vue {
  @Inject("EmployeeService") EmployeeService: IEmployeeService;
  request: EmployeeResponse = new EmployeeResponse();

  gender: any = ["male", "female"];
  category: any = [];
  role: any = ["approver"];
  admin: any = [];
  master: any = [];
  snackbarText: string = "";
  snackbar: boolean = false;

  public Create() {
    this.EmployeeService.CreateEmployee(this.request).then(
      (response) => {
        // this.snackbarText = response;
        // this.snackbar = true;
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
