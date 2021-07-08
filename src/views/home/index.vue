<template>
  <div class="home mt-5">
    <v-carousel
      :continuous="false"
      :cycle="cycle"
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
        <div align="left" class="white--text ma-10">
          <v-row class="my-10"><h1>All Your Textile Needs</h1></v-row>
          <v-row class="mb-5">
            <p>
              Check out the major milestones and achievements in the<br />
              history of textiles that have led to it becoming one of the<br />
              largest spinning mill in india.
            </p></v-row
          >
          <v-row><v-btn rounded color="orange" dark> know more </v-btn></v-row>
        </div>
      </v-carousel-item>
    </v-carousel>
    <v-row justify="center mt-3">
      <v-col cols="12" md="6">
        <h2
          class="pa-4 text-center grey lighten-1 rounded-0 font-weight-light"
          v-text="`Your AD Here !`"
        ></h2>
      </v-col>
    </v-row>
    <v-row justify="center mt-3">
      <v-col cols="12" md="6">
        <h2
          class="pa-4 text-center rounded-0 font-weight-light"
          v-text="`Category`"
        ></h2>
      </v-col>
    </v-row>

    <div class="mb-16 pb-16">
      <v-container>
        <v-row :align="align" no-gutters style="height: 150px">
          <v-col
            cols="12"
            md="2"
            v-for="category in categories"
            :key="category.categoryName"
            class="ma-3"
            align="center"
          >
            <v-btn class="ma-2" outlined x-large fab color="orange">
              <v-icon>{{ category.categoryImage }}</v-icon>
            </v-btn>
            <div>{{ category.categoryName }}</div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-parallax
      src="https://www.tikonline.in/newthemeassets/assets/img/bg1.jpg"
      height="700"
    >
      <v-row>
        <v-col class="text-center black--text pb-0" cols="12">
          <h1 class="text-h4 font-weight-thin my-4">Benifits</h1>
          <h4 class="heading">You get working with us</h4>
        </v-col>

        <v-col class="text-end pt-0 mt-0 black--text" cols="8">
          <div v-for="(benifit, index) in benifits" :key="index">
            <img :src="`../assets/${index + 1}.png`" :alt="pic" />
            <span>{{ benifit.details }}</span>
          </div>
        </v-col>
      </v-row>
      <v-row><v-btn rounded color="orange" dark> know more </v-btn></v-row>
    </v-parallax>
    <div class="px-10 d-flex">
      <v-card
        class="mx-2"
        align="center"
        max-width="344"
        height="344"
        v-for="(carddetail, index) in cardDetails"
        :key="index"
        flat
      >
        <v-img max-height="50" max-width="50" src="@/assets/i1.png"></v-img>

        <v-card-subtitle class="mb-10">
          <h3>{{ carddetail.cardTitle }}</h3></v-card-subtitle
        >
        <v-card-text class="mb-1">
          <h4>{{ carddetail.cardText1 }}</h4></v-card-text
        >

        <v-card-text class="mb-1"> {{ carddetail.cardText2 }}</v-card-text>
      </v-card>
    </div>
    <v-row justify="center mt-3">
      <v-col cols="12" md="6">
        <h2
          class="pa-4 text-center rounded-0 font-weight-light"
          v-text="`Customer Say`"
        ></h2>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      items: [
        {
          src: "https://www.tikonline.in/newthemeassets/assets/img/home-bg.png",
          category: "../assets.factory.png",
        },

        {
          src: "	https://www.tikonline.in/newthemeassets/assets/img/home-bg1.jpeg",
          category: "../assets.factory.png",
        },
        {
          src: "	https://www.tikonline.in/newthemeassets/assets/img/home-bg2.jpeg",
          category: "../assets.factory.png",
        },
      ],

      categories: [
        {
          categoryName: "Mills",
          categoryImage: "mdi-account-reactivate-outline",
        },
        {
          categoryName: "Knitting",
          categoryImage: "mdi-account-reactivate-outline",
        },
        {
          categoryName: "Deying",
          categoryImage: "mdi-account-reactivate-outline",
        },
        {
          categoryName: "Printing",
          categoryImage: "mdi-account-reactivate-outline",
        },
        {
          categoryName: "Processing",
          categoryImage: "mdi-account-reactivate-outline",
        },
        {
          categoryName: "Job Work Unit",
          categoryImage: "mdi-account-reactivate-outline",
        },
        {
          categoryName: "Finishing Fabric",
          categoryImage: "mdi-account-reactivate-outline",
        },
        {
          categoryName: "Second Fabric",
          categoryImage: "mdi-account-reactivate-outline",
        },
        {
          categoryName: "Second Pieces",
          categoryImage: "mdi-account-reactivate-outline",
        },
        {
          categoryName: "Accessories",
          categoryImage: "mdi-account-reactivate-outline",
        },
      ],
      cardDetails: [
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
      ],
      benifits: [
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
      ],
    };
  },
});
</script>