<template>
  <div>
    <v-card class="px-2 py-12" flat>
       <v-row >
        <v-col cols="6">
          <v-list flat>
            <v-toolbar flat color="#c2e2e2" dense class="mb-2">
              <v-toolbar-title class="subtitle-1" v-if="option==='Melange'">
                 Choose the type of melanes you offer
              </v-toolbar-title>              
              <v-toolbar-title class="subtitle-1" v-else-if="option==='Slub'">
               Choose the type of Slubs you offer
              </v-toolbar-title>
            </v-toolbar>
            <v-list-item v-for="item in response.melanSlubTypes" :key="item">
              <v-list-item-content>{{ item.name }}</v-list-item-content>
              <v-list-item-action>
                <v-checkbox v-model="item.isSelected"></v-checkbox>
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
                <v-toolbar-title class="subtitle-1" v-if="option==='Melange'">
                 Choose the single content Yarns you offer in Melange
              </v-toolbar-title>              
              <v-toolbar-title class="subtitle-1" v-else-if="option==='Slub'">
               Choose the single content Yarns you offer in Slub
              </v-toolbar-title>    
              </v-toolbar>          
            </template>
            <template v-slot:[`header.action`]>
              <v-btn icon x-small outlined @click="addSingleContent">
                <v-icon> mdi-plus</v-icon>
              </v-btn>
            </template>
            <template v-slot:[`item.type`]="{ item }">
              <v-select
                v-model="item.melanSlubType"
                :items="item.melanSluboptions"
                item-text="name"
                item-value="id"
                return-object
                class="mx-n2 mr-n6 text-caption mt-3"
                placeholder="Select"
                solo
              ></v-select>
            </template>
            <template v-slot:[`item.content`]="{ item }">
              <v-select
                v-model="item.content"
                :items="item.contentOptions"
                item-text="name"
                item-value="id"
                return-object
                class="mx-n2 mr-n6 text-caption mt-3"
                placeholder="Select"
                solo
              ></v-select>
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
      </v-row>
       <v-row justify="center" class="py-4">
        <h2>
          <v-text class="font-weight-regular" v-if="option==='Melange'">
            Choose the blend content Yarns you offer in Melange
          </v-text>
           <v-text class="font-weight-regular"  v-else-if="option==='Slub'">
            Choose the blend content Yarns you offer in Slub
          </v-text>
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
            <v-toolbar-title class="subtitle-1">Blend Content</v-toolbar-title>
          </v-toolbar>
        </template>
        <template v-slot:[`header.action`]>
          <v-btn icon x-small outlined @click="addBlendContent">
            <v-icon> mdi-plus</v-icon>
          </v-btn>
        </template>
        <template v-slot:[`item.type`]="{ item }">
          <v-select
            v-model="item.melanSlubType"
            :items="item.melanSlubOptions"
            item-text="name"
            item-value="id"
            return-object
            placeholder="Select"
            class="text-caption mt-3"
             solo
          ></v-select>
        </template>
        <template v-slot:[`item.content`]="{ item }">
          <v-select
            v-model="item.content"
            :items="item.contentOptions"
            item-text="name"
            item-value="id"
            return-object
            placeholder="Select mt-3"
            class="text-caption"
             solo
          ></v-select>
        </template>
        <template v-slot:[`item.combo1`]="{ item }">
          <v-row no-gutters>
            <v-col class="mr-2 ml-n2">
              <!-- <v-label v-if="item.contents.name === 'Poly Cotton'">P</v-label>  
                  <v-label v-else>C</v-label>                             -->
              <v-text-field
                outlined
                dense
                v-model="item.combos[0].combinationOne"
                hide-details
                class="text-caption"
                @change="test(item.content.name)"
              ></v-text-field>
            </v-col>
            <v-col class="mr-n2">
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
            <v-col class="mr-2 ml-n2">
              <v-text-field
                outlined
                dense
                v-model="item.combos[1].combinationOne"
                hide-details
                class="text-caption"
              ></v-text-field>
            </v-col>
            <v-col class="mr-n2">
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
            <v-col class="mr-2 ml-n2">
              <v-text-field
                outlined
                dense
                v-model="item.combos[2].combinationOne"
                hide-details
                class="text-caption"
              ></v-text-field>
            </v-col>
            <v-col class="mr-n2">
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
            <v-col class="mr-2 ml-n2">
              <v-text-field
                outlined
                dense
                v-model="item.combos[3].combinationOne"
                hide-details
                class="text-caption"
              ></v-text-field>
            </v-col>
            <v-col class="mr-n2">
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
            <v-col class="mr-2 ml-n2">
              <v-text-field
                outlined
                dense
                v-model="item.combos[4].combinationOne"
                hide-details
                class="text-caption"
              ></v-text-field>
            </v-col>
            <v-col class="mr-n2">
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
          <v-label>Enter AVG Credit time you offer:</v-label>
          <v-text-field
            outlined
            dense
            v-model="response.avgCreditTime"
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
export default class MelangeSlub extends Vue {
  @Prop() response: ProductDetailModel;
  @Prop() option: string;
  
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
      b.combinationOne = 0;
      b.combinationTwo = 0;
    });
    this.response.blendContents[length - 1].content = null;
    this.response.blendContents[length - 1].melanSlubType = null;
  }

  removeBlendContent(index: number) {
    this.response.blendContents.splice(index, 1);
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