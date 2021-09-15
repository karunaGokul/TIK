<template>
  <div>
    <v-footer dark padless v-if="!isLoggedIn">
      <v-row class="pt-10 px-16">
        <v-col cols="6" md="2" class="text-left">
          <div>
            <h2 class="pb-4">TIK</h2>
            <subtitle-1>Location</subtitle-1>
            <p class="pt-5">
              1/22, Raja Street Tirupur, <br />
              Tamilnadu <br />
              +91 912344 98763 <br />
              +91 912344 98763 <br />
              support@textile.com
            </p>
          </div>
        </v-col>

        <v-col class="text-left" cols="6" md="2">
          <div>
            <h4 class="pb-4">Popular Category</h4>
            <p>Yarns</p>
            <p>Mens Wear</p>
            <p>Womens Wear</p>
            <p>T-Shirt</p>
            <p>Cotton Cloths</p>
          </div>
        </v-col>

        <v-col class="text-left" cols="6" md="2">
          <div>
            <h4 class="pb-4">Quick Links</h4>
            <p>About us</p>
            <p>Category</p>
            <p>Affilaites</p>
            <p>Register</p>
            <p>Contact us</p>
          </div>
        </v-col>

        <v-col class="text-left" cols="6" md="2">
          <div>
            <h4 class="pb-4">Terms</h4>
            <!-- <router-link link to="/aboutUs" class="text-decoration-none white--text">About us</router-link> -->
            <p>About us</p>
            <p>How it works</p>
            <p>Affilaites</p>
            <p>Testimonails</p>
            <p>Contact us</p>
          </div>
        </v-col>

        <v-col cols="12" md="4" class="text-left">
          <h4 class="pb-4">Newsletter</h4>
          <v-text-field
            background-color="white"
            light
            value="Enter Your Email Address"
            outlined
            clearable
            dense
          >
            <template slot="append-outer">
              <v-btn dark color="#fd7e14" class="mt-n1"> Subscribe </v-btn>
            </template>
          </v-text-field>

          <div>
            <v-icon v-for="icon in icons" :key="icon" class="pr-5">
              {{ icon }}
            </v-icon>
          </div>

          <div class="mt-5">
            <span><v-icon small>mdi-copyright</v-icon></span>
            {{ new Date().getFullYear() }}
            <span>TIK. All rights reserved.</span>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppFooter extends Vue {
  icons: any = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];

  get isLoggedIn(): boolean {
    return this.$store.getters.isLoggedIn;
  }
}
</script>
