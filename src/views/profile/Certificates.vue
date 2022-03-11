<template>
  <div>
    <v-card
      elevation="4"
      class="grey lighten-4 color ma-8 pa-2"
      width="30%"
      height="40%"
    >
      <v-file-input
        hide-input
        accept="image/png, image/jpeg, image/bmp"
        prepend-icon="mdi-camera"
        class="d-flex justify-center"
        @change="handleimage"
      ></v-file-input>

      <div class="d-flex justify-center" v-if="img">
        <img :src="img" width="110" height="110" alt="" />
      </div>
      <div class="d-flex justify-center" v-else>
        <v-img
          :src="`data:image/png;base64,$`"
          max-width="120"
          max-height="120"
        >
        </v-img>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Certificates extends Vue {
  public img: string = "";
  public logo: File;

  public handleimage(e: File) {
    this.logo = e;
    this.img = URL.createObjectURL(e);
  }
}
</script>
