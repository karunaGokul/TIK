<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-list flat>
          <v-toolbar flat color="#c2e2e2" dense class="mb-2">
            <v-toolbar-title class="subtitle-1">
              Single Jersey
            </v-toolbar-title>
          </v-toolbar>
          <v-autocomplete
            v-model="response.fabricStructure.singleJersey"
            :items="response.fabricStructure.availableSingleJersey"
            filled
            chips
            color="blue-grey lighten-2"
            label="Select"
            item-text="name"
            item-value="name"
            return-object
            multiple
            :disabled="edit === false"
          >
          </v-autocomplete>
          <!-- <v-list-item
            v-for="(item, index) in response.fabricStructure.singleJersey"
            :key="index"
          >
            <v-list-item-content>{{ item.name }}</v-list-item-content>
            <v-list-item-action>
              <v-checkbox
                v-model="item.isSelected"
                :disabled="edit === false"
              ></v-checkbox>
            </v-list-item-action>
          </v-list-item> -->
        </v-list>
      </v-col>
      <v-col cols="4">
        <v-list flat>
          <v-toolbar flat color="#c2e2e2" dense class="mb-2">
            <v-toolbar-title class="subtitle-1"> Interlock </v-toolbar-title>
          </v-toolbar>
           <v-autocomplete
            v-model="response.fabricStructure.interlock"
            :items="response.fabricStructure.availableInterlock"
            filled
            chips
            color="blue-grey lighten-2"
            label="Select"
            item-text="name"
            item-value="name"
            return-object
            multiple
            :disabled="edit === false"
          >
          </v-autocomplete>
          <!-- <v-list-item
            v-for="(item, index) in response.fabricStructure.interlock"
            :key="index"
          >
            <v-list-item-content>{{ item.name }}</v-list-item-content>
            <v-list-item-action>
              <v-checkbox
                v-model="item.isSelected"
                :disabled="edit === false"
              ></v-checkbox>
            </v-list-item-action>
          </v-list-item> -->
        </v-list>
      </v-col>
      <v-col cols="4">
        <v-list flat>
          <v-toolbar flat color="#c2e2e2" dense class="mb-2">
            <v-toolbar-title class="subtitle-1"> RIB </v-toolbar-title>
          </v-toolbar>
           <v-autocomplete
            v-model="response.fabricStructure.rib"
            :items="response.fabricStructure.availableRib"
            filled
            chips
            color="blue-grey lighten-2"
            label="Select"
            item-text="name"
            item-value="name"
            return-object
            multiple
            :disabled="edit === false"
          >
          </v-autocomplete>
          <!-- <v-list-item
            v-for="(item, index) in response.fabricStructure.rib"
            :key="index"
          >
            <v-list-item-content>{{ item.name }}</v-list-item-content>
            <v-list-item-action>
              <v-checkbox
                v-model="item.isSelected"
                :disabled="edit === false"
              ></v-checkbox>
            </v-list-item-action>
          </v-list-item> -->
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { ProductDetailModel } from "@/model";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Structure extends Vue {
  @Prop() response: ProductDetailModel;
  @Prop() option: string;
  @Prop() edit: boolean;
}
</script>
