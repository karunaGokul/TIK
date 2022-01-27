<template>
  <div>
    <v-footer dark padless v-if="!isLoggedIn" color="#242424">
      <v-row class="pt-10 px-16">
        <v-col cols="6" md="2" class="text-left">
          <div>
            <h2 class="pb-4">TIK</h2>
            <p class="subtitle-1">Location</p>
            <p>
              1/22, Raja Street Tirupur, <br />
              Tamilnadu <br />
              +91 912344 98763 <br />
              +91 912344 98763 <br />
              support@textile.com
            </p>
          </div>
        </v-col>

        <v-col class="text-left" cols="6" md="2">
          <v-list nav dense flat color="transparent" class="pa-0">
            <v-list-item-title class="pl-2 pb-2 font-weight-bold">Popular Category</v-list-item-title>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-title>Yarns</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Mens Wear</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Womens Wear</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>T-Shirt</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Cotton Cloths</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>

        <v-col class="text-left" cols="6" md="2">
          <v-list nav dense flat color="transparent" class="pa-0">
            <v-list-item-title class="pl-2 pb-2 font-weight-bold">Quick Links</v-list-item-title>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-title>About us</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Category</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Affilaites</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Register</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Contact us</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>

        <v-col class="text-left" cols="6" md="2">
         <v-list nav dense flat color="transparent" class="pa-0">
            <v-list-item-title class="pl-2 pb-2 font-weight-bold">Terms</v-list-item-title>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-title>About us</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Category</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Affilaites</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Register</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Contact us</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
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
              <v-btn color="primary" class="mt-n2 pa-5"> Subscribe </v-btn>
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
