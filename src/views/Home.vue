<template>
  <div class="home">
<!--     <v-container class="my-6"> -->
      <v-row class="ma-6">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="mx-auto"
                width="400"
                min-height="300"
                router
                :to="item.route"
              >
                <!-- <div :color="item.color" flat align="center"> -->
                <div align="center" v-bind:style="{ background: item.color }">
                  <v-icon v-text="item.icon" size="100px" dark></v-icon>
                </div>

                <v-card-text>
                  <h2 class="title primary--text" v-text="item.text"></h2>
                  <span v-text="item.info">
                    Travel to the best outdoor experience on planet Earth. A
                    vacation you will never forget!</span
                  >
                </v-card-text>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="grey">
                    <v-btn>Lancer</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
<!--     </v-container> -->
  </div>
</template>


<script>
export default {
  data: () => ({
    drawer: true,
    overlay: false,
    selectedItem: 1,
    items: [
      {
        text: "Test de débit",
        info: "Testez votre connexion Internet avec ce test de bande passante propulsé par Speedtest d'Ookla.",
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
        text: "Mot de passe",
        info: "Générez un mot de passe aléatoire avec plusieurs options de génération possibles.",
        icon: "vpn_key",
        color: "green",
        route: "/password",
      },
      {
        text: "Hashage",
        info:
          "Générez un hash (md5 | sha1 | sha256 | sha512) à partir d'une entrée.",
        icon: "code",
        color: "blue",
        route: "/hash",
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
        text: "WHOIS",
        info:
          "Effectuer des recherches sur les bases de données des noms de domaine",
        icon: "domain",
        color: "brown",
        route: "/whois",
      },
    ],
  }),
};
</script>
