<template>
  <div>
    <v-card class="px-2 py-12" flat>
      <v-row justify="center" class="py-4">
        <h2>
          <v-text class="font-weight-regular">
            {{response.contentLable}}
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
                v-model="item.contents"
                :items="item.contentOptions"
                item-text="name"
                item-value="id"
                placeholder="Select"
              ></v-select>
            </template>
            <template v-slot:[`item.spun`]="{ item }">
              <v-simple-checkbox v-model="item.spun"></v-simple-checkbox>
            </template>
            <template v-slot:[`item.filaments`]="{ item }">
              <v-simple-checkbox v-model="item.filaments"></v-simple-checkbox>
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
                item-value="id"
                placeholder="Select"
              ></v-select>
            </template>
            <template v-slot:[`item.combo1`]="{ item }">
              <v-row no-gutters>
                <v-col class="mr-1">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[0].combinationOne"
                    hide-details
                    class="text-caption"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[0].combinationTwo"
                    hide-details
                    class="text-caption"                    
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
            <template v-slot:[`item.combo2`]="{ item }">
              <v-row no-gutters>
                <v-col class="mr-1">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[1].combinationOne"
                    hide-details
                    class="text-caption"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[1].combinationTwo"
                    hide-details
                    class="text-caption"
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
            <template v-slot:[`item.combo3`]="{ item }">
              <v-row no-gutters>
                <v-col class="mr-1">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[2].combinationOne"
                    hide-details
                    class="text-caption"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[2].combinationTwo"
                    hide-details
                    class="text-caption"
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
            <template v-slot:[`item.combo4`]="{ item }">
              <v-row no-gutters>
                <v-col class="mr-1">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[3].combinationOne"
                    hide-details
                    class="text-caption"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[3].combinationTwo"
                    hide-details
                    class="text-caption"
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
            <template v-slot:[`item.combo5`]="{ item }">
              <v-row no-gutters>
                <v-col class="mr-1">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[4].combinationOne"
                    hide-details
                    class="text-caption"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    outlined
                    dense
                    v-model="item.combos[4].combinationTwo"
                    hide-details
                    class="text-caption"
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
            {{response.qualityLable}}
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
                <v-checkbox v-model="item.isSelected"></v-checkbox>
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
              <v-list-item-content>{{ item.text }}</v-list-item-content>
              <v-list-item-action>
                <v-checkbox v-model="item.isSelected"></v-checkbox>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row justify="center" class="py-5">
        <h2>
          <v-text class="font-weight-regular">
            {{response.countLable}}
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
          ></v-autocomplete>          
          <v-label>Enter AVG Credit time you offer:</v-label>
          <v-text-field outlined dense v-model="response.avgCreditTime"></v-text-field>
        </v-col>
      </v-row>
    </v-card>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn elevation="2" color="primary" @click="save()"> Save </v-btn>
    </v-card-actions>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from "vue-property-decorator";

import { ProductDetailModel } from "@/model";
import { IProfileService } from "@/service";

@Component
export default class CompanyControl extends Vue {
  @Inject("ProfileService") ProjectService: IProfileService;
  @Prop() response: ProductDetailModel;
  public tab1: string = null;
  public tab2: string = null;

  public save() {    
    this.$emit("save",this.response);
  }
  addSingleContent() {
    this.response.singleContents.push({ ...this.response.singleContents[0] });
    this.response.singleContents[0].spun = null;
    this.response.singleContents[0].filament=null;
    this.response.singleContents[0].contents=null;
    

  }

  removeSingleContent(index: number) {
    this.response.singleContents.splice(index, 1);
  }
  addBlendContent() {
    this.response.blendContents.push({ ...this.response.blendContents[0] });

    this.response.blendContents[0].contents = null;
  }

  removeBlendContent(index: number) {
    this.response.blendContents.splice(index, 1);
  }

  blendContentHeaders: any = [
    { text: "Content", value: "content" },
    { text: "Combo 1", value: "combo1", align: "center" },
    { text: "Combo 2", value: "combo2", align: "center" },
    { text: "Combo 3", value: "combo3", align: "center" },
    { text: "Combo 4", value: "combo4", align: "center" },
    { text: "Combo 5", value: "combo5", align: "center" },
    { text: "", value: "action" },
  ];

  tab1Items: any = [
    { tab: "Yarn", content: "Tab 1 Content" },
    { tab: "Fabric", content: "Tab 2 Content" },
  ];

  tab2Items: any = [
    { tab: "Regular Yarn", content: "Tab 1 Content" },
    { tab: "Special Yarn", content: "Tab 2 Content" },
    { tab: "Dyed Yarn", content: "Tab 2 Content" },
    { tab: "Melange/Slub Yarn", content: "Tab 2 Content" },
  ];
  singleContentHeaders: any = [
    { text: "Content", value: "content" },
    { text: "Spun", value: "spun", align: "center" },
    { text: "Filaments", value: "filaments", align: "center" },
    { text: "", value: "action" },
  ];
}
</script>

