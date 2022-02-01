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
      Yarn (or) Fabric
    </div>
    <div align="right" v-if="role === 'MasterAdmin' && category != 'Company'">
      <v-icon large color="primary" class="mr-10" @click="edit = !edit">
        mdi-pencil-box-multiple
      </v-icon>
    </div>
    <v-form ref="form">
      <div class="pa-6">
        <v-tabs v-model="tab1" color="#16594a">
          <v-tab v-for="item in tab1Items" :key="item.tab">
            {{ item.tab }}
          </v-tab>
        </v-tabs>

        <v-card elevation="2" tile class="mt-2 pa-6">
          <v-card-text>
            <v-tabs-items v-model="tab1">
              <v-tab-item>
                <v-tabs v-model="tab2">
                  <v-tab v-for="item in tab2Items" :key="item.tab">
                    {{ item.tab }}
                  </v-tab>

                  <v-tab-item>
                    <MillControl
                      :response="response.yarn.regularYarn"
                      option="RegularYarn"
                      :edit="edit"
                    />
                  </v-tab-item>
                  <v-tab-item>
                    <MillControl
                      :response="response.yarn.specialYarn"
                      option="SpecialYarn"
                      :edit="edit"
                    />
                  </v-tab-item>
                  <v-tab-item>
                    <MillControl
                      :response="response.yarn.dyedYarn"
                      option="DyedYarn"
                      :edit="edit"
                    />
                  </v-tab-item>
                  <v-tab-item>
                    <v-tabs v-model="tab3">
                      <v-tab v-for="item in tab3Items" :key="item.tab">
                        {{ item.tab }}
                      </v-tab>
                      <v-tab-item>
                        <MillControl
                          :response="response.yarn.melangeSlubYarn.melange"
                          option="MelangeYarn"
                          :edit="edit"
                        />
                      </v-tab-item>
                      <v-tab-item>
                        <MillControl
                          :response="response.yarn.melangeSlubYarn.slub"
                          option="SlubYarn"
                          :edit="edit"
                        />
                      </v-tab-item>
                    </v-tabs>
                  </v-tab-item>
                </v-tabs>
              </v-tab-item>
              <v-tab-item>
                <v-tabs v-model="tab4">
                  <v-tab v-for="item in tab4Items" :key="item.tab">
                    {{ item.tab }}
                  </v-tab>
                  <v-tab-item>
                    <MillControl
                      :response="response.fabric.regularFabric"
                      option="RegularFabric"
                      :edit="edit"
                    />
                  </v-tab-item>
                  <v-tab-item>
                    <MillControl
                      :response="response.fabric.specialFabric"
                      option="SpecialFabric"
                      :edit="edit"
                    />
                  </v-tab-item>

                  <v-tab-item>
                    <v-tabs v-model="tab3">
                      <v-tab v-for="item in tab3Items" :key="item.tab">
                        {{ item.tab }}
                      </v-tab>
                      <v-tab-item>
                        <MillControl
                          :response="response.fabric.melangeSlubFabric.melange"
                          option="MelangeFabric"
                          :edit="edit"
                        />
                      </v-tab-item>
                      <v-tab-item>
                        <MillControl
                          :response="response.fabric.melangeSlubFabric.slub"
                          option="SlubFabric"
                          :edit="edit"
                        />
                      </v-tab-item>
                    </v-tabs>
                  </v-tab-item>
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
    </v-form>
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="green lighten-5 green--text"
      right
      top
    >
      <v-icon color="green">mdi-exclamation-thick </v-icon>
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          <v-icon> mdi-close-box</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { CompanyProfileModel, ProductDetailModel } from "@/model";
import { validationMixin } from "vuelidate";
import { IProfileService } from "@/service";
import { Component, Inject, Vue } from "vue-property-decorator";
import MillControl from "./components/MillControl.vue";

@Component({
  mixins: [validationMixin],
  components: { MillControl },
})
export default class MillBuilder extends Vue {
  @Inject("ProfileService") ProfileService: IProfileService;
  public response = new CompanyProfileModel();
  public millData = new CompanyProfileModel();
  public edit: boolean = false;
  public option: string = "";
  public snackbarText: string = "";
  public snackbar: boolean = false;

  created() {
    this.createMill();
  }

  public createMill() {
    this.edit = false;
    this.ProfileService.CreateMills(this.companyId).then(
      (response: CompanyProfileModel) => {
        this.response = response;
      }
    );
  }

