<template>
    <div>
        <v-container>
            <h1 class ="d-flex justify-center 
                    my-15 
                    text-decoration-underline 
                    text-capitalize"
            >
                customer say
            </h1>

            <v-carousel 
                v-model="model"
                hide-delimiters
                cycle
            >
                <v-carousel-item
                    v-for = "customer in customers"
                    :key = "customer.name"
                    class="px-10"
                >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <v-col>
                            <v-card 
                                class="grey lighten-4 color black--text mx-auto px-5"
                                height = "300"
                                width = "500"
                            >
                                <v-icon x-large color="teal">mdi-home</v-icon>
                                <p>{{ customer.description }}</p>
                                
                                <v-row>
                                    <v-col>
                                        <h4 class="text-capitalize"> {{ customer.name }} </h4>
                                        <div class="text-caption grey--text text-capitalize">description</div>
                                        <v-rating
                                            color="#ff6500"
                                            dense
                                            :value="4.5"
                                            half-increments
                                            readonly
                                            size="14"
                                        ></v-rating>
                                    </v-col>
                                    <v-col class="d-flex justify-right">
                                        <v-avatar>
                                            <img
                                                :src= "customer.src"
                                                alt="James"  
                                            >
                                        </v-avatar>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col> 

                        <v-col>
                            <v-card 
                                class="grey lighten-4 color black--text mx-auto px-5"
                                height = "300"
                                width = "500"
                            >
                                <v-icon x-large color="teal">mdi-home</v-icon>
                                <p>{{ customer.description }}</p>
                                
                                <v-row>
                                    <v-col>
                                        <h4 class="text-capitalize"> {{ customer.name }} </h4>
                                        <div class="text-caption grey--text text-capitalize">description</div>
                                        <v-rating
                                            color="#ff6500"
                                            dense
                                            :value="4.5"
                                            half-increments
                                            readonly
                                            size="14"
                                        ></v-rating>
                                    </v-col>
                                    <v-col class="d-flex justify-right">
                                        <v-avatar>
                                            <img
                                                :src= "customer.src"
                                                alt="James"  
                                            >
                                        </v-avatar>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>                    
                    </v-row>
                </v-carousel-item>
            </v-carousel>

            <div
                class="white--text teal darken-4 color rounded-xl py-10"
                height="300"
                justify = "center"
                align = "center"
            >
                <h1 class ="text-decoration-underline text-capitalize">
                   register
                </h1>

                <p class ="my-10">
                    Register your company today and Start your business. 
                </p>

                <v-btn
                    color="#ff6500" 
                    class="white--text font-weight-light text-capitalize rounded-0"
                >
                    Register
                </v-btn>
            </div>

            <div
                class="py-10"
                height="300"
                justify = "center"
                align = "center"
            >
                <h1 class ="text-decoration-underline text-capitalize">
                   download the app
                </h1>

                <v-divider role="presentation"></v-divider>

                <p class ="my-10 font-weight-medium">
                    The Best Business app for you. 
                </p>

                <v-btn
                    class="text-capitalize rounded-lg mr-2"
                    dark
                    large    
                >
                    <v-row>
                        <v-icon class="pr-2"> mdi-google-play </v-icon>
                       
                        <v-col class="py-3">
                            <v-row>
                                <p class="subtitle-1 mb-n1 font-weight-light">get it on</p> 
                            </v-row>
                            <v-row>
                                <h2 class="mt-n1 font-weight-regular">google play</h2>
                            </v-row>
                        </v-col>
                    </v-row>  
                </v-btn>

                <v-btn
                    class="text-capitalize rounded-lg ml-2"
                    dark
                    large
                >
                    <v-row>
                        <v-icon class="pr-2"> mdi-apple </v-icon>
                       
                        <v-col>
                            <v-row>
                                <p class="subtitle-1 mb-n1 font-weight-light">Download on the</p> 
                            </v-row>
                            <v-row>
                                <h2 class="mt-n1 font-weight-regular">app store</h2>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-btn>
            </div>
        </v-container>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "CustomerFeedback",
        
        data() {
            return {
                model: 0,
                customers: [
                    { 
                        name: "james sulivan", 
                        description: "The Goverment for initiating policies that ensure creation of world class texttile infrastructure in the country and management tech.",
                        src: "https://www.tikonline.in/newthemeassets/assets/img/face4.jpg"
                        
                    },
                    { 
                        name: "sam smith", 
                        description: "This sector is highly responsible for propelling india's overall and develop development and enjoys intense focus from it policies and energy of health.",
                        src: "https://www.tikonline.in/newthemeassets/assets/img/face1.jpg"
                        
                    }
                ]
            };
        }        
    })
</script>

<style scoped>

</style>