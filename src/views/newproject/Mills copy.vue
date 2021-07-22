 <template>
  <div>
    <v-row justify="center mt-3">
      <v-col cols="12" sm="8">
        <v-card class="ma-2" color="cyan lighten-4" height="600" elevation="0">
          <v-card-title> Mills </v-card-title>
          <div v-if="mill === 'p'">
            <v-card-subtitle class="text-h5 font-weight-regular my-4">
              1. Choose Your Content
            </v-card-subtitle>
            <v-card-text>
              <v-row class="mb-16 pb-16">
                <v-col cols="12" sm="5">
                  <v-btn
                    class="rounded-lg white text-capitalize"
                    elevation="2"
                    x-large
                    block
                    @click="pa"
                  >
                    <span class="teal lighten-1 rounded-lg px-2 py-1 mr-2">
                      A
                    </span>
                    Yarn
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="5">
                  <v-btn
                    class="text-capitalize rounded-lg white"
                    elevation="2"
                    x-large
                    block
                    @click="pb"
                  >
                    <span class="teal lighten-1 rounded-lg px-2 py-1 mr-2">
                      B
                    </span>
                    Fabric
                  </v-btn>
                </v-col>
              </v-row>
              <v-row class="mb-16 pt-16" justify="space-between">
                <v-col cols="12" sm="2"></v-col>
                <v-col cols="12" sm="2">
                  <div>Completed</div>
                  <v-progress-linear
                    v-model="progress"
                    color="warning"
                    height="25"
                  >
                    <template v-slot:default="{ value }">
                      <strong>{{ Math.ceil(value) }}%</strong>
                    </template>
                  </v-progress-linear>
                </v-col>
              </v-row>
            </v-card-text>
          </div>
          <div v-if="mill === 'pa'">
            <v-card-subtitle class="text-h5 font-weight-regular my-4">
              2. Choose Yarn Content
            </v-card-subtitle>
            <v-card-text>
              <v-row class="mb-16 pb-16">
                <v-col cols="12" sm="5">
                  <v-btn
                    class="rounded-lg white text-capitalize"
                    elevation="2"
                    x-large
                    block
                    @click="paa"
                  >
                    <span class="teal lighten-1 rounded-lg px-2 py-1 mr-2">
                      A
                    </span>
                    Single
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="5">
                  <v-btn
                    class="rounded-lg white text-capitalize"
                    elevation="2"
                    x-large
                    block
                  >
                    <span class="teal lighten-1 rounded-lg px-2 py-1 mr-2">
                      B
                    </span>
                    Blends
                  </v-btn>
                </v-col>
              </v-row>
              <v-row class="mb-16 pt-0" justify="space-between">
                <v-col cols="12" sm="2"></v-col>
                <v-col cols="12" sm="2">
                  <div>Completed</div>
                  <v-progress-linear
                    v-model="progress"
                    color="warning"
                    height="25"
                  >
                    <template v-slot:default="{ value }">
                      <strong>{{ Math.ceil(value) }}%</strong>
                    </template>
                  </v-progress-linear>
                </v-col>
              </v-row>
            </v-card-text>
          </div>

          <div v-if="mill === 'paa'">
            <v-card-subtitle class="text-h5 font-weight-regular my-4">
              3. Choose Single Yarn Content
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-select
                  :items="items"
                  v-model="paa_selected"
                  :menu-props="{ offsetY: true }"
                  label="Select"
                  class="shrink pt-3"
                  outlined
                  dense
                >
                </v-select>
              </v-row>
              <v-row>
                <v-col class="text-h5">Choose Single Yarn Content </v-col>
              </v-row>
              <v-row class="mb-16 pb-16">
                <v-col cols="12" sm="5">
                  <v-btn
                    class="rounded-lg white text-capitalize"
                    elevation="2"
                    x-large
                    block
                    @click="paaa"
                  >
                    <span class="teal lighten-1 rounded-lg px-2 py-1 mr-2">
                      A
                    </span>
                    Spun
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="5">
                  <v-btn
                    class="rounded-lg white text-capitalize"
                    elevation="2"
                    x-large
                    block
                  >
                    <span class="teal lighten-1 rounded-lg px-2 py-1 mr-2">
                      B
                    </span>
                    Filament
                  </v-btn>
                </v-col>
              </v-row>
              <v-row class="mb-16 pt-10" justify="space-between">
                <v-col cols="12" sm="2"></v-col>
                <v-col cols="12" sm="2">
                  <div>Completed</div>
                  <v-progress-linear
                    v-model="progress"
                    color="warning"
                    height="25"
                  >
                    <template v-slot:default="{ value }">
                      <strong>{{ Math.ceil(value) }}%</strong>
                    </template>
                  </v-progress-linear>
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <div class="text-h5">Summary</div>
        <div class="py-2 text-subtitle-1" v-if="mill.slice(0, 2) === 'pa'">
          Choose Yarn Content <br />
          <span class="orange--text"> Yarn </span>
          <div class="py-2 text-subtitle-1" v-if="mill.slice(0, 3) === 'paa'">
            Choose Yarn Content <br />
            <span class="orange--text"> Single </span>
            <div
              class="py-2 text-subtitle-1"
              v-if="mill.slice(0, 4) === 'paaa'"
            >
              Choose Yarn Content <br />
              <div class="orange--text">
                {{ paa_selected }}<span class="pl-2">spun </span>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <v-btn
          elevation="2"
          class="px-8 ma-4 text-capitalize"
          large
          color="warning"
          @click="reset"
        >
          Reset
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6">
        <v-btn
          elevation="2"
          class="px-8 ma-4 text-capitalize"
          large
          color="warning"
          v-if="!(mill === 'p')"
          @click="back"
        >
          Back
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Mills extends Vue {
  items: any = ["100% Cotton", "100% Viscose", "100% Modal", "100% polyster"];
  progress: any = 0;
  mill: any = "p";
  summary: any = "";
  paa_selected: any = "";

  pa() {
    this.mill = "pa";
    this.progress = this.progress + 20;
  }
  pb() {
    this.mill = "pb";
    this.progress = this.progress + 20;
  }
  paa() {
    this.mill = "paa";
    this.progress = this.progress + 20;
  }
  paaa() {
    this.mill = "paaa";
    this.progress = this.progress + 20;
  }
  back() {
    this.mill = this.mill.slice(0, -1);
    this.progress = this.progress - 20;
  }
  reset() {
    this.mill = "p";
    this.progress = 0;
  }
}
</script>

