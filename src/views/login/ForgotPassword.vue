<template>
  <div>
    <v-dialog v-model="dialog" width="600px">
      <v-card>
        <v-row class="px-4">
          <v-card-title> ForgotPassword </v-card-title>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" icon class="pt-5">
            <v-icon id="close-button">mdi-close</v-icon>
          </v-btn>
        </v-row>
        <v-divider></v-divider>
        <v-row class="pt-4" justify="center">
          <v-card-subtitle>Enter Email-id to receive instructions</v-card-subtitle>
        </v-row>

        <v-row justify="center">
          <v-form ref="form">
            <v-text-field
              label="Email"
              placeholder="Enter Email Address"
              outlined
              dense
              class="rounded-0"
              color="primary"
              background-color="white"
              prepend-inner-icon="mdi-email"
              v-model="request.email"
            ></v-text-field>
            <v-btn
              color="primary"
              class="rounded-0 white--text font-weight-light text-capitalize"
              depressed
              @click="forgotPassword"
              >Send</v-btn
            >
          </v-form>
        </v-row>
        <v-row justify="center">
          <v-card-actions>
            <router-link to="/login" class="text-decoration-none black--text my-2 ">
              Back To Login 
              </router-link>
          </v-card-actions>
        </v-row>

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
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

import { validationMixin } from "vuelidate";

import { ForgotPasswordRequestModel, ForgotPasswordResponse } from "@/model";
import { IAuthenticationService } from "@/service";

@Component({
  mixins: [validationMixin],
})
export default class ForgotPassword extends Vue {
  @Inject("authService") authService: IAuthenticationService;

  snackbar: boolean = false;
  snackbarText: string = "";
  dialog: boolean = true;

  public request = new ForgotPasswordRequestModel();

  public forgotPassword() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.authService.ForgotPassword(this.request).then(
        (response) => {
          this.snackbarText = response;

          this.snackbar = true;
        },
        (err) => {
          console.log(err);
          if (err.response.status == 400) {
            this.snackbarText = err.response.data;

            this.snackbar = true;
          }
        }
      );
    }
  }
}
</script>
