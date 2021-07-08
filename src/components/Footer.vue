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
            <v-card-text class="pb-6">Popular Category</v-card-text>
            <div><v-btn plain class="pb-2"> Yarns </v-btn></div>
            <div><v-btn plain class="pb-2">Mens Wear</v-btn></div>
            <div><v-btn plain class="pb-2">Womes Wear</v-btn></div>
            <div><v-btn plain class="pb-2">T-shirt</v-btn></div>
            <div><v-btn plain class="pb-2">Cotton Cloths</v-btn></div>
          </v-col>

          <v-col cols="2">
            <v-card-text class="pb-6">Quick Links</v-card-text>
            <div><v-btn plain class="pb-2"> About us </v-btn></div>
            <div><v-btn plain class="pb-2">Category</v-btn></div>
            <div><v-btn plain class="pb-2">Affilaites</v-btn></div>
            <div><v-btn plain class="pb-2">Register</v-btn></div>
            <div><v-btn plain class="pb-2">Contact us</v-btn></div>
          </v-col>

          <v-col cols="2">
            <v-card-text class="pb-6">Terms</v-card-text>
            <div>
              <v-btn plain class="pb-2 font-weight-regular"> About us </v-btn>
            </div>
            <div>
              <v-btn plain class="pb-2 font-weight-regular">How it works</v-btn>
            </div>
            <div>
              <v-btn plain class="pb-2 font-weight-regular">Affilaites</v-btn>
            </div>
            <div>
              <v-btn plain class="pb-2 font-weight-regular">Testimonails</v-btn>
            </div>
            <div>
              <v-btn plain class="pb-2 font-weight-regular">Contact us</v-btn>
            </div>
          </v-col>

          <v-col cols="4">
            <v-card-text>Newsletter</v-card-text>
            <v-text-field
              background-color="white"
              light
              value="Enter Your Email Address"
              outlined
              clearable
            >
              <template slot="append-outer">
                <v-btn light large color="#fd7e14"> SEARCH </v-btn>
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

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>

<style scoped>
</style>