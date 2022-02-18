<template>
  <div>
    <div class="ma-2">
      <router-link to="/" class="text-decoration-none">
        <v-icon large> mdi-home</v-icon>
      </router-link>
      <v-icon large> mdi-chevron-right</v-icon>
      <router-link to="/profile" class="text-decoration-none black--text"
        >Product Details
      </router-link>
      <v-icon large> mdi-chevron-right</v-icon>
      Dyeing
    </div>

    <div align="right" v-if="role === 'MasterAdmin' && category !== 'Company'">
      <v-icon large color="primary" class="mr-10" @click="edit = !edit">
        mdi-pencil-box-multiple
      </v-icon>
    </div>

    <div class="pa-6">
      <v-tabs v-model="tab1" color="#16594a">
        <v-tab v-for="item in tab1Items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-card elevation="2" tile class="mt-2 pa-6">
        <v-card-text>
          <v-tabs-items v-model="tab1">
            <v-tab-item> </v-tab-item>

            <v-tab-item>
              <v-tabs v-model="tab3">
                <v-tab v-for="item in tab3Items" :key="item.tab">
                  {{ item.tab }}
                </v-tab>

                <v-tab-item>
                  <DyeingControl
                    :response="response.fabricDyeing.softFlow"
                    option="SoftFlow"
                    :edit="edit"
                  />
                </v-tab-item>
                <v-tab-item>
                   <DyeingControl
                    :response="response.fabricDyeing.winch"
                    option="Winch"
                    :edit="edit"
                  />
                </v-tab-item>
              </v-tabs>
            </v-tab-item>

            <v-tab-item>
              <v-tabs v-model="tab4">
                <v-tab v-for="item in tab4Items" :key="item.tab">
                  {{ item.tab }}
                </v-tab>
              </v-tabs>
            </v-tab-item>

            <v-tab-item>
              <v-tabs v-model="tab5">
                <v-tab v-for="item in tab5Items" :key="item.tab">
                  {{ item.tab }}
                </v-tab>
              </v-tabs>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import { validationMixin } from "vuelidate";
import { IProfileService } from "@/service";
import DyeingControl from "./components/DyeingControl.vue";
import { DyeingProfileModel } from "@/model";

@Component({
  mixins: [validationMixin],
  components: { DyeingControl },
})
export default class DyeBuilder extends Vue {
  @Inject("ProfileService") ProfileService: IProfileService;

  public response = new DyeingProfileModel();
  public edit: boolean = false;
  public option: string = "";

  created() {
    this.createDyeing();
  }

  get role(): string {
    return this.$store.getters.role;
  }

  get category(): string {
    return this.$store.getters.category;
  }

  get companyId(): string {
    return this.$store.getters.companyId;
  }

  public createDyeing() {
    this.edit = false;
    this.ProfileService.CreateDyeing(this.companyId).then(
      (response: DyeingProfileModel) => {
        this.response = response;
      }
    );
  }

  tab1: any = null;
  tab2: any = null;
  tab3: any = null;
  tab4: any = null;
  tab5: any = null;

  tab1Items: any = [
    { tab: "Cut Panel", content: "Tab1 Content" },
    { tab: "Fabric", content: "Tab2 Content" },
    { tab: "Yarn", content: "Tab3 Content" },
    { tab: "Garment", content: "Tab4 Content" },
  ];

  tab3Items: any = [
    { tab: "Soft Flow", content: "Tab1 Content" },
    { tab: "Winch", content: "Tab2 Content" },
  ];
  tab4Items: any = [
    { tab: "CPD", content: "Tab1 Content" },
    { tab: "Dyeing", content: "Tab2 Content" },
    { tab: "Washing", content: "Tab3 Content" },
  ];
  tab5Items: any = [
    { tab: "Bleaching", content: "Tab1 Content" },
    { tab: "Dyeing", content: "Tab2 Content" },
  ];
}
</script>
