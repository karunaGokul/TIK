<template>
  <div>
    <v-row>
      
        <v-col cols="6" color = "green">
          <v-parallax
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            height="600"
          >
            <h1>Welcome To Textile</h1>
            <h2>Login to continue Access </h2>
            <p>Today we are thinking of all our members across the world and are encouraged by the support our networks bring in times such as these. Use the left test instrument details to attempt a transaction on the staging environment and login.</p>
         </v-parallax>
        </v-col>
     

        <v-col class="pt-16 px-16 mx-5">
          <h2 class="pb-7 pt-15"> Sign in </h2>
          <v-form class="">
            <v-label>Email ID</v-label>
                <v-text-field
                  outlined
                  placeholder="Enter Email ID"
                  class="py-3"
                ></v-text-field>

                 <v-label>Password</v-label>
                <v-text-field
                  outlined
                  placeholder="Enter Password"
                  class="pt-3"
                ></v-text-field>

                <v-checkbox
                  value="1"
                  label="Remember Me"
                  type="checkbox"
                  required
                  class="align-center"
                ></v-checkbox>

                <v-btn 
                  color="#ff6500" 
                  class="py-5 d-flex justify-center white--text font-weight-light text-capitalize"
                  width="30%"
                  depressed
                >Sign Up</v-btn>

                <div class="text-caption py-5">Don't have an account yet?sign up</div>
          </v-form>
        </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>