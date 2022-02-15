<template>
  <div>
    <v-card class="px-2 py-12" flat>
      <div>
        <v-row>
          <v-col cols="8">
            <!-- <v-toolbar flat color="#c2e2e2" dense class="mb-2">
              <v-toolbar-title class="subtitle-1">
                Type of Process you offer in SoftFlow
              </v-toolbar-title>
            </v-toolbar> -->
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense>
                <v-toolbar-title class="subtitle-1">
                  Type of Process you offer in SoftFlow
                </v-toolbar-title>
              </v-toolbar>
              <v-list-item
                v-for="(item, index) in response.availableDyeingProcesses"
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
            <!-- <v-row class="ml-2 mt-2">
              <v-col>
                <v-checkbox label="Washing"></v-checkbox>
              </v-col>
              <v-col>
                <v-checkbox label="Bleaching"></v-checkbox>
              </v-col>
              <v-col>
                <v-checkbox label="Dyeing"></v-checkbox>
              </v-col>
            </v-row> -->
          </v-col>
        </v-row>
        <div class="subtitle-1 mt-7">
          Choose Single & Blend Content in SoftFlow
        </div>
        <v-row>
          <v-col cols="6">
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense>
                <v-toolbar-title class="subtitle-1">
                  Single Content
                </v-toolbar-title>
              </v-toolbar>
              <v-list-item
                v-for="(item, index) in response.availableSingleContents"
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
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense>
                <v-toolbar-title class="subtitle-1">
                  Blend Content
                </v-toolbar-title>
              </v-toolbar>
              <v-list-item
                v-for="(item, index) in response.availableBlendContents"
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
            <v-checkbox label="Lycra Blends" class="ml-3"></v-checkbox>
          </v-col>
        </v-row>

        <div class="subtitle-1 mt-7">
          Choose the Structures you do in SoftFlow process
        </div>
        <Structure :response="response" :option="option" :edit="edit" />

        <v-row
          class="mt-12"
         
        >
          <v-col cols="6">
            <input
              type="checkbox"
              @change="enableRadioGroup('tubular')"
              v-model="tubular"
              class="mr-3"
              :disabled="edit === false"
            />
            <v-label> Tubular </v-label>

            <v-checkbox dense label="Tubular Heatsetting"></v-checkbox>
            <v-row>
              <v-col cols="6">
                <v-list flat>
                  <v-toolbar flat color="#c2e2e2" dense>
                    <v-toolbar-title class="subtitle-1">
                      Special Finishes
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-list-item
                    v-for="(item, index) in response.openWidthProcess"
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
                <v-list flat>
                  <v-toolbar flat color="#c2e2e2" dense>
                    <v-toolbar-title class="subtitle-1">
                      Tubular Drying Process
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
            </v-row>

            <div class="ml-2 subtitle-1">OPW Stentering</div>

            <v-row>
              <v-col>
                <v-checkbox label="Stenter DIP"></v-checkbox>
              </v-col>
              <v-col>
                <v-list flat>
                  <v-toolbar flat color="#c2e2e2" dense>
                    <v-toolbar-title class="subtitle-1">
                      DIP Stenter
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
            </v-row>

            <div class="subtitle-1 ml-2">Compacting</div>
            <v-row>
              <v-col>
                <v-list flat>
                  <v-toolbar flat color="#c2e2e2" dense>
                    <v-toolbar-title class="subtitle-1">
                      Tubular
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
              <v-col>
                <v-list flat>
                  <v-toolbar flat color="#c2e2e2" dense>
                    <v-toolbar-title class="subtitle-1">
                      OPW
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
            </v-row>
          </v-col>

          <v-col cols="6">
            <input
              type="checkbox"
              @change="enableRadioGroup('tubular')"
              v-model="tubular"
              class="mr-3"
              :disabled="edit === false"
            />
            <v-label> OpenWidth </v-label>
            <v-checkbox dense label="OPW Heatsetting"></v-checkbox>
            <v-row>
              <v-col cols="6">
                <v-list flat>
                  <v-toolbar flat color="#c2e2e2" dense>
                    <v-toolbar-title class="subtitle-1">
                      Special Finishes
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
                <v-list flat>
                  <v-toolbar flat color="#c2e2e2" dense>
                    <v-toolbar-title class="subtitle-1">
                      OPW Compacting
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
            </v-row>
            <v-row class="ml-2">
              <div class="subtitle-1">OPW Drying Process</div>
            </v-row>
            <v-row>
              <v-col>
                <v-checkbox label="Stenter Dryer"></v-checkbox>
                <v-checkbox label="Relax Dryer"></v-checkbox>
              </v-col>
              <v-col>
                <v-list flat>
                  <v-toolbar flat color="#c2e2e2" dense>
                    <v-toolbar-title class="subtitle-1">
                      DIP Stenter
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
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import { dyeingProcessesModel, productDetailModel } from "@/model";

@Component({
  mixins: [validationMixin],
})
export default class DyeControl extends Vue {
  @Prop() response: productDetailModel;
  @Prop() option: string;
  @Prop() edit: boolean;

  public melanSlubTypesOptions: Array<dyeingProcessesModel> = [];
  public tubular: boolean = false;
  public width: boolean = false;
}
</script>
