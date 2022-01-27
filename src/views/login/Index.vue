<template>
  <v-row no-gutters style="height: 100%">
    <v-col cols="12" md="6">
      <v-img src="@/assets/login.jpg" height="100%">
        <v-container fill-height fluid class="white--text pa-8">
          <v-row align="center" justify="center">
            <v-col>
              <h1>Welcome To Textile</h1>
              <h2 class="py-2">Login to continue Access</h2>
              <p>
                Today we are thinking of all our members across the world and
                are encouraged by the support our networks bring in times such
                as these. Use the left test instrument details to attempt a
                transaction on the staging environment and login.
              </p></v-col
            >
          </v-row>
        </v-container>
      </v-img>
    </v-col>
    <v-col>
      <v-container fill-height fluid class="pa-8">
        <v-row align="center" justify="center">
          <v-col>
            <h2 class="mb-4 pl-8">Sign In</h2>
            <v-form
              ref="form"
              class="pa-8"
              autocomplete="off"
              @submit="signIn"
            >
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
                autofocus
                hide-details
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
                hide-details
              ></v-text-field>

              <v-row class="mt-2">
                <v-col cols="6">
                  <v-checkbox
                    value="1"
                    label="Remember Me"
                    type="checkbox"
                    class="mt-0"
                    v-model="rememberValue"
                  ></v-checkbox>
                </v-col>

                <v-col cols="6" class="text-right">
                  <v-btn
                    plain
                    class="text-capitalize"
                    @click="toggleForgotPassword = true"
                  >
                    forgot password?
                  </v-btn>
                </v-col>
              </v-row>

              <ForgotPassword v-if="toggleForgotPassword" />
              <ResetPassword v-if="resetPassword" :resetId="resetId" />

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
                <router-link
                  to="/registration"
                  class="text-decoration-none text-capitalize"
                >
                  sign up</router-link
                >
              </div>
            </v-form>
          </v-col></v-row
        >
      </v-container>
    </v-col>
  </v-row>
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
