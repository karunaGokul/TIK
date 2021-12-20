<template>
  <div>
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
          <v-toolbar-title v-else class="subtitle-1"
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
          class="mr-n6 mb-n3 text-caption mt-3"
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
  </div>
</template>

<script lang="ts">
import { ProductDetailModel } from "@/model";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SingleContents extends Vue {
  @Prop() response: ProductDetailModel;
  @Prop() option: string;
  @Prop() edit: boolean;

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

  singleContentHeaders: any = [
    { text: "Content", value: "content", divider: true },
    { text: "Spun", value: "spun", align: "center", divider: true },
    { text: "Filaments", value: "filaments", align: "center", divider: true },
    { text: "", value: "action" },
  ];
}
</script>
