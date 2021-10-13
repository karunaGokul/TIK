 <template>
  <div>
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
                  <v-card class="px-2 py-12" flat>
                    <v-row justify="center" class="py-4">
                      <h2>
                        <v-text class="font-weight-regular">
                          Choose the single & Blend Contents you offer in
                          regular Yarn
                        </v-text>
                      </h2>
                    </v-row>
                    <v-row>
                      <v-col cols="4">
                        <v-data-table
                          :headers="singleContentHeaders"
                          :items="singleContents"
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
                            >
                              <v-icon> mdi-plus</v-icon>
                            </v-btn>
                          </template>
                          <template v-slot:[`item.content`]="{ item }">
                            <v-select
                              v-model="item.content"
                              :items="singleContentOptions"
                              placeholder="Select"
                            ></v-select>
                          </template>
                          <template v-slot:[`item.spun`]="{ item }">
                            <v-simple-checkbox
                              v-model="item.spun"
                            ></v-simple-checkbox>
                          </template>
                          <template v-slot:[`item.filaments`]="{ item }">
                            <v-simple-checkbox
                              v-model="item.filaments"
                            ></v-simple-checkbox>
                          </template>
                          <template v-slot:[`item.action`]="{ item, index }">
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
                          :items="blendContents"
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
                            >
                              <v-icon> mdi-plus</v-icon>
                            </v-btn>
                          </template>
                          <template v-slot:[`item.content`]="{ item }">
                            <v-select
                              v-model="item.content"
                              :items="blendContentOptions"
                              placeholder="Select"
                            ></v-select>
                          </template>
                          <template v-slot:[`item.combo1`]="{ item }">
                            <v-row no-gutters>
                              <v-col class="pr-2">
                                <v-text-field
                                  outlined
                                  dense
                                  v-model="item.combo1"
                                  hide-details
                                ></v-text-field>
                              </v-col>
                              <v-col>
                                <v-text-field
                                  outlined
                                  dense
                                  hide-details
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </template>
                          <template v-slot:[`item.combo2`]="{ item }">
                            <v-row no-gutters>
                              <v-col class="pr-2">
                                <v-text-field
                                  outlined
                                  dense
                                  v-model="item.combo2"
                                  hide-details
                                ></v-text-field>
                              </v-col>
                              <v-col>
                                <v-text-field
                                  outlined
                                  dense
                                  hide-details
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </template>
                          <template v-slot:[`item.combo3`]="{ item }">
                            <v-row no-gutters>
                              <v-col class="pr-2">
                                <v-text-field
                                  outlined
                                  dense
                                  v-model="item.combo3"
                                  hide-details
                                ></v-text-field>
                              </v-col>
                              <v-col>
                                <v-text-field
                                  outlined
                                  dense
                                  hide-details
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </template>
                          <template v-slot:[`item.combo4`]="{ item }">
                            <v-row no-gutters>
                              <v-col class="pr-2">
                                <v-text-field
                                  outlined
                                  dense
                                  v-model="item.combo4"
                                  hide-details
                                ></v-text-field>
                              </v-col>
                              <v-col>
                                <v-text-field
                                  outlined
                                  dense
                                  hide-details
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </template>
                          <template v-slot:[`item.combo5`]="{ item }">
                            <v-row no-gutters>
                              <v-col class="pr-2">
                                <v-text-field
                                  outlined
                                  dense
                                  v-model="item.combo5"
                                  hide-details
                                ></v-text-field>
                              </v-col>
                              <v-col>
                                <v-text-field
                                  outlined
                                  dense
                                  hide-details
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </template>
                          <template v-slot:[`item.action`]="{ item, index }">
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
                          Choose the single & Blend Quality you offer in regular
                          Yarn
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
                          <v-list-item
                            v-for="(item, index) in singleQualities"
                            :key="index"
                          >
                            <v-list-item-content>{{
                              item.text
                            }}</v-list-item-content>
                            <v-list-item-action>
                              <v-checkbox v-model="item.selected"></v-checkbox>
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
                            v-for="(item, index) in blendQualities"
                            :key="index"
                          >
                            <v-list-item-content>{{
                              item.text
                            }}</v-list-item-content>
                            <v-list-item-action>
                              <v-checkbox v-model="item.selected"></v-checkbox>
                            </v-list-item-action>
                          </v-list-item>
                        </v-list>
                      </v-col>
                    </v-row>
                    <v-row justify="center" class="py-5">
                      <h2>
                        <v-text class="font-weight-regular">
                          Choose the count and denier you offer the Regular
                          Yarns
                        </v-text>
                      </h2>
                    </v-row>
                    <v-row>
                      <v-col cols="3">
                        <v-label>Counts:</v-label>
                        <v-text-field outlined dense></v-text-field>
                        <v-label>Deniers:</v-label>
                        <v-text-field outlined dense></v-text-field>
                        <v-label>Enter AVG Credit time you offer:</v-label>
                        <v-text-field outlined dense></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-tab-item>
            <v-tab-item>
              <v-card>
                <v-card-text>Test 1</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn elevation="2" color="primary"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CompanyBuilder extends Vue {
  tab1: any = null;

  tab1Items: any = [
    { tab: "Yarn", content: "Tab 1 Content" },
    { tab: "Fabric", content: "Tab 2 Content" },
  ];

  tab2: any = null;

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

  singleContents: Array<any> = [
    {
      content: "",
      spun: false,
      filaments: false,
    },
  ];

  singleContentOptions: any = [
    "100% Cotton",
    "100% Viscose",
    "100% Modal",
    "100% Polyster",
  ];

  addSingleContent() {
    this.singleContents.push({ ...this.singleContents[0] });

    this.singleContents[0].spun = false;
  }

  removeSingleContent(index: number) {
    this.singleContents.splice(index, 1);
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

  blendContents: Array<any> = [
    {
      content: "",
      spun: false,
      filaments: false,
    },
  ];

  blendContentOptions: any = [
    "Cotton Poly",
    "Poly Cotton",
    "Cotton Modal",
    "Poly Viscose",
    "Cotton Viscose",
    "CottonPoly Viscose",
    "Lenzing Viscose",
  ];

  addBlendContent() {
    this.blendContents.push({ ...this.blendContents[0] });

    this.blendContents[0].spun = false;
  }

  removeBlendContent(index: number) {
    this.blendContents.splice(index, 1);
  }

  singleQualities: Array<any> = [
    {
      text: "Super Combed RL",
      selected: false,
    },
    {
      text: "Combed VL",
      selected: false,
    },
    {
      text: "Semi Combed GL",
      selected: false,
    },
    {
      text: "Carded",
      selected: false,
    },
    {
      text: "OE",
      selected: false,
    },
  ];

  blendQualities: Array<any> = [
    {
      text: "Super Combed RL",
      selected: false,
    },
    {
      text: "Combed VL",
      selected: false,
    },
    {
      text: "Semi Combed GL",
      selected: false,
    },
    {
      text: "Carded",
      selected: false,
    },
    {
      text: "OE",
      selected: false,
    },
  ];
}
</script>


  


