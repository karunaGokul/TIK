<template>
  <div>
    <v-dialog max-width="1200px" v-model="dialog" class="d-flex">
      <v-card style="overflow: hidden"> 
        <v-row class="mt-1 px-4">
          <v-card-title class="ml-3"> Profile </v-card-title>
          <v-spacer></v-spacer>
          <v-btn @click="close" icon>
            <v-icon id="close-button">mdi-close</v-icon>
          </v-btn>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mx-4">
          <v-col class="col-3 mt-3">
            <v-card elevation="2" class="grey lighten-4 color" height="40%">
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
                  :src="`data:image/png;base64,${request.image}`"
                  max-width="120"
                  max-height="120"
                >
                </v-img>
              </div>
            </v-card>
            <div class="my-1 font-weight-light">Logo Image Upload Here</div>
          </v-col>
          <v-col cols="12" sm="4" md="5" class="mt-6">
            <v-form ref="form">
              <v-text-field
                dense
                outlined
                class="my-n2"
                placeholder="Enter UnitName"
                v-model="request.unitName"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                class="my-n2"
                placeholder="Enter Title"
                v-model="request.title"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                class="my-n2"
                placeholder="Enter Description"
                v-model="request.description"
              ></v-text-field>
            <div class="text-subtitle-1 my-n3">
              Contact Information
              <v-text-field
                dense
                outlined
                placeholder="Enter Address"
                v-model="request.address"
              ></v-text-field>
            </div>
              <v-text-field
                dense
                outlined
                disabled
                class="my-n2"
                placeholder="Enter Email"
                :rules="emailRules"
                v-model="request.emailAddress"
              >
              </v-text-field>
              <v-text-field
                dense
                outlined
                class="my-n2"
                placeholder="Enter PhoneNumber"
                :rules="phoneRules"
                v-model="request.phoneNumber1"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                class="my-n2"
                placeholder="Enter Alternate PhoneNumber"
                :rules="phoneRules"
                
                v-model="request.phoneNumber2"
              ></v-text-field>
            </v-form>
          </v-col>
          <v-col cols="12" sm="3" md="4" class="mt-3">
            <v-card elevation="2" class="grey lighten-4 color" height="35%">
              <v-file-input
                hide-input
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-cloud-upload-outline"
                multiple
                class="d-flex justify-center"
              ></v-file-input>
            </v-card>
            <div class="my-1 font-weight-light">Slider Images Upload Here</div>
          </v-col>
        </v-row>

        <v-row class="mr-10 mt-n12 pb-10 d-flex justify-end">
          <v-btn
            dark
            class="text-capitalize red color font-weight-regular mt-n5"
            @click="edit"
            type="submit"
          >
            save
          </v-btn>        
          
        </v-row>

        <v-snackbar
          v-model="snackbar"
          :timeout="2000"
          color="deep-orange lighten-5 pink--text"
          right
          top
        >
          <v-icon color="pink">mdi-exclamation-thick </v-icon>
          {{ snackbarText }}

          <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
              <v-icon> mdi-close-box</v-icon>
            </v-btn>
          </template>
        </v-snackbar>

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

  snackbarText: string = "";
  snackbar: boolean = false;

  public emailRules: any = [
    (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  public phoneRules: any = [
    (v: any) => !!v || "Phone Number is required",
    (v: any) =>
      (!isNaN(parseInt(v)) && v >= 0) || "Phone Number must be Valid Number",

    (v: any) => (v && v.length == 10) || "Phone Number must be 10 Numbers",
  ];
  public img: string = "";
  public dialog: boolean = true;
  public logo: File;

  public handleimage(e: File) {
    this.logo = e;
    this.img = URL.createObjectURL(e);
  }
  public edit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
    this.request.id = this.$store.getters.id;
    this.ProfileService.editProfile(this.request, this.logo).then(
      (response: any) => {
        this.snackbarText = response;
        this.snackbar = true;
        this.$emit("onEditProfileModel");
      },
      (err) => {
        if (err.response.status == 400) {
          this.snackbarText = err.response.data;
          this.snackbar = true;
        }
      }
    );
    }
  }
  public close() {
    this.$emit("closeModel");
  }
}
</script>


