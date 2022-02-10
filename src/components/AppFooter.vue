<template>
  <div>
    <div class="footer-wave" v-if="!isLoggedIn">
      <svg>
        <clipPath id="wave" clipPathUnits="objectBoundingBox">
          <path d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z" />
        </clipPath>
      </svg>
      <v-footer dark class="pt-16" color="transparent">
        <v-row class="pa-16">
          <v-col cols="6" md="2" class="text-left">
            <div>
              <h5 class="text-h5 pb-6">T I K</h5>
              <p class="subtitle-1 mt-4">Location</p>
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
              <v-list-item-title class="pl-2 pb-2 font-weight-bold"
                >Popular Category</v-list-item-title
              >
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
              <v-list-item-title class="pl-2 pb-2 font-weight-bold"
                >Quick Links</v-list-item-title
              >
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
              <v-list-item-title class="pl-2 pb-2 font-weight-bold"
                >Terms</v-list-item-title
              >
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
            <div class="d-flex flex-column" style="height: 100%">
              <div>
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
                    <v-btn color="primary" class="mt-n2 pa-5">
                      Subscribe
                    </v-btn>
                  </template>
                </v-text-field>
              </div>
              <div class="mt-auto pb-2">
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
              </div>
            </div>
          </v-col>
        </v-row>
      </v-footer>
    </div>
    <v-footer bottom padless v-else-if="isProjectBuilder">
      <Advertisement />
    </v-footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Advertisement from "@/components/Advertisement.vue";

@Component({
  components: { Advertisement },
})
export default class AppFooter extends Vue {
  icons: any = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];

  get isLoggedIn(): boolean {
    return this.$store.getters.isLoggedIn;
  }

  get isProjectBuilder(): boolean {
    return this.$route.name == "Project";
  } 
}
</script>
<style scoped>
.footer-wave {
  background: #242424;
  clip-path: url(#wave);
  margin-top: -50px;
}
.footer-wave svg {
  position: absolute;
}
</style>
