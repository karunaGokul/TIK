<template>
  <div>
    <v-row class="pt-16">
      <v-col cols="5" class="px-10 pt-16" background-color="#28a745">
        <h2>Lets Get</h2>
        <h1 class="font-weight-black">Started</h1>
        <p>
          Today we are thinking of all our members across the world and are
          encouraged by the support our networks bring in times such as these.
          Use the left test instrument details to attempt a transaction on the
          staging environment and Register.
        </p>
      </v-col>

      <v-col cols="7">
        <h2>Sign Up</h2>

        <v-form>
          <v-row>
            <v-col>
              <v-label>First Name</v-label>
              <v-text-field
                outlined
                placeholder="Enter First Name"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-label>Last Name</v-label>
              <v-text-field
                outlined
                placeholder="Enter Last Name"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>Phone Number</v-label>
              <v-text-field
                outlined
                placeholder="Enter Phone Number"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-label>Email ID</v-label>
              <v-text-field
                outlined
                placeholder="Enter Email ID"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>Password</v-label>
              <v-text-field
                outlined
                placeholder="Enter Password"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-label>Confirm Password</v-label>
              <v-text-field
                outlined
                placeholder="Re-Enter Password"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-label>Select Your Category</v-label>
          <v-select outlined placeholder="Select Category"></v-select>

          <v-row>
            <v-col>
              <v-label>Enter GST Number</v-label>
              <v-text-field
                outlined
                placeholder="Enter GST Number"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-btn class="big" color="#ff6500">Verify</v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>Address</v-label>
              <v-text-field outlined placeholder="Enter Address"></v-text-field>
            </v-col>

            <v-col>
              <v-label>Appartment, Unit, Office</v-label>
              <v-text-field
                outlined
                placeholder="Enter Appartment, Unit, Office"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>Country</v-label>
              <v-select outlined placeholder="Select Country"></v-select>
            </v-col>

            <v-col>
              <v-label>State</v-label>
              <v-select outlined placeholder="Select State"></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>City</v-label>
              <v-select outlined placeholder="Select City"></v-select>
            </v-col>

            <v-col>
              <v-label>Zip Code</v-label>
              <v-text-field
                outlined
                placeholder="Enter Zip Code"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-checkbox
            value="1"
            label="I Agree to all the Terms & conditions"
            type="checkbox"
            required
            class="align-center"
          ></v-checkbox>

          <v-btn color="#ff6500" class="text-xs-center">Sign Up</v-btn>

          <div class="text-caption">Already have an account?sign in</div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Register",
});
</script>

