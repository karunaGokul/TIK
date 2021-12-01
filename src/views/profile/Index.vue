<template>
  <div>
    <v-card>
      <v-img
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        max-height="300"
      />
    </v-card>

    <v-card elevation="4" class="mx-16 mt-n16" height="350" color="#EEEEEE">
      <v-container>
        <v-row>
          <v-col class="col-2 pt-5">
            <v-img :src="`data:image/png;base64,${response.image}`"></v-img>
            <h3 class="text-align-center pt-5">{{ response.unitName }}</h3>

            <v-rating
              value="4.5"
              color="#fd7e14"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div>
              <span>
                <v-icon>mdi-facebook</v-icon>
                <v-icon>mdi-instagram</v-icon>
                <v-icon>mdi-information</v-icon>
                <v-icon>mdi-earth</v-icon>
              </span>
            </div>
          </v-col>

          <v-col class="pt-10 pl-5">
            <v-row class="pl-3">
              <h3>About</h3>

              <v-spacer></v-spacer>

              <!-- <v-btn
                  dark
                  class="text-capitalize font-weight-regular rounded-0"
                  color="primary"
                  @click="toggleResetPassword = true"
                >
                  Reset Password
                </v-btn>
              <ResetPassword v-if="toggleResetPassword" /> -->
              <span class="mx-3" v-if="role === 'MasterAdmin'">
                <v-btn
                  class="
                    white--text
                    font-weight-regular
                    text-capitalize
                    hidden-sm-and-down
                    rounded-0
                  "
                  color="primary"
                  @click="toggleEditProfile = true"
                >
                  Edit Profile
                </v-btn>
              </span>
              <div align="center">
                <EditProfile
                  :request="response"
                  @onEditProfileModel="onCloseEditProfileModel"
                  @closeModel="onCloseEditProfileModel"
                  v-if="toggleEditProfile"
                />
              </div>
            </v-row>

            <v-row class="pr-16 text-wrap">
              <v-col>
                <div>{{ response.title }}</div>
                <div>{{ response.description }}</div>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <h3>Phone</h3>
                {{ response.phoneNumber1 }}<br />
                {{ response.phoneNumber2 }}
              </v-col>
              <v-col>
                <h3>Address</h3>
                <div class="font-weight-regular text-capitalize">
                  <p>
                    {{ response.address }}
                  </p>
                </div>
              </v-col>

              <v-col>
                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4480573726487!2d76.9719331152611!3d11.004970857941775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859afbcf5eddf%3A0xbff9a46833e3bd2c!2s1045%2C%20Avinashi%20Rd%2C%20ATT%20Colony%2C%20Gopalapuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641018!5e0!3m2!1sen!2sin!4v1612870942687!5m2!1sen!2sin" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> -->
                <iframe
                  width="300"
                  height="150"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4480573726487!2d76.9719331152611!3d11.004970857941775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859afbcf5eddf%3A0xbff9a46833e3bd2c!2s1045%2C%20Avinashi%20Rd%2C%20ATT%20Colony%2C%20Gopalapuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641018!5e0!3m2!1sen!2sin!4v1612870942687!5m2!1sen!2sin"
                ></iframe>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <div class="my-15" justify="center" align="center">
      <h1>Gallery</h1>
      <Divider />
    </div>

    <v-sheet class="mx-auto" max-width="1450">
      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item v-for="n in 10" :key="n">
          <v-row class="fill-height ma-1" align="center" justify="center">
            <span v-for="image in galleryImages" :key="image.img" class="mx-1">
              <v-img :src="image.img" height="300" width="260"> </v-img>
            </span>
          </v-row>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <v-container>
      <div class="my-15" justify="center" align="center">
        <h1>Company Details</h1>
        <Divider />
      </div>

      <v-card class="d-flex justify-left mb-16 px-4" color="#EEEEEE">
        <v-btn
          color="primary"
          class="mx-1 my-4"
          v-for="(category, index) in categorys"
          :key="index"
          >{{ category }}</v-btn
        >
      </v-card>

      <v-row>
        <v-col class="mx-1" v-if="this.category != 'Company'">
          <v-card width="250px">
            <v-img
              src="@/assets/mill/yarn.png"
              alt="Yarn (or) Fabric Update"
              class="white--text align-end"
              width="250"
              height="250"
            >
              <Divider />
              <router-link to="/company">
                <v-card-title class="white--text"
                  >Yarn (or) Fabric Update</v-card-title
                >
              </router-link>
            </v-img>
          </v-card>
        </v-col>
        <v-col class="mx-1">
          <v-card width="250px">
            <v-img
              src="@/assets/mill/fabric.png"
              alt="Brochures"
              class="white--text align-end"
              width="250"
              height="250"
            >
              <Divider />
              <v-card-title class="white--text"> Brochures </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col class="mx-1">
          <v-card width="250px">
            <v-img
              src="@/assets/mill/textile-machine.png"
              alt="Machineries"
              class="white--text align-end"
              width="250"
              height="250"
            >
              <Divider />
              <v-card-title class="white--text">Machineries </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col class="mx-1">
          <v-card width="250px">
            <v-img
              src="@/assets/mill/certificate.png"
              alt="Certificates"
              class="white--text align-end"
              width="250"
              height="250"
            >
              <Divider />
              <v-card-title class="white--text">Certificates </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <div class="my-15" justify="center" align="center">
        <h1>Completed Projects</h1>
        <Divider />
      </div>

      <div width="50px">
        <v-select
          filled
          dense
          solo
          label="Select Your Category"
          :items="category"
          class=""
        >
        </v-select>
      </div>

      <v-row>
        <v-col v-for="image in galleryImages" :key="image.img">
          <v-card :loading="loading" class="mx-0 my-12" max-width="200">
            <v-img height="250" :src="image.img" alt="gallery"></v-img>

            <v-card-title>{{ image.title }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="#fd7e14"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
              </v-row>

              <div class="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita in facere eaque debitis nihil culpa? Molestiae, ducimus
                eaque consequuntur aliquid neque totam nisi veritatis provident
                ad, adipisci tenetur nihil id.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                class="white--text font-weight-regular text-capitalize"
                color="#fd7e14"
              >
                View Project
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";

import Divider from "@/components/Divider.vue";
import EditProfile from "./EditProfile.vue";
import ResetPassword from "@/views/login/ResetPassword.vue";

import { IProfileService } from "@/service";
import { ProfileRequestModel, ProfileResponse } from "@/model";

@Component({
  components: { Divider, EditProfile, ResetPassword },
})
export default class Profile extends Vue {
  @Inject("ProfileService") ProfileService: IProfileService;
  response: ProfileResponse = new ProfileResponse();
  request: ProfileRequestModel = new ProfileRequestModel();

  public toggleEditProfile: boolean = false;
  public toggleResetPassword: boolean = false;
  public loading: boolean = false;
  public value: string;
  public model: "";

  created() {
    if (this.category === "Company") {
      this.categorys.splice(0, 9);
      this.categorys.push("Company");
    }
    this.loadprofile();
  }
  public loadprofile() {
    this.request.id = this.$store.getters.id;
    this.ProfileService.getProfile(this.request).then(
      (response: ProfileResponse) => {
        this.response = response;
      }
    );
  }

  public onCloseEditProfileModel() {
    this.toggleEditProfile = false;
    this.loadprofile();
  }

  get category(): string {
    return this.$store.getters.category;
  }
  get role(): string {
    return this.$store.getters.role;
  }

  galleryImages: any = [
    {
      img: require("@/assets/gallery/gallery1.png"),
    },
    {
      img: require("@/assets/gallery/gallery2.png"),
    },
    {
      img: require("@/assets/gallery/gallery3.png"),
    },
    {
      img: require("@/assets/gallery/gallery4.png"),
    },
    {
      img: require("@/assets/gallery/gallery5.png"),
    },
  ];
  // companyImages: any = [
  //   {
  //     title: "Yarn (or) Fabric Update",
  //     src: require("@/assets/mill/yarn.png"),
  //   },
  //   { title: "Brochures", src: require("@/assets/mill/fabric.png") },
  //   { title: "Machineries", src: require("@/assets/mill/textile-machine.png") },
  //   { title: "Certificates", src: require("@/assets/mill/certificate.png") },
  // ];
  categorys: any = [
    "Mills",
    "Knitting",
    "Dyeing",
    "Processing",
    "Printing",
    "Ready Fabrics",
    "Embroidery",
    "Job Work Units",
    "Pieces",
  ];
}
</script>
