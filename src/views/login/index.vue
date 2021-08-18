<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <v-parallax
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          height="600"
          no-gutters
        >
          <h1>Welcome To Textile</h1>
          <h2>Login to continue Access</h2>
          <p>
            Today we are thinking of all our members across the world and are
            encouraged by the support our networks bring in times such as these.
            Use the left test instrument details to attempt a transaction on the
            staging environment and login.
          </p>
        </v-parallax>
      </v-col>

      <v-col class="pt-16 px-16 mx-5">
        <h2 class="pb-7 pt-15">Sign in</h2>
        <v-container class="fluid">
          <v-form ref="form" v-model="valid">
            <v-label>Email ID</v-label>
            <v-text-field
              outlined
              dense
              placeholder="Enter Email ID"
              class="py-2"
              v-model="request.EmailAddress"
              :rules="emailRules"
              required
            ></v-text-field>

            <v-label>Password</v-label>
            <v-text-field
              outlined
              dense
              placeholder="Enter Password"
              class="pt-2"
              v-model="request.Password"
              type="password"
              :rules="passwordRules"
              required
            ></v-text-field>

            <v-row>
              <v-col cols="12" sm="8">
                <v-checkbox
                  value="1"
                  label="Remember Me"
                  type="checkbox"
                  class="mt-n5"
                ></v-checkbox>
              </v-col>
              <!-- <v-spacer></v-spacer> -->
              <v-col class="mt-n5">
                <router-link to="/forgotpassword" class="text-decoration-none"
                  >Forget Password?</router-link
                >
              </v-col>
            </v-row>

            <v-btn
              color="#ff6500"
              class="
                py-5
                rounded-0
                white--text
                font-weight-light
                text-capitalize
              "
              width="30%"
              depressed
              block
              @click="signIn"
              >Sign In</v-btn
            >

            <div class="text-caption py-5">
              Don't have an account yet?
              <router-link to="/registration" class="text-decoration-none"
                >sign up</router-link
              >
            </div>
          </v-form>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

import { validationMixin } from "vuelidate";

import { AuthenticationRequestModel } from "@/model";
import { IAuthenticationService } from "@/service";

@Component({
  mixins: [validationMixin],
})
export default class Login extends Vue {
  @Inject("authService") authService: IAuthenticationService;

  public valid: true;
  public request = new AuthenticationRequestModel();

  public emailRules: any = [
    (v: any) => !!v || "E-mail is required",
    (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  public passwordRules: any = [(v: any) => !!v || "Password is required"];

  //(v: any) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||  "Password must contain at least lowercase letter, one number, a special character and one uppercase letter",

  public signIn() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.authService
        .login(this.request)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          if (err.response.status == 400) {
            console.log(err.response.data.message);
          }
        });
    }
  }
}
</script>
