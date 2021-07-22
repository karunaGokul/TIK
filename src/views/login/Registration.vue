<template>
  <div>
    <v-row class="pt-16">
      <v-col cols="6" class="pt-16" color="green">
        <v-parallax
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          height="600"
        >
          <h2 class="pl-10">Lets Get</h2>
          <h1 class="font-weight-black pl-10">Started</h1>
          <p class="pl-10">
            Today we are thinking of all our members across the world and are
            encouraged by the support our networks bring in times such as these.
            Use the left test instrument details to attempt a transaction on the
            staging environment and Register.
          </p>
        </v-parallax>

        <v-parallax
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          height="600"
        >
        </v-parallax>
        <v-parallax
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          height="600"
        >
        </v-parallax>
      </v-col>

      <v-col class="pt-16 pl-4 pr-10">
        <h2 class="pb-7 pt-15">Sign Up</h2>

        <v-form>
          <v-row>
            <v-col>
              <v-label>First Name</v-label>
              <v-text-field
                outlined
                placeholder="Enter First Name"
                class="py-3"
                required
              ></v-text-field>
            </v-col>

            <v-col>
              <v-label>Last Name</v-label>
              <v-text-field
                outlined
                placeholder="Enter Last Name"
                class="py-3"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>Phone Number</v-label>
              <v-text-field
                outlined
                placeholder="Enter Phone Number"
                class="py-3"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-label>Email ID</v-label>
              <v-text-field
                outlined
                placeholder="Enter Email ID"
                class="py-3"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>Password</v-label>
              <v-text-field
                outlined
                placeholder="Enter Password"
                class="py-3"
                required
              ></v-text-field>
            </v-col>

            <v-col>
              <v-label>Confirm Password</v-label>
              <v-text-field
                outlined
                placeholder="Re-Enter Password"
                class="py-3"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-label>Select Your Category</v-label>
          <v-select
            outlined
            placeholder="Select Category"
            v-model="select"
            :items="category"
            class="py-3"
          ></v-select>

          <v-row>
            <v-col cols="8">
              <v-label>Enter GST Number</v-label>
              <v-text-field
                outlined
                placeholder="Enter GST Number"
                class="py-3"
                required
              ></v-text-field>
            </v-col>

            <v-col class="pt-13 pl-16">
              <v-btn
                class="white--text font-weight-light text-capitalize"
                color="#ff6500"
                x-large
                depressed
                >Verify</v-btn
              >
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>Address</v-label>
              <v-text-field
                outlined
                placeholder="Enter Address"
                class="py-3"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-label>Appartment, Unit, Office</v-label>
              <v-text-field
                outlined
                placeholder="Enter Appartment, Unit, Office"
                class="py-3"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>Country</v-label>
              <v-select
                outlined
                placeholder="Select Country"
                v-model="select"
                :items="country"
                class="py-3"
                required
              ></v-select>
            </v-col>

            <v-col>
              <v-label>State</v-label>
              <v-select
                outlined
                placeholder="Select State"
                v-model="select"
                :items="state"
                class="py-3"
                required
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>City</v-label>
              <v-select
                outlined
                placeholder="Select City"
                v-model="select"
                :items="city"
                class="py-3"
                required
              ></v-select>
            </v-col>

            <v-col>
              <v-label>Zip Code</v-label>
              <v-text-field
                outlined
                placeholder="Enter Zip Code"
                class="py-3"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-checkbox
            value="1"
            label="I Agree to all the Terms & conditions"
            type="checkbox"
            required
            v-model="checkbox"
            :rules="checkboxRules"
          ></v-checkbox>

          <v-btn
            color="#ff6500"
            class="py-5 rounded-0 d-flex justify-center white--text font-weight-light text-capitalize"
            width="30%"
            depressed
            block
            >Sign Up</v-btn
          >

          <div class="text-caption py-5">
            Already have an account?
            <router-link to="/login">sign in</router-link>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "Registration",

  data() {
    return {
      checkbox: "false",
      checkboxRules: [(v) => !!v || "You must agree to continue!"],
      category: [
        "Company",
        "Company + jobwork Unit",
        "Mills",
        "Knitting",
        "Dyeing",
        "Processing",
        "Printing",
        "Ready Fabrics",
        "Embroidery",
        "Job Work Units",
        "Pieces",
      ],
      country: ["India"],
      state: ["select state"],
      city: ["select city"],
    };
  },
};
</script>

<style scoped></style>