  public save() {
    this.millData = JSON.parse(JSON.stringify(this.response));

    this.millData.companyId = this.companyId;
    this.millData.creatorId = this.employeeId;

    this.removeOtherOption(this.millData.yarn.regularYarn, "RegularYarn");
    this.removeOtherOption(this.millData.yarn.specialYarn, "SpecialYarn");
    this.removeOtherOption(this.millData.yarn.dyedYarn, "DyedYarn");
    this.removeOtherOption(
      this.millData.yarn.melangeSlubYarn.melange,
      "MelangeYarn"
    );
    this.removeOtherOption(this.millData.yarn.melangeSlubYarn.slub, "SlubYarn");
    this.removeOtherOption(this.millData.fabric.regularFabric, "RegularFabric");
    this.removeOtherOption(this.millData.fabric.specialFabric, "SpecialFabric");
    this.removeOtherOption(
      this.millData.fabric.melangeSlubFabric.melange,
      "MelangeFabric"
    );
    this.removeOtherOption(
      this.millData.fabric.melangeSlubFabric.slub,
      "SlubFabric"
    );
    // if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.ProfileService.AddMills(this.millData).then((response: any) => {
        this.snackbarText = response;
        this.snackbar = true;
        this.createMill();
      });
    // }
  }

  public removeOtherOption(data: ProductDetailModel, option: string) {
    if (
      option === "SpecialYarn" ||
      option === "DyedYarn" ||
      option === "SpecialFabric"
    ) {
      data.singleSpecialDyedTypes = data.singleSpecialDyedTypes.filter(
        (item) => item.isSelected === true
      );
      data.blendSpecialDyedTypes = data.blendSpecialDyedTypes.filter(
        (item) => item.isSelected === true
      );
    }

    if (
      option === "MelangeYarn" ||
      option === "SlubYarn" ||
      option === "MelangeFabric" ||
      option === "SlubFabric"
    ) {
      data.melanSlubTypes = data.melanSlubTypes.filter(
        (item) => item.isSelected === true
      );
      data.singleContents.forEach((b) => delete b.melanSlubTypeOptions);
      data.blendContents.forEach((b) => delete b.melanSlubTypeOptions);
    }
    if (
      option != "MelangeYarn" &&
      option != "SlubYarn" &&
      option != "MelangeFabric" &&
      option != "SlubFabric"
    ) {
      data.singleContents.forEach((b) => {
        if (b.spun) {
          b.spun = "Spun";
        } else {
          b.spun = null;
        }
        if (b.filament) {
          b.filament = "Filament";
        } else {
          b.filament = null;
        }
      });
      data.singleQualities = data.singleQualities.filter(
        (item) => item.isSelected === true
      );
      data.blendQualities = data.blendQualities.filter(
        (item) => item.isSelected === true
      );
      delete data.availableDeniers;

      if (data.fabricStructure) {
        if (data.fabricStructure.tubular.allFeeder) {
          data.fabricStructure.tubular.allFeeder = "All Feeder";
        } else {
          data.fabricStructure.tubular.allFeeder = null;
        }

        if (data.fabricStructure.openWidth.allFeeder) {
          data.fabricStructure.openWidth.allFeeder = "All Feeder";
        } else {
          data.fabricStructure.openWidth.allFeeder = null;
        }

        if (data.fabricStructure.tubular.alternateFeeder) {
          data.fabricStructure.tubular.alternateFeeder = "Alternate Feeder";
        } else {
          data.fabricStructure.tubular.alternateFeeder = null;
        }

        if (data.fabricStructure.openWidth.alternateFeeder) {
          data.fabricStructure.openWidth.alternateFeeder = "Alternate Feeder";
        } else {
          data.fabricStructure.openWidth.alternateFeeder = null;
        }
      }
    }
    if (
      option === "RegularFabric" ||
      option === "SpecialFabric" ||
      option === "MelangeFabric" ||
      option === "SlubFabric"
    ) {
      // data.fabricStructure.singleJersey =
      //   data.fabricStructure.singleJersey.filter(
      //     (item) => item.isSelected === true
      //   );
      // data.fabricStructure.interlock = data.fabricStructure.interlock.filter(
      //   (item) => item.isSelected === true
      // );
      // data.fabricStructure.rib = data.fabricStructure.rib.filter(
      //   (item) => item.isSelected === true
      // );
      delete data.fabricStructure.availableSingleJersey;
      delete data.fabricStructure.availableInterlock;
      delete data.fabricStructure.availableRib;
      delete data.structureLable;
    }
    data.singleContents.forEach((b) => delete b.contentOptions);
    data.blendContents.forEach((b) => delete b.contentOptions);
    data.blendContents.forEach((b) => {
      b.combos.forEach((c) => {
        if (c.combinationOne === null) c.combinationOne = 0;
        if (c.combinationTwo === null) c.combinationTwo = 0;
      });
    });
    delete data.availableCounts;
    delete data.countLable;
    delete data.contentLable;
    delete data.qualityLable;
    delete data.typeLable;
  }

  get employeeId(): string {
    return this.$store.getters.id;
  }

  get companyId(): string {
    return this.$store.getters.companyId;
  }

  get role(): string {
    return this.$store.getters.role;
  }

  get category(): string {
    return this.$store.getters.category;
  }

  tab1: any = null;

  tab1Items: any = [
    { tab: "Yarn", content: "Tab 1 Content" },
    { tab: "Fabric", content: "Tab 2 Content" },
  ];

  tab2: any = null;

  tab2Items: any = [
    { tab: "Regular Yarn", content: "Tab 1 Content" },
    { tab: "Special Yarn", content: "Tab 2 Content" },
    { tab: "Dyed Yarn", content: "Tab 3 Content" },
    { tab: "Melange/Slub Yarn", content: "Tab 4 Content" },
  ];
  tab3: any = null;

  tab3Items: any = [
    { tab: "Melange", content: "Tab 1 Content" },
    { tab: "Slub", content: "Tab 2 Content" },
  ];
  tab4: any = null;

  tab4Items: any = [
    { tab: "Regular Fabric", content: "Tab 1 Content" },
    { tab: "Special Fabric", content: "Tab 2 Content" },
    { tab: "Melange/Slub Fabric", content: "Tab 3 Content" },
  ];
}
</script>
