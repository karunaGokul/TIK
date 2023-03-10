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
import { Component, Vue } from "vue-property-decorator";
import { DIContainer } from "./dicontainer";

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import axios, { AxiosError, AxiosResponse } from "axios";

@Component({
  components: { AppHeader, AppFooter },
})
export default class App extends DIContainer {

  created() {
    const token = this.$store.getters.accessToken;
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    this.createAxiosResponseInterceptor();

    this.createFilters();
  }

  createFilters() {

    Vue.filter("dateDisplay", (value: any, format: string) => {
      if (!value) return "";

      return this.$vuehelper.date.format(value, format);
    });

    Vue.filter("errorMessages", (value: any, name: string) => {
      return this.$vuehelper.val.messages(value, name);
    });

  }

  createAxiosResponseInterceptor() {
    const self = this;

    const interceptor = axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        const status = error.response ? error.response.status : null;

        if (status === 400 && error.response.data === "token-expired") {
          console.log("token-expired");
        }

        else if (status !== 401) {
          return Promise.reject(error);
        }

        axios.interceptors.response.eject(interceptor);

        return self.$store
          .dispatch("refreshToken")
          .then((response: any) => {
            if (response.success) {
              error.response.config.headers["Authorization"] =
                "Bearer " + self.$store.getters.accessToken;
              return axios(error.response.config);
            } else {
              self.$store.dispatch("logout");

              self.$router.push("/login").catch((err) => {});

              return Promise.reject(error);
            }
          })
          .catch((error) => {
            self.$store.dispatch("logout");

            self.$router.push("/login").catch((err) => {});

            return Promise.reject(error);
          })
          .finally(this.createAxiosResponseInterceptor);
      }
    );
  }

}
</script>


