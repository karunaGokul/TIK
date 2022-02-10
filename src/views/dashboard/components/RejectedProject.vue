<template>
  <v-container fluid class="mt-8">
    <v-row>
      <h4 class="text-h5 mr-4">Rejected Bids</h4>

      <FilterDialog :projectId="projectId" @filteredBids="filteredBids" />
      <v-icon large color="green darken-4" class="ml-4" @click="reset()">
        mdi-lock-reset
      </v-icon>
      <v-icon large color="green darken-4" class="ml-4" @click="sort">
        mdi-sort-ascending
      </v-icon>
    </v-row>

    <v-row v-for="row in response" :key="row.status">
      <v-row class="ma-1" v-if="row.status === 'Rejected'">
        <v-col cols="12" md="4">
          <v-card color="transparent" flat>
            <div class="d-flex flex-no-wrap">
              <v-avatar size="80" tile>
                <v-img :src="`data:image/png;base64,${row.logo}`"></v-img>
              </v-avatar>
              <div>
                <v-card-title class="text-h6 pt-0">{{
                  row.companyName
                }}</v-card-title>

                <v-card-subtitle
                  ><v-rating
                    v-model="row.review"
                    color="warning"
                    dense
                    half-increments
                    readonly
                  ></v-rating
                ></v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="8">
          <div class="pl-4">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th
                      class="black--text"
                      v-for="(tableHeader, index) in BitReceivedheaders"
                      :key="index"
                      width="20%"
                    >
                      {{ tableHeader }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ row.submittedBy }} <br />{{ row.submittedDate }}</td>

                    <td class="blue--text">Rs.{{ row.requestPrice }}</td>

                    <td class="red--text">{{ row.creditPeriod }} days</td>

                    <td class="green--text">
                      {{ row.deliveryDate }}
                      days
                    </td>
                    <td>
                      {{ row.status }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { BitReceivedModel, FilterRequestModel } from "@/model";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { IDashboardService } from "@/service";
import FilterDialog from "./FilterDialog.vue";

@Component({
  components: { FilterDialog },
})
export default class RejectedProject extends Vue {
  @Prop() response: Array<BitReceivedModel>;
  @Prop() projectId: string;

  @Inject("DashboardService") DashboardService: IDashboardService;

  public filterRequest = new FilterRequestModel();
  public sortedValue: any;
  public temp: boolean = false;

  public filter: boolean = false;

  public sort() {
    this.response.sort((a, b) => {
      var x = a.companyName.toLowerCase();
      var y = b.companyName.toLowerCase();
      if (this.temp === false) {
        //Ascending order
        this.temp = true;
        return x < y ? -1 : x > y ? 1 : 0;
      } else if (this.temp === true) {
        //Descending order
        this.temp = false;
        return x < y ? 1 : x > y ? -1 : 0;
      }
    });
  }

  public reset() {
    this.filterRequest.projectId = this.projectId;
    this.filterRequest.price = null;
    this.filterRequest.review = null;
    this.filterRequest.creditPeriod = null;
    this.filterRequest.deliveryPeriod = null;
    this.DashboardService.FilterRejectedBids(this.filterRequest).then(
      (response) => {
        this.response = response;
      }
    );
  }
  public filteredBids(filterResponse: Array<BitReceivedModel>) {
    this.response = filterResponse;
  }
  // public FilterRejectedBids() {
  //   if (this.selectValue === "Price") {
  //     this.filterRequest.price = this.value;
  //   } else if (this.selectValue === "Credit Period") {
  //     this.filterRequest.creditPeriod = this.value;
  //   } else if (this.selectValue === "Review") {
  //     this.filterRequest.review = this.value;
  //   } else {
  //     this.filterRequest.deliveryPeriod = this.value;
  //   }

  //   this.filterRequest.projectId = this.projectId;
  //   this.DashboardService.FilterRejectedBids(this.filterRequest).then(
  //     (response) => {
  //       this.response = response;
  //       this.dialog = false;
  //       this.selectValue = "";
  //       this.filterValue = false;
  //     }
  //   );
  // }
  get category(): string {
    return this.$store.getters.category;
  }
  items: any = ["Price", "Credit Period", "Delivery Period", "Review"];
  reviweItems: any = [1, 2, 3, 4, 5];
  BitReceivedheaders: any = [
    "Bit Submit & Approve",
    "Price",
    "Your Credit Period",
    "Your Delivery Period",
    "",
  ];
}
</script>
