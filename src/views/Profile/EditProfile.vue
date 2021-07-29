<template>
  <div>
    <v-card max-width="900px" elevation="2">
      <v-row class="my-4 px-4">
        <v-card-title> Profile </v-card-title>
        <v-spacer></v-spacer>
        <v-btn @click="close()" icon>
          <v-icon id="close-button">mdi-close</v-icon>
        </v-btn>
      </v-row>

      <v-divider></v-divider>
      <v-row class="mx-4">
        <v-card-title class="blue--text"> Profile </v-card-title>
      </v-row>
      <v-row class="mx-4">
        <v-col class="col-3">
          <v-card elevation="2" class="grey lighten-4 color" height="35%">
            <v-file-input
              hide-input
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon="mdi-camera"
              class="d-flex justify-center"
            ></v-file-input>
          </v-card>
        </v-col>
        <v-col>
          <v-text-field
            dense
            outlined
            v-model="editData.logoText"
          ></v-text-field>

          <v-text-field
            dense
            outlined
            v-model="editData.aboutFirstText"
          ></v-text-field>

          <v-text-field
            dense
            outlined
            v-model="editData.aboutSecondText"
          ></v-text-field>

          <div class="text-subtitle-1">Contact Information</div>
          <v-text-field
            dense
            outlined
            v-model="editData.address"
          ></v-text-field>

          <v-text-field dense outlined v-model="editData.email"></v-text-field>

          <v-text-field
            dense
            outlined
            v-model="editData.phoneNofirst"
          ></v-text-field>

          <v-text-field
            dense
            outlined
            v-model="editData.phoneNoSecond"
          ></v-text-field>
        </v-col>
        <v-col class="col-4">
          <v-card elevation="2" class="grey lighten-4 color" height="35%">
            <v-file-input
              hide-input
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon="mdi-camera"
              multiple
              class="d-flex justify-center"
            ></v-file-input>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mx-4 pb-2">
        <v-btn
          dark
          class="text-capitalize red color font-weight-regular"
          @click="edit()"
        >
          save
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { EditProfileModel } from "./Model";

@Component
export default class EditProfile extends Vue {
  @Prop() editData: EditProfileModel;

  public edit() {
    this.$emit("editModel", this.editData);
  }
  public close() {
    this.$emit("closeModel", false);
  }
}
</script>


