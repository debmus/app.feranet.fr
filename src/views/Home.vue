<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card>
            <v-list shaped>
              <v-subheader>Listes des outils</v-subheader>
              <v-list-item-group color="primary">
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
        </v-col>
        <!--         <v-col cols="12" md="6" lg="8">
          <v-card elevation="2">2</v-card>
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  data: () => ({
    drawer: true,
    overlay: false,
    items: [
      {
        text: "Test de débit",
        info:
          "Testez votre connexion Internet avec ce test de bande passante propulsé par Speedtest d'Ookla.",
        icon: "network_check",
        color: "orange",
        route: "/speedtest",
      },
      {
        text: "Addresse IP",
        info: "Afficher votre adresse IP et votre localisation.",
        icon: "public",
        color: "red",
        route: "/ip",
      },
      {
        text: "Générateur de mot de passe ",
        info:
          "Générez un mot de passe aléatoire avec plusieurs options de génération possibles.",
        icon: "vpn_key",
        color: "green",
        route: "/password",
      },
      {
        text: "Scan de port",
        info: "Scanner un port pour savoir s'il est ouvert.",
        icon: "search",
        color: "pink",
        route: "/scanport",
      },
      /* {
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
      },*/
      {
        text: "Information WHOIS",
        info:
          "Effectuer des recherches sur les bases de données des noms de domaine",
        icon: "domain",
        color: "brown",
        route: "/whois",
      },
      {
        text: "Hashage (md5 | sha1 | sha256) ",
        info: "Générez un hash (md5 | sha1 | sha256) à partir d'une entrée.",
        icon: "code",
        color: "blue",
        route: "/hash",
      },
    ],
  }),
};
</script>
