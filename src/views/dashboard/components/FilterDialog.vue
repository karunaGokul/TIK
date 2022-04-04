<template>
  <div>
    <v-dialog v-model="dialog" width="900">
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
        <v-divider></v-divider>
        <v-row no-gutters justify="center" class="mt-10">
          <v-col v-for="n in any" :key="n" cols="12" sm="5" class="mx-5">
            <v-card class="pa-2" flat>
              {{ n }}

              <v-slider
                v-if="n === 'Price'"
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
                v-if="n === 'Credit Period'"
                track-color="theme--light teal"
                track-fill-color="primary"
                thumb-color="primary"
                v-model="ex2.val"
                :label="ex2.label"
                thumb-label="always"
              ></v-slider>
              <v-slider
                v-if="n === 'Delivery Period'"
                track-color="theme--light teal"
                track-fill-color="primary"
                thumb-color="primary"
                v-model="ex1.val"
                :label="ex1.label"
                thumb-label="always"
              ></v-slider>
              <v-col>
                <v-row class="mb-1">
                  <div v-if="n === 'Review'">
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
                  <div v-if="n === 'Review'">
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
                  <div v-if="n === 'Review'">
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
                  <div v-if="n === 'Review'" class="ml-3">
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
        </v-row>
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

  @Inject('DashboardService') DashboardService: IDashboardService;

  public selectValue: string = '';
  public dialog: boolean = false;
  public value: string = '';
  public filterValue: boolean = false;
  public filterResponse: Array<BitReceivedModel> = [];
  public filterRequest = new FilterRequestModel();
  public maxMixValue: Array<DashboardModel> = [];
  public Dashboard: DashboardRequestModel;

  // items: any = ["Price", "Credit Period", "Delivery Period", "Review"];
  any = ['Price', 'Credit Period', 'Delivery Period', 'Review'];
  public ex3 = { val: 10, color: 'red' };
  public ex2 = { val: 10, color: 'red' };
  public ex1 = { val: 10, color: 'red' };

  reviweItems: any = [1, 2, 3, 4, 5];

  public FilterRejectedBids() {
    if (this.selectValue === 'Price') {
      this.filterRequest.sortBy = 'RequestedPrice';
    } else if (this.selectValue === 'Credit Period') {
      this.filterRequest.sortBy = 'RequestedCredit';
    } else if (this.selectValue === 'Review') {
      this.filterRequest.sortBy = 'Review';
    } else {
      this.filterRequest.sortBy = 'RequestedDelivery';
    }

    this.filterRequest.projectId = this.projectId;
    this.DashboardService.FilterRejectedBids(this.filterRequest).then(
      response => {
        this.filterResponse = response;
        this.dialog = false;
        this.selectValue = '';
        this.filterValue = false;
        this.value = '';
        // this.filterRequest.price = null;
        // this.filterRequest.creditPeriod = null;
        // this.filterRequest.deliveryPeriod = null;
        // this.filterRequest.review = null;
        this.$emit('filteredBids', this.filterResponse);
      }
    );
  }

  private GetProjectEnquiry() {
    this.Dashboard;
    this.GetProjectEnquiry().then((response: Array<DashboardModel>) => {
      this.maxMixValue = response;
    });
  }
}
</script>
<style>
.mouse {
  cursor: pointer;
}
</style>
