<template>
  <div>
    <v-container fluid class="pa-8">
      <div class="ma-2 font-weight-regular">
        <v-icon medium class="pr-2"> mdi-home</v-icon>
        <span class="pr-3 large">></span> Employee List
      </div>
    </v-container>
    <template>
      <v-card class="mx-3" elevation="8">
        <v-card-title>
          <v-btn elevation="2" class="mx-3">Copy</v-btn>
          <v-btn elevation="2" class="mx-3">CSV</v-btn>
          <v-btn elevation="2" class="mx-3">Excel</v-btn>
          <v-btn elevation="2" class="mx-3">PDF</v-btn>
          <v-btn elevation="2" class="ml-3">Print</v-btn>
          <v-spacer></v-spacer>
          <router-link to="/createemployee" tag="button">
            <v-btn elevation="2" class="info">Create</v-btn>
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
          :items="desserts"
          :search="search"
          class="elevation-1"
        >
        </v-data-table>
      </v-card>
    </template>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Employee extends Vue {
  search: any = "";
  onCreateEmployee: any = false;
  headers: any = [
    {
      text: "#S.No",
      align: "start",
      sortable: true,
      value: "Sno",
      class: "teal lighten-4 title",
    },
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
      text: "Email Name",
      value: "EmailName",
      class: "teal lighten-4 title",
    },
    { text: "Phone", value: "Phone", class: "teal lighten-4 title" },
    { text: "Action", value: "Action", class: "teal lighten-4 title" },
  ];
  desserts: any = [
    {
      Sno: "1",
      FirstName: "MasterAdmin",
      LastName: "A",
      Designation: "MasterAdmin",
      EmailName: "MasterAdmin@gmail.com",
      Phone: "06789987654",
      Action: "xx",
    },
    {
      Sno: "1",
      FirstName: "MasterAdmin",
      LastName: "A",
      Designation: "MasterAdmin",
      EmailName: "MasterAdmin@gmail.com",
      Phone: "06789987654",
      Action: "xx",
    },
    {
      Sno: "1",
      FirstName: "MasterAdmin",
      LastName: "A",
      Designation: "MasterAdmin",
      EmailName: "MasterAdmin@gmail.com",
      Phone: "06789987654",
      Action: "xx",
    },
    {
      Sno: "1",
      FirstName: "MasterAdmin",
      LastName: "A",
      Designation: "MasterAdmin",
      EmailName: "MasterAdmin@gmail.com",
      Phone: "06789987654",
      Action: "xx",
    },
    {
      Sno: "1",
      FirstName: "MasterAdmin",
      LastName: "A",
      Designation: "MasterAdmin",
      EmailName: "MasterAdmin@gmail.com",
      Phone: "06789987654",
      Action: "xx",
    },
    {
      Sno: "1",
      FirstName: "MasterAdmin",
      LastName: "A",
      Designation: "MasterAdmin",
      EmailName: "MasterAdmin@gmail.com",
      Phone: "06789987654",
      Action: "xx",
    },
  ];
}
</script>