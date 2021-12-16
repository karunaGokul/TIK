<template>
  <div>
    <v-card class="px-2 py-12" flat>
      <v-row
        justify="center"
        class="py-5"
        v-if="
          option === 'SpecialYarn' ||
          option === 'DyedYarn' ||
          option === 'SpecialFabric'
        "
      >
        <h2 class="font-weight-regular">
          {{ response.typeLable }}
        </h2>
      </v-row>
      <v-row
        v-if="
          option === 'SpecialYarn' ||
          option === 'DyedYarn' ||
          option === 'SpecialFabric'
        "
      >
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
      <v-row
        justify="center"
        class="py-4"
        v-if="
          option != 'MelangeYarn' &&
          option != 'SlubYarn' &&
          option != 'MelangeFabric' &&
          option != 'SlubFabric'
        "
      >
        <h2 class="font-weight-regular">
          {{ response.contentLable }}
        </h2>
      </v-row>
      <v-row
        v-if="
          option != 'MelangeYarn' &&
          option != 'SlubYarn' &&
          option != 'MelangeFabric' &&
          option != 'SlubFabric'
        "
      >
        <v-col cols="4">
          <v-data-table
            :headers="singleContentHeaders"
            :items="response.singleContents"
            class="elevation-1 table-striped"
            hide-default-footer
            disable-sort
          >
            <template v-slot:top>
              <v-toolbar flat color="#c2e2e2" dense class="mb-2">
                <v-toolbar-title class="subtitle-1"
                  >Single Content</v-toolbar-title
                >
              </v-toolbar>
            </template>
            <template v-slot:[`header.action`]>
              <v-btn
                icon
                x-small
                outlined
                @click="addSingleContent"
                :disabled="edit === false"
              >
                <v-icon> mdi-plus</v-icon>
              </v-btn>
            </template>
            <template v-slot:[`item.content`]="{ item }">
              <v-select
                v-model="item.content"
                :items="item.contentOptions"
                item-text="name"
                return-object
                class="mx-n2 mr-n6 text-caption mt-3"
                placeholder="Select"
                solo
                :disabled="edit === false"
              ></v-select>
            </template>
            <template v-slot:[`item.spun`]="{ item }">
              <v-simple-checkbox
                v-model="item.spun"
                class="mx-n2"
                :disabled="edit === false"
              ></v-simple-checkbox>
            </template>
            <template v-slot:[`item.filaments`]="{ item }">
              <v-simple-checkbox
                v-model="item.filament"
                class="mx-n6"
                :disabled="edit === false"
              ></v-simple-checkbox>
            </template>
            <template v-slot:[`item.action`]="{ index }">
              <v-btn
                icon
                x-small
                :disabled="edit === false"
                @click="removeSingleContent(index)"
                v-if="index > 0"
              >
                <v-icon> mdi-close</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
        <v-col cols="8">
          <BlendContents :response="response" :option="option" :edit="edit" />
        </v-col>
      </v-row>
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
                  @change="filterMelanSlubTypes()"
                ></v-checkbox>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="6">
          <v-data-table
            :headers="singleContentHeaders"
            :items="response.singleContents"
            class="elevation-1 table-striped"
            hide-default-footer
            disable-sort
          >
            <template v-slot:top>
              <v-toolbar flat color="#c2e2e2" dense class="mb-2">
                <v-toolbar-title
                  class="subtitle-1"
                  v-if="option === 'MelangeYarn' || option === 'MelangeFabric'"
                >
                  Choose the single content Yarns you offer in Melange
                </v-toolbar-title>
                <v-toolbar-title
                  class="subtitle-1"
                  v-else-if="option === 'SlubYarn' || option === 'SlubFabric'"
                >
                  Choose the single content Yarns you offer in Slub
                </v-toolbar-title>
              </v-toolbar>
            </template>
            <template v-slot:[`header.action`]>
              <v-btn
                icon
                x-small
                outlined
                @click="addSingleContent"
                :disabled="edit === false"
              >
                <v-icon> mdi-plus</v-icon>
              </v-btn>
            </template>
            <template v-slot:[`item.type`]="{ item }">
              <v-select
                v-model="item.melanSlubType"
                :items="melanSlubTypesOptions"
                item-text="name"
                return-object
                class="mr-n6 mb-n3 text-caption mt-3"
                placeholder="Select"
                solo
                :disabled="edit === false"
              ></v-select>
            </template>
            <template v-slot:[`item.content`]="{ item }">
              <v-select
                v-model="item.content"
                :items="item.contentOptions"
                item-text="name"
                return-object
                class="mr-n6 mb-n3 text-caption mt-3"
                placeholder="Select"
                solo
                :disabled="edit === false"
              ></v-select>
            </template>
            <template v-slot:[`item.action`]="{ index }">
              <v-btn
                icon
                x-small
                @click="removeSingleContent(index)"
                v-if="index > 0"
                :disabled="edit === false"
              >
                <v-icon> mdi-close</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        class="py-4"
        v-if="
          option === 'MelangeYarn' ||
          option === 'SlubYarn' ||
          option === 'MelangeFabric' ||
          option === 'SlubFabric'
        "
      >
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
      <v-row
        v-if="
          option === 'MelangeYarn' ||
          option === 'SlubYarn' ||
          option === 'MelangeFabric' ||
          option === 'SlubFabric'
        "
      >
        <v-col cols="12">
          <BlendContents :response="response" :option="option" :edit="edit" />
        </v-col>
      </v-row>
      <v-row
        justify="center"
        class="py-5"
        v-if="
          option != 'MelangeYarn' &&
          option != 'SlubYarn' &&
          option != 'MelangeFabric' &&
          option != 'SlubFabric'
        "
      >
        <h2 class="font-weight-regular">
          {{ response.qualityLable }}
        </h2>
      </v-row>
      <v-row
        v-if="
          option != 'MelangeYarn' &&
          option != 'SlubYarn' &&
          option != 'MelangeFabric' &&
          option != 'SlubFabric'
        "
      >
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
            chips
            small-chips
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
              chips
              small-chips
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
        <v-row>
          <v-col cols="4">
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense class="mb-2">
                <v-toolbar-title class="subtitle-1">
                  Single Jersey
                </v-toolbar-title>
              </v-toolbar>
              <v-list-item
                v-for="(item, index) in response.fabricStructure.singleJersey"
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
                <v-toolbar-title class="subtitle-1">
                  Interlock
                </v-toolbar-title>
              </v-toolbar>
              <v-list-item
                v-for="(item, index) in response.fabricStructure.interlock"
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
                <v-toolbar-title class="subtitle-1"> RIB </v-toolbar-title>
              </v-toolbar>
              <v-list-item
                v-for="(item, index) in response.fabricStructure.rib"
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
          <v-row class="pt-6">
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
          </v-row>
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
          <v-row class="pt-6">
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
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { contentModel, ProductDetailModel } from "@/model";
import BlendContents from "./BlendContents.vue";

