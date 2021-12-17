<template>
  <div>
    <v-data-table
      :headers="blendContentHeaders"
      :items="response.blendContents"
      class="elevation-1 table-striped"
      hide-default-footer
      disable-sort
    >
      <template v-slot:top>
        <v-toolbar flat color="#c2e2e2" dense class="mb-2">
          <v-toolbar-title class="subtitle-1">Blend Content</v-toolbar-title>
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
      <template
        v-slot:[`item.type`]="{ item }"
        v-if="
          option === 'MelangeYarn' ||
          option === 'SlubYarn' ||
          option === 'MelangeFabric' ||
          option === 'SlubFabric'
        "
      >
        <v-select
          v-model="item.melanSlubType"
          :items="melanSlubTypesOptions"
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
  </div>
</template>

<script lang="ts">
import { contentModel, ProductDetailModel } from "@/model";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";

@Component
export default class BlendContents extends Vue {
  @Prop() response: ProductDetailModel;
  @Prop() option: string;
  @Prop() edit: boolean;
  @Prop() melanSlubTypesOptions:Array<contentModel> = [];
  created() {
    if (
      this.option != "MelangeYarn" &&
      this.option != "SlubYarn" &&
      this.option != "MelangeFabric" &&
      this.option != "SlubFabric"
    )
      this.blendContentHeaders.splice(0, 1);
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
    if (
      this.option === "MelangeYarn" ||
      this.option === "SlubYarn" ||
      this.option === "MelangeFabric" ||
      this.option === "SlubFabric"
    )
      this.response.blendContents[length - 1].melanSlubType = null;
  }

  removeBlendContent(index: number) {
    this.response.blendContents.splice(index, 1);
  }

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
