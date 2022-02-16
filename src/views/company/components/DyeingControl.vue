<template>
  <div>
    <v-card>
      <div>
        <v-row>
          <v-col class="mt-8" cols="4">
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
          </v-col>

          <v-col cols="8">
            <v-row>
              <div class="subtitle-1 mt-4 ml-2">
                Choose Single & Blend Content in SoftFlow
              </div>
              <v-row>
                <v-col cols="6">
                  <v-list flat>
                    <v-toolbar flat color="#c2e2e2" dense class="mb-2">
                      <v-toolbar-title class="subtitle-1">
                        Single Content
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-autocomplete
                      v-model="response.singleContents"
                      :items="response.availableSingleContents"
                      filled
                      chips
                      color="blue-grey lighten-2"
                      label="Select"
                      item-text="name"
                      item-value="name"
                      return-object
                      multiple
                      dense
                      :disabled="edit === false"
                    >
                    </v-autocomplete>
                  </v-list>
                </v-col>
                <v-col cols="6">
                  <v-list flat>
                    <v-toolbar flat color="#c2e2e2" dense class="mb-2">
                      <v-toolbar-title class="subtitle-1">
                        Blend Content
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-autocomplete
                      v-model="response.blendContents"
                      :items="response.availableBlendContents"
                      filled
                      chips
                      color="blue-grey lighten-2"
                      label="Select"
                      item-text="name"
                      item-value="name"
                      return-object
                      multiple
                      dense
                      :disabled="edit === false"
                    >
                    </v-autocomplete>
                  </v-list>
                  <v-checkbox label="Lycra Blends" class="ml-3"></v-checkbox>
                </v-col>
              </v-row>
            </v-row>
          </v-col>
        </v-row>

        <!-- <div class="subtitle-1 mt-7">
          Choose Single & Blend Content in SoftFlow
        </div> -->
        <v-row>
          <!-- <v-col cols="6">
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
          </v-col> -->
          <!-- <v-col cols="6">
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
          </v-col> -->
        </v-row>

        <div class="subtitle-1 mt-7">
          Choose the Structures you do in SoftFlow process
        </div>
        <DyeingStructure :response="response" :edit="edit" />

        <v-row>
          <v-col>
            <input
              type="checkbox"
              @change="enableRadioGroup('tubular')"
              v-model="tubular"
              class="mr-3"
              :disabled="edit === false"
            />
            <v-label> Tubular </v-label>
          </v-col>
        </v-row>

        <v-row v-if="tubular">
          <v-col cols="6">
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense>
                <v-toolbar-title class="subtitle-1">
                  Special Finishes
                </v-toolbar-title>
              </v-toolbar>
              <v-autocomplete
                v-model="response.interlock"
                :items="response.openWidthProcess.availableSpecialFinishes"
                filled
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="name"
                return-object
                multiple
                dense
                :disabled="edit === false"
              >
              </v-autocomplete>
            </v-list>
            <v-checkbox
              dense
              label="Tubular Heatsetting"
              v-model="response.openWidthProcess.heatSetting"
            ></v-checkbox>
          </v-col>
          <v-col cols="6">
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense>
                <v-toolbar-title class="subtitle-1">
                  Tubular Drying Process
                </v-toolbar-title>
              </v-toolbar>
              <v-autocomplete
                v-model="response.interlock"
                :items="response.tubularProcess.availableTubularDryingProcesses"
                filled
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="name"
                return-object
                multiple
                dense
                :disabled="edit === false"
              >
              </v-autocomplete>
            </v-list>
          </v-col>
          <v-row class="ml-1">
            <v-col cols="4">
              <div class="ml-2 subtitle-1">OPW Stentering</div>

              <v-list flat>
                <v-toolbar flat color="#c2e2e2" dense>
                  <v-toolbar-title class="subtitle-1">
                    DIP Stenter
                  </v-toolbar-title>
                </v-toolbar>
                <v-autocomplete
                  v-model="response.interlock"
                  :items="
                    response.openWidthProcess.openWidthDryingProcesses
                      .availableDipStenters
                  "
                  filled
                  chips
                  color="blue-grey lighten-2"
                  label="Select"
                  item-text="name"
                  item-value="name"
                  return-object
                  multiple
                  dense
                  :disabled="edit === false"
                >
                </v-autocomplete>
              </v-list>
              <v-checkbox label="Stenter DIP"></v-checkbox>
            </v-col>
            <v-col cols="8">
              <div class="subtitle-1 ml-2">Compacting</div>
              <v-row>
                <v-col cols="6">
                  <v-list flat>
                    <v-toolbar flat color="#c2e2e2" dense>
                      <v-toolbar-title class="subtitle-1">
                        Tubular
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-autocomplete
                      v-model="response.interlock"
                      :items="
                        response.tubularProcess.availableTubularDryingProcesses
                      "
                      filled
                      chips
                      color="blue-grey lighten-2"
                      label="Select"
                      item-text="name"
                      item-value="name"
                      return-object
                      multiple
                      dense
                      :disabled="edit === false"
                    >
                    </v-autocomplete>
                  </v-list>
                </v-col>
                <v-col cols="6">
                  <v-list flat>
                    <v-toolbar flat color="#c2e2e2" dense>
                      <v-toolbar-title class="subtitle-1">
                        OPW
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-autocomplete
                      v-model="response.interlock"
                      :items="
                        response.openWidthProcess
                          .availableOpenWidthCompactingMachines
                      "
                      filled
                      chips
                      color="blue-grey lighten-2"
                      label="Select"
                      item-text="name"
                      item-value="name"
                      return-object
                      multiple
                      dense
                      :disabled="edit === false"
                    >
                    </v-autocomplete>
                  </v-list>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-row>

        <v-row>
          <v-col>
            <input
              type="checkbox"
              @change="enableRadioGroup('tubular')"
              v-model="width"
              class="mr-3"
              :disabled="edit === false"
            />
            <v-label> OpenWidth </v-label>
          </v-col>
        </v-row>

        <v-row class="ml-1" v-if="width">
          <v-col cols="6">
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense>
                <v-toolbar-title class="subtitle-1">
                  Special Finishes
                </v-toolbar-title>
              </v-toolbar>
              <v-autocomplete
                v-model="response.interlock"
                :items="response.openWidthProcess.availableSpecialFinishes"
                filled
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="name"
                return-object
                multiple
                dense
                :disabled="edit === false"
              >
              </v-autocomplete>
            </v-list>
            <v-checkbox
              dense
              label="OPW Heatsetting"
              v-model="response.openWidthProcess.heatSetting"
            ></v-checkbox>
          </v-col>
          <v-col cols="6">
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense>
                <v-toolbar-title class="subtitle-1">
                  OPW Compacting
                </v-toolbar-title>
              </v-toolbar>
              <v-autocomplete
                v-model="response.interlock"
                :items="
                  response.openWidthProcess.availableOpenWidthCompactingMachines
                "
                filled
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="name"
                return-object
                multiple
                dense
                :disabled="edit === false"
              >
              </v-autocomplete>
            </v-list>
          </v-col>
        </v-row>

        <v-row v-if="width">
          <v-col cols="6">
            <div class="subtitle-1 ml-3">OPW Drying Process</div>
            <v-list flat>
              <v-toolbar flat color="#c2e2e2" dense>
                <v-toolbar-title class="subtitle-1">
                  DIP Stenter
                </v-toolbar-title>
              </v-toolbar>
              <v-autocomplete
                v-model="response.interlock"
                :items="
                  response.openWidthProcess.openWidthDryingProcesses
                    .availableDipStenters
                "
                filled
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="name"
                return-object
                multiple
                dense
                :disabled="edit === false"
              >
              </v-autocomplete>
            </v-list>
          </v-col>

          <v-col class="mt-10 ml-5">
            <v-checkbox
              label="Stenter Dryer"
              v-model="
                response.openWidthProcess.openWidthDryingProcesses.stenterDryer
              "
            ></v-checkbox>
            <v-checkbox
              label="Relax Dryer"
              v-model="
                response.openWidthProcess.openWidthDryingProcesses.relaxDryer
              "
            ></v-checkbox>
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
import DyeingStructure from "./DyeingStructure.vue";

@Component({
  mixins: [validationMixin],
  components: { DyeingStructure },
})
export default class DyeingControl extends Vue {
  @Prop() response: productDetailModel;
  @Prop() option: string;
  @Prop() edit: boolean;

  public melanSlubTypesOptions: Array<dyeingProcessesModel> = [];
  public tubular: boolean = false;
  public width: boolean = false;
}
</script>
