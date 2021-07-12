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
    <template>
      <v-row justify="center mt-5">
        <v-col cols="12" md="6">
          <h2
            class="pa-6 text-center grey lighten-1 rounded-0 font-weight-light"
            v-text="`Your AD Here !`"
          ></h2>
        </v-col>
      </v-row>
    </template>
    <v-row justify="center mt-3">
      <v-col cols="12" md="6">
        <h2
          class="pa-4 text-center rounded-0 font-weight-light"
          v-text="`Category`"
        ></h2>
        <v-divider inset></v-divider>
      </v-col>
    </v-row>

    <Category />

    <template>
      <v-parallax src="@/assets/benifits/benifits-background.png" height="600">
        <v-row justify="center mt-3">
          <div class="text-center black--text">
            <h1 class="text-h4 font-weight-thin my-6">Benifits</h1>
            <h4 class="heading pb-0">You get working with us</h4>
          </div>
        </v-row>
        <row class="d-flex" cols="12" md="4">
          <v-col> </v-col>
          <v-col class="text-center pt-0 mt-0 black--text">
            <div>
              <img src="@/assets/benifits/1.png" alt="pic" />
              <span>Timely Deliery can be improved</span>
            </div>
            <div>
              <img src="@/assets/benifits/3.png" alt="pic" />
              <span>Payment delay can be reduced</span>
            </div>
            <div>
              <img src="@/assets/benifits/5.png" alt="pic" />
              <span>Working Capital blokage in terms</span>
            </div>
          </v-col>
          <v-col class="text-center pt-0 mt-0 black--text">
            <div>
              <img src="@/assets/benifits/2.png" alt="pic" />
              <span>Finding Or Sourcing Vendros made Easy</span>
            </div>
            <div>
              <img src="@/assets/benifits/4.png" alt="pic" />
              <span>Reduce dependency</span>
            </div>
            <div>
              <img src="@/assets/benifits/6.png" alt="pic" />
              <span>Reduce commusion by employee</span>
            </div>
          </v-col>
        </row>
        <v-row justify="center mt-6">
          <v-btn rounded color="orange" dark> know more </v-btn></v-row
        >
      </v-parallax>
    </template>
    <template>
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
    </template>
    <v-row justify="center mt-3">
      <v-col cols="12" md="6">
        <h2
          class="pa-4 text-center rounded-0 font-weight-light"
          v-text="`Customer Say`"
        ></h2>
        <v-divider inset></v-divider>
      </v-col>
    </v-row>
    <template>
      <v-row justify="center mt-3">
        <v-col cols="12" md="6">
          <h2
            class="pa-4 text-center rounded-0 font-weight-light"
            v-text="`Register`"
          ></h2>
          <v-divider inset></v-divider>
          <h3
            class="pa-4 text-center rounded-0 font-weight-light"
            v-text="`Register your company today and start your business`"
          ></h3>
        </v-col>
      </v-row>

      <v-row justify="center mt-3">
        <v-col cols="12" sm="6" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center mt-3">
        <v-btn small color="warning" dark> Register</v-btn>
      </v-row>
    </template>
    <template>
      <v-row justify="center mt-3">
        <v-col cols="12" md="6">
          <h1
            class="pa-4 text-center rounded-0 font-weight-light"
            v-text="`Download The App`"
          ></h1>
          <v-divider inset></v-divider>
          <h3
            class="pa-4 text-center rounded-0 font-weight-light"
            v-text="`The Best Business app for you`"
          ></h3>
        </v-col>
      </v-row>
      <v-row justify="center mt-3">
        <v-btn height="60" dark class="mr-4">
          <v-icon large dark class="mr-2"> mdi-google-play </v-icon>
          Get it on Google Pay
        </v-btn>
        <v-btn height="60" large dark>
          <v-icon large dark class="mr-2"> mdi-apple </v-icon>
          Download on the
          <h5>APP Store</h5>
        </v-btn>
      </v-row>
      <v-row justify="center my-7">
        <v-col cols="12" md="6">
          <h2
            class="pa-6 text-center grey lighten-1 rounded-0 font-weight-light"
            v-text="`Your AD Here !`"
          ></h2>
        </v-col>
      </v-row>
    </template>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Category from "@/components/Category.vue";
export default Vue.extend({
  name: "Home",
  components: { Category },
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