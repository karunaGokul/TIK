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
              :rules="emailRules"
              v-model="request.email"
            >
            </v-text-field>

            <v-text-field
              dense
              outlined
              placeholder="Enter PhoneNumber"
              :rules="phoneRules"
              v-model="request.phoneNumber1"
            ></v-text-field>

            <v-text-field
              dense
              outlined
              placeholder="Enter Alternate PhoneNumber"
              :rules="phoneRules"
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
            <v-btn dark class="text-capitalize red color font-weight-regular"
              >Reset Password</v-btn
            >
          </router-link>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import { IProfileService } from "@/service";
import { ProfileResponse } from "@/model";
@Component({
  mixins: [validationMixin],
})
export default class EditProfile extends Vue {
  @Inject("ProfileService") ProfileService: IProfileService;
  @Prop() request: ProfileResponse;
  public emailRules: any = [
    (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  public phoneRules: any = [
    (v: any) =>
      (!isNaN(parseInt(v)) && v >= 0) || "Phone Number must be Valid Number",

    (v: any) => (v && v.length == 10) || "Phone Number must be 10 Numbers",
  ];
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


