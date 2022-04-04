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
                v-model="filterRequest.maxPrice"
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
                <div v-for="n in review" :key="n">
                  <v-rating
                    readonly
                    dense
                    size="18"
                    class="d-inline mouse"
                    :value="n"
                    :length="n"
                  >
                  </v-rating>
                  <span class="mouse"> &up</span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <!--              
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
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';
import { IDashboardService } from '@/service';
import {
  BitReceivedModel,
  FilterRequestModel,
  DashboardModel,
  DashboardRequestModel
} from '@/model';

@Component
export default class FilterDialog extends Vue {
  @Prop() projectId: string;
  @Prop() response: DashboardModel;

  @Inject('DashboardService') DashboardService: IDashboardService;

  public dialog: boolean = false;
  public filterResponse: Array<BitReceivedModel> = [];
  public filterRequest = new FilterRequestModel();
  public maxMixValue: Array<DashboardModel> = [];
  public Dashboard: DashboardRequestModel;

  items: any = ['Price', 'Credit Period', 'Delivery Period', 'Review'];
  review: any = [4, 3, 2, 1];

  public FilterRejectedBids() {
   

    this.filterRequest.projectId = this.projectId;
    this.filterRequest.minPrice = 0;
    this.filterRequest.minCreditPeriod = 0;
    this.filterRequest.minDeliveryPeriod = 0;
    this.DashboardService.FilterRejectedBids(this.filterRequest).then(
      response => {
        this.filterResponse = response;
        this.dialog = false;
        this.$emit('filteredBids', this.filterResponse);
      }
    );
  }

  // private GetProjectEnquiry() {
  //   this.Dashboard;
  //   this.GetProjectEnquiry().then((response: Array<DashboardModel>) => {
  //     this.maxMixValue = response;
  //   });
  // }
}
</script>
<style>
.mouse {
  cursor: pointer;
}
</style>
