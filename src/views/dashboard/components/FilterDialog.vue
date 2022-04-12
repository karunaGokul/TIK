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
              <div class="d-inline-flex mb-3">
                <h4 class="mr-2 mt-n1">{{ item }} :</h4>
                <v-label v-if="item === 'Price'"
                  >0 to {{ response.maxPrice }}
                </v-label>
                <v-label v-if="item === 'Credit Period'"
                  >0 to {{ response.maxCreditPeriod }}
                </v-label>
                <v-label v-if="item === 'Delivery Period'"
                  >0 to {{ response.maxDeliveryPeriod }}
                </v-label>
              </div>

              <v-slider
                v-if="item === 'Price'"
                track-color="teal"
                track-fill-color="primary"
                thumb-color="primary"
                thumb-label
                :thumb-size="20"
                :min="0"
                :max="response.maxPrice"
                v-model="filterRequest.maxPrice"
              >
              </v-slider>
              <v-slider
                v-if="item === 'Credit Period'"
                track-color="teal"
                track-fill-color="primary"
                thumb-color="primary"
                thumb-label
                :thumb-size="20"
                :min="0"
                :max="response.maxCreditPeriod"
                v-model="filterRequest.maxCreditPeriod"
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
                v-model="filterRequest.maxDeliveryPeriod"
              ></v-slider>
              <div v-if="item === 'Review'">
                <v-btn
                  depressed
                  text
                  v-for="item in review"
                  :key="item"
                  @click="(selectedReview = item) && (toggleButton = !toggleButton) && filterValue(item)"
                  :class="{ 'bg-primary': item == selectedReview && toggleButton }"
                >
                  <v-rating
                    readonly
                    dense
                    size="18"
                    :value="item"
                    :length="item"
                    class="ml-n4"
                  ></v-rating>
                  <span class="text-capitalize mr-4"> &up</span>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
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
import {
  BitReceivedModel,
  FilterRequestModel,
  DashboardModel,
  DashboardRequestModel,
} from "@/model";

@Component
export default class FilterDialog extends Vue {
  @Prop() projectId: string;
  @Prop() response: DashboardModel;

  @Inject("DashboardService") DashboardService: IDashboardService;

  public dialog: boolean = false;
  public filterResponse: Array<BitReceivedModel> = [];
  public filterRequest = new FilterRequestModel();
  public Dashboard: DashboardRequestModel;

  items: any = ["Price", "Credit Period", "Delivery Period", "Review"];
  review: any = [4, 3, 2, 1];
  selectedReview: number = 0;
  toggleButton: boolean = false;

  public filterValue(n: any) {
    this.filterRequest.Review = n;
  }

  public FilterRejectedBids() {
    this.filterRequest.projectId = this.projectId;
    this.DashboardService.FilterRejectedBids(this.filterRequest).then(
      (response) => {
        this.filterResponse = response;
        this.dialog = false;
        this.selectedReview = null;
        this.$emit("filteredBids", this.filterResponse);
        this.filterRequest.maxPrice = 0;
        this.filterRequest.maxCreditPeriod = 0;
        this.filterRequest.maxDeliveryPeriod = 0;
        this.filterRequest.Review = 0;
      }
    );
  }
}
</script>

<style scoped>
.bg-primary {
  background-color: #c7eaea;
}
</style>
