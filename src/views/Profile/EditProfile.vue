<template>
    <div>
        <v-dialog 
            max-width="1200px"
            v-modal="dialog" 
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="white--text font-weight-regular text-capitalize"
                    color="#fd7e14"
                    v-bind="attrs"
                    v-on="on"
                >Edit Profile</v-btn>
            </template>
            <v-card>
                <v-row class="my-4 px-4">
                    <v-card-title>
                        Profile
                    </v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn 
                        @click="closeDialog" 
                        icon>
                        <v-icon id="close-button">mdi-close</v-icon>
                    </v-btn>
                </v-row>

                <v-divider></v-divider>
                <v-row class="mx-4">
                    <v-card-title class="blue--text">
                        Profile
                    </v-card-title>
                </v-row>
                <v-row class="mx-4">
                    <v-col class="col-3">
                        hello
                    </v-col>
                    <v-col>
                        <v-form>
                            <v-text-field
                                dense
                                outlined
                                placeholder="Global TEX"
                            ></v-text-field>

                            <v-text-field
                                dense
                                outlined
                                placeholder="Hi"
                            ></v-text-field>

                            <v-text-field
                                dense
                                outlined
                                placeholder="Hi"
                            ></v-text-field>

                            <v-text-field
                                dense
                                outlined
                                placeholder="address"
                            ></v-text-field>

                            <v-text-field
                                dense
                                outlined
                                placeholder="email"
                            ></v-text-field>

                            <v-text-field
                                dense
                                outlined
                                placeholder="contact number 1"
                            ></v-text-field>

                            <v-text-field
                                dense
                                outlined
                                placeholder="contact number 2"
                            ></v-text-field>
                        </v-form>
                    </v-col>
                    <v-col class="col-4">
                        world
                    </v-col>
                </v-row>

                <v-row class="mx-4 pb-2">
                    <v-btn
                        dark
                        class="text-capitalize red color font-weight-regular"
                    >save</v-btn>
                </v-row>

            </v-card>

        </v-dialog>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        
})
  

    export default class EditProfile extends Vue {
        dialog: boolean;

        closeDialog() {
                this.$emit("update:dialog", false);
            }        
    }
</script>

<style scoped>

</style>