<template>
  <div>
    <v-dialog max-width="1000px" v-model="dialog">
      <v-card>
        <v-row class="my-4 px-4">
          <v-card-title> Summary </v-card-title>
          <v-spacer></v-spacer>
          <v-btn @click="close" icon>
            <v-icon id="close-button">mdi-close</v-icon>
          </v-btn>
        </v-row>

        <v-row>
          <v-col>
            <v-card
              color="teal lighten-4 subtitle-2"
              elevation="5"
              class="mx-10 px-5 mb-7"
            >
              <v-row>
                <v-col>
                  <v-label>Content</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Subcategory"
                    background-color="orange"
                    class="my-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Yarn Content</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.YarnContent"
                    background-color="orange"
                    class="my-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="my-n8">
                <v-col>
                  <v-label>Content</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.Content"
                    background-color="orange"
                    class="my-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Yarn Type</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.YarnType"
                    background-color="orange"
                    class="my-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="my-n8">
                <v-col>
                  <v-label>Quality</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.Quality"
                    background-color="orange"
                    class="my-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Count</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.Count"
                    background-color="orange"
                    class="my-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="my-n8" v-if="response.InStages === 'Confirmed'">
                <v-col>
                  <v-label>Structure</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.Structure"
                    background-color="orange"
                    class="my-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Lycra Details</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.LycraDetails"
                    background-color="orange"
                    class="my-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row  class="my-n8" v-if="response.InStages === 'Confirmed'">
                <v-col>
                  <v-label>Guage</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.Guage"
                    background-color="orange"
                    class="my-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>OPW/TUB</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.Opw_Tub"
                    background-color="orange"
                    class="my-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="my-n8" v-if="response.InStages === 'Confirmed'">
                <v-col>
                  <v-label>GSM</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.Gsm"
                    class="my-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Loop Lenght</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.LoopLenght"
                    class="my-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="my-n8">
                <v-col>
                  <v-label>Enquiry Name</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.EnquiryName"
                   class="my-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>No. of Kg</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.No_Of_kgs"
                    class="my-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="my-n8">
                <v-col>
                  <v-label>Price</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.RequestedPrice"
                    class="my-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>required Credit Period</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.RequestedCredit"
                    class="my-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="my-n8">
                <v-col>
                  <v-label>Order Confirmation Date</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.OrderConfirmationDate"
                    class="my-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Delivery Date</v-label>
                  <v-text-field
                    outlined
                    dense
                    v-model="response.Summary.DeliveryDate"
                    class="my-2"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { DashboardModel } from "@/model";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class ProjectsListView extends Vue {
  @Prop() response: DashboardModel;
  dialog: boolean = true;

  public close() {
    this.$emit("closeModel");
  }
}
</script>
