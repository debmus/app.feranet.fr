<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <v-card elevation="2">
            <v-img height="250" src="../assets/home.png"></v-img>

            <v-card-title>Bienvenue sur tools.feranet</v-card-title>
            <v-card-subtitle
              >Ce site regroupe des outils Web utiles au
              quotidien</v-card-subtitle
            >
            <v-divider class="ma-4"></v-divider>

            <v-card-text
              >Les applications disponibles sur ce site
              <b><span class="orange--text">*</span></b> ne collectes ou
              n'enregistres aucunes données personnelles. Le code source du
              projet est disponible sur GitHub. L'API utilisée (api.feranet.fr)
              est aussi disponible sur GitHub.
            </v-card-text>
            <v-card-text>
              <b><span class="orange--text">*</span></b> L'application
              <b>Test de débit</b> utilise l'API d'Ookla et peut-être amené à
              collecter certaines données personnelles au cours du test, telle
              que votre adresse IP, et est susceptible de partager ces données
              avec des tiers sélectionnés. Pour obtenir plus d'informations sur
              les données collectées et sur leur partage.
              (https://www.ookla.com/privacy)
            </v-card-text>

            <v-btn class="ma-2" elevation="2" @click="goToGitSite()">
              <v-img
                class="float-left mr-2"
                max-width="28"
                src="../assets/github-octocat.svg"
              >
              </v-img
              >GitHub du site
            </v-btn>
            <v-btn class="ma-2" elevation="2" @click="goToGitAPI()">
              <v-img
                class="float-left mr-2"
                max-width="28"
                src="../assets/github-octocat.svg"
              >
              </v-img
              >GitHub de l'API
            </v-btn>
          </v-card>
        </v-col>
        <!--         <v-col cols="12" md="6" lg="6" class="hidden-md-and-up" >
          <v-card>
            <Navigation />
          </v-card>
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  methods: {
    goToGitSite: function () {
      location.href = "https://github.com/debmus/tools.feranet.fr";
    },
    goToGitAPI: function () {
      location.href = "https://github.com/debmus/api.feranet.fr";
    },
  },
};
</script>