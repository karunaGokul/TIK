<template>
  <div>
    <v-card class="px-2 py-12" flat>
      <v-row>
        <v-col cols="6">
          <v-list flat>
            <v-toolbar flat color="#c2e2e2" dense class="mb-2">
              <v-toolbar-title class="subtitle-1" v-if="option === 'MelangeYarn'||option === 'MelangeFabric'">
                Choose the type of Melanges you offer
              </v-toolbar-title>
              <v-toolbar-title class="subtitle-1" v-else-if="option === 'SlubYarn'||option === 'SlubFabric'">
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
                <v-toolbar-title class="subtitle-1" v-if="option === 'MelangeYarn'||option === 'MelangeFabric'">
                  Choose the single content Yarns you offer in Melange
                </v-toolbar-title>
                <v-toolbar-title
                  class="subtitle-1"
                  v-else-if="option === 'SlubYarn'||option === 'SlubFabric'"
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
      <v-row justify="center" class="py-4">
        <h2 class="font-weight-regular" v-if="option === 'MelangeYarn'||option === 'MelangeFabric'">
          Choose the blend content Yarns you offer in Melange
        </h2>
        <h2 class="font-weight-regular" v-else-if="option === 'SlubYarn'||option === 'SlubFabric'">
          Choose the blend content Yarns you offer in Slub
        </h2>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-data-table
            :headers="blendContentHeaders"
            :items="response.blendContents"
            class="elevation-1 table-striped"
            hide-default-footer
            disable-sort
          >
            <template v-slot:top>
              <v-toolbar flat color="#c2e2e2" dense class="mb-2">
                <v-toolbar-title class="subtitle-1"
                  >Blend Content</v-toolbar-title
                >
              </v-toolbar>
            </template>
            <template v-slot:[`header.action`]>
              <v-btn
                icon
                x-small
                outlined
                @click="addBlendContent"
                :disabled="edit === false"
              >
                <v-icon> mdi-plus</v-icon>
              </v-btn>
            </template>
            <template v-slot:[`item.type`]="{ item }">
              <v-select
                v-model="item.melanSlubType"
                :items="item.melanSlubTypeOptions"
                item-text="name"
                return-object
                placeholder="Select"
                class="text-caption mt-3"
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
                placeholder="Select"
                class="text-caption mt-3"
                solo
                :disabled="edit === false"
              ></v-select>
            </template>
            <template v-slot:[`item.combo1`]="{ item }">
              <v-row no-gutters>
                <v-col class="mr-2 ml-n2">
                  <!-- <v-label v-if="item.content.name === 'Poly Cotton'">P</v-label>  
                  <v-label v-else>C</v-label>                             -->
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[0].combinationOne"
                    hide-details
                    class="text-caption"
                    :disabled="edit === false"
                  ></v-text-field>
                </v-col>
                <v-col class="mr-n2">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[0].combinationTwo"
                    hide-details
                    class="text-caption"
                    :disabled="edit === false"
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
            <template v-slot:[`item.combo2`]="{ item }">
              <v-row no-gutters>
                <v-col class="mr-2 ml-n2">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[1].combinationOne"
                    hide-details
                    class="text-caption"
                    :disabled="edit === false"
                  ></v-text-field>
                </v-col>
                <v-col class="mr-n2">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[1].combinationTwo"
                    hide-details
                    class="text-caption"
                    :disabled="edit === false"
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
            <template v-slot:[`item.combo3`]="{ item }">
              <v-row no-gutters>
                <v-col class="mr-2 ml-n2">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[2].combinationOne"
                    hide-details
                    class="text-caption"
                    :disabled="edit === false"
                  ></v-text-field>
                </v-col>
                <v-col class="mr-n2">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[2].combinationTwo"
                    hide-details
                    class="text-caption"
                    :disabled="edit === false"
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
            <template v-slot:[`item.combo4`]="{ item }">
              <v-row no-gutters>
                <v-col class="mr-2 ml-n2">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[3].combinationOne"
                    hide-details
                    class="text-caption"
                    :disabled="edit === false"
                  ></v-text-field>
                </v-col>
                <v-col class="mr-n2">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[3].combinationTwo"
                    hide-details
                    class="text-caption"
                    :disabled="edit === false"
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
            <template v-slot:[`item.combo5`]="{ item }">
              <v-row no-gutters>
                <v-col class="mr-2 ml-n2">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[4].combinationOne"
                    hide-details
                    class="text-caption"
                    :disabled="edit === false"
                  ></v-text-field>
                </v-col>
                <v-col class="mr-n2">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[4].combinationTwo"
                    hide-details
                    class="text-caption"
                    :disabled="edit === false"
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
            <template v-slot:[`item.action`]="{ index }">
              <v-btn
                icon
                x-small
                @click="removeBlendContent(index)"
                v-if="index > 0"
                :disabled="edit === false"
              >
                <v-icon> mdi-close</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
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
          <v-label>Enter AVG Credit time you offer:</v-label>
          <v-text-field
            outlined
            dense
            v-model="response.avgCreditTime"
            :disabled="edit === false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" class="py-5" v-if="option === 'MelangeFabric'||option === 'SlubFabric'">
        <h2 class="font-weight-regular">
          {{ response.structureLable }}
        </h2>
      </v-row>
      <v-row v-if="option === 'MelangeFabric'||option === 'SlubFabric'">
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
              <v-toolbar-title class="subtitle-1"> Interlock </v-toolbar-title>
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
      <v-row class="mt-12" v-if="option === 'MelangeFabric'||option === 'SlubFabric'">
        <v-col cols="4" class="mx-3">
          <v-row>
            <input
              type="radio"
              @change="enableRadioGroup('tubular')"
              v-model="tubular"
              class="mr-3 "
              :disabled="edit === false"
            />
            <v-label > Tubular </v-label>
          </v-row>
          <v-row class="pt-6">
            <v-label>GG:</v-label>
            <v-text-field
              class="mx-2"
              outlined
              dense
              v-model="response.fabricStructure.tubular.gg"
              :disabled="edit === false || tubular  === false"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-label>DIA:</v-label>
            <v-text-field
              class="mx-2"
              outlined
              dense
              v-model="response.fabricStructure.tubular.dia"
              :disabled="edit === false || tubular  === false"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-label>Lycra:</v-label>
            <v-checkbox
              class="mt-n2 ml-4"
              v-model="response.fabricStructure.tubular.allFeeder"
              :disabled="edit === false|| tubular  === false"
            ></v-checkbox>
            <v-label>All Feeder</v-label>
            <v-checkbox
              class="mt-n2 ml-4"
              v-model="response.fabricStructure.tubular.alternateFeeder"
              :disabled="edit === false|| tubular  === false"
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
              class="mr-3 "
              :disabled="edit === false"
            />
            <v-label >OpenWidth</v-label>
          </v-row>
          <v-row class="pt-6">
            <v-label>GG:</v-label>
            <v-text-field
              class="mx-2"
              outlined
              dense
              v-model="response.fabricStructure.openWidth.gg"
              :disabled="edit === false || width  === false"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-label>DIA:</v-label>
            <v-text-field
              class="mx-2"
              outlined
              dense
              v-model="response.fabricStructure.openWidth.dia"
              :disabled="edit === false || width  === false"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-label>Lycra:</v-label>
            <v-checkbox
              class="mt-n2 ml-4"
              v-model="response.fabricStructure.openWidth.allFeeder"
              :disabled="edit === false || width  === false"
            ></v-checkbox>
            <v-label>All Feeder</v-label>
            <v-checkbox
              class="mt-n2 ml-4"
              v-model="response.fabricStructure.openWidth.alternateFeeder"
              :disabled="edit === false || width  === false"
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

