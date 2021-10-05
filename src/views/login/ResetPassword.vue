<template>
  <div>
    <v-parallax src="@/assets/login.jpg" height="700">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4" lg="4" align="center">
          <h2>Reset Password</h2>
          <!-- <v-img src="@/assets/forgot-password.png" height="100" width="100" class="mt-5"></v-img> -->
          <v-form class="mt-10">
            <v-text-field
              label="New Password"
              placeholder="New Password"
              outlined
              class="rounded-0"
              color="#ff6500"
              background-color="white"
              prepend-inner-icon="mdi-lock-reset"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              placeholder="Confirm Password"
              outlined
              class="rounded-0"
              color="#ff6500"
              background-color="white"
              prepend-inner-icon="mdi-lock-reset"
            ></v-text-field>
            <v-btn
              color="#ff6500"
              class="rounded-0 white--text font-weight-light text-capitalize"
              depressed
              >Reset</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { validationMixin } from "vuelidate";

import { ResetPasswordRequestModel, ResetPasswordResponse } from "@/model";
import { IAuthenticationService } from "@/service";

@Component({
  mixins: [validationMixin],
})
export default class ProjectsList extends Vue {
  @Inject("authService") authService: IAuthenticationService;

  snackbar: boolean = false;
  snackbarText: string = "";

  public request = new ResetPasswordRequestModel();

  public resetPassword() {
   
    if (this.$refs.form as Vue && this.request.password == this.request.confirmPassword ) {
      
      this.authService.ResetPassword(this.request).then((response: ResetPasswordResponse) => {
          this.snackbarText = response;

          this.snackbar = true;
        })
        .catch((error) => {
         
          if (error.response.status == 500)
            this.snackbarText = error.response.data;

          this.snackbar = true;
        });
    }
  }
}
</script>
