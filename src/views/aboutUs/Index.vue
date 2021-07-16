<template>
    <div>
        <div class="my-15"
            justify = "center"
            align = "center"
        >
            <h1 class = "text-capitalize" >
                about us
            </h1>
            <Divider />
        </div>
        
        <v-row>
            <v-col class="col-4">
                <v-img
                    src="@/assets/Gallery/gallery1.jpg"
                    height="250"
                    class="ml-16 mr-10 mb-16"  
                ></v-img> 
            </v-col>

            <v-col class="col-8">
                <p class="pr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum reiciendis voluptatum praesentium temporibus provident voluptas accusamus est vel fuga fugit neque illo dolorum, eum modi quo reprehenderit ad cupiditate?
                Consectetur error, suscipit architecto quia quos libero asperiores labore eos ea itaque quod quibusdam nam quam id enim modi placeat totam voluptas praesentium beatae molestiae et. Earum doloremque maxime qui?
                Possimus aperiam, beatae blanditiis saepe sed hic temporibus. Tempore, quaerat. Alias, pariatur? Illo asperiores corporis praesentium animi reiciendis earum eos nulla magnam. Ipsam odit asperiores, fugit explicabo voluptatibus aliquid quidem.</p>
                <v-btn
                    color="#ff6500" 
                    class="py-5 rounded-0 d-flex justify-center white--text font-weight-light text-capitalize"
                >
                    contact us
                </v-btn>
            </v-col>
        </v-row>

        <div class="my-15"
            justify = "center"
            align = "center"
        >
            <h1 class = "text-capitalize" >
                what we do
            </h1>

            <Divider />
        </div>
    
        <p class="ml-16 mr-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet commodi voluptate distinctio dicta, vel repudiandae animi ab nesciunt sapiente quidem quod ipsam minima adipisci error. Aliquam quae possimus a consequatur?
        Ad nemo earum numquam odit magni sapiente quidem sint obcaecati voluptate rerum dolorum officia exercitationem veniam libero enim inventore commodi voluptatum, voluptas voluptatem quae tenetur provident ratione. Nam, animi ipsum.
        Distinctio, dicta laboriosam. Error necessitatibus praesentium temporibus id explicabo tenetur illum adipisci repellat, totam doloribus. Voluptatem, laborum. Dignissimos, numquam quos quia corporis qui quidem illo, error id hic, repellendus exercitationem.
        Consequuntur, aperiam. Cumque distinctio corporis nihil, recusandae ad quod, assumenda dignissimos, doloribus adipisci esse magnam minus! Porro suscipit fugit modi, nam ex accusantium maiores omnis recusandae consequatur, obcaecati doloribus fuga!
        Qui libero deserunt modi explicabo aut dolorum, voluptas, tempora itaque error facere adipisci blanditiis iste nostrum? Dignissimos quis esse explicabo quam in iste velit quos illo accusamus dolor. Temporibus, doloremque!</p>
        
        <div class="mb-16">
            <ul class="d-flex justify-center text-capitalize">
                <li class="pr-16">management team</li> 
                <li>executive team</li>
            </ul>
        </div>

        <v-row 
            class="grey lighten-4 color px-16 my-10" 
            height="250px"
        >
          
                <v-img src="@/assets/Gallery/gallery1.jpg" 
                    alt="gallery1"
                    width = "50px"
                    height = "100px"
                />               
           
                <v-img src="@/assets/Gallery/gallery1.jpg" 
                    alt="gallery1"
                    width = "50"
                    height = "100"
                    class="mx-5"
                />
           
                <v-img src="@/assets/Gallery/gallery1.jpg" 
                    alt="gallery1"
                    width = "50"
                    height = "100"
                    class="mx-2"
                />
            
                <v-img src="@/assets/Gallery/gallery1.jpg" 
                    alt="gallery1"
                    width = "50"
                    height = "100"
                    class="mx-5"
                />
           
                <v-img src="@/assets/Gallery/gallery1.jpg" 
                    alt="gallery1"
                    width = "50"
                    height = "100"
                />
            
        </v-row>

        <div
            class="white--text teal darken-4 color rounded-0 pb-10 pt-6"
        >
            <v-row>
                <v-col
                    class="pl-16 col-4"
                >
                    <subtitle-1>
                        Gain a Success with Us
                    </subtitle-1>
                    
                    <h1> Get to know us better! </h1>
                    
                    <Divider />
                    
                </v-col>
                <v-col class="text-capitalize">
                    <h1> 1530+ </h1>

                    <Divider />

                    <subtitle-1>
                        happy clients
                    </subtitle-1>
                </v-col>
                <v-col class="text-capitalize">
                    <h1> 1240+ </h1>

                    <Divider />

                    <subtitle-1>
                        projects finished
                    </subtitle-1>
                </v-col>
                <v-col class="text-capitalize">
                    <h1> 1380+ </h1>

                    <Divider />

                    <subtitle-1>
                        business solutions
                    </subtitle-1>
                </v-col>      
            </v-row>
        </div>

        <CustomerFeedback />
        
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import CustomerFeedback from "@/components/CustomerFeedback.vue";
import Divider from "@/components/Divider.vue";

    export default Vue.extend ({
        components: { CustomerFeedback, Divider },

    });
</script>

<style scoped>

</style>