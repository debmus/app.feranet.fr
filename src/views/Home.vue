<template>
  <div class="home">
    <h1>
      <v-icon color="purple" large class="mr-6"> dashboard </v-icon> Listes des
      outils
    </h1>

    <v-container class="my-6">
      <v-card max-width="400">
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
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
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
        text: "Générateur de mot de passe",
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
