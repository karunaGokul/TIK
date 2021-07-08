<template>
  <div>
    <v-footer dark padless>
      <v-card width="100%" class="py-13">
        <v-row>
          <v-col cols="2" class="text-left">
            <v-card-title>TIK</v-card-title>
            <v-card-text class="pb=0">Location</v-card-text>
            <v-card-text> 1/22, Raja Street Tirupur, </v-card-text>
            <v-card-text> Tamilnadu </v-card-text>
            <v-card-text> +91 912344 98763 </v-card-text>
            <v-card-text> +91 912344 98763 </v-card-text>
            <v-card-text> support@textile.com </v-card-text>
          </v-col>

          <v-col class="text-left" cols-2>
            <v-card-text>Popular Category</v-card-text>
          </v-col>

          <v-col cols="2">
            <v-card-text>Quick Links</v-card-text>
          </v-col>

          <v-col cols="2">
            <v-card-text>Terms</v-card-text>
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