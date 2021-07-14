<template>
  <div>
    <v-parallax
      height="400"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      class="mb-16 pt-16"
    >
      <v-card elevation="4" class="mx-16 mt-16" height="300" color="#EEEEEE">
        <v-container>
          <v-row>
            <v-col class="col-2 pt-5">
              <v-img
                src="@/assets/textile1.png"
                max-width="250"
                max-height="250"
              ></v-img
              ><br />
              <h2 class="text-align-center">Heading</h2>
              <br />
              <v-icon color="#fd7e14"> mdi-star </v-icon>
              <v-icon color="#fd7e14"> mdi-star </v-icon>
              <v-icon color="#fd7e14"> mdi-star </v-icon>
              <v-icon color="#fd7e14"> mdi-star </v-icon>
              <v-icon color="#fd7e14"> mdi-star </v-icon><br />

              <div>
                <span>
                  <v-icon>mdi-facebook</v-icon>
                  <v-icon>mdi-instagram</v-icon>
                  <v-icon>mdi-facebook</v-icon>
                  <v-icon>mdi-home</v-icon>
                </span>
              </div>
            </v-col>

            <v-col class="pt-10 pl-5">
              <v-row>
                <h3>About</h3>
                <v-spacer></v-spacer>
                <v-btn class="white--text font-weight-regular" color="#fd7e14"
                  >Edit Profile</v-btn
                >
              </v-row>

              <v-row class="pr-16 text-wrap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique illum amet quibusdam. Repellendus maxime natus
                expedita placeat atque. Esse voluptatibus porro delectus rem,
                aut cumque obcaecati! Cum at suscipit illo?
              </v-row>

              <v-row>
                <v-col>
                  <h3>Phone</h3>
                  +(001) 234 567 89<br />
                  9876543210
                </v-col>
                <v-col>
                  <h3>Address</h3>
                </v-col>
                <v-col>
                  <i-frame
                    width="50"
                    height="50"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4480573726487!2d76.9719331152611!3d11.004970857941775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859afbcf5eddf%3A0xbff9a46833e3bd2c!2s1045%2C%20Avinashi%20Rd%2C%20ATT%20Colony%2C%20Gopalapuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641018!5e0!3m2!1sen!2sin!4v1612870942687!5m2!1sen!2sin"
                  ></i-frame>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-parallax>

    <h1 class="d-flex justify-center my-15">Gallery</h1>

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

    <h1 class="d-flex justify-center my-15">Company Details</h1>

    <Slider />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  name: "Profile",

  data() {
    return {
      model: null,
    };
  },
};
</script>

<style scoped>
</style>