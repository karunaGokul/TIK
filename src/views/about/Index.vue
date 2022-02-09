<template>
  <div>
    <v-container fluid class="pa-16">
      <div class="my-15" justify="center" align="center">
        <h1 class="text-capitalize">about us</h1>
        <Divider />
      </div>

      <v-row>
        <v-col cols="12" sm="4">
          <v-img src="@/assets/gallery/gallery1.png" height="250"></v-img>
        </v-col>

        <v-col>
          <p>
            Efficient time management with timely and committed delivery
            schedules. Sourcing reliability through high Quality and competitive
            availability of resources. Exclusive space for the best and most
            reliable vendors. Cost efficiency with timely payments and high
            quality vendor management. Avoidance of middlemen and commissions.
            Efficient business operations with smooth cash flow operations.
          </p>
          <v-btn color="primary" class="mt-2 text-capitalize">
            contact us
          </v-btn>
        </v-col>
      </v-row>

      <div class="my-15" justify="center" align="center">
        <h1 class="text-capitalize">what we do</h1>

        <Divider />
      </div>

      <p class="text-center">
        The presence of a strong vendor network is the backbone of any
        successful garment enterprise. But in today’s scenario where this
        network is still only in its basic and physical form, the possibility of
        creating a robust business scenario becomes a challenge. Today, when
        everything has shifted to the virtual platform, it’s inevitable for the
        garment industry to move along with the trend. The introduction of the
        TIK App into the market is to make good this gap in furthering the
        business possibilities of the garment industry. TIK App replaces
        extensive manpower, exorbitant expenses, dependency on certain fixed
        vendors, paperwork, manual scouting and emails that was used to run your
        textile business. Today all you need is the TIK App. This integrated app
        brings it all to you at one single place. You can get the best and most
        competitive bids from the best vendors from all over. Vendor management
        is a big challenge and to recognize the best vendors keeping in mind all
        aspects of transparency in operations, work ethics, market reputation,
        credit terms, quality of product and service etc is not easy. TIK App
        simply integrates all these aspects to magically simplify your vendor
        management system with flawless, efficient functioning and utmost
        productivity and transparency. Once in our system there would never be
        any looking back to the old school processes for your business. TIK App
        also integrates an efficient logistics system by ensuring timely input
        of resources and that the output also is delivered to the market on
        time. This brings about high efficiency and scales of economy to the
        operations of your business. Reviving your textile business from the
        current pandemic situation is also easy as TIK app helps with services
        like finding new buyers for your dead stock and seconds and excess
        material and reestablishing your vendor system in a new way to set your
        business rolling in complete gusto.
      </p>

      <ul class="d-flex justify-center text-capitalize">
        <li class="pr-16">management team</li>
        <li>executive team</li>
      </ul>

      <v-row
        class="grey lighten-4 color px-16 my-10"
        align="center"
        justify="center"
        height="240"
      >
        <v-col cols="12" sm="3">
          <v-img src="@/assets/gallery/gallery1.png" alt="gallery1" />
        </v-col>

        <v-col cols="12" sm="3">
          <v-img src="@/assets/gallery/gallery1.png" alt="gallery1" />
        </v-col>

        <v-col cols="12" sm="3">
          <v-img src="@/assets/gallery/gallery1.png" alt="gallery1" />
        </v-col>

        <v-col cols="12" sm="3">
          <v-img src="@/assets/gallery/gallery1.png" alt="gallery1" />
        </v-col>
      </v-row>
    </v-container>
    <div class="white--text teal darken-4 pa-16">
      <v-row>
        <v-col class="pl-16" cols="12" sm="4">
          <subtitle-1> Gain a Success with Us </subtitle-1>

          <h1>Get to know us better!</h1>

          <Divider color="primary" />
        </v-col>
        <v-col class="text-capitalize">
          <h1>1530+</h1>

          <Divider />

          <subtitle-1> happy clients </subtitle-1>
        </v-col>
        <v-col class="text-capitalize">
          <h1>1240+</h1>

          <Divider />

          <subtitle-1> projects finished </subtitle-1>
        </v-col>
        <v-col class="text-capitalize">
          <h1>1380+</h1>

          <Divider />

          <subtitle-1> business solutions </subtitle-1>
        </v-col>
      </v-row>
    </div>
    <v-container>
      <CustomerFeedback />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomerFeedback from "@/components/CustomerFeedback.vue";
import Divider from "@/components/Divider.vue";

@Component({
  components: { Divider, CustomerFeedback },
})
export default class About extends Vue {}
</script>

<style scoped></style>
