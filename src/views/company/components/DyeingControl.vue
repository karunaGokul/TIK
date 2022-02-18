<template>
  <div>
    <v-card>
      <!-- <div> -->
       
        <v-row>
          <v-col class="mt-8" cols="4">
            <v-list flat>
               <div v-if="option === 'SoftFlow'">
              <v-toolbar flat color="#c2e2e2" dense>
                <v-toolbar-title class="subtitle-1">
                  Type of Process you offer in SoftFlow
                </v-toolbar-title>
              </v-toolbar>
              </div>
              <div v-else>
              <v-toolbar flat color="#c2e2e2" dense>
                <v-toolbar-title class="subtitle-1">
                  Type of Process you offer in Winch
                </v-toolbar-title>
              </v-toolbar>
              </div>
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
              <div class="subtitle-1 mt-4 ml-2" v-if="option === 'SoftFlow'">
                Choose Single & Blend Content in SoftFlow
              </div>
              <div class="subtitle-1 mt-4 ml-2" v-else>
                Choose Single & Blend Content in Winch
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

        <v-row> </v-row>

        <div class="subtitle-1 mt-7" v-if="option === 'SoftFlow'">
          Choose the Structures you do in SoftFlow process
        </div>
        <div class="subtitle-1 mt-7" v-else>
          Choose the Structures you do in Winch process
        </div>
        <DyeingStructure :response="response" :edit="edit" />
        <div class="mb-8 mt-2 subtitle-1 ">Additional Processes</div>
        <v-row>
          <v-tabs v-model="tab" color="primary">
            <v-tab v-for="item in tabItems" :key="item.tab">
              {{ item }}
            </v-tab>
          </v-tabs>
          <v-card elevation="2" tile class="mt-2 pa-6">
            <v-card-text>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <!-- <DyeingProcess /> -->
                  <v-row>
                    <v-col class="ml-1 mt-8">
                      <v-checkbox
                        dense
                        label="Tubular Heatsetting"
                        v-model="response.openWidthProcess.heatSetting"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="4">
                      <v-list flat>
                        <v-toolbar flat color="#c2e2e2" dense>
                          <v-toolbar-title class="subtitle-1">
                            Special Finishes
                          </v-toolbar-title>
                        </v-toolbar>
                        <v-autocomplete
                          v-model="response.interlock"
                          :items="
                            response.openWidthProcess.availableSpecialFinishes
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
                    <v-col cols="4">
                      <v-list flat>
                        <v-toolbar flat color="#c2e2e2" dense>
                          <v-toolbar-title class="subtitle-1">
                            Tubular Drying Process
                          </v-toolbar-title>
                        </v-toolbar>
                        <v-autocomplete
                          v-model="response.interlock"
                          :items="
                            response.tubularProcess
                              .availableTubularDryingProcesses
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

                  <v-row class="subtitle-1 font-weight-bold">
                    <v-col>
                      OPW Stentering
                    </v-col>
                    <v-col>
                      Compacting
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-checkbox dense label="Stenter DRY"></v-checkbox>
                    </v-col>
                    <v-col>
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
                    <v-col>
                      <v-list flat>
                        <v-toolbar flat color="#c2e2e2" dense>
                          <v-toolbar-title class="subtitle-1">
                            Tubular
                          </v-toolbar-title>
                        </v-toolbar>
                        <v-autocomplete
                          v-model="response.interlock"
                          :items="
                            response.tubularProcess
                              .availableTubularDryingProcesses
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
                    <v-col>
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
                </v-tab-item>
                <v-tab-item>
                  <!-- <DyeingProcess /> -->
                  <v-row>
                    <v-col>
                      <v-checkbox
                        dense
                        label="OPW Heatsetting"
                        v-model="response.openWidthProcess.heatSetting"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="4">
                      <v-list flat>
                        <v-toolbar flat color="#c2e2e2" dense>
                          <v-toolbar-title class="subtitle-1">
                            Special Finishes
                          </v-toolbar-title>
                        </v-toolbar>
                        <v-autocomplete
                          v-model="response.interlock"
                          :items="
                            response.openWidthProcess.availableSpecialFinishes
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
                    <v-col cols="4">
                      <v-list flat>
                        <v-toolbar flat color="#c2e2e2" dense>
                          <v-toolbar-title class="subtitle-1">
                            OPW Compacting
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
                  <div class="subtitle-1 font-weight-bold">
                    OPW Drying Process
                  </div>
                  <v-row>
                    <v-col cols="4">
                      <v-checkbox
                        label="Stenter Dryer"
                        v-model="
                          response.openWidthProcess.openWidthDryingProcesses
                            .stenterDryer
                        "
                      ></v-checkbox>
                      <v-checkbox
                        label="Relax Dryer"
                        v-model="
                          response.openWidthProcess.openWidthDryingProcesses
                            .relaxDryer
                        "
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="6">
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
                  </v-row>
                </v-tab-item>
              </v-tabs-items>
            </v-card-text>
          </v-card>
        </v-row>
      <!-- </div> -->
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import { productDetailModel } from "@/model";
import DyeingStructure from "./DyeingStructure.vue";
import DyeingProcess from "./DyeingProcess.vue";

@Component({
  mixins: [validationMixin],
  components: { DyeingStructure, DyeingProcess },
})
export default class DyeingControl extends Vue {
  @Prop() response: productDetailModel;
  @Prop() option: string;
  @Prop() edit: boolean;

  public tubular: boolean = false;
  public width: boolean = false;
  public tab: any = null;

  tabItems: any = ["Tubular", "OPW"];
}
</script>