@Component({
  components: { BlendContents },
})
export default class CompanyControl extends Vue {
  @Prop() response: ProductDetailModel;
  @Prop() option: string;
  @Prop() edit: boolean;
  public melanSlubTypesOptions: Array<contentModel> = [];
  public tubular: boolean = false;
  public width: boolean = false;

  created() {
    if (
      this.option === "MelangeYarn" ||
      this.option === "SlubYarn" ||
      this.option === "MelangeFabric" ||
      this.option === "SlubFabric"
    ) {
      this.singleContentHeaders.splice(0, 0, {
        text: "Colour Type",
        value: "type",
        divider: true,
      });
      this.singleContentHeaders.splice(2, 2);
    }

    this.intializeBlendContents();
    this.filterMelanSlubTypes();
  }
  updated() {
    this.intializeBlendContents();
  }
  intializeBlendContents() {
    this.response.blendContents.forEach((b) => {
      b.combos.forEach((c) => {
        if (c.combinationOne === 0) c.combinationOne = null;
        if (c.combinationTwo === 0) c.combinationTwo = null;
      });
    });
  }
  addSingleContent() {
    this.response.singleContents.push({
      ...JSON.parse(JSON.stringify(this.response.singleContents[0])),
    });
    const length = this.response.singleContents.length;
    if (
      this.option === "MelangeYarn" ||
      this.option === "SlubYarn" ||
      this.option === "MelangeFabric" ||
      this.option === "SlubFabric"
    ) {
      this.response.singleContents[length - 1].melanSlubType = null;
    } else {
      this.response.singleContents[length - 1].spun = null;
      this.response.singleContents[length - 1].filament = null;
    }
    this.response.singleContents[length - 1].content = null;
  }
  removeSingleContent(index: number) {
    this.response.singleContents.splice(index, 1);
  }

  enableRadioGroup(option: string) {
    if (option === "tubular") {
      this.width = false;
      this.response.fabricStructure.openWidth.gg = null;
      this.response.fabricStructure.openWidth.dia = null;
      this.response.fabricStructure.openWidth.allFeeder = false;
      this.response.fabricStructure.openWidth.alternateFeeder = false;
    } else if (option === "width") {
      this.tubular = false;
      this.response.fabricStructure.tubular.gg = null;
      this.response.fabricStructure.tubular.dia = null;
      this.response.fabricStructure.tubular.allFeeder = false;
      this.response.fabricStructure.tubular.alternateFeeder = false;
    }
  }

  filterMelanSlubTypes() {
    this.melanSlubTypesOptions = this.response.melanSlubTypes.filter(
      (item) => item.isSelected === true
    );
  }

  singleContentHeaders: any = [
    { text: "Content", value: "content", divider: true },
    { text: "Spun", value: "spun", align: "center", divider: true },
    { text: "Filaments", value: "filaments", align: "center", divider: true },
    { text: "", value: "action" },
  ];
}
</script>

