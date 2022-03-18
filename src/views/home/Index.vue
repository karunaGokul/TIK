<template>
  <div class="home">
    <v-carousel
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="600"
      class="t-home-banner"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <div class="white--text ma-10">
          <v-row class="my-10">
            <v-col col="12" md="8" lg="5" xl="4">
              <h1 class="text-h3">All Your Textile Needs</h1>

              <p class="text-body-1 my-5">{{ item.text }}</p>
              <v-btn link to="/about" rounded color="primary">
                know more
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-carousel-item>
    </v-carousel>

    <!-- <Advertisement /> -->

    <div justify="center" align="center" class="py-12">
      <h2 class="text-h4">Category</h2>
      <Divider />
      <div class="px-16 py-10">
        <Category />
      </div>
    </div>

    <v-img src="@/assets/benifits/benifits-background.png">
      <v-container class="fill-height justify-end">
        <div justify="center" align="center">
          <h2 class="text-h4">Benefits</h2>
          <Divider />
          <h4 class="text-h5 py-4">You get working with us</h4>
          <v-row class="text-subtitle-2 mt-2">
            <v-col>
              <v-list class="text-left" color="transparent">
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="@/assets/benifits/1.png"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      >Timely Deliery can be improved</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="@/assets/benifits/3.png"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      >Payment delay can be reduced
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="@/assets/benifits/5.png"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      >Working Capital blokage in terms
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col>
              <v-list class="text-left" color="transparent">
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="@/assets/benifits/2.png"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      >Finding Or Sourcing Vendros made Easy
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="@/assets/benifits/4.png"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Reduce dependency </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="@/assets/benifits/6.png"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      >Reduce commusion by employee
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <div class="mt-9">
                  <v-btn dark v-bind="attrs" v-on="on" rounded color="primary">
                    Know More
                  </v-btn>
                </div>
              </template>
              <v-card>
                <v-card-title class="teal d-flex justify-end">
                  <v-btn icon @click="dialog = false">
                    <v-icon color="white">mdi-close</v-icon>
                  </v-btn></v-card-title
                >
                <v-card-text class="pt-4">
                  TIK allows you to connect with ease with your vendors and
                  suppliers and smoothens the entire process of sourcing. It
                  creates robust economies of scale for your business through
                  efficient time and resource management. Collaborating with TIK
                  opens a whole new world of benefits and growth for your
                  business. So join hands with TIK and witness your business
                  scale greater heights.
                </v-card-text>

                <!-- <v-card-actions class="">
          <v-spacer></v-spacer>
          <v-btn
            color="teal darken-4"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions> -->
              </v-card>
            </v-dialog>
          </div>
        </div>
      </v-container>
    </v-img>

    <div class="pa-10 mt-16">
      <v-row>
        <v-col
          cols="12"
          md="3"
          v-for="(item, index) in cardDetails"
          :key="index"
        >
          <v-card class="text-center" flat>
            <img :src="item.image" style="max-height: 80px" />

            <v-card-subtitle class="black--text text-subtitle-1">
              <h3>{{ item.title }}</h3>
            </v-card-subtitle>

            <v-card-text class="pa-4 pt-0 black--text text-body-1">
              {{ item.text }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <v-container>
      <CustomerFeedback />
    </v-container>
    <v-container fluid class="mb-16 pb-16">
      <!-- <Advertisement /> -->
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Divider from "@/components/Divider.vue";
import Advertisement from "@/components/Advertisement.vue";
import Category from "@/components/Category.vue";
import CustomerFeedback from "@/components/CustomerFeedback.vue";

@Component({
  components: { Category, CustomerFeedback, Divider, Advertisement },
})
export default class Home extends Vue {
  public dialog: boolean = false;

  items: any = [
    {
      src: "/carosel-1.jpg",
      category: "../assets.factory.png",
      text:
        "Presenting an integrated platform bringing the best of the textile industry together. Seamless business dealing now on your finger tips; experience the best with us.",
    },

    {
      src: "/carosel-2.jpg",
      category: "../assets.factory.png",
      text:
        "We provide you with the most competitive and competent technological platforms tailor made for your business needs.",
    },
    {
      src: "/carosel-3.jpg",
      category: "../assets.factory.png",
      text:
        "Experience the ultimate ease in business performance with quality par excellence.",
    },
  ];
  cardDetails: any = [
    {
      image: require("@/assets/i1.png"),
      title: "Bond with Vendor",
      text:
        "TIK brings you closer to your vendors and suppliers, offering a transparent platform to interact with them. So, no more worries of commissions and lobbying with brokers and agents.",
    },
    {
      image: require("@/assets/i2.png"),
      title: "Save Resources",
      text:
        "Experience the most efficient management of Business Resources only with TIK. Optimize the use of your time, money & manpower with TIK.",
    },
    {
      image: require("@/assets/i3.png"),
      title: "Best Quality",
      text:
        "Best Quality products are easily sourced through TIK from the best vendors. TIK gives you the opportunity to get the best quality product at Best Rates.",
    },
    {
      image: require("@/assets/i4.png"),
      title: "Business Growth",
      text:
        "Optimum Use of Resources, Best Quality Products, Timely Delivery, and Strong Vendor Relations- Your Mantra for Success in Business is Ready.",
    },
  ];
  benifits: any = [
    {
      image: "../assets/1.png",
      details: "Timely Deliery can be improved",
    },
    {
      image: "../assets/2.png",
      details: "Finding Or Sourcing Vendros made Easy",
    },
    {
      image: "../assets/3.png",
      details: "Payment delay can be reduced",
    },
    {
      image: "../assets/4.png",
      details: "Reduce dependency",
    },
    {
      image: "../assets/5.png",
      details: "Working Capital blokage in terms",
    },
    {
      image: "../assets/6.png",
      details: "Reduce commusion by employee",
    },
  ];
}
</script>
<style>
.t-home-banner .v-carousel__item {
  align-items: center !important;
}
</style>
