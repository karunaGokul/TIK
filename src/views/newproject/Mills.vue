 <template>
  <div>
    <v-row justify="center mt-3">
      <v-col cols="12" sm="8">
        <v-card class="ma-2" color="cyan lighten-4" height="700" elevation="0">
          <v-card-title> Mills </v-card-title>
          <div v-if="mill">
            <v-card-subtitle class="text-h5 font-weight-regular my-4">
              1. Choose Your Content
            </v-card-subtitle>
            <v-card-text>
              <v-row class="mb-16 pb-16">
                <v-col cols="12" sm="5">
                  <v-btn
                    class="rounded-lg white"
                    elevation="2"
                    x-large
                    block
                    @click="yarn"
                  >
                    <span class="teal lighten-1 rounded-lg pa-2 mr-2">A</span>
                    Yarn
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="5">
                  <v-btn class="rounded-lg white" elevation="2" x-large block>
                    <span class="teal lighten-1 rounded-lg pa-2 mr-2">B</span>
                    Fabric
                  </v-btn>
                </v-col>
              </v-row>
              <v-row class="mb-16 pt-16" justify="space-between">
                <v-col cols="12" sm="2"></v-col>
                <v-col cols="12" sm="2">
                  <div>Completed</div>
                  <v-progress-linear
                    v-model="skill"
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
          <div v-if="openYarn">
            <v-card-subtitle class="text-h5 font-weight-regular my-4">
              2. Choose Yarn Content
            </v-card-subtitle>
            <v-card-text>
              <v-row class="mb-16 pb-16">
                <v-col cols="12" sm="5">
                  <v-btn
                    class="rounded-lg white"
                    elevation="2"
                    x-large
                    block
                    @click="yarnSingle"
                  >
                    <span class="teal lighten-1 rounded-lg pa-2 mr-2">A</span>
                    Single
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="5">
                  <v-btn class="rounded-lg white" elevation="2" x-large block>
                    <span class="teal lighten-1 rounded-lg pa-2 mr-2">B</span>
                    Blends
                  </v-btn>
                </v-col>
              </v-row>
              <v-row class="mb-16 pt-16" justify="space-between">
                <v-col cols="12" sm="2"></v-col>
                <v-col cols="12" sm="2">
                  <div>Completed</div>
                  <v-progress-linear
                    v-model="skill"
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
          <div v-if="openYarnSingle">
            <v-card-subtitle class="text-h5 font-weight-regular my-4">
              3. Choose Single Yarn Content
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-select
                  :items="items"
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
                  <v-btn class="rounded-lg white" elevation="2" x-large block>
                    <span class="teal lighten-1 rounded-lg pa-2 mr-2">A</span>
                    Spun
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="5">
                  <v-btn class="rounded-lg white" elevation="2" x-large block>
                    <span class="teal lighten-1 rounded-lg pa-2 mr-2">B</span>
                    Filament
                  </v-btn>
                </v-col>
              </v-row>
              <v-row class="mb-16 pt-16" justify="space-between">
                <v-col cols="12" sm="2"></v-col>
                <v-col cols="12" sm="2">
                  <div>Completed</div>
                  <v-progress-linear
                    v-model="skill"
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
      </v-col>
    </v-row>
    <v-btn elevation="2" class="px-8 ma-4" large color="warning">Reset</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Mills extends Vue {
  items: any = ["Select Content", "100% Cotton", "100% Viscose", "100% Modal"];
  skill: any = 0;
  mill: any = true;
  openYarn: any = false;
  openYarnSingle: any = false;
  yarn() {
    this.mill = false;
    this.skill = 20;
    this.openYarn = true;
  }
  yarnSingle() {
    this.skill = 40;
    this.openYarn = false;
    this.openYarnSingle = true;
  }
}
</script>

