<template>
  <div>
    <v-app-bar color="white" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img class="float-left mr-2" max-width="32" src="../assets/logo.svg">
        </v-img
        >app.feranet.fr</v-toolbar-title
      >
      <v-spacer></v-spacer>
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
    drawer: true,
    selectedItem: 1,
    items: [
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
      { text: "Hashage", icon: "code", color: "blue", route: "/hash" },
      {
        text: "Recherche DNS ☹",
        icon: "dns",
        color: "pink",
        route: "/dns",
      },
      {
        text: "Vérification email ☹",
        icon: "mark_email_read",
        color: "teal",
        route: "/email",
      },
      {
        text: "Reconnaissance caractères ☹",
        icon: "image_search",
        color: "deep-purple",
        route: "/ocr",
      },
      {
        text: "Information WHOIS ☹",
        icon: "domain",
        color: "brown",
        route: "/whois",
      },
    ],
  }),
};
</script>