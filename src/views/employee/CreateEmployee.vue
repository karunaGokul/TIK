<template>
  <div>
    <v-container fluid class="pa-8">
      <div class="ma-2 text-center font-weight-regular">
        CREATE NEW EMPLOYEE
      </div>
    </v-container>
    <template>
      <v-card class="mx-3" elevation="8">
        <v-row class="mx-6">
          <v-col cols="12" sm="6" md="2">
            <div class="text-center">Role <span class="red--text">*</span></div>

            <v-select
              :menu-props="{ offsetY: true }"
              label="--Select--"
              class="shrink pt-3"
              outlined
              dense
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="mx-6">
          <v-col cols="12" md="6">
            <div class="text-center">
              First Name <span class="red--text">*</span>
            </div>
            <v-text-field label="First Name" outlined dense></v-text-field>
            <div class="text-center">
              email <span class="red--text">*</span>
            </div>
            <v-text-field
              label="example@mail.com"
              outlined
              dense
            ></v-text-field>
            <div class="text-center">
              Gender<span class="red--text">*</span>
            </div>

            <v-select
              :menu-props="{ offsetY: true }"
              label="--Select--"
              class="shrink pt-3"
              outlined
              dense
            ></v-select>
            <div class="text-center">
              Address <span class="red--text">*</span>
            </div>
            <v-text-field label="Address" outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <div class="text-center">
              Last Name <span class="red--text">*</span>
            </div>
            <v-text-field label="Last Name" outlined dense></v-text-field>
            <div class="text-center">
              Password <span class="red--text">*</span>
            </div>
            <v-text-field label="Password" outlined dense></v-text-field>
            <div class="text-center">
              Phone <span class="red--text">*</span>
            </div>
            <v-text-field outlined dense></v-text-field>
            <div class="text-center">
              Category<span class="red--text">*</span>
            </div>
            <v-select
              :menu-props="{ offsetY: true }"
              label="Select Your Category"
              class="shrink pt-3"
              outlined
              dense
            ></v-select>
          </v-col>
        </v-row>
        <v-row justify="center mt-3">
          <v-btn elevation="2" class="info mb-7">Create</v-btn>
        </v-row>
      </v-card>
    </template>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CreateEmployee extends Vue {}
</script>
  