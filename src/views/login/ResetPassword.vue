<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card class="px-2" elevation="6">
        <v-card-title>
          Reset Password
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" icon>
            <v-icon id="close-button">mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text>
          <v-form ref="form" class="mt-5">
            <v-text-field
              label="Temporary Password"
              placeholder="Temporary Password"
              outlined
              dense
              class="rounded-0"
              color="primary"
              v-model.trim="request.temporaryPassword"
              :append-icon="value2 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value2 = !value2)"
              :type="value2 ? 'password' : 'text'"
            ></v-text-field>
            <v-text-field
              label="New Password"
              placeholder="New Password"
              outlined
              dense
              class="rounded-0"
              color="primary"
              v-model.trim="request.newPassword"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
              :rules="passwordRules"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              placeholder="Confirm Password"
              outlined
              dense
              class="rounded-0"
              color="primary"
              v-model.trim="request.confirmPassword"
              :append-icon="value1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value1 = !value1)"
              :type="value1 ? 'password' : 'text'"
              :rules="passwordRules"
            ></v-text-field>

            <v-row justify="center">
              <v-card-actions>
                <v-btn
                  color="primary"
                  class="rounded-0 white--text font-weight-light text-capitalize"
                  depressed
                  @click="resetPassword"
                  :loading="loading"
                  >Reset</v-btn
                >
              </v-card-actions>
            </v-row>
          </v-form>
        </v-card-text>
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
      <v-snackbar
        v-model="snackbar1"
        :timeout="2000"
        color="deep-orange lighten-5 pink--text"
        absolute
        right
        top
      >
        <v-icon color="pink">mdi-exclamation-thick </v-icon>
        {{ snackbarText1 }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar1 = false">
            <v-icon> mdi-close-box</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject, Prop } from "vue-property-decorator";
import { validationMixin } from "vuelidate";

import { ResetPasswordRequestModel, AuthenticationResponse } from "@/model";
import { IAuthenticationService } from "@/service";

@Component({
  mixins: [validationMixin],
})
export default class ResetPassword extends Vue {
  @Inject("authService") authService: IAuthenticationService;
  @Prop() resetId: AuthenticationResponse;

  public snackbar: boolean = false;
  public snackbarText: string = "";
  public snackbar1: boolean = false;
  public snackbarText1: string = "";
  public dialog: boolean = true;

  public value: boolean = true;
  public value1: boolean = true;
  public value2: boolean = true;
  public loading: boolean = false;

  public request = new ResetPasswordRequestModel();

  public passwordRules: any = [
    (v: any) => !!v || "Password is required",
    (v: any) =>
      /(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v) ||
      "Your password must be at least 8 characters long with 1 uppercase & 1 lowercase character, 1 number and a special character.",
  ];


  public resetPassword() {
    if (
      (this.$refs.form as Vue & { validate: () => boolean }).validate() &&
      this.request.newPassword === this.request.confirmPassword
    ) {
      this.loading = true;
      this.request.id = this.resetId.userId;
      console.log(this.request.confirmPassword);
      this.authService.ResetPassword(this.request).then(
        (response) => {
          this.loading = false;
          this.snackbarText = response;
          this.snackbar = true;
          this.$router.push("/");
        },
        (err) => {
          this.loading = false;
          if (err.response.status === 400)
            this.snackbarText1 = err.response.data;
            this.snackbar1 = true;
        }
      );
    }
  }
}
</script>
