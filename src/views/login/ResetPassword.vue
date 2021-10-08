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
              v-model="request.newPassword"
              :append-icon="value1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value1 = !value1)"
              :type="value1 ? 'password' : 'text'"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              placeholder="Confirm Password"
              outlined
              class="rounded-0"
              color="#ff6500"
              background-color="white"
              v-model="request.confirmPassword"
              :append-icon="value1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value1 = !value1)"
              :type="value1 ? 'password' : 'text'"
            ></v-text-field>
            <v-btn
              color="#ff6500"
              class="rounded-0 white--text font-weight-light text-capitalize"
              depressed
              @click="resetPassword"
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

<<<<<<< HEAD
import { ResetPasswordRequestModel  } from "@/model";
=======
import { ResetPasswordRequestModel, ResetPasswordResponse } from "@/model";
>>>>>>> d33449faced27bb5cba0f245f5794069fb13b9cc
import { IAuthenticationService } from "@/service";

@Component({
  mixins: [validationMixin],
})
<<<<<<< HEAD

export default class ProjectsList extends Vue {
 @Inject("authService") authService: IAuthenticationService;
=======
export default class ProjectsList extends Vue {
  @Inject("authService") authService: IAuthenticationService;
>>>>>>> d33449faced27bb5cba0f245f5794069fb13b9cc

  snackbar: boolean = false;
  snackbarText: string = "";

  public request = new ResetPasswordRequestModel();

  public resetPassword() {
<<<<<<< HEAD
        if((this.$refs.form as Vue & { validate: () => boolean }).validate() && this.request.newPassword == this.request.confirmPassword) {
            this.authService.ResetPassword(this.request).then(response => {
               this.snackbarText = response;
               this.snackbar = true;
                this.$router.push('/');
            }).catch((error) => {
               console.log(error);
                if(error.response.status == 500)
                  this.snackbarText = error.response.data;
                  this.snackbar = true;
                    
            });
        } 
    }

=======
    if (
      (this.$refs.form as Vue) &&
      this.request.newPassword == this.request.confirmPassword
    ) {
      this.authService
        .ResetPassword(this.request)
        .then((response: ResetPasswordResponse) => {
          // this.snackbarText = response;

          this.snackbar = true;
        })
        .catch((error) => {
          if (error.response.status == 500)
            this.snackbarText = error.response.data;

          this.snackbar = true;
        });
    }
  }
>>>>>>> d33449faced27bb5cba0f245f5794069fb13b9cc
}
</script>
