<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      class="y-nav-drawer"
      color="teal"
      v-if="isLoggedIn"
    >
      <v-list class="mt-10 white--text">
        <v-list-item link to="/dashboard">
          <v-list-item-action>
            <v-icon class="white--text">mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/newproject">
          <v-list-item-action>
            <v-icon class="white--text">mdi-av-timer</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text"
              >New Project</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left class="y-app-header">
      <div v-if="isLoggedIn">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
      <div v-else>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab v-bind="attrs" v-on="on">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item link to="/" class="text-capitalize">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/aboutUs" class="text-capitalize">
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/contact" class="text-capitalize">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-toolbar-title class="y-logo text-h5 mx-2">T I K</v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-if="isLoggedIn">
        <v-icon large class="mx-4">mdi-bell</v-icon>
      </div>
      <div class="d-flex align-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab v-bind="attrs" v-on="on">
              <v-avatar>
                <img src="../assets/profile.png" alt="profile" />
              </v-avatar>
            </v-btn>
          </template>
          <v-list v-if="isLoggedIn">
            <v-list-item link to="/profile" class="text-capitalize">
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/myaccount" class="text-capitalize">
              <v-list-item-title>My Account</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/employee" class="text-capitalize">
              <v-list-item-title>Employee</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/logout" class="text-capitalize">
              <v-list-item-title>Log Out</v-list-item-title>
            </v-list-item>
          </v-list>
          <v-list v-else>
            <v-list-item link to="/login" class="text-capitalize">
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/registration" class="text-capitalize">
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppHeader extends Vue {
  drawer: any = false;
  isLoggedIn: any = false;
  mounted() {
  window.setInterval(() => {
    this.getisLoggedIn()
  }, 1000)
}
getisLoggedIn()
{
   this.isLoggedIn= this.$store.getters.isLoggedIn;
  }
}
</script>


  
  