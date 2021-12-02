<template>
  <div>
    <v-navigation-drawer
      app
      clipped
      permanent
      expand-on-hover
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

        <v-list-item
          link
          to="/project"
          v-if="
            category === 'Company' &&
            (role === 'Quote InCharge' || role === 'MasterAdmin')
          "
        >
          <v-list-item-action>
            <v-icon class="white--text">mdi-bag-suitcase</v-icon>
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
      <!-- <div v-if="isLoggedIn">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div> -->
      <div>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
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
      <v-toolbar-title class="y-logo text-h5 mx-2"
        ><router-link
          to="/dashboard"
          tag="a"
          class="text-decoration-none black--text"
          >T I K</router-link
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>
      <div v-if="isLoggedIn">
        <v-icon medium class="mx-6">mdi-bell</v-icon>
      </div>
      <div class="d-flex align-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar v-bind="attrs" v-on="on" size="32" class="mr-4">
              <img src="../assets/face4.jpg" alt="profile" />
            </v-avatar>
          </template>
          <v-list v-if="isLoggedIn">
            <v-list-item link to="/profile" class="text-capitalize">
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/myaccount" class="text-capitalize">
              <v-list-item-title>My Account</v-list-item-title>
            </v-list-item>
            <v-list-item
              link
              to="/employee"
              class="text-capitalize"
              v-if="role === 'MasterAdmin'"
            >
              <v-list-item-title>Employee</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout" class="text-capitalize">
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
        <v-snackbar
          v-model="snackbar"
          :timeout="2000"
          color="green lighten-5 green--text"
          right
          top
        >
          <v-icon color="green">mdi-exclamation-thick </v-icon>
          {{ snackbarText }}
          <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
              <v-icon> mdi-close-box</v-icon>
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Snackbar from "./Snackbar.vue";

@Component({
  components: { Snackbar},
})
export default class AppHeader extends Vue {
  drawer: boolean = false;
  snackbar: boolean = false;
  snackbarText: string = "";

  get isLoggedIn(): boolean {
    return this.$store.getters.isLoggedIn;
  }
  get category(): string {
    return this.$store.getters.category;
  }

  get role(): string {
    return this.$store.getters.role;
  }

  public logout() {
    this.$store.dispatch("logout").then((response: any) => {
      if (response) {
        this.snackbarText = response;
        this.snackbar = true;
        this.$router.push("/");
      }
    });
  }
}
</script>
