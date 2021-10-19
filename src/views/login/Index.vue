<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <v-parallax src="@/assets/login.jpg" height="700">
          <div class="pl-10 pt-16">
            <h1>Welcome To Textile</h1>
            <h2 class="py-2">Login to continue Access</h2>
            <p>
              Today we are thinking of all our members across the world and are
              encouraged by the support our networks bring in times such as
              these. Use the left test instrument details to attempt a
              transaction on the staging environment and login.
            </p>
          </div>
        </v-parallax>
      </v-col>

      <v-col class="pt-16 px-16 mx-5">
        <h2 class="pb-7 pt-15">Sign in</h2>
        <v-container class="fluid">
          <v-form ref="form">
            <v-label>Email ID</v-label>
            <v-text-field
              outlined
              dense
              placeholder="Enter Email ID"
              class="py-2 rounded-0"
              v-model="request.EmailAddress"
              :rules="emailRules"
              required
            >
            </v-text-field>

            <v-label>Password</v-label>
            <v-text-field
              outlined
              dense
              placeholder="Enter Password"
              class="pt-2 rounded-0"
              v-model="request.Password"             
              :rules="passwordRules"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="() => (value = !value)"
                  :type="value ? 'password' : 'text'"
              required
            ></v-text-field>

            <v-row>
              <v-col cols="12" sm="8">
                <v-checkbox
                  value="1"
                  label="Remember Me"
                  type="checkbox"
                  class="mt-0"
                ></v-checkbox>
              </v-col>

              <v-col cols="12" sm="4">
                <router-link to="/forgotpassword" class="text-decoration-none">
                  Forget Password?
                </router-link>
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
            >
              Sign In
            </v-btn>
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
                <v-btn
                  color="red"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  <v-icon> mdi-close-box</v-icon>
                </v-btn>
              </template>
            </v-snackbar>
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

import { AuthenticationRequestModel, AuthenticationResponse } from "@/model";
import { IAuthenticationService } from "@/service";

@Component({
  mixins: [validationMixin],
})
export default class Login extends Vue {
  @Inject("authService") authService: IAuthenticationService;

  snackbar: boolean = false;
  snackbarText: string = "";
  public request = new AuthenticationRequestModel();

  public emailRules: any = [
    (v: any) => !!v || "E-mail is required",
    (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  public passwordRules: any = [(v: any) => !!v || "Password is required"];
  public value: boolean = true;

  //(v: any) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||  "Password must contain at least lowercase letter, one number, a special character and one uppercase letter",

  public signIn() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.$store.dispatch("login", this.request).then(
        (response: AuthenticationResponse) => {
          if (this.$store.getters.isLoggedIn) {
            this.$router.push("/dashboard");
          }
        },
        (err) => {
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
