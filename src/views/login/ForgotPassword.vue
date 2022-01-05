<template>
  <div style="overflow: hidden">
    <v-dialog v-model="dialog" width="500" height="auto">
      <v-card class="px-2" elevation="6">
        <v-card-title>
          Forgot Password
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" icon>
            <v-icon id="close-button">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-subtitle class="pt-2">
          Enter Email-id to receive temporary password
        </v-card-subtitle>

        <v-card-text>
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

            <v-row justify="center" class="mt-n5">
              <v-card-actions>
                <v-btn
                  color="primary"
                  class="rounded-0 white--text font-weight-light text-capitalize"
                  depressed
                  @click="forgotPassword"
                  :loading="loading"
                  >Send</v-btn
                >
              </v-card-actions>
            </v-row>
            <v-row justify="center">
              <v-btn
                plain
                class="text-decoration-none text-capitalize my-2"
                @click="dialog = false"
              >
                back to login
              </v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>

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

  public snackbar: boolean = false;
  public snackbarText: string = "";
  public dialog: boolean = true;
  public loading: boolean = false;
  public request = new ForgotPasswordRequestModel();

  public forgotPassword() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.loading = true;
      this.authService.ForgotPassword(this.request).then(
        (response) => {
          this.loading = false;
          this.snackbarText = response;
          this.snackbar = true;
          this.dialog = false;
        },
        (err) => {
          this.loading = false;
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
