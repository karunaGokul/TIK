<template>
  <div>
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="green darken-4" v-bind="attrs" v-on="on">
          <v-icon> mdi-filter </v-icon>
        </v-btn>
      </template>
      <v-card elevation="2" class="px-7">
        <v-card-title>
          Filter
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-row class="mt-5">
            <v-col
              v-for="item in items"
              :key="item"
              cols="12"
              md="6"
              class="mb-3"
            >
              <h4>{{ item }}</h4>
              <v-slider
                v-if="item === 'Price'"
                track-color="teal"
                track-fill-color="primary"
                thumb-color="primary"
                thumb-label
                :thumb-size="20"
                :min="0"
                :max="response.maxPrice"
              ></v-slider>
              <v-slider
                v-if="item === 'Credit Period'"
                track-color="teal"
                track-fill-color="primary"
                thumb-color="primary"
                thumb-label
                :thumb-size="20"
                :min="0"
                :max="response.maxCreditPeriod"
              ></v-slider>
              <v-slider
                v-if="item === 'Delivery Period'"
                track-color="teal"
                track-fill-color="primary"
                thumb-color="primary"
                thumb-label
                :thumb-size="20"
                :min="0"
                :max="response.maxDeliveryPeriod"
              ></v-slider>
              <div v-if="item === 'Review'">
                <div v-for="n in review" :key="n">
                  <v-rating
                    readonly
                    dense
                    size="18"
                    class="d-inline"
                    :value=n
                  >
                  </v-rating>
                  <span class="mouse"> &up</span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <!-- <v-row no-gutters justify="center" class="mt-10">
          <v-col v-for="item in items" :key="item" cols="12" md="6">
            <v-card class="pa-2" flat>
              {{ item }}

              <v-slider
                v-if="item === 'Price'"
                track-color="theme--light teal"
                track-fill-color="primary"
                thumb-color="primary"
                min="10"
                max="50"
                v-model="ex3.val"
                :label="ex3.label"
                thumb-label="always"
              ></v-slider>
              <v-slider
                v-if="item === 'Credit Period'"
                track-color="theme--light teal"
                track-fill-color="primary"
                thumb-color="primary"
                v-model="ex2.val"
                :label="ex2.label"
                thumb-label="always"
              ></v-slider>
              <v-slider
                v-if="item === 'Delivery Period'"
                track-color="theme--light teal"
                track-fill-color="primary"
                thumb-color="primary"
                v-model="ex1.val"
                :label="ex1.label"
                thumb-label="always"
              ></v-slider>
              <v-col>
                <v-row class="mb-1">
                  <div v-if="item === 'Review'">
                    <v-rating
                      class="d-inline mouse"
                      readonly
                      dense
                      length="4"
                      size="18"
                      value="4"
                    ></v-rating
                    ><span class="mouse mr-8"> &up</span>
                  </div>
                  <div v-if="item === 'Review'">
                    <v-rating
                      class="d-inline mouse"
                      readonly
                      dense
                      length="3"
                      size="18"
                      value="3"
                    ></v-rating
                    ><span class="mouse"> &up</span>
                  </div>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <div v-if="item === 'Review'">
                    <v-rating
                      class="d-inline mouse"
                      readonly
                      dense
                      length="2"
                      size="18"
                      value="2"
                    ></v-rating
                    ><span class="mr-16 mouse"> &up</span>
                  </div>
                  <div v-if="item === 'Review'" class="ml-3">
                    <v-rating
                      class="d-inline mouse"
                      readonly
                      dense
                      length="1"
                      size="18"
                      value="1"
                    ></v-rating
                    ><span class="mouse"> &up</span>
                  </div>
                </v-row>
              </v-col>
            </v-card>
          </v-col>
        </v-row> -->
        <!-- <v-select
          offset-y
          outlined
          dense
          label="Select Filter"
          class="mx-5"
          v-model="selectValue"
          :items="items"
          @change="(filterValue = true) && (value = null)"
        ></v-select> -->
        <v-card-actions class="d-flex justify-end">
          <v-btn
            dense
            color="primary"
            class="mt-n6 rounded-0 mb-4"
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
import { BitReceivedModel, FilterRequestModel, DashboardModel } from "@/model";

@Component
export default class FilterDialog extends Vue {
  @Prop() projectId: string;
  @Prop() response: DashboardModel;

  @Inject("DashboardService") DashboardService: IDashboardService;

  public selectValue: string = "";
  public dialog: boolean = false;
  public value: string = "";
  public filterValue: boolean = false;
  public filterResponse: Array<BitReceivedModel> = [];
  public filterRequest = new FilterRequestModel();

  items: any = ["Price", "Credit Period", "Delivery Period", "Review"];
  review: any = [4, 3, 2, 1];

  public FilterRejectedBids() {
    if (this.selectValue === "Price") {
      this.filterRequest.sortBy = "RequestedPrice";
    } else if (this.selectValue === "Credit Period") {
      this.filterRequest.sortBy = "RequestedCredit";
    } else if (this.selectValue === "Review") {
      this.filterRequest.sortBy = "Review";
    } else {
      this.filterRequest.sortBy = "RequestedDelivery";
    }

    this.filterRequest.projectId = this.projectId;
    this.DashboardService.FilterRejectedBids(this.filterRequest).then(
      (response) => {
        this.filterResponse = response;
        this.dialog = false;
        this.selectValue = "";
        this.filterValue = false;
        this.value = "";
        this.$emit("filteredBids", this.filterResponse);
      }
    );
  }
}
</script>
<style>
.mouse {
  cursor: pointer;
}
</style>
