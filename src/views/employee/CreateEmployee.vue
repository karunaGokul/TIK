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
          <div class="font-weight-regular">
            Create New Employee
          </div>
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
            v-model="checkbox"
            :rules="checkboxRules"
          ></v-checkbox>
        </v-row>
        <v-row justify="center my-5">
          <v-btn x-large class="mb-7 indigo darken-4 white--text rounded-0 text-capitalize">Create</v-btn>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CreateEmployee extends Vue {}
</script>
