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
              v-model="request.temporaryPassword"
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
              v-model="request.newPassword"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              placeholder="Confirm Password"
              outlined
              dense
              class="rounded-0"
              color="primary"
              v-model="request.confirmPassword"
              :append-icon="value1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value1 = !value1)"
              :type="value1 ? 'password' : 'text'"
            ></v-text-field>

            <v-row justify="center">
              <v-card-actions>
                <v-btn
                  color="primary"
                  class="rounded-0 white--text font-weight-light text-capitalize"
                  depressed
                  @click="resetPassword"
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

import { ResetPasswordRequestModel } from "@/model";
import { IAuthenticationService } from "@/service";

@Component({
  mixins: [validationMixin],
})
export default class ResetPassword extends Vue {
  @Inject("authService") authService: IAuthenticationService;

  snackbar: boolean = false;
  snackbarText: string = "";
  public dialog: boolean = true;

  public value: boolean = true;
  public value1: boolean = true;
  public value2: boolean = true;

  public request = new ResetPasswordRequestModel();

  get id(): string {
    return this.$store.getters.id;
  }

  public resetPassword() {
    if (
      (this.$refs.form as Vue & { validate: () => boolean }).validate() &&
      this.request.newPassword == this.request.confirmPassword
    ) {
      this.request.id = this.id;
      this.authService
        .ResetPassword(this.request)
        .then((response) => {
          this.snackbarText = response;
          this.snackbar = true;
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 500)
            this.snackbarText = error.response.data;
          this.snackbar = true;
        });
    }
  }
}
</script>
