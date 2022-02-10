<template>
  <v-row no-gutters style="height: 100%">
    <v-col cols="12" md="6">
      <v-img src="@/assets/login.jpg" height="100%">
        <v-container fill-height fluid class="white--text pa-8">
          <v-row align="center" justify="center">
            <v-col>
              <h3 class="text-h3">Let's Get Started</h3>
              <p class="text-body-1">
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
          <v-col class="pa-16">
            <h2 class="mb-4">Sign Up</h2>

            <v-form
              ref="form"
              autocomplete="off"
              @submit="signUp"
              class="text-capitalize"
            >
              <v-row>
                <v-col>
                  <v-label>first name</v-label>
                  <v-text-field
                    outlined
                    dense
                    autofocus
                    placeholder="Enter First Name"
                    class="rounded-0"
                    v-model="request.firstName"
                    required
                    :rules="nameRules"
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-label>last name</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Enter Last Name"
                    class="rounded-0"
                    v-model="request.lastName"
                    required
                    :rules="nameRules"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="mt-n5">
                <v-col>
                  <v-label>phone number</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Enter Phone Number"
                    class="rounded-0"
                    v-model="request.phoneNumber"
                    :rules="phoneRules"
                    required
                    onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-label>email id</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Enter Email ID"
                    class="rounded-0"
                    v-model="request.emailAddress"
                    :rules="emailRules"
                    required
                    autocomplete="new-password"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="mt-n5">
                <v-col>
                  <v-label>password</v-label>
                  <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        outlined
                        dense
                        placeholder="Enter Password"
                        class="rounded-0"
                        v-model="request.password"
                        required
                        v-bind="attrs"
                        v-on="on"
                        :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="() => (value = !value)"
                        :type="value ? 'password' : 'text'"
                        :rules="passwordRules"
                        autocomplete="new-password"
                      ></v-text-field>
                    </template>
                    <span
                      >Your password must be at least 8 characters long,
                      <br />with 1 uppercase & 1 lowercase character, 1
                      number<br />
                      and a special character.</span
                    >
                  </v-tooltip>
                </v-col>

                <v-col>
                  <v-label>confirm password</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Re-Enter Password"
                    v-model="request.confirmPassword"
                    class="rounded-0"
                    :append-icon="value1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value1 = !value1)"
                    :type="value1 ? 'password' : 'text'"
                    :rules="passwordRules"
                    autocomplete="new-password"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-label>select your category</v-label>
              <v-select
                outlined
                dense
                placeholder="Select Category"
                v-model="request.categoryName"
                :items="category"
                item-text="categoryName"
                item-value="id"
                class="rounded-0"
                required
                :rules="[(v) => !!v || 'Category is required']"
              ></v-select>

              <v-row>
                <v-col sm="8">
                  <v-label>enter GST number</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Enter GST Number"
                    class="rounded-0"
                    v-model="request.gstNumber"
                    required
                    :rules="[(v) => !!v || 'GST is required']"
                  ></v-text-field>
                </v-col>

                <v-col class="pt-13 pl-16 mt-n5">
                  <v-btn
                    class="
                      white--text
                      font-weight-light
                      rounded-0
                    "
                    color="primary"
                    large
                    depressed
                    >Verify</v-btn
                  >
                </v-col>
              </v-row>

              <v-row class="mt-n5">
                <v-col>
                  <v-label>address</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Enter Address"
                    v-model="request.address"
                    class="rounded-0"
                    :rules="[(v) => !!v || 'Address is required']"
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-label>appartment</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Enter Appartment, Unit, Office"
                    v-model="request.apartmentUnitOffice"
                    class="rounded-0"
                    :rules="[(v) => !!v || 'Appartment is required']"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="mt-n5">
                <v-col>
                  <v-label>country</v-label>
                  <v-select
                    outlined
                    dense
                    placeholder="Select Country"
                    v-model="request.countryId"
                    :items="country"
                    item-text="countryName"
                    item-value="id"
                    class="rounded-0"
                    @change="getState"
                    required
                    :rules="[(v) => !!v || 'Country is required']"
                  ></v-select>
                </v-col>

                <v-col>
                  <v-label>state</v-label>
                  <v-select
                    outlined
                    dense
                    placeholder="Select State"
                    v-model="request.stateId"
                    :items="state"
                    item-text="stateName"
                    item-value="stateId"
                    class="rounded-0"
                    @change="getCity"
                    required
                    :rules="[(v) => !!v || 'State is required']"
                  ></v-select>
                </v-col>
              </v-row>

              <v-row class="mt-n5">
                <v-col>
                  <v-label>city</v-label>
                  <v-select
                    outlined
                    dense
                    placeholder="Select City"
                    v-model="request.cityId"
                    :items="city"
                    item-text="cityName"
                    item-value="id"
                    class="rounded-0"
                    required
                    :rules="[(v) => !!v || 'City is required']"
                  ></v-select>
                </v-col>

                <v-col>
                  <v-label>zip code</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Enter Zip Code"
                    class="rounded-0"
                    required
                    v-model="request.zipCode"
                    :rules="ZipCodeRules"
                    onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-checkbox
                value="1"
                label="I Agree to all the Terms & conditions"
                type="checkbox"
                required
                v-model="checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
              ></v-checkbox>

              <v-btn
                color="primary"
                class="rounded-0 white--text font-weight-light"
                depressed
                block
                :loading="loading"
                @click.prevent="signUp"
                type="submit"
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
                Already have an account?
                <router-link to="/login" class="text-decoration-none"
                  >sign in</router-link
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
  public snackbar: boolean = false;
  public snackbarText: string = "";
  public checkbox: boolean = false;
  public value: boolean = true;
  public value1: boolean = true;
  public loading: boolean = false;

  public nameRules: any = [
    (v: any) => !!v || "Name is required",
    (v: any) => (v && v.length <= 50) || "Name must be less than 10 characters",
  ];

  public emailRules: any = [
    (v: any) => !!v || "E-mail is required",
    (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];

  public phoneRules: any = [
    (v: any) => !!v || "Phone Number is required",
    (v: any) =>
      (!isNaN(parseInt(v)) && v >= 0) || "Phone Number must be Valid Number",

    (v: any) => (v && v.length == 10) || "Phone Number must be 10 Numbers",
  ];

  public ZipCodeRules: any = [
    (v: any) =>
      (!isNaN(parseInt(v)) && v >= 0) || "Zipcode must be Valid Number",
  ];

  public passwordRules: any = [
    (v: any) => !!v || "Password is required",
    (v: any) =>
      /(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v) ||
      "Your password must be at least 8 characters long with 1 uppercase & 1 lowercase character, 1 number and a special character.",
  ];

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
    this.CountryId.countryId = this.request.countryId;
    this.registrationService
      .getState(this.CountryId)
      .then((response: Array<StateResponseModel>) => {
        this.state = response;
      });
  }
  private getCity() {
    this.StateId.stateId = this.request.stateId;
    this.registrationService
      .getCity(this.StateId)
      .then((response: Array<CityResponseModel>) => {
        this.city = response;
      });
  }
  public signUp() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.loading = true;
      this.registrationService.registration(this.request).then(
        (response) => {
          this.loading = false;
          this.$router.push("/");
        },
        (err) => {
          this.loading = false;
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
