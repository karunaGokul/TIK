<template>
  <div>
    <v-container fluid class="pa-4">
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
            <v-btn
              class="indigo darken-4 white--text rounded-0 text-capitalize"
            >
              Create
            </v-btn>
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
            <v-icon small class="mr-2" @click="editEmployee(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteEmployee(EmployeeId)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="showDialog" max-width="500">
        <v-card>
          <v-row class="my-4 px-4">
            <v-card-title>Employee Details </v-card-title>
            <v-spacer></v-spacer>
            <v-btn @click="showDialog = false" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-row>
          <v-card-text>
            <div v-for="(value, name) in editRequest" :key="name">
              <v-text-field
                :label="name"
                v-model="editRequest[name]"
                outlined
                v-if="!(name==='EmployeeId')"
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-btn class="ml-auto" color="primary" @click="save(editRequest)">
                Save
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
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
    </template>
  </div>
</template>
 
<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import { EmployeeRequestModel, EmployeeModel } from "@/model";
import { IEmployeeService } from "@/service";

@Component
export default class Employee extends Vue {
  @Inject("EmployeeService") EmployeeService: IEmployeeService;
  public response: Array<EmployeeModel> = [];
  editRequest: EmployeeModel = new EmployeeModel();
  request: EmployeeRequestModel = new EmployeeRequestModel();
  search: string = "";
  snackbarText: string = "";
  snackbar: boolean = false;
  showDialog: boolean = false;
  EmployeeId: string= "";
  created() {
    this.getEmployee();
  }
  public getEmployee() {
    this.request.id = this.$store.getters.id;
    this.EmployeeService.GetEmployees(this.request).then((response) => {
      this.response = response;
    });
  }

  // public deleteEmployee(item: EmployeeModel) {
  //   this.request.id = item.EmployeeId;
  //   this.EmployeeService.DeleteEmployee(this.request).then((response) => {
  //     this.snackbarText = response;
  //     this.snackbar = true;
  //     this.getEmployee();
  //   });
  // }

 public deleteEmployee() {
    this.EmployeeService.DeleteEmployee(this.EmployeeId).then((response) => {
      // this.$store.dispatch("showAlert", {
      //   message: "Employee deleted sucessfully",
      //   snackBarClass: "fa-check",
      //   type: "success",
      // });
      this.snackbarText = response;
      this.snackbar = true;
      this.EmployeeId = null;
      this.getEmployee();
    });
  }

  public editEmployee(item: EmployeeModel) {
    this.showDialog = true;
    this.editRequest = item;
  }
  public save(editRequest: EmployeeModel) {
    this.EmployeeService.EditEmployee(editRequest).then((response) => {
      this.showDialog = false;
      this.snackbarText = response;
      this.snackbar = true;
      this.getEmployee();
    });
  }
  headers: any = [
    {
      text: "First Name",
      value: "FirstName",
      class: "teal lighten-4 subtitle-2",
    },
    { text: "Last Name", value: "LastName", class: "teal lighten-4 subtitle-2" },
    {
      text: "Designation",
      value: "Designation",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Email Address",
      value: "EmailAddress",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "PhoneNumber",
      value: "PhoneNumber",
      class: "teal lighten-4 subtitle-2",
    },
    { text: "Action", value: "Action", class: "teal lighten-4 subtitle-2" },
  ];
}
</script>