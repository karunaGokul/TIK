<template>
  <v-app>
    <AppHeader />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>



<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default Vue.extend({
  name: "App",
  components: { AppHeader, AppFooter },
  data: () => ({
    //
  }),
});
</script>


