<template>
  <div>
    <v-dialog max-width="1200px" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="white--text font-weight-regular text-capitalize"
          color="#fd7e14"
          v-bind="attrs"
          v-on="on"
          @click="openDialog"
          >Edit Profile</v-btn
        >
      </template>
      <v-card>
        <v-row class="my-4 px-4">
          <v-card-title> Profile </v-card-title>
          <v-spacer></v-spacer>
          <v-btn @click="closeDialog" icon>
            <v-icon id="close-button">mdi-close</v-icon>
          </v-btn>
        </v-row>

        <v-divider></v-divider>
        <v-row class="mx-4">
          <v-card-title class="blue--text"> Profile </v-card-title>
        </v-row>
        <v-row class="mx-4">
          <v-col class="col-3">
            <v-card elevation="2" class="grey lighten-4 color" height="35%">
              <v-file-input
                hide-input
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-camera"
                class="d-flex justify-center"
              ></v-file-input>
            </v-card>
          </v-col>
          <v-col>
            <v-form>
              <v-text-field dense outlined v-model="companyName"></v-text-field>

              <v-text-field dense outlined v-model="description"></v-text-field>

              <v-text-field dense outlined v-model="summary"></v-text-field>

              <div class="text-subtitle-1">Contact Information</div>
              <v-text-field dense outlined v-model="address"></v-text-field>

              <v-text-field dense outlined v-model="email"></v-text-field>

              <v-text-field
                dense
                outlined
                v-model="contactNumberOne"
              ></v-text-field>

              <v-text-field
                dense
                outlined
                v-model="contactNumberTwo"
              ></v-text-field>
            </v-form>
          </v-col>
          <v-col class="col-4">
            <v-card elevation="2" class="grey lighten-4 color" height="35%">
              <v-file-input
                hide-input
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-camera"
                multiple
                class="d-flex justify-center"
              ></v-file-input>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mx-4 pb-2">
          <v-btn
            dark
            class="text-capitalize red color font-weight-regular"
            @click.prevent="submitForm"
            :details="details"
            >save</v-btn
          >
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class EditProfile extends Vue {
  dialog: boolean;
  companyName: string;
  description: string;
  summary: string;
  address: string | number;
  email: string | number;
  contactNumberOne: number;
  contactNumberTwo: number;
  details: Array<string | number>;

  closeDialog() {
    // this.$emit("update:dialog", false);

    // this.$emit("this.dialog", false)
    this.dialog = false;
    console.log(this.dialog);
  }

  submitForm() {
    this.details = [
      this.companyName,
      this.description,
      this.summary,
      this.address,
      this.email,
      this.contactNumberOne,
      this.contactNumberTwo,
    ];
    console.log(this.details);
  }
}
</script>

<style scoped></style>
