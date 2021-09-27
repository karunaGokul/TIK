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
    <template v-if="control.type === 'table'">
      <div v-for="(tableControl, j) in control.tableControls" :key="j">
        <v-row>
          <v-col>
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
    </template>
    <template v-if="control.type === 'simpletable'">
      <div v-for="(tableControl, j) in control.tableControls" :key="j">
        <v-row>
          <v-col>
            <h3 class="my-4 pa-4 teal lighten-4 text-subtitle-2">
              <v-text class="font-weight-regular">
                {{ tableControl.tableHeader }}
              </v-text>
            </h3>
            <v-simple-table>
              <template v-slot:default>
                <tbody>
                  <tr v-for="item in tableControl.tableData" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </div>
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
            <v-text-field filled rounded dense></v-text-field>
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
