<template>
  <div>
    <v-dialog max-width="1200px" v-model="dialog">
      <v-card>
        <v-row class="my-4 px-4">
          <v-card-title> Profile </v-card-title>
          <v-spacer></v-spacer>
          <v-btn @click="close" icon>
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
                @change="handleimage"
              ></v-file-input>
              <div class="d-flex mt-2 justify-center" v-if="img">
                <img :src="img" width="110" height="110" alt="" />
              </div>
              <div class="d-flex mt-2 justify-center" v-else>
                <v-img
                  :src="`data:image/png;base64,${request.image}`"
                  max-width="120"
                  max-height="120"
                >
                </v-img>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-text-field
              dense
              outlined
              placeholder="Enter UnitName"
              v-model="request.unitName"
            ></v-text-field>

            <v-text-field
              dense
              outlined
              placeholder="Enter Title"
              v-model="request.title"
            ></v-text-field>

            <v-text-field
              dense
              outlined
              placeholder="Enter Description"
              v-model="request.description"
            ></v-text-field>

            <div class="text-subtitle-1">Contact Information</div>
            <v-text-field
              dense
              outlined
              placeholder="Enter Address"
              v-model="request.address"
            ></v-text-field>

            <v-text-field
              dense
              outlined
              placeholder="Enter Email"
              v-model="request.email"
            >
            </v-text-field>

            <v-text-field
              dense
              outlined
              placeholder="Enter PhoneNumber"
              v-model="request.phoneNumber1"
            ></v-text-field>

            <v-text-field
              dense
              outlined
              placeholder="Enter Alternate PhoneNumber"
              v-model="request.phoneNumber2"
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
            @click="edit"
          >
            save
          </v-btn>

  <!-- reset password button  -->
         <v-spacer></v-spacer>
         <router-link to="/resetpassword" class="text-decoration-none">
          <v-btn
            dark
            class="text-capitalize red color font-weight-regular"
          >Reset Password</v-btn>
          </router-link>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";

import { IProfileService } from "@/service";
import { ProfileResponse } from "@/model";
@Component
export default class EditProfile extends Vue {
  @Inject("ProfileService") ProfileService: IProfileService;
  @Prop() request: ProfileResponse;
  img: string = "";
  dialog: boolean = true;
  logo: File;

  public handleimage(e: File) {
    this.logo = e;
    this.img = URL.createObjectURL(e);
  }
  public edit() {
    this.request.id = this.$store.getters.id;
    this.ProfileService.editProfile(this.request, this.logo).then(
      (response: any) => {
        this.$emit("onEditProfileModel");
      }
    );
  }
  public close() {
    this.$emit("closeModel");
  }
}
</script>


