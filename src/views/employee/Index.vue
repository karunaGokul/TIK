<template>
  <div>
    <v-container fluid class="pa-8">
      <div class="ma-2">
        <router-link link to="/" class="text-decoration-none">
          <v-icon large> mdi-home</v-icon>
        </router-link>
        <v-icon large> mdi-chevron-right</v-icon>
        Employee List
      </div>
    </v-container>

    <template>
      <v-card class="mx-3" elevation="8">
        <v-card-title>
          <v-btn elevation="2" class="ma-3">Copy</v-btn>
          <v-btn elevation="2" class="ma-3">CSV</v-btn>
          <v-btn elevation="2" class="ma-3">Excel</v-btn>
          <v-btn elevation="2" class="ma-3">PDF</v-btn>
          <v-btn elevation="2" class="ma-3">Print</v-btn>
          <v-spacer></v-spacer>
          <router-link to="/createemployee" tag="button">
            <v-btn class="indigo darken-4 white--text rounded-0 text-capitalize"
              >Create</v-btn
            >
          </router-link>

          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Search"
            append-icon="mdi-magnify"
            class="shrink pt-4"
            outlined
            dense
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="response"
          :search="search"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:[`item.Action`]="{ item }">
            <v-icon small class="mr-2" @click="editEmployee">
              mdi-pencil
            </v-icon>

            <v-icon small @click="deleteEmployee"> mdi-delete </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </template>
  </div>
</template>
 
<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import { EmployeeRequestModel, EmployeeResponse } from "@/model";
import { IEmployeeService } from "@/service";

@Component
export default class Employee extends Vue {
  @Inject("EmployeeService") EmployeeService: IEmployeeService;
  response: Array<EmployeeResponse> = [];
  request: EmployeeRequestModel = new EmployeeRequestModel();

  toggleEditProfile: boolean = false;
  search: any = "";
  onCreateEmployee: any = false;
  created() {
    this.getEmployee();
  }
  public getEmployee() {
    this.request.id = this.$store.getters.id;
    this.EmployeeService.GetEmployees(this.request).then((response) => {});
  }

  // public deleteEmployee() {
  //   this.request.id = this.$store.getters.id;
  //   this.EmployeeService.DeleteEmployee(this.request.id).then((response) => {
  //     this.$store.dispatch("showAlert", {
  //       message: "Employee deleted sucessfully",
  //       snackBarClass: "fa-check",
  //       type: "success",
  //     });
  //     this.request.id = null;
  //     this.getEmployee();
  //   });
  // }

  // public editEmployee() {
  //   this.request.id = this.$store.getters.id;
  //   this.EmployeeService.EditEmployee(this.request).then(
  //     (response: any) => {
  //       this.$emit(" ");
  //     }
  //   );
  // }

  search: any = "";
  onCreateEmployee: any = false;
  headers: any = [
    {
      text: "First Name",
      value: "FirstName",
      class: "teal lighten-4 title",
    },
    { text: "Last Name", value: "LastName", class: "teal lighten-4 title" },
    {
      text: "Designation",
      value: "Designation",
      class: "teal lighten-4 title",
    },
    {
      text: "Email Address",
      value: "EmailAddress",
      class: "teal lighten-4 title",
    },
    {
      text: "PhoneNumber",
      value: "PhoneNumber",
      class: "teal lighten-4 title",
    },
    { text: "Action", value: "Action", class: "teal lighten-4 title" },
  ];
  // employees: any = [
  //   {
  //     Sno: "1",
  //     FirstName: "MasterAdmin",
  //     LastName: "A",
  //     Designation: "MasterAdmin",
  //     EmailName: "MasterAdmin@gmail.com",
  //     Phone: "06789987654",

  //   },
  //   {
  //     Sno: "1",
  //     FirstName: "MasterAdmin",
  //     LastName: "A",
  //     Designation: "MasterAdmin",
  //     EmailName: "MasterAdmin@gmail.com",
  //     Phone: "06789987654",

  //   },
  //   {
  //     Sno: "1",
  //     FirstName: "MasterAdmin",
  //     LastName: "A",
  //     Designation: "MasterAdmin",
  //     EmailName: "MasterAdmin@gmail.com",
  //     Phone: "06789987654",

  //   },
  //   {
  //     Sno: "1",
  //     FirstName: "MasterAdmin",
  //     LastName: "A",
  //     Designation: "MasterAdmin",
  //     EmailName: "MasterAdmin@gmail.com",
  //     Phone: "06789987654",

  //   },
  //   {
  //     Sno: "1",
  //     FirstName: "MasterAdmin",
  //     LastName: "A",
  //     Designation: "MasterAdmin",
  //     EmailName: "MasterAdmin@gmail.com",
  //     Phone: "06789987654",

  //   },
  //   {
  //     Sno: "1",
  //     FirstName: "MasterAdmin",
  //     LastName: "A",
  //     Designation: "MasterAdmin",
  //     EmailName: "MasterAdmin@gmail.com",
  //     Phone: "06789987654",

  //   },
  // ];
}
</script>