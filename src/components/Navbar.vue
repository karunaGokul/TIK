<template>
  <nav>
    <v-card color="grey lighten-4" flat height="50px" tile>
      <v-toolbar height="75px">
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
            <v-list-item link to="/about" class="text-capitalize">
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/contact" class="text-capitalize">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-toolbar-title class="text-h5 mx-2">T I K</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab v-bind="attrs" v-on="on">
              <v-avatar>
                <img src="../assets/profile.png" alt="profile" />
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item link to="/login" class="text-capitalize">
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/register" class="text-capitalize">
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-card>
  </nav>
</template>

<script>
export default {};
</script>


