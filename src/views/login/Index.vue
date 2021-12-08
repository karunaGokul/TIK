<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <v-parallax src="@/assets/login.jpg" height="650">
          <div class="pl-10">
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
        <h2 class="pb-7">Sign in</h2>
        <v-container class="fluid">
          <v-form ref="form" class="mt-n4 ml-n2" autocomplete="off" @submit="signIn">
            <v-label>Email ID</v-label>
            <v-text-field
              outlined
              dense
              placeholder="Enter Email ID"
              class="py-2 rounded-0"
              v-model="request.EmailAddress"
              :rules="emailRules"
              required
              autocomplete="new-password"
            >
            </v-text-field>

            <v-label>Password</v-label>
            <v-text-field
              outlined
              dense
              placeholder="Enter Password"
              class="pt-2 rounded-0"
              v-model.trim="request.Password"
              :rules="passwordRules"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
              required
              autocomplete="new-password"
            ></v-text-field>

            <v-row>
              <v-col cols="12" sm="8">
                <v-checkbox
                  value="1"
                  label="Remember Me"
                  type="checkbox"
                  class="mt-0"
                  v-model="rememberValue"
                ></v-checkbox>
              </v-col>

              <v-col cols="12" sm="4">
                <v-btn
                  plain
                  class="text-capitalize"
                  @click="toggleForgotPassword = true"
                >
                  Forgot Password?
                </v-btn>
              </v-col>
            </v-row>

            <ForgotPassword v-if="toggleForgotPassword" />

            <v-btn
              color="primary"
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
              @click.prevent="signIn"
              :loading="loading"
              type="submit"
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
              <router-link to="/registration" class="text-decoration-none">
                sign up</router-link
              >
            </div>
          </v-form>
        </v-container>
      </v-col>
    </v-row>
    <ResetPassword v-if="resetPassword" :resetId="resetId" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

import { validationMixin } from "vuelidate";

import { AuthenticationRequestModel, AuthenticationResponse } from "@/model";
import { IAuthenticationService } from "@/service";

import ForgotPassword from "./ForgotPassword.vue";
import ResetPassword from "./ResetPassword.vue";

@Component({
  mixins: [validationMixin],
  components: { ForgotPassword, ResetPassword },
})
export default class Login extends Vue {
  @Inject("authService") authService: IAuthenticationService;

  public snackbar: boolean = false;
  public snackbarText: string = "";
  public toggleForgotPassword: boolean = false;
  public loading: boolean = false;
  public value: boolean = true;
  public request = new AuthenticationRequestModel();
  public rememberValue: boolean = false;
  public resetPassword: boolean = false;
  public resetId = new AuthenticationResponse();

  public emailRules: any = [
    (v: any) => !!v || "E-mail is required",
    (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];

  public passwordRules: any = [(v: any) => !!v || "Password is required"];

  public signIn() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.loading = true;
      this.$store.dispatch("login", this.request).then(
        (response: AuthenticationResponse) => {
          this.loading = false;
          if (this.$store.getters.isLoggedIn) {
            this.$router.push("/dashboard");
          } else {
            this.resetPassword = true;
            this.resetId = response;
          }
        },
        (err) => {
          this.loading = false;
          if (err.response.status === 400) {
            this.snackbarText = err.response.data;
            this.snackbar = true;
          }
        }
      );
    }
  }
}
</script>
