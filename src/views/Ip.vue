<template>
  <div class="ip">
    <h1>
      <v-icon large class="mr-6" color="red">public</v-icon>Votre Adresse IP
    </h1>
    <v-container class="my-6">
      <section v-if="errored">
        <v-alert type="error" border="left">
          Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces
          informations pour le moment, veuillez essayer de revenir plus tard
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

        <v-card v-else class="mx-auto">
          <v-card-title>
            <img
              v-bind:src="
                //'https://lipis.github.io/flag-icon-css/flags/4x3/' +
                'https://tools.feranet.fr/flags/' +
                //'http://192.168.20.66:8080/flags/' +
                info_ip.geo.country.toLowerCase() +
                '.svg'
              "
              width="28"
              class="mr-2"
            />
            {{ info_ip.ip }}
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  type="button"
                  @click="doCopy"
                  depressed
                  icon
                  class="ml-2 hidden-sm-and-down"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> content_copy </v-icon></v-btn
                >
              </template>
              <span>Copier</span>
            </v-tooltip>
          </v-card-title>
        </v-card>
      </section>
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
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
  data() {
    return {
      loading: true,
      errored: false,
      info_ip: null,
    };
  },
  methods: {
    doCopy: function () {
      this.$copyText(this.info_ip.ip).then(function () {
       });
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