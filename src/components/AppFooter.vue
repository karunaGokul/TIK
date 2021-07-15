<template>
  <div>
    <v-footer dark padless>
      <v-card width="100%" class="py-13">
        <v-row>
          <v-col cols="2" class="text-left">
            <v-card-title class="pb-6">TIK</v-card-title>
            <div class="pb-2">Location</div>
            <div class="pb-2">1/22, Raja Street Tirupur,</div>
            <div class="pb-2">Tamilnadu</div>
            <div class="pb-2">+91 912344 98763</div>
            <div class="pb-2">+91 912344 98763</div>
            <div class="pb-2">support@textile.com</div>
          </v-col>

          <v-col class="text-left" cols-2>
            <v-card class="mx-0" max-width="300" elevation="0">
              <v-list flat>
                <v-header class="pb-6">Popular Category</v-header>
                <v-list-item-group color="orange">
                  <v-list-item class="font-weight-light mt-4">
                    Yarns
                  </v-list-item>
                  <v-list-item class="font-weight-light">
                    Mens Wear
                  </v-list-item>
                  <v-list-item class="font-weight-light">
                    Womes Wear
                  </v-list-item>
                  <v-list-item class="font-weight-light"> T-shirt</v-list-item>
                  <v-list-item class="font-weight-light">
                    Cotton Cloths
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>

          <v-col class="text-left" cols-2>
            <v-card class="mx-0" max-width="300" elevation="0">
              <v-list flat>
                <v-header class="pb-6">Quick Links</v-header>

                <v-list-item-group color="orange">
                  <v-list-item class="font-weight-light mt-4">
                    About us
                  </v-list-item>
                  <v-list-item class="font-weight-light">
                    Category
                  </v-list-item>
                  <v-list-item class="font-weight-light">
                    Affilaites
                  </v-list-item>
                  <v-list-item class="font-weight-light">
                    Register
                  </v-list-item>
                  <v-list-item class="font-weight-light">
                    Contact us
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
          <v-col class="text-left" cols-2>
            <v-card class="mx-0" max-width="300" elevation="0">
              <v-list flat>
                <v-header class="pb-6 px-4">Terms</v-header>
                <v-list-item-group color="orange">
                  <v-list-item class="font-weight-light mt-4"
                    >About us</v-list-item
                  >
                  <v-list-item class="font-weight-light"
                    >How it works
                  </v-list-item>
                  <v-list-item class="font-weight-light"
                    >Affilaites
                  </v-list-item>
                  <v-list-item class="font-weight-light"
                    >Testimonails</v-list-item
                  >
                  <v-list-item class="font-weight-light"
                    >Contact us</v-list-item
                  >
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card-text>Newsletter</v-card-text>
            <v-text-field
              background-color="white"
              light
              value="Enter Your Email Address"
              outlined
              clearable
              dense
              class="my-2"
            >
              <template slot="append-outer">
                <v-btn light medium color="#fd7e14"> SEARCH </v-btn>
              </template>
            </v-text-field>

            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} —
              <span class="font-weight-regular">TIK.All Rights Reserved.</span>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppFooter extends Vue {
  icons: any = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
}
</script>


