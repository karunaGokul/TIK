<template>
  <div>
    <v-card>
      <v-img
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        max-height="300"
      />
    </v-card>

    <v-card elevation="4" class="mx-16 mt-n16" height="300" color="#EEEEEE">
      <v-container>
        <v-row>
          <v-col class="col-2 pt-5">
            <v-img
              :src="`data:image/png;base64,${response.image}`"
              max-width="250"
              max-height="250"
            ></v-img>
            <h2 class="text-align-center pt-5">{{ response.unitName }}</h2>

            <v-rating
              :value="4.5"
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
            <v-row>
              <h3>About</h3>

              <v-spacer></v-spacer>
              <v-btn
                class="
                  white--text
                  font-weight-regular
                  text-capitalize
                  hidden-sm-and-down
                "
                color="#fd7e14"
                @click="toggleEditProfile = true"
              >
                Edit Profile
              </v-btn>
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

    <v-sheet class="mx-auto" max-width="1500">
      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item v-for="n in 10" :key="n">
          <v-row class="fill-height ma-1" align="center" justify="center">
            <v-img src="@/assets/Gallery/gallery1.jpg" height="300" width="260">
            </v-img>
          </v-row>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <v-container>
      <div class="my-15" justify="center" align="center">
        <h1>Company Details</h1>
        <Divider />
      </div>

      <v-card class="d-flex justify-left pl-10 mb-16">
        <router-link to="/productDetails" tag="button">
          <v-btn flat>Mills</v-btn>
        </router-link>
        <v-btn>Knitting</v-btn>
        <v-btn>Pieces</v-btn>
        <v-btn>Dying</v-btn>
        <v-btn>Job Work</v-btn>
        <v-btn>Printing</v-btn>
      </v-card>

      <v-row>
        <v-col v-for="image in images" :key="image.title">
          <v-card>
            <v-img
              src="@/assets/Gallery/gallery1.jpg"
              class="white--text align-end"
              width="250"
              height="250"
            >
              <Divider />
              <v-card-title v-text="image.title"></v-card-title>
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
        <v-col v-for="image in images" :key="image.title">
          <v-card :loading="loading" class="mx-auto my-12" max-width="250">
            <v-img
              height="250"
              src="@/assets/Gallery/gallery1.jpg"
              alt="gallery"
            ></v-img>

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
import { IProfileService } from "@/service";
import { ProfileRequestModel, ProfileResponse } from "@/model";
import axios from "axios";

@Component({
  components: { Divider, EditProfile },
})
export default class Profile extends Vue {
  @Inject("ProfileService") ProfileService: IProfileService;
  response: ProfileResponse = new ProfileResponse();
  request: ProfileRequestModel = new ProfileRequestModel();

  toggleEditProfile: boolean = false;
  created() {
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
  images: any = [
    { title: "Yarn", src: "@/assets/Gallery/gallery1.jpg" },
    { title: "Brochures", src: "@/assets/Gallery/gallery2.jpg" },
    { title: "Machineries", src: "@/assets/Gallery/gallery3.jpg" },
    { title: "Certificates", src: "@/assets/Gallery/gallery4.jpg" },
  ];
  category: any = [
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
