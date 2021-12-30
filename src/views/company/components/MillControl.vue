<template>
  <div>
    <v-card class="px-2 py-12" flat>
      <div
        v-if="
          option === 'SpecialYarn' ||
          option === 'DyedYarn' ||
          option === 'SpecialFabric'
        "
      >
        <v-row justify="center" class="py-5">
          <h2 class="font-weight-regular">
            {{ response.typeLable }}
          </h2>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense class="mb-2">
                <v-toolbar-title
                  class="subtitle-1"
                  v-if="option === 'SpecialYarn'"
                >
                  Single SPL Yarns Type
                </v-toolbar-title>
                <v-toolbar-title
                  class="subtitle-1"
                  v-else-if="option === 'DyedYarn'"
                >
                  Single Dyed Yarns Type
                </v-toolbar-title>
                <v-toolbar-title
                  class="subtitle-1"
                  v-else-if="option === 'SpecialFabric'"
                >
                  Single SPL Fabrics Type
                </v-toolbar-title>
              </v-toolbar>
              <v-list-item
                v-for="(item, index) in response.singleSpecialDyedTypes"
                :key="index"
              >
                <v-list-item-content>{{ item.name }}</v-list-item-content>
                <v-list-item-action>
                  <v-checkbox
                    v-model="item.isSelected"
                    :disabled="edit === false"
                  ></v-checkbox>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="4">
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense class="mb-2">
                <v-toolbar-title
                  class="subtitle-1"
                  v-if="option === 'SpecialYarn'"
                >
                  Blend SPL Yarns Type
                </v-toolbar-title>
                <v-toolbar-title
                  class="subtitle-1"
                  v-else-if="option === 'DyedYarn'"
                >
                  Blend Dyed Yarns Type
                </v-toolbar-title>
                <v-toolbar-title
                  class="subtitle-1"
                  v-else-if="option === 'SpecialFabric'"
                >
                  Blend SPL Fabrics Type
                </v-toolbar-title>
              </v-toolbar>
              <v-list-item
                v-for="(item, index) in response.blendSpecialDyedTypes"
                :key="index"
              >
                <v-list-item-content>{{ item.name }}</v-list-item-content>
                <v-list-item-action>
                  <v-checkbox
                    v-model="item.isSelected"
                    :disabled="edit === false"
                  ></v-checkbox>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </div>
      <div
        v-if="
          option != 'MelangeYarn' &&
          option != 'SlubYarn' &&
          option != 'MelangeFabric' &&
          option != 'SlubFabric'
        "
      >
        <v-row justify="center" class="py-4">
          <h2 class="font-weight-regular">
            {{ response.contentLable }}
          </h2>
        </v-row>
        <v-row>
          <v-col cols="4">
            <SingleContents
              :response="response"
              :melanSlubTypesOptions="melanSlubTypesOptions"
              :option="option"
              :edit="edit"
            />
          </v-col>
          <v-col cols="8">
            <BlendContents
              :response="response"
              :melanSlubTypesOptions="melanSlubTypesOptions"
              :option="option"
              :edit="edit"
            />
          </v-col>
        </v-row>
      </div>
      <v-row
        v-if="
          option === 'MelangeYarn' ||
          option === 'SlubYarn' ||
          option === 'MelangeFabric' ||
          option === 'SlubFabric'
        "
      >
        <v-col cols="6">
          <v-list flat>
            <v-toolbar flat color="#c2e2e2" dense class="mb-2">
              <v-toolbar-title
                class="subtitle-1"
                v-if="option === 'MelangeYarn' || option === 'MelangeFabric'"
              >
                Choose the type of Melanges you offer
              </v-toolbar-title>
              <v-toolbar-title
                class="subtitle-1"
                v-else-if="option === 'SlubYarn' || option === 'SlubFabric'"
              >
                Choose the type of Slubs you offer
              </v-toolbar-title>
            </v-toolbar>
            <v-list-item
              v-for="(item, index) in response.melanSlubTypes"
              :key="index"
            >
              <v-list-item-content>{{ item.name }}</v-list-item-content>
              <v-list-item-action>
                <v-checkbox
                  v-model="item.isSelected"
                  :disabled="edit === false"
                  @change="updateMelanSlubTypes()"
                ></v-checkbox>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="6">
          <SingleContents
            :response="response"
            :melanSlubTypesOptions="melanSlubTypesOptions"
            :option="option"
            :edit="edit"
          />
        </v-col>
      </v-row>
      <div
        v-if="
          option === 'MelangeYarn' ||
          option === 'SlubYarn' ||
          option === 'MelangeFabric' ||
          option === 'SlubFabric'
        "
      >
        <v-row justify="center" class="py-4">
          <h2
            class="font-weight-regular"
            v-if="option === 'MelangeYarn' || option === 'MelangeFabric'"
          >
            Choose the blend content Yarns you offer in Melange
          </h2>
          <h2
            class="font-weight-regular"
            v-else-if="option === 'SlubYarn' || option === 'SlubFabric'"
          >
            Choose the blend content Yarns you offer in Slub
          </h2>
        </v-row>
        <v-row>
          <v-col cols="12">
            <BlendContents
              :response="response"
              :melanSlubTypesOptions="melanSlubTypesOptions"
              :option="option"
              :edit="edit"
            />
          </v-col>
        </v-row>
      </div>
      <div
        v-if="
          option != 'MelangeYarn' &&
          option != 'SlubYarn' &&
          option != 'MelangeFabric' &&
          option != 'SlubFabric'
        "
      >
        <v-row justify="center" class="py-5">
          <h2 class="font-weight-regular">
            {{ response.qualityLable }}
          </h2>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense class="mb-2">
                <v-toolbar-title class="subtitle-1">
                  Single Quality
                </v-toolbar-title>
              </v-toolbar>
              <v-list-item
                v-for="(item, index) in response.singleQualities"
                :key="index"
              >
                <v-list-item-content>{{ item.name }}</v-list-item-content>
                <v-list-item-action>
                  <v-checkbox
                    v-model="item.isSelected"
                    :disabled="edit === false"
                  ></v-checkbox>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="4">
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense class="mb-2">
                <v-toolbar-title class="subtitle-1"
                  >Blend Quality</v-toolbar-title
                >
              </v-toolbar>
              <v-list-item
                v-for="(item, index) in response.blendQualities"
                :key="index"
              >
                <v-list-item-content>{{ item.name }}</v-list-item-content>
                <v-list-item-action>
                  <v-checkbox
                    v-model="item.isSelected"
                    :disabled="edit === false"
                  ></v-checkbox>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </div>
      <v-row justify="center" class="py-5">
        <h2 class="font-weight-regular">
          {{ response.countLable }}
        </h2>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-label>Counts:</v-label>
          <v-autocomplete
            v-model="response.counts"
            :items="response.availableCounts"
            outlined
            dense
            multiple
            :disabled="edit === false"
          ></v-autocomplete>
          <div
            v-if="
              option != 'MelangeYarn' &&
              option != 'SlubYarn' &&
              option != 'MelangeFabric' &&
              option != 'SlubFabric'
            "
          >
            <v-label> Deniers: </v-label>
            <v-autocomplete
              v-model="response.deniers"
              :items="response.availableDeniers"
              outlined
              dense
              multiple
              :disabled="edit === false"
            ></v-autocomplete>
          </div>
          <v-label>Enter AVG Credit time you offer:</v-label>
          <v-text-field
            outlined
            dense
            v-model="response.avgCreditTime"
            :disabled="edit === false"            
          ></v-text-field>
        </v-col>
      </v-row>
      <div
        v-if="
          option === 'RegularFabric' ||
          option === 'SpecialFabric' ||
          option === 'MelangeFabric' ||
          option === 'SlubFabric'
        "
      >
        <v-row justify="center" class="py-5">
          <h2 class="font-weight-regular">
            {{ response.structureLable }}
          </h2>
        </v-row>
        <Structure :response="response" :option="option" :edit="edit" />
      </div>
      <v-row
        class="mt-12"
        v-if="
          option === 'RegularFabric' ||
          option === 'SpecialFabric' ||
          option === 'MelangeFabric' ||
          option === 'SlubFabric'
        "
      >
        <v-col cols="4" class="mx-3">
          <v-row>
            <input
              type="radio"
              @change="enableRadioGroup('tubular')"
              v-model="tubular"
              class="mr-3"
              :disabled="edit === false"
            />
            <v-label> Tubular </v-label>
          </v-row>
          <div>
            <Feeder
              :response="response.fabricStructure.tubular"
              :option="option"
              :enable="tubular"
              :edit="edit"
            />
          </div>
          <!-- <v-row class="pt-6">
            <v-label>GG:</v-label>
            <v-text-field
              class="mx-2"
              outlined
              dense
              v-model="response.fabricStructure.tubular.gg"
              :disabled="edit === false || tubular === false"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-label>DIA:</v-label>
            <v-text-field
              class="mx-2"
              outlined
              dense
              v-model="response.fabricStructure.tubular.dia"
              :disabled="edit === false || tubular === false"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-label>Lycra:</v-label>
            <v-checkbox
              class="mt-n2 ml-4"
              v-model="response.fabricStructure.tubular.allFeeder"
              :disabled="edit === false || tubular === false"
            ></v-checkbox>
            <v-label>All Feeder</v-label>
            <v-checkbox
              class="mt-n2 ml-4"
              v-model="response.fabricStructure.tubular.alternateFeeder"
              :disabled="edit === false || tubular === false"
            ></v-checkbox>
            <v-label>Alternate Feeder</v-label>
          </v-row> -->
        </v-col>
        <v-col cols="4" class="mx-3">
          <v-row>
            <input
              type="radio"
              @change="enableRadioGroup('width')"
              v-model="width"
              class="mr-3"
              :disabled="edit === false"
            />
            <v-label>OpenWidth</v-label>
          </v-row>
          <div>
            <Feeder
              :response="response.fabricStructure.openWidth"
              :option="option"
              :enable="width"
              :edit="edit"
            />
          </div>
          <!-- <v-row class="pt-6">
            <v-label>GG:</v-label>
            <v-text-field
              class="mx-2"
              outlined
              dense
              v-model="response.fabricStructure.openWidth.gg"
              :disabled="edit === false || width === false"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-label>DIA:</v-label>
            <v-text-field
              class="mx-2"
              outlined
              dense
              v-model="response.fabricStructure.openWidth.dia"
              :disabled="edit === false || width === false"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-label>Lycra:</v-label>
            <v-checkbox
              class="mt-n2 ml-4"
              v-model="response.fabricStructure.openWidth.allFeeder"
              :disabled="edit === false || width === false"
            ></v-checkbox>
            <v-label>All Feeder</v-label>
            <v-checkbox
              class="mt-n2 ml-4"
              v-model="response.fabricStructure.openWidth.alternateFeeder"
              :disabled="edit === false || width === false"
            ></v-checkbox>
            <v-label>Alternate Feeder</v-label>
          </v-row> -->
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { contentModel, ProductDetailModel } from "@/model";
import BlendContents from "./BlendContents.vue";
import SingleContents from "./SingleContents.vue";
import Structure from "./Structure.vue";
import Feeder from "./Feeder.vue";

