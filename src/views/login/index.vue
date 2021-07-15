<template>
  <div>
    <v-row>
      <v-col cols="6" color="green">
        <v-parallax
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          height="600"
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
          <v-form class="" v-model="valid">
            <v-label>Email ID</v-label>
            <v-text-field
              outlined
              placeholder="Enter Email ID"
              class="py-3"
              v-model="email"
              :rules="emailRules"
            ></v-text-field>

            <v-label>Password</v-label>
            <v-text-field
              outlined
              placeholder="Enter Password"
              class="pt-3"
              v-model="password"
              :rules="passwordRules"
              required
            ></v-text-field>

            <v-checkbox
              value="1"
              label="Remember Me"
              type="checkbox"
              required
              class="align-center"
            ></v-checkbox>

            <div>
              <router-link to="/forgot password">Forget Password</router-link>
            </div>

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
              @click="submitForm"
              >Sign In</v-btn
            >

            <div class="text-caption py-5">
              Don't have an account yet?
              <router-link to="/registration">sign up</router-link>
            </div>
          </v-form>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: "false",
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
          "Password must contain at least lowercase letter, one number, a special character and one uppercase letter",
      ],
    };
  },

  methods: {
    submitForm() {
      this.$refs.form.validate();
    },
  },
};
</script>
