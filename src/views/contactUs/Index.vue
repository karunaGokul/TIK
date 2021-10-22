<template>
    <div>
        <v-container>
            <div class="my-15"
                justify="center"
                align="center"
            >
                <h1 class = "text-capitalize" >
                    contact us
                </h1>
                <Divider />
            </div>

            <v-row>
                <v-col v-for ="contact in contacts" :key ="contact.title" cols="12" sm="4">
                    <v-card justify="center" align="center" min-height="200">
                        <div>
                            <v-icon x-large color="teal darken-4">{{ contact.icon }}</v-icon> 
                        </div>
                        <v-card-title class="text-capitalize d-flex justify-center" >
                            <h2>{{ contact.title }}</h2>
                        </v-card-title>
                        <v-card-text class="text-subtitle-1 black--text">{{ contact.description }}</v-card-text>
                    </v-card>
                </v-col>
                
            </v-row>

            <div class="my-15"
                justify="center"
                align="center"
            >
                <h1 class = "text-capitalize" >
                    send us a message
                </h1>
                <Divider />
            </div>

            <v-row class="grey lighten-4 color">
                <v-col>
                    <v-img src="@/assets/Gallery/gallery1.jpg" />
                </v-col>

                <v-col>
                    <v-form>
                        <v-text-field
                            solo
                            label="Enter Name"
                        ></v-text-field>
                        <v-text-field
                            solo
                            label="Enter Email"
                        ></v-text-field>
                        <v-textarea
                            solo
                            label="Enter Message"
                        ></v-textarea>

                        <v-btn
                            class="text-capitalize rounded-0 white--text font-weight-light"
                            color="primary" 
                        >send message</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4480573726487!2d76.9719331152611!3d11.004970857941775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859afbcf5eddf%3A0xbff9a46833e3bd2c!2s1045%2C%20Avinashi%20Rd%2C%20ATT%20Colony%2C%20Gopalapuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641018!5e0!3m2!1sen!2sin!4v1612870942687!5m2!1sen!2sin" frameborder="0" style="border:0;" allowfullscreen="true" max-width="100%" aria-hidden="false" tabindex="0"></iframe>
        
        <CustomerFeedback />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import CustomerFeedback from "@/components/CustomerFeedback.vue";
    import Divider from "@/components/Divider.vue";

    @Component({
        components: { Divider, CustomerFeedback },
    })

    export default class ContactUs extends Vue {
        contacts: any = [
            { 
                title: "mail us", 
                icon: "mdi-email", 
                description: "Say something to start a live chat",
                id: "support@textile.com"
            },
            { 
                title: "24/7 live chat", 
                icon: "mdi-headphones", 
                description: "We endeavour to answer all enquiries within 24 hours on business days.",
                id: "+91 912344 98763"
            },        
            {
                title: "visit us", 
                icon: "mdi-map-marker", 
                description: "1/22, Raja street, Tiruppur, Tamilnadu",
                id: " "
            }
        ];
    }
</script>

<style scoped>

</style>