<template>
  <div class="home">
    <v-carousel
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="400"
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
            <v-col col="12" md="5">
              <h1>All Your Textile Needs</h1>

              <p class="my-5">
                Check out the major milestones and achievements in the history
                of textiles that have led to it becoming one of the largest
                spinning mill in india.
              </p>
              <v-btn rounded color="orange" dark> know more </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-carousel-item>
    </v-carousel>
    <v-row justify="center" class="ma-5" no-gutters>
      <v-col cols="10">
        <h2
          class="pa-6 text-center grey lighten-1 rounded-0 font-weight-light"
          v-text="`Your AD Here !`"
        ></h2>
      </v-col>
    </v-row>

    <div justify="center" align="center" class="py-4">
      <h2 class="font-weight-light">Category</h2>
      <Divider />

      <Category />
    </div>

    <v-parallax src="@/assets/benifits/benifits-background.png" class="my-5">
      <div justify="center" align="center" class="py-4 black--text">
        <h2 class="text-h4 font-weight-thin mt-6">Benefits</h2>
        <Divider />

        <h4 class="heading py-4">You get working with us</h4>

        <v-row class="d-flex my-6 black--text" no-gutters>
          <v-col md="4"></v-col>
          <v-col cols="12" md="4">
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
          <v-col cols="12" md="4">
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
        <div class="center" no-gutters>
          <v-btn rounded color="orange" dark> know more </v-btn>
        </div>
      </div>
    </v-parallax>
    <div class="pa-10 d-flex">
      <v-row no-gutters>
        <v-col
          cols="12"
          md="3"
          v-for="(carddetail, index) in cardDetails"
          :key="index"
        >
          <v-card class="mx-2 text-center" max-width="344" height="344" flat>
            <img src="@/assets/i1.png" style="max-height: 50px" />

            <v-card-subtitle class="mb-2">
              <h3>{{ carddetail.cardTitle }}</h3>
            </v-card-subtitle>

            <v-card-text class="mb-1">
              {{ carddetail.cardText1 }}
              {{ carddetail.cardText2 }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <CustomerFeedback />

    <v-row justify="center" class="ma-5" no-gutters>
      <v-col cols="10">
        <h2
          class="pa-6 text-center grey lighten-1 rounded-0 font-weight-light"
          v-text="`Your AD Here !`"
        ></h2>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Divider from "@/components/Divider.vue";
import Category from "@/components/Category.vue";
import CustomerFeedback from "@/components/CustomerFeedback.vue";

@Component({
  components: { Category, CustomerFeedback, Divider },
})
export default class Home extends Vue {
  items: any = [
    {
      src: "/carosel-1.jpg",
      category: "../assets.factory.png",
    },

    {
      src: "/carosel-2.jpg",
      category: "../assets.factory.png",
    },
    {
      src: "/carosel-3.jpg",
      category: "../assets.factory.png",
    },
  ];
  cardDetails: any = [
    {
      icon: "@/assets/i1.png",
      cardTitle: "A textile industry",
      cardText1:
        "A textile is a flexible material consisting of a network of natural or artificial fibers.",
      cardText2:
        "primarily concerned with the design, production and distribution",
    },
    {
      icon: "@/assets/i1.png",
      cardTitle: "Best material Collection",
      cardText1:
        "A textile is a flexible material consisting of a network of natural or artificial fibers.",
      cardText2:
        "primarily concerned with the design, production and distribution",
    },
    {
      icon: "@/assets/i1.png",
      cardTitle: "Nice collection for you",
      cardText1:
        "A textile is a flexible material consisting of a network of natural or artificial fibers.",
      cardText2:
        "primarily concerned with the design, production and distribution",
    },
    {
      icon: "@/assets/i1.png",
      cardTitle: "A fabrics and material",
      cardText1:
        "A textile is a flexible material consisting of a network of natural or artificial fibers.",
      cardText2:
        "primarily concerned with the design, production and distribution",
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