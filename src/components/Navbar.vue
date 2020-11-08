<template>
  <div>
    <v-app-bar color="white" app>
      <v-app-bar-nav-icon
        class="hidden-sm-and-down"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img class="float-left mr-2" max-width="32" src="../assets/logo.svg">
        </v-img
        >app.feranet.fr<v-chip class="ml-5" color="red" label outlined
          >Beta</v-chip
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <a
            class="hidden-sm-and-down"
            href="https://github.com/debmus/app.feranet.fr"
            v-bind="attrs"
            v-on="on"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img src="../assets/github-octocat.svg" max-width="36"></v-img>
          </a>
        </template>
        <span>GitHub</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="white" app>
      <v-list>
        <v-list-item-group v-model="selectedItem" color="#2d88ed">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            router
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" :color="item.color"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    selectedItem: 1,
    items: [
      {
        text: "Listes des outils",
        icon: "dashboard",
        color: "purple",
        route: "/",
      },
      {
        text: "Test de débit",
        icon: "network_check",
        color: "orange",
        route: "/speedtest",
      },
      { text: "Votre Addresse IP", icon: "public", color: "red", route: "/ip" },
      {
        text: "Mot de passe",
        icon: "vpn_key",
        color: "green",
        route: "/password",
      },
      { text: "Recherche DNS", icon: "dns", color: "blue-grey", route: "/dns" },
      { text: "Hashage", icon: "code", color: "indigo", route: "/hash" },
    ],
  }),
};
</script>