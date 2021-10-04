<template>
  <div>
    <v-parallax src="@/assets/login.jpg" height="700">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4" lg="4" align="center">
          <h2>Forgot Password</h2>
          <p class="font-weight-bold mt-5">
            Enter Email-id to receive instructions
          </p>

          <v-form class="mt-5">
            <v-text-field
              label="Email"
              placeholder="Enter Email Address"
              outlined
              class="rounded-0"
              color="#ff6500"
              background-color="white"
              prepend-inner-icon="mdi-email"
              v-model="request.email"
            ></v-text-field>
            <v-btn
              color="#ff6500"
              class="rounded-0 white--text font-weight-light text-capitalize"
              depressed
              @click="forgotPassword()"
              >Send</v-btn
            >
          </v-form>

          <div class="mt-5">
            <router-link to="/login" class="text-decoration-none white--text"
              >Back To Login</router-link
            >
          </div>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

import { validationMixin } from "vuelidate";

import { ForgotPasswordRequestModel } from "@/model";
import { IAuthenticationService } from "@/service";

@Component({
  mixins: [validationMixin],
})

export default class ForgotPassword extends Vue {
    @Inject("authService") authService: IAuthenticationService;

    snackbar: boolean = false;
    snackbarText: string = "";

    public request = new ForgotPasswordRequestModel();

    public forgotPassword () {
        //  if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
            this.authService.ForgotPassword(this.request).then((response) => {
            this.snackbarText = response;
            this.snackbar = true;
        })
        // (err) => {
        //   if (err.response.status == 400) {
        //     this.snackbarText = err.response.data;
        //     this.snackbar = true;
        //   }
        // }
         }

    // }

}
</script>
