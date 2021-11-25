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
                  <!-- <v-card class="px-2 py-12" flat>
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
                  </v-card> -->
                  <CompanyControl :response="response.yarn.regularYarn"
                  @save="save"/>
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
        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn elevation="2" color="primary"> Save </v-btn>
        </v-card-actions> -->
      </v-card>
    </div>
    <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        color="green lighten-5 green--text"
        absolute
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
import { CompanyProfileModel, ProductDetailModel} from "@/model";
import { IProfileService } from "@/service";
import { Component, Inject, Vue } from "vue-property-decorator";
import CompanyControl from "./components/CompanyControl.vue";

@Component({
  components: {CompanyControl},
})
export default class CompanyBuilder extends Vue {
  @Inject("ProfileService") ProjectService: IProfileService;
   public response = new CompanyProfileModel();
   public snackbarText: string = "";
  public snackbar: boolean = false;
  created() {
    this.ProjectService.CreateMills().then((response: CompanyProfileModel) => {
      this.response = response;      
    });
  }
  public save(filledResponse: ProductDetailModel)
  {
    this.response.yarn.regularYarn=filledResponse;
   filledResponse.singleQualities = filledResponse.singleQualities.filter(item => item.isSelected ===true);
   filledResponse.blendQualities = filledResponse.blendQualities.filter(item => item.isSelected ===true);
   console.log(this.response);
    this.ProjectService.AddMills(this.response).then((response: any) => {
      this.snackbarText= response;  
      this.snackbar=true;    
    });
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
    { tab: "Dyed Yarn", content: "Tab 2 Content" },
    { tab: "Melange/Slub Yarn", content: "Tab 2 Content" },
  ];  

}
</script>


  