@Component
export default class MelangeSlub extends Vue {
  @Prop() response: ProductDetailModel;
  @Prop() option: string;
  @Prop() edit: boolean;

  public melanSlubTypesOptions: Array<contentModel> = [];

created() {
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
    this.response.singleContents[length - 1].melanSlubType = null;
    this.response.singleContents[length - 1].content = null;
  }
  removeSingleContent(index: number) {
    this.response.singleContents.splice(index, 1);
  }

  addBlendContent() {
    this.response.blendContents.push({
      ...JSON.parse(JSON.stringify(this.response.blendContents[0])),
    });
    const length = this.response.blendContents.length;
    this.response.blendContents[length - 1].combos.forEach((b) => {
      b.combinationOne = null;
      b.combinationTwo = null;
    });
    this.response.blendContents[length - 1].content = null;
    this.response.blendContents[length - 1].melanSlubType = null;
  }

  removeBlendContent(index: number) {
    this.response.blendContents.splice(index, 1);
  }

  filterMelanSlubTypes() {
    this.melanSlubTypesOptions = this.response.melanSlubTypes.filter(
      (item) => item.isSelected === true
    );
  }

  singleContentHeaders: any = [
    { text: "Colour Type", value: "type", align: "center", divider: true },
    { text: "Content", value: "content", divider: true },
    { text: "", value: "action" },
  ];

  blendContentHeaders: any = [
    { text: "Colour Type", value: "type", align: "center", divider: true },
    { text: "Content", value: "content", align: "center", divider: true },
    { text: "Combo 1", value: "combo1", align: "center", divider: true },
    { text: "Combo 2", value: "combo2", align: "center", divider: true },
    { text: "Combo 3", value: "combo3", align: "center", divider: true },
    { text: "Combo 4", value: "combo4", align: "center", divider: true },
    { text: "Combo 5", value: "combo5", align: "center", divider: true },
    { text: "", value: "action", width: "2%" },
  ];
}
</script>