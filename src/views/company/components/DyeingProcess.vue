<template>
  <div>
    hello
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { productDetailModel } from "@/model";

@Component
export default class DyeingProcess extends Vue {
  @Prop() response: productDetailModel;
  @Prop() option: string;

  public tubular: boolean = false;
  public width: boolean = false;
}
</script>
