<template>
  <v-list>
    <v-list-item-group color="#2d88ed">
      <v-list-item v-for="(item, i) in items" :key="i" router :to="item.route">
        <v-list-item-icon>
          <v-icon v-text="item.icon" :color="item.color"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
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
      {
        text: "Information DNS",
        info: "Effectuer des recherches DNS (NS,MX,A, ...)",
        icon: "dns",
        color: "deep-purple",
        route: "/dns",
      },
      /*
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
        color: "cyan",
        route: "/hash",
      },
    ],
  }),
};
</script>