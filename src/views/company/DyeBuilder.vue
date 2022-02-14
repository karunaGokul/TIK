<template>
  <div>
    <div class="ma-2">
      <router-link to="/" class="text-decoration-none">
        <v-icon large> mdi-home</v-icon>
      </router-link>
      <v-icon large> mdi-chevron-right</v-icon>
      <router-link to="/profile" class="text-decoration-none black--text"
        >Product Details
      </router-link>
      <v-icon large> mdi-chevron-right</v-icon>
      Dyeing
    </div>

    <div align="right" v-if="role === 'MasterAdmin' && category != 'Company'">
      <v-icon large color="primary" class="mr-10" @click="edit = !edit">
        mdi-pencil-box-multiple
      </v-icon>
    </div>

    <div class="pa-6">
      <v-tabs color="#16594a">
        <v-tab v-for="item in tabItems" :key="item.tab">
            {{ item.tab }}
        </v-tab>
      </v-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";

@Component({})
export default class DyeBuilder extends Vue {
  created() {}

  tabItems: any = [
    { tab: "Cut Panel", content: "Tab1 Content" },
    { tab: "Fabric", content: "Tab2 Content" },
    { tab: "Yarn", content: "Tab3 Content" },
    { tab: "Garment", content: "Tab4 Content" },
  ];
}
</script>
