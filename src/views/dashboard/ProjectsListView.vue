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
          <v-card color="teal lighten-4 subtitle-2" elevation="5" class="mx-10 px-5 mb-7">
              <v-row>
                <v-col>
                  <v-label>Content</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Yarn"
                    class="py-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Yarn Content</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Single"
                    class="py-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-label>Content</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="100% Cotton(Spun)"
                    class="py-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Yarn Type</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Regular Yarn"
                    class="py-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-label>Quality</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Super Combed"
                    class="py-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Count</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="10"
                    class="py-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-label>Enquiry Name</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="10"
                    class="py-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>No. of Kg</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="10"
                    class="py-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-label>Price</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Rs.10"
                    class="py-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>required Credit Period</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="10"
                    class="py-2"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-label>Order Confirmation Date</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder=""
                    class="py-2"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-label>Delivery Date</v-label>
                  <v-text-field
                    outlined
                    dense
                    placeholder=""
                    class="py-2"
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
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ProjectsListView extends Vue {
  dialog: boolean = true;
  
  public close() {
    this.$emit("closeModel");
  }
}
</script>
