<template>
  <div>
    <template v-if="control.type === 'tabs'">
      <v-tabs class="mt-2 ml-2" v-model="tabValue">
        <v-tab
          class="text-capitalize"
          v-for="(option, j) in control.options"
          :key="j"
          @click="tabSelected(option)"
        >
          {{ option.text }}
        </v-tab>
      </v-tabs>
      <v-divider class="ml-2"></v-divider>
    </template>
    <!-- <template v-if="control.type === 'table'">
      <div v-for="(tableControl, j) in control.tableControls" :key="j">
        <v-row>
          <v-col cols="12" md="6">
            <h3 class="my-4 pa-4 teal lighten-4 text-subtitle-2">
              <v-text class="font-weight-regular">
                {{ tableControl.tableHeader }}
              </v-text>
            </h3>
            <v-data-table
              :headers="tableControl.tableHeading"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1"
            ></v-data-table>
          </v-col>
        </v-row>
      </div>
    </template> -->
    <template v-if="control.type === 'simpletable'">
      <v-row>
        <v-col
          cols="12"
          md="6"
          v-for="(tableControl, j) in control.tableControls"
          :key="j"
        >
          <v-col></v-col>
          <h3 class="my-4 pa-2 teal lighten-4 text-subtitle-2">
            <v-text class="font-weight-regular">
              {{ tableControl.tableHeading }}
            </v-text>
          </h3>
          <v-simple-table dense>
            <template v-slot:default>
              <thead class="teal lighten-4 text-subtitle-2">
                <tr>
                  <th
                    class="text-left"
                    v-for="(tableHeader, index) in tableControl.tableHeader"
                    :key="index"
                  >
                    <v-icon v-if="tableHeader == 'plus'"
                      >mdi-plus-circle
                    </v-icon>

                    <span v-else> {{ tableHeader }}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in tableControl.tableData" :key="row.rowData">
                  <td v-for="colData in row.rowData" :key="colData">
                    <v-checkbox
                      v-if="colData.controls.type === 'checkbox'"
                    ></v-checkbox>
                    <v-select
                      v-else-if="colData.controls.type === 'dropdown'"
                      :items="colData.controls.options"
                      dense
                    ></v-select>
                    <div
                      class="d-flex justify-left mx-10"
                      v-else-if="colData.controls.type === 'textbox'"
                    >
                      <v-row>
                        <v-col
                          v-for="option in colData.controls.options"
                          :key="option"
                          cols="12"
                          md="3"
                        >
                          <h2>
                            <v-text class="font-weight-regular"
                              >{{ option.text }}
                            </v-text>
                          </h2>
                          <br />
                          <v-text-field
                            v-model="option.value"
                            outlined
                            dense
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </div>

                    <span v-else>{{ colData.controls.options.text }}</span>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </template>

    <template v-if="control.type === 'label'">
      <div class="d-flex justify-center mt-10">
        <h2>
          <v-text class="font-weight-regular"
            >{{ control.options.text }}
          </v-text>
        </h2>
      </div>
    </template>
    <template v-if="control.type === 'text'">
      <div class="d-flex justify-left mx-10">
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <h2>
              <v-text class="font-weight-regular"
                >{{ control.options.text }}
              </v-text>
            </h2>
            <br />
            <v-text-field
              v-model="control.options.value"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  ProfileFormStepControl,
  ProfileFormStepControlOption,
  ProfileModel,
} from "@/model";

@Component({})
export default class Materials extends Vue {
  @Prop() control: ProfileFormStepControl;

  tabSelected(taboption: ProfileFormStepControlOption) {
    this.control.options.forEach((o) => (o.selected = false));
    taboption.selected = true;
    this.$emit("change");
    console.log(this.control);
  }

  get tabValue() {
    return this.control.options.findIndex((o) => o.selected);
  }

  set tabValue(value: any) {}
}
</script>

<style scoped></style>
