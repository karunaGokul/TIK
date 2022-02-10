<template>
  <div>
    <v-img src="@/assets/gallery/banner.jpeg" height="500"> </v-img>

    <v-container class="my-10">
      <div justify="center" align="center">
        <h2 class="text-h4">Who we are</h2>
        <Divider />
      </div>
      <div class="pa-6 text-body-1 text-center">
        <p>
          Textile Industry Konnect, connecting bridges between the Mills,
          Knitting, Dyeing, Printing and Processing industries. The app lets you
          monitor the workflow, attract bids from multiple vendors, complete
          transparency and awareness of market trends. What TIK App opens to you
          is a wide array of services for which to date you’ve been depending on
          extensive manpower, exorbitant expenses, dependency on certain fixed
          vendors with their monopolistic policies, and many more such practices
          which have only been challenging and not contributing to the business.
        </p>
      </div>
      <div justify="center" align="center">
        <h2 class="text-h4">What We Do</h2>

        <Divider />
      </div>

      <p class="pa-6 text-center text-body-1">
        Vendor management is a big challenge especially to manage the enormous
        levels of manipulation and lack of transparency in the system. To
        recognize the best vendors keeping in mind all aspects of transparency
        in operations, work ethics, market reputation, credit terms, quality of
        product and service, etc is a big task. TIK App simply integrates all
        these aspects to magically simplify your vendor management system with
        flawless, efficient functioning and utmost productivity and
        transparency. Once in our system, there would never be any looking back
        to the old school processes for your business.
      </p>
    </v-container>

    <v-img src="@/assets/benifits/benifits-background.png">
      <v-container class="fill-height justify-end">
        <div justify="center" align="center">
          <h2 class="text-h4">Why TIK?</h2>
          <Divider />

          <div class="pa-6 text-body-1 text-center">
            <ul class="bulleted-list">
              <li>
                ★ Efficient time management with timely and committed delivery
                schedules
              </li>
              <li>
                ★ Efficient time management with timely and committed delivery
                schedules
              </li>
              <li>★ Exclusive space for the best and most reliable vendors</li>
              <li>
                ★ Cost efficiency with timely payments and high quality vendor
                management
              </li>
              <li>★ Avoidance of middlemen and commissions</li>
              <li>
                ★ Efficient business operations with smooth cash flow operations
              </li>
            </ul>
            <v-btn color="primary" class="mt-6 text-capitalize">
              contact us
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-img>

    <v-container class="my-10">
      <div justify="center" align="center">
        <h2 class="text-h4">The Magic of TIK</h2>

        <Divider />
      </div>

      <div class="pa-6 text-justify text-body-1">
        <p>
          The presence of a strong vendor network is the backbone of any
          successful garment enterprise. But in today’s scenario where this
          network is still only in its basic and physical form, the possibility
          of creating a robust business scenario becomes a challenge.
        </p>
        <p>
          Today, when everything has shifted to the virtual platform, it’s
          inevitable for the garment industry to move along with the trend. The
          introduction of the TIK App into the market is to make good this gap
          in furthering the business possibilities of the garment industry.
        </p>
        <p>
          TIK App replaces extensive manpower, exorbitant expenses, dependency
          on certain fixed vendors, paperwork, manual scouting and emails that
          was used to run your textile business. Today all you need is the TIK
          App. This integrated app brings it all to you at one single place. You
          can get the best and most competitive bids from the best vendors from
          all over.
        </p>
        <p>
          Vendor management is a big challenge and to recognize the best vendors
          keeping in mind all aspects of transparency in operations, work
          ethics, market reputation, credit terms, quality of product and
          service etc is not easy. TIK App simply integrates all these aspects
          to magically simplify your vendor management system with flawless,
          efficient functioning and utmost productivity and transparency. Once
          in our system there would never be any looking back to the old school
          processes for your business.
        </p>
        <p>
          TIK App also integrates an efficient logistics system by ensuring
          timely input of resources and that the output also is delivered to the
          market on time. This brings about high efficiency and scales of
          economy to the operations of your business.
        </p>
        <p>
          Reviving your textile business from the current pandemic situation is
          also easy as TIK app helps with services like finding new buyers for
          your dead stock and seconds and excess material and reestablishing
          your vendor system in a new way to set your business rolling in
          complete gusto.
        </p>
      </div>
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

<style scoped>
.bulleted-list {
  list-style: none;
}

.bulleted-list li {
  padding-bottom: 10px;
}
</style>
