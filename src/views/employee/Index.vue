<template>
  <div>
    <v-container fluid class="pa-4">
      <div class="ma-2">
        <router-link to="/dashboard" class="text-decoration-none">
          <v-icon large dark class="teal"> mdi-home</v-icon>
        </router-link>
        <v-icon large> mdi-chevron-right</v-icon>
        Employee
      </div>
    </v-container>

    <template>
      <v-card class="mx-3" elevation="8">
        <v-card-title class="mx-6">
          <h5>Employee List</h5>
          <router-link
            :to="{ name: 'CreateEmployee', params: { Id: 'Create' }}"
            tag="button"
          >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="blue darken-4" 
                v-bind="attrs"
                v-on="on" 
                class="mx-2"
              > mdi-plus-circle</v-icon>
            </template>
            <span>Create Employee</span>
          </v-tooltip>
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
          class="elevation-1 mx-6"
          :loading="loading"
        >
          <template v-slot:[`item.Action`]="{ item }">
            <router-link
              :to="{
                name: 'CreateEmployee',
                params: { Id: item.EmployeeId},
              }"
              tag="button"
            >
              <v-icon small color="blue" class="mr-2"> mdi-pencil </v-icon>
            </router-link>
            <v-icon small color="red" @click="deleteEmployee(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
      <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        color="green lighten-5 green--text"
        absolute
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
  request: EmployeeRequestModel = new EmployeeRequestModel();
  loading: boolean = false;
  search: string = "";
  snackbarText: string = "";
  snackbar: boolean = false;

  created() {
    this.getEmployees();
  }

  public getEmployees() {
    this.request.id = this.$store.getters.id;
    this.loading = true;
    this.EmployeeService.GetEmployees(this.request).then((response) => {
      this.loading = false;
      this.response = response;
    });
  }

  public deleteEmployee(item: EmployeeModel) {
    this.EmployeeService.DeleteEmployee(item.EmployeeId).then((response) => {
      this.snackbarText = response;
      this.snackbar = true;
      this.getEmployees();
    });
  }
  headers: any = [
    {
      text: "First Name",
      value: "FirstName",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "Last Name",
      value: "LastName",
      class: "teal lighten-4 subtitle-2",
    },
    {
      text: "EmployeeRole",
      value: "EmployeeRole",
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
<style>
tbody tr:nth-of-type(even) {
  background-color: #e0f2f1;
}
</style>