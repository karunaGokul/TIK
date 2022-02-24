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

    <div align="right" v-if="role === 'MasterAdmin' && category !== 'Company'">
      <v-icon large color="primary" class="mr-10" @click="edit = !edit">
        mdi-pencil-box-multiple
      </v-icon>
    </div>

    <div class="pa-6">
      <v-tabs v-model="tab1" color="#16594a">
        <v-tab v-for="item in tab1Items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-card elevation="2" tile class="mt-2 pa-6">
        <v-card-text>
          <v-tabs-items v-model="tab1">
            <v-tab-item> </v-tab-item>

            <v-tab-item>
              <v-tabs v-model="tab3" v-if="response.fabricDyeing">
                <v-tab v-for="item in tab3Items" :key="item.tab">
                  {{ item.tab }}
                </v-tab>

                <v-tab-item>
                  <DyeingControl
                    :response="response.fabricDyeing.softFlow"
                    option="SoftFlow"
                    :edit="edit"
                  />
                </v-tab-item>
                <v-tab-item>
                  <DyeingControl
                    :response="response.fabricDyeing.winch"
                    option="Winch"
                    :edit="edit"
                  />
                </v-tab-item>
              </v-tabs>
            </v-tab-item>

            <v-tab-item>
              <v-tabs v-model="tab4">
                <v-tab v-for="item in tab4Items" :key="item.tab">
                  {{ item.tab }}
                </v-tab>
              </v-tabs>
            </v-tab-item>

            <v-tab-item>
              <v-tabs v-model="tab5">
                <v-tab v-for="item in tab5Items" :key="item.tab">
                  {{ item.tab }}
                </v-tab>
              </v-tabs>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
        <v-card-actions v-if="edit">
          <v-spacer></v-spacer>
          <v-btn elevation="2" color="primary" @click="save()"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import { IProfileService } from "@/service";
import DyeingControl from "./components/DyeingControl.vue";
import { DyeingProfileModel, productDetailModel } from "@/model";

@Component({
  mixins: [validationMixin],
  components: { DyeingControl },
})
export default class DyeBuilder extends Vue {
  @Inject("ProfileService") ProfileService: IProfileService;

  public response = new DyeingProfileModel();
  public dyeingData = new DyeingProfileModel();
  public edit: boolean = false;
  public option: string = "";
  public snackbarText: string = "";
  public snackbar: boolean = false;

  created() {
    this.createDyeing();
  }

  get role(): string {
    return this.$store.getters.role;
  }

  get category(): string {
    return this.$store.getters.category;
  }

  get companyId(): string {
    return this.$store.getters.companyId;
  }

  get employeeId(): string {
    return this.$store.getters.id;
  }

  public createDyeing() {
    this.edit = false;
    this.ProfileService.CreateDyeing(this.companyId).then(
      (response: DyeingProfileModel) => {
        this.response = response;
      }
    );
  }

