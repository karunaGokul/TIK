<template>
  <div>
    <v-card class="px-2 py-12" flat>
      <v-row justify="center" class="py-5" v-if="option != 'RegularYarn'">
        <h2>
          <v-text class="font-weight-regular">
            {{ response.typeLable }}
          </v-text>
        </h2>
      </v-row>
      <v-row v-if="option != 'RegularYarn'">
        <v-col cols="4">
          <v-list flat>
            <v-toolbar flat color="#c2e2e2" dense class="mb-2">
              <v-toolbar-title
                class="subtitle-1"
                v-if="option === 'SpecialYarn'"
              >
                single SPL Yarns Type
              </v-toolbar-title>
              <v-toolbar-title
                class="subtitle-1"
                v-else-if="option === 'DyedYarn'"
              >
                single Dyed Yarns Type
              </v-toolbar-title>
            </v-toolbar>
            <v-list-item
              v-for="item in response.singleSpecialDyedTypes"
              :key="item"
            >
              <v-list-item-content>{{ item.name }}</v-list-item-content>
              <v-list-item-action>
                <v-checkbox v-model="item.isSelected"></v-checkbox>
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
            </v-toolbar>
            <v-list-item
              v-for="item in response.blendSpecialDyedTypes"
              :key="item"
            >
              <v-list-item-content>{{ item.name }}</v-list-item-content>
              <v-list-item-action>
                <v-checkbox v-model="item.isSelected"></v-checkbox>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row justify="center" class="py-4">
        <h2>
          <v-text class="font-weight-regular">
            {{ response.contentLable }}
          </v-text>
        </h2>
      </v-row>
      <v-row>
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
              <v-btn icon x-small outlined @click="addSingleContent">
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
                @click="removeSingleContent(index)"
                v-if="index > 0"
              >
                <v-icon> mdi-close</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
        <v-col cols="8">
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
              <v-btn icon x-small outlined @click="addBlendContent">
                <v-icon> mdi-plus</v-icon>
              </v-btn>
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
                  <v-label v-else>C</v-label>                                       -->
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
              >
                <v-icon> mdi-close</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row justify="center" class="py-5">
        <h2>
          <v-text class="font-weight-regular">
            {{ response.qualityLable }}
          </v-text>
        </h2>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-list flat>
            <v-toolbar flat color="#c2e2e2" dense class="mb-2">
              <v-toolbar-title class="subtitle-1"
                >Single Quality</v-toolbar-title
              >
            </v-toolbar>
            <v-list-item v-for="item in response.singleQualities" :key="item">
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
            <v-list-item v-for="item in response.blendQualities" :key="item">
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
        <h2>
          <v-text class="font-weight-regular">
            {{ response.countLable }}
          </v-text>
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
          <v-label>Deniers:</v-label>
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
          <v-label>Enter AVG Credit time you offer:</v-label>
          <v-text-field
            outlined
            dense
            v-model="response.avgCreditTime"
            :disabled="edit === false"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { ProductDetailModel } from "@/model";

@Component
export default class CompanyControl extends Vue {
  @Prop() response: ProductDetailModel;
  @Prop() option: string;
  @Prop() edit: boolean;

  addSingleContent() {
    this.response.singleContents.push({
      ...JSON.parse(JSON.stringify(this.response.singleContents[0])),
    });
    const length = this.response.singleContents.length;
    this.response.singleContents[length - 1].spun = null;
    this.response.singleContents[length - 1].filament = null;
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
      b.combinationOne = 0;
      b.combinationTwo = 0;
    });
    this.response.blendContents[length - 1].content = null;
  }

  removeBlendContent(index: number) {
    this.response.blendContents.splice(index, 1);
  }

  blendContentHeaders: any = [
    { text: "Content", value: "content", divider: true, width: "2%" },
    { text: "Combo 1", value: "combo1", align: "center", divider: true },
    { text: "Combo 2", value: "combo2", align: "center", divider: true },
    { text: "Combo 3", value: "combo3", align: "center", divider: true },
    { text: "Combo 4", value: "combo4", align: "center", divider: true },
    { text: "Combo 5", value: "combo5", align: "center", divider: true },
    { text: "", value: "action", width: "2%" },
  ];

  singleContentHeaders: any = [
    { text: "Content", value: "content", divider: true },
    { text: "Spun", value: "spun", align: "center", divider: true },
    { text: "Filaments", value: "filaments", align: "center", divider: true },
    { text: "", value: "action" },
  ];
}
</script>

