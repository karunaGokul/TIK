<template>
  <div>
    <div class="mt-16" justify="center" align="center">
      <h1 class="text-capitalize">customer say</h1>
      <Divider />
    </div>

    <v-carousel v-model="model" hide-delimiters cycle height="300" class="mt-16">
      <v-carousel-item v-for="customer in customers" :key="customer.name">
        <v-sheet height="100%" class="mx-16">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" sm="6">
              <v-card
                class="grey lighten-4 black--text pa-10"
              >
                <v-icon x-large color="teal">mdi-comma</v-icon>
                <p>{{ customer.description }}</p>

                <v-row>
                  <v-col>
                    <h4 class="text-capitalize">{{ customer.name }}</h4>
                    <div class="text-caption grey--text text-capitalize">
                      description
                    </div>
                    <v-rating
                      color="primary"
                      dense
                      :value="4.5"
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                  </v-col>
                  <v-col class="d-flex justify-right">
                    <v-avatar>
                      <img :src="customer.src" alt="James" />
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6">
              <v-card
                class="grey lighten-4 black--text pa-10"
              >
                <v-icon x-large color="teal">mdi-comma</v-icon>
                <p>{{ customer.description }}</p>

                <v-row>
                  <v-col>
                    <h4 class="text-capitalize">{{ customer.name }}</h4>
                    <div class="text-caption grey--text text-capitalize">
                      description
                    </div>
                    <v-rating
                      color="primary"
                      dense
                      :value="4.5"
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                  </v-col>
                  <v-col class="d-flex justify-right">
                    <v-avatar>
                      <img :src="customer.src" alt="James" />
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <div
      class="white--text teal darken-4 rounded-xl pa-10 mt-16"
      justify="center"
      align="center"
    >
      <h1 class="text-capitalize">register</h1>

      <Divider />

      <p class="my-10">Register your company today and Start your business.</p>

      <v-btn
        color="primary"
        class="font-weight-light text-capitalize rounded-0"
      >
        <router-link to="/registration" class="white--text text-decoration-none"
          >Register</router-link
        >
      </v-btn>
    </div>

    <div class="my-16" justify="center" align="center">
      <h1 class="text-capitalize">download the app</h1>

      <Divider />

      <p class="my-10 font-weight-medium">The Best Business app for you.</p>

      <v-row>
        <v-col align="end">
          <v-btn class="text-capitalize rounded-lg pa-8" dark large>
            <v-row>
              <v-icon class="pr-2"> mdi-google-play </v-icon>

              <v-col class="py-3">
                <v-row>
                  <p class="subtitle-1 mb-n1 font-weight-light">get it on</p>
                </v-row>
                <v-row>
                  <h2 class="mt-n1 font-weight-regular">google play</h2>
                </v-row>
              </v-col>
            </v-row>
          </v-btn>
        </v-col>

        <v-col align="start">
          <v-btn class="text-capitalize rounded-lg pa-8" dark large>
            <v-row>
              <v-icon class="pr-2"> mdi-apple </v-icon>

              <v-col>
                <v-row>
                  <p class="subtitle-1 mb-n1 font-weight-light">
                    Download on the
                  </p>
                </v-row>
                <v-row>
                  <h2 class="mt-n1 font-weight-regular">app store</h2>
                </v-row>
              </v-col>
            </v-row>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Divider from "@/components/Divider.vue";

export default Vue.extend({
  name: "CustomerFeedback",
  components: { Divider },

  data() {
    return {
      model: 0,
      customers: [
        {
          name: "james sulivan",
          description:
            "The Goverment for initiating policies that ensure creation of world class texttile infrastructure in the country and management tech.",
          src: "../assets/img/face4.jpg",
        },
        {
          name: "sam smith",
          description:
            "This sector is highly responsible for propelling india's overall and develop development and enjoys intense focus from it policies and energy of health.",
          src: "../assets/img/face1.jpg",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