  public removeOtherOption(data: productDetailModel, option: string) {
    if (option === "SoftFlow") {
      data.dyeingProcesses.forEach((b) => {
        data.dyeingProcesses = data.dyeingProcesses.filter(
          (item) => item.isSelected === true
        );
      });

      data.forEach((b) => {
        if (b.lycraBlend) {
          b.lycraBlend = "LycraBlends";
        } else {
          b.lycraBlend = null;
        }
      });
      

      if (data.tubularProcess.heatSetting) {
        data.tubularProcess.heatSetting = "HeatSetting";
      } else {
        data.tubularProcess.heatSetting = null;
      }

      if (data.tubularProcess.openWidthDryingProcesses.stenterDryer) {
        data.tubularProcess.openWidthDryingProcesses.stenterDryer =
          "StenterDryer";
      } else {
        data.tubularProcess.openWidthDryingProcesses.stenterDryer = null;
      }

      if (data.tubularProcess.openWidthDryingProcesses.relaxDryer) {
        data.tubularProcess.openWidthDryingProcesses.relaxDryer = "RelaxDryer";
      } else {
        data.tubularProcess.openWidthDryingProcesses.relaxDryer = null;
      }

      if (data.openWidthProcess.heatSetting) {
        data.openWidthProcess.heatSetting = "HeatSetting";
      } else {
        data.openWidthProcess.heatSetting = null;
      }

      if (data.openWidthProcess.openWidthDryingProcesses.stenterDryer) {
        data.openWidthProcess.openWidthDryingProcesses.stenterDryer =
          "StenterDryer";
      } else {
        data.openWidthProcess.openWidthDryingProcesses.stenterDryer = null;
      }

      if (data.openWidthProcess.openWidthDryingProcesses.relaxDryer) {
        data.openWidthProcess.openWidthDryingProcesses.relaxDryer =
          "RelaxDryer";
      } else {
        data.openWidthProcess.openWidthDryingProcesses.relaxDryer = null;
      }

      delete data.tubularProcess.availableSpecialFinishes;
      delete data.tubularProcess.availableTubularDryingProcesses;
      delete data.tubularProcess.availableOpenWidthCompactingMachines;
      delete data.tubularProcess.availableTubularCompactingMachines;
      delete data.tubularProcess.openWidthDryingProcesses.availableDipStenters;

      delete data.openWidthProcess.availableSpecialFinishes;
      delete data.openWidthProcess.availableOpenWidthCompactingMachines;
      delete data.openWidthProcess.openWidthDryingProcesses
        .availableDipStenters;

      delete data.availableSingleContents;
      delete data.availableBlendContents;
      delete data.availableSingleJerseys;
      delete data.availableRibs;
      delete data.availableInterlocks;
      delete data.availableVesselSizes;
    }
    if (option === "Winch") {
      data.dyeingProcesses = data.dyeingProcesses.filter(
        (item) => item.isSelected === true
      );

      data.forEach((b) => {
        if (b.lycraBlend) {
          b.lycraBlend = "LycraBlends";
        } else {
          b.lycraBlend = null;
        }
      });

      if (data.tubularProcess.heatSetting) {
        data.tubularProcess.heatSetting = "HeatSetting";
      } else {
        data.tubularProcess.heatSetting = null;
      }

      if (data.tubularProcess.openWidthDryingProcesses.stenterDryer) {
        data.tubularProcess.openWidthDryingProcesses.stenterDryer =
          "StenterDryer";
      } else {
        data.tubularProcess.openWidthDryingProcesses.stenterDryer = null;
      }

      if (data.tubularProcess.openWidthDryingProcesses.relaxDryer) {
        data.tubularProcess.openWidthDryingProcesses.relaxDryer = "RelaxDryer";
      } else {
        data.tubularProcess.openWidthDryingProcesses.relaxDryer = null;
      }

      if (data.openWidthProcess.heatSetting) {
        data.openWidthProcess.heatSetting = "HeatSetting";
      } else {
        data.openWidthProcess.heatSetting = null;
      }

      if (data.openWidthProcess.openWidthDryingProcesses.stenterDryer) {
        data.openWidthProcess.openWidthDryingProcesses.stenterDryer =
          "StenterDryer";
      } else {
        data.openWidthProcess.openWidthDryingProcesses.stenterDryer = null;
      }

      if (data.openWidthProcess.openWidthDryingProcesses.relaxDryer) {
        data.openWidthProcess.openWidthDryingProcesses.relaxDryer =
          "RelaxDryer";
      } else {
        data.openWidthProcess.openWidthDryingProcesses.relaxDryer = null;
      }

      delete data.tubularProcess.availableSpecialFinishes;
      delete data.tubularProcess.availableTubularDryingProcesses;
      delete data.tubularProcess.availableOpenWidthCompactingMachines;
      delete data.tubularProcess.availableTubularCompactingMachines;
      delete data.tubularProcess.openWidthDryingProcesses.availableDipStenters;

      delete data.openWidthProcess.availableSpecialFinishes;
      delete data.openWidthProcess.availableOpenWidthCompactingMachines;
      delete data.openWidthProcess.openWidthDryingProcesses
        .availableDipStenters;

      delete data.availableSingleContents;
      delete data.availableBlendContents;
      delete data.availableSingleJerseys;
      delete data.availableRibs;
      delete data.availableInterlocks;
      delete data.availableVesselSizes;
    }
  }

  public save() {
    this.dyeingData = JSON.parse(JSON.stringify(this.response));

    this.dyeingData.companyId = this.companyId;

    this.removeOtherOption(this.dyeingData.fabricDyeing.softFlow, "SoftFlow");
    this.removeOtherOption(this.dyeingData.fabricDyeing.winch, "Winch");

    this.ProfileService.AddDyeing(this.dyeingData).then((response: any) => {
      this.snackbarText = response.split("\n").join("</p><p>");
      this.snackbar = true;
      this.createDyeing();
    });
  }

  tab1: any = null;
  tab2: any = null;
  tab3: any = null;
  tab4: any = null;
  tab5: any = null;

  tab1Items: any = [
    { tab: "Cut Panel", content: "Tab1 Content" },
    { tab: "Fabric", content: "Tab2 Content" },
    { tab: "Yarn", content: "Tab3 Content" },
    { tab: "Garment", content: "Tab4 Content" },
  ];

  tab3Items: any = [
    { tab: "Soft Flow", content: "Tab1 Content" },
    { tab: "Winch", content: "Tab2 Content" },
  ];
  tab4Items: any = [
    { tab: "CPD", content: "Tab1 Content" },
    { tab: "Dyeing", content: "Tab2 Content" },
    { tab: "Washing", content: "Tab3 Content" },
  ];
  tab5Items: any = [
    { tab: "Bleaching", content: "Tab1 Content" },
    { tab: "Dyeing", content: "Tab2 Content" },
  ];
}
</script>
