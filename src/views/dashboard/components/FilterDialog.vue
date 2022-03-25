<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="green darken-4" v-bind="attrs" v-on="on">
          <v-icon> mdi-filter </v-icon>
        </v-btn>
      </template>
      <v-card elevation="2">
        <v-card-title>
          Filter
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-select
          offset-y
          outlined
          dense
          label="Select Filter"
          class="mx-5"
          v-model="selectValue"
          :items="items"
          @change="(filterValue = true) && (value = null)"
        ></v-select>
        <v-card-actions>
          <!-- <v-text-field
            label="Enter a value"
            dense
            outlined
            class="ml-1 mr-5"
            v-model="value"
            v-if="selectValue != 'Review'"
            onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
          ></v-text-field> -->
          <!-- <v-select
            offset-y
            outlined
            dense
            label="Select Filter"
            :items="reviweItems"
            class="mx-5"
            v-model="value"
            v-else-if="selectValue === 'Review'"
          ></v-select> -->
          <v-btn
            dense
            color="primary"
            class="mt-n6 rounded-0"
            text-capitalize
            font-weight-regular
            @click="FilterRejectedBids"
          >
            filter
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { IDashboardService } from "@/service";
import { BitReceivedModel, FilterRequestModel } from "@/model";

@Component
export default class FilterDialog extends Vue {
  @Prop() projectId: string;

  @Inject("DashboardService") DashboardService: IDashboardService;

  public selectValue: string = "";
  public dialog: boolean = false;
  public value: string = "";
  public filterValue: boolean = false;
  public filterResponse: Array<BitReceivedModel> = [];
  public filterRequest = new FilterRequestModel();

  items: any = ["Price", "CreditPeriod", "DeliveryPeriod", "Review"];
  reviweItems: any = [1, 2, 3, 4, 5];

  public FilterRejectedBids() {
    // if (this.selectValue === "Price") {
    //   this.filterRequest.price = this.value;
    // } else if (this.selectValue === "Credit Period") {
    //   this.filterRequest.creditPeriod = this.value;
    // } else if (this.selectValue === "Review") {
    //   this.filterRequest.review = this.value;
    // } else {
    //   this.filterRequest.deliveryPeriod = this.value;
    // }

    this.filterRequest.sortBy = this.selectValue;
    this.filterRequest.projectId = this.projectId;
    this.DashboardService.FilterRejectedBids(this.filterRequest).then(
      (response) => {
        this.filterResponse = response;
        this.dialog = false;
        this.selectValue = "";
        this.filterValue = false;
        this.value = "";
        // this.filterRequest.price = null;
        // this.filterRequest.creditPeriod = null;
        // this.filterRequest.deliveryPeriod = null;
        // this.filterRequest.review = null;
        this.$emit("filteredBids", this.filterResponse);
      }
    );
  }
}
</script>
