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
            <v-list-item v-for="(item, index) in items" :key="index" link>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
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
            <v-list-item v-for="(item, index) in loginItems" :key="index" link>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-card>
  </nav>
</template>

<script>
export default {
  data: () => ({
    items: [{ title: "Home" }, { title: "About" }, { title: "Contact" }],
    loginItems: [{ title: "Login" }, { title: "Register" }],
  }),
};
</script>


