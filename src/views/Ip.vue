<template>
  <div class="ip">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card class="pa-6">
            <h2>
              <v-icon large class="mr-6" color="primary">public</v-icon>Votre
              Adresse IP
            </h2>

            <section v-if="errored">
              <v-alert type="error" border="left">
                Nous sommes désolés, nous ne sommes pas en mesure de récupérer
                ces informations pour le moment, veuillez essayer de revenir
                plus tard
              </v-alert>
            </section>

            <section v-else>
              <div v-if="loading">
                <v-progress-linear
                  color="#2d88ed"
                  indeterminate
                  rounded
                  height="6"
                ></v-progress-linear>
              </div>

              <section class="my-6 pa-6" v-else>
                <v-card-title>
                  <img
                    v-bind:src="
                      'https://api.feranet.fr/flags/' +
                      info_ip.geo.country.toLowerCase()
                    "
                    width="28"
                    class="mr-2"
                  />
                  {{ info_ip.ip }}
                </v-card-title>
                <v-btn class="mx-3 mt-6 hidden-sm-and-down" @click="doCopy"
                  ><v-icon> content_copy </v-icon>
                  Copier
                </v-btn>
              </section>
            </section>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  /*   filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  }, */
  data() {
    return {
      loading: true,
      errored: false,
      info_ip: null,
    };
  },
  methods: {
    doCopy: function () {
      this.$copyText(this.info_ip.ip).then(function () {});
    },
  },
  mounted() {
    axios
      .get("https://api.feranet.fr/ip")
      .then((response) => (this.info_ip = response.data))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>