@Component({
  components: { BlendContents, SingleContents, Structure, Feeder },
})
export default class MillControl extends Vue {
  @Prop() response: ProductDetailModel;
  @Prop() option: string;
  @Prop() edit: boolean;

  public melanSlubTypesOptions: Array<contentModel> = [];
  public tubular: boolean = false;
  public width: boolean = false;
  public creditTimeRules: any = [
    (v: any) => !!v || "Price is required",
    (v: any) => (!isNaN(parseInt(v)) && v >= 0) || "Price must be Valid Number",
  ];

  created() {
    if (
      this.option === "MelangeYarn" ||
      this.option === "SlubYarn" ||
      this.option === "MelangeFabric" ||
      this.option === "SlubFabric"
    )
      this.updateMelanSlubTypes();
    if (
      this.option === "RegularFabric" ||
      this.option === "SpecialFabric" ||
      this.option === "MelangeFabric" ||
      this.option === "SlubFabric"
    )
      this.initializetubular();
    this.intializeBlendContents();
  }

  updated() {
    this.intializeBlendContents();
  }

  update() {
    this.$emit("validateRules", this.$v);
  }
  intializeBlendContents() {
    this.response.blendContents.forEach((b) => {
      b.combos.forEach((c) => {
        if (c.combinationOne === 0) c.combinationOne = null;
        if (c.combinationTwo === 0) c.combinationTwo = null;
      });
    });
  }
  initializetubular() {
    if (
      this.response.fabricStructure.openWidth.gg != null ||
      this.response.fabricStructure.openWidth.dia != null ||
      this.response.fabricStructure.openWidth.allFeeder ||
      this.response.fabricStructure.openWidth.alternateFeeder
    )
      this.width = null;
    else if (
      this.response.fabricStructure.tubular.gg != null ||
      this.response.fabricStructure.tubular.dia != null ||
      this.response.fabricStructure.tubular.allFeeder ||
      this.response.fabricStructure.tubular.alternateFeeder
    )
      this.tubular = null;
  }

  enableRadioGroup(option: string) {
    if (option === "tubular") {
      this.response.fabricStructure.openWidth.gg = null;
      this.response.fabricStructure.openWidth.dia = null;
      this.response.fabricStructure.openWidth.allFeeder = false;
      this.response.fabricStructure.openWidth.alternateFeeder = false;
      this.width = false;
    } else if (option === "width") {
      this.response.fabricStructure.tubular.gg = null;
      this.response.fabricStructure.tubular.dia = null;
      this.response.fabricStructure.tubular.allFeeder = false;
      this.response.fabricStructure.tubular.alternateFeeder = false;
      this.tubular = false;
    }
  }

  updateMelanSlubTypes() {
    this.melanSlubTypesOptions = this.response.melanSlubTypes.filter(
      (item) => item.isSelected === true
    );
  }
}
</script>

