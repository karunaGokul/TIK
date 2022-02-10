<template>
    <v-carousel
        :show-arrows="false"
        height="200"
        class="t-ads"
        hide-delimiters
        cycle
      >
        <v-carousel-item
          v-for="(item, i) in ads"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-sheet tile>
            <v-img :src="item.src" contain position="bottom center"></v-img>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Advertisement extends Vue {

    ads: any = [
    {
      src: require("@/assets/ads-2.jpg"),
    },
    {
      src: require("@/assets/ads-1.jpg"),
    },
  ];
}
</script>
<style>
.t-ads .v-carousel__item {
  align-items: flex-end !important;
}
</style>