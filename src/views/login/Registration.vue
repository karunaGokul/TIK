<template>
  <div >
    <v-row>
      <v-col cols="12" md="6">
        <v-parallax src="@/assets/signup.jpg" >
          <div class="pl-10">
            <h2>Lets Get</h2>
            <h1 class="font-weight-black py-3">Started</h1>
            <p>
              Today we are thinking of all our members across the world and are
              encouraged by the support our networks bring in times such as these.
              Use the left test instrument details to attempt a transaction on the
              staging environment and Register.
            </p>
          </div>
        </v-parallax>
      </v-col>

      <v-col class="pt-16 pl-6 pr-10" >
        <h2 class="pb-7 pt-15">Sign Up</h2>

        <v-form>
          <v-row>
            <v-col>
              <v-label>First Name</v-label>
              <v-text-field
                outlined
                dense
                placeholder="Enter First Name"
                class="py-2 rounded-0"
                v-model="request.FirstName"
                required
              ></v-text-field>
            </v-col>

            <v-col>
              <v-label>Last Name</v-label>
              <v-text-field
                outlined
                dense
                placeholder="Enter Last Name"
                class="py-2 rounded-0"
                v-model="request.LastName"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>Phone Number</v-label>
              <v-text-field
                outlined
                dense
                placeholder="Enter Phone Number"
                class="py-2 rounded-0"
                v-model="request.PhoneNumber"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-label>Email ID</v-label>
              <v-text-field
                outlined
                dense
                placeholder="Enter Email ID"
                class="py-2 rounded-0"
                v-model="request.EmailAddress"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>Password</v-label>
              <v-text-field
                outlined
                dense
                placeholder="Enter Password"
                class="py-2 rounded-0"
                v-model="request.Password"
                required
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-label>Confirm Password</v-label>
              <v-text-field
                outlined
                dense
                placeholder="Re-Enter Password"
                v-model="request.ConfirmPassword"
                class="py-2 rounded-0"
                :append-icon="value1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value1 = !value1)"
                :type="value1 ? 'password' : 'text'"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-label>Select Your Category</v-label>
          <v-select
            outlined
            dense
            placeholder="Select Category"
            v-model="request.Category"
            :items="category"
            item-text="categoryName"
            item-value="id"
            class="py-2 rounded-0"
          ></v-select>

          <v-row>
            <v-col sm="8">
              <v-label>Enter GST Number</v-label>
              <v-text-field
                outlined
                dense
                placeholder="Enter GST Number"
                class="py-2 rounded-0"
                v-model="request.GSTNumber"
                required
              ></v-text-field>
            </v-col>

            <v-col class="pt-13 pl-16 mt-n3">
              <v-btn
                class="white--text font-weight-light text-capitalize rounded-0"
                color="#ff6500"
                large
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
                dense
                placeholder="Enter Address"
                v-model="request.Address"
                class="rounded-0"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-label>Appartment</v-label>
              <v-text-field
                outlined
                dense
                placeholder="Enter Appartment, Unit, Office"
                v-model="request.ApartmentUnitOffice"
                class="rounded-0"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>Country</v-label>
              <v-select
                outlined
                dense
                placeholder="Select Country"
                v-model="request.CountryId"
                :items="country"
                item-text="countryName"
                item-value="id"
                class="py-2 rounded-0"
                @change="getState()"
                required
              ></v-select>
            </v-col>

            <v-col>
              <v-label>State</v-label>
              <v-select
                outlined
                dense
                placeholder="Select State"
                v-model="request.StateId"
                :items="state"
                item-text="stateName"
                item-value="id"
                class="py-2 rounded-0"
                @change="getCity()"
                required
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>City</v-label>
              <v-select
                outlined
                dense
                placeholder="Select City"
                v-model="request.CityId"
                :items="city"
                item-text="cityName"
                item-value="id"
                class="py-3 rounded-0"
                required
              ></v-select>
            </v-col>

            <v-col>
              <v-label>Zip Code</v-label>
              <v-text-field
                outlined
                dense
                placeholder="Enter Zip Code"
                class="py-3 rounded-0"
                required
                v-model="request.ZipCode"
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
            class="rounded-0 white--text font-weight-light text-capitalize"
            depressed
            block
            @click="SignUp"
          >
            Sign Up
          </v-btn>
          <v-snackbar
            v-model="snackbar"
            :timeout="2000"
            color="deep-orange lighten-5 pink--text"
            right
            top
          >
            <v-icon color="pink">mdi-exclamation-thick </v-icon>
            {{ snackbarText }}
            <template v-slot:action="{ attrs }">
              <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
                <v-icon> mdi-close-box</v-icon>
              </v-btn>
            </template>
          </v-snackbar>

          <div class="text-caption py-5">
            Already have an account?
            <router-link to="/login" class="text-decoration-none"
              >sign in</router-link
            >
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import {
  RegistrationRequestModel,
  CountryResponseModel,
  StateRequestModel,
  StateResponseModel,
  CityRequestModel,
  CityResponseModel,
  CategoryResponseModel,
} from "@/model";
import { IRegistrationService } from "@/service";

@Component({
  mixins: [validationMixin],
})
export default class Registration extends Vue {
  @Inject("registrationService") registrationService: IRegistrationService;
  public request = new RegistrationRequestModel();
  public category: Array<CategoryResponseModel> = [];
  public country: Array<CountryResponseModel> = [];
  public state: Array<StateResponseModel> = [];
  public city: Array<CityResponseModel> = [];
  public CountryId = new StateRequestModel();
  public StateId = new CityRequestModel();
  snackbar: boolean = false;
  snackbarText: string = "";
  checkbox: boolean;
  value: boolean = true;
  value1: boolean = true;
  checkboxRules: any = [(v: any) => !!v || "You must agree to continue!"];
  created() {
    this.getCountry();
    this.getCategory();
  }
  private getCategory() {
    this.registrationService
      .getCategory()
      .then((response: Array<CategoryResponseModel>) => {
        this.category = response;
      });
  }
  private getCountry() {
    this.registrationService
      .getCountry()
      .then((response: Array<CountryResponseModel>) => {
        this.country = response;
      });
  }
  private getState() {
    this.CountryId.CountryId = this.request.CountryId;
    this.registrationService
      .getState(this.CountryId)
      .then((response: Array<StateResponseModel>) => {
        this.state = response;
      });
  }
  private getCity() {
    this.StateId.StateId = this.request.StateId;
    this.registrationService
      .getCity(this.StateId)
      .then((response: Array<CityResponseModel>) => {
        this.city = response;
      });
  }
  public SignUp() {
    this.registrationService.registration(this.request).then(
      (response) => {
        /*this.snackbarText = response;
        this.snackbar = true;*/
        this.$router.push("/");
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
</script>
