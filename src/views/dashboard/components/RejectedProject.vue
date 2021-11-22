<template>
  <div class="ml-4 mt-6">
    <!-- <div v-if="status === 'Rejected'"> -->
    <v-row>
      <span class="text-subtitle-1 font-weight-bold mr-4 mt-2">
        Rejected Projects
      </span>

      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-icon large color="green darken-4" v-bind="attrs" v-on="on">
            mdi-filter
          </v-icon>
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
            :items="items"
            class="mx-5"
            v-model="selectValue"
            @change="filterValue = true"
          >
          </v-select>
          <v-card-actions v-if="filterValue">
            <v-text-field
              label="Enter a value"
              dense
              outlined
              class="ml-1 mr-5"
              v-model="value"
            ></v-text-field>

            <v-btn
              color="primary"
              class="mt-n6 rounded-0"
              @click="FilterRejectedBids"
            >
              filter
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-icon large color="green darken-4" class="ml-4" @click="reset()">
        mdi-lock-reset
      </v-icon>
      <v-icon large color="green darken-4" class="ml-4" @click="sort">
        mdi-sort-ascending
      </v-icon>
    </v-row>

    <v-row v-for="row in response" :key="row.status">
      <v-row class="ma-1" v-if="row.status === 'Rejected'">
        <v-col cols="12" sm="1" md="1">
          <v-img :src="`data:image/png;base64,${row.logo}`" width="70%"></v-img>
        </v-col>
        <v-col class="mx-1" cols="12" sm="2" md="3">
          <v-row class="ma-1">
            <h4>{{ row.companyName }}</h4>
          </v-row>
          <v-row>
            <v-rating
              v-model="row.review"
              color="warning"
              dense
              half-increments
              readonly
            ></v-rating>
          </v-row>
        </v-col>

        <v-col cols="12" md="7">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th
                    class="text-left teal lighten-4 text-subtitle-2"
                    v-for="(tableHeader, index) in BitReceivedheaders"
                    :key="index"
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
        </v-col>
      </v-row>
    </v-row>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { BitReceivedModel, FilterRequestModel } from "@/model";
import { Component, Inject, Prop, Vue } from "vue-property-decorator";
import { IDashboardService } from "@/service";
@Component
export default class RejectedProject extends Vue {
  @Prop() response: Array<BitReceivedModel>;
  @Prop() projectId: string;

  @Inject("DashboardService") DashboardService: IDashboardService;

  public filterRequest = new FilterRequestModel();
  public dialog: boolean = false;
  public filterValue: boolean = false;
  public selectValue: string = "";
  public value: string;
  public sortedValue: any;
  public a: any;

  public sort() {
    this.sortedValue = this.response.sort();
    console.log(this.sortedValue);
  }

  public reset() {
    this.filterRequest.projectId = this.projectId;
    this.filterRequest.price = null;
    this.filterRequest.creditPeriod = null;
    this.filterRequest.deliveryPeriod = null;
    this.DashboardService.FilterRejectedBids(this.filterRequest).then(
      (response) => {
        this.response = response;
      }
    );
  }
  public FilterRejectedBids() {
    if (this.selectValue === "Price") {
      this.filterRequest.price = this.value;
    } else if (this.selectValue === "Credit Period") {
      this.filterRequest.creditPeriod = this.value;
    } else {
      this.filterRequest.deliveryPeriod = this.value;
    }

    this.filterRequest.projectId = this.projectId;
    this.DashboardService.FilterRejectedBids(this.filterRequest).then(
      (response) => {
        this.response = response;
        this.dialog = false;
      }
    );
  }
  get category(): string {
    return this.$store.getters.category;
  }
  items: any = ["Price", "Credit Period", "Delivery Period"];
  BitReceivedheaders: any = [
    "Bit Submit & Approve",
    "Price",
    "Your Credit Period",
    "Your Delivery Period",
    "Action",
  ];
}
</script>
