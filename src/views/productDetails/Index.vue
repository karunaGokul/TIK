<template>
  <div>
    <v-container fluid class="pa-4">
      <div class="ma-2">
        <router-link link to="/" class="text-decoration-none">
          <v-icon large> mdi-home</v-icon>
        </router-link>
        <v-icon large> mdi-chevron-right</v-icon>
        Product Details> Yarn
      </div>
    </v-container>
    <template>
      <div class="ml-10" v-if="data[0].controls.type === 'toggle-button'">
        <v-btn-toggle v-model="buttonValue" flat rounded>
          <v-btn
            class="mr-2 text-capitalize white--text teal color rounded-0"
            v-for="(option, j) in data[0].controls.options"
            :key="j"
            @click="controlSelected(option)"
          >
            {{ option.text }}
          </v-btn>
        </v-btn-toggle>
      </div>
    </template>
    <v-card elevation="4" class="ma-3">
      <div v-for="(step, j) in data" :key="j">
        <div v-if="step.visible">
          <ProductControls
            :control="step.controls"
            @change="controlChanged(control)"
          />
        </div>
      </div>
    </v-card>
    <div justify="center" align="center" class="mt-10 pb-16">
      <v-btn
        color="primary"
        class="white--text font-weight-light text-capitalize rounded-0"
        >save</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import ProductControls from "./ProductControls.vue";
import { ProfileFormStepControlOption, ProfileModel } from "@/model";
import { IProfileService } from "@/service";

@Component({
  components: { ProductControls },
})
export default class productDetails extends Vue {
  @Inject("ProfileService") ProjectService: IProfileService;
  data: Array<ProfileModel> = [];

  created() {
    this.ProjectService.profileSetup().then((response: Array<ProfileModel>) => {
      this.data = response;
    });
  }
  controlSelected(option: ProfileFormStepControlOption) {
    this.data[0].controls.options.forEach((o) => (o.selected = false));
    option.selected = true;
    console.log(this.data[0].controls);
    // const nextSteps = this.data.find((s) => s.parentOptionId == option.id);
  }
  get buttonValue() {
    return this.data[0].controls.options.findIndex((o) => o.selected);
  }

  set buttonValue(value: any) {}
}
</script>