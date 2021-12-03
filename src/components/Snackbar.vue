<template>
  <v-snackbar :timeout="2000" color="green lighten-5 green--text" right top>
    <v-icon color="green">mdi-exclamation-thick </v-icon>
    {{ snackbarText }}
    <template v-slot:action="{ attrs }">
      <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
        <v-icon> mdi-close-box</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Snackbar extends Vue {
  @Prop() snackbarText: string;
  @Prop() snackbarOption: string;
}
</script>
