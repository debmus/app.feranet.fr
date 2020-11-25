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
          <v-card-title
            >{{ info_ip }}
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

          <v-divider class="mx-4"></v-divider>
<!--           <v-card-title>
            <img
              v-bind:src="
                'https://lipis.github.io/flag-icon-css/flags/4x3/' +
                info_ip.location.country.toLowerCase() +
                '.svg'
              "
              width="36"
              class="mr-2"
            />
            ({{ info_ip.location.country }}) - {{ info_ip.location.region }}
          </v-card-title>

          <v-card-text>
            {{ info_ip.isp }}
          </v-card-text> -->
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
      this.$copyText(this.info_ip).then(function () {
        //console.log(e);
      });
    },
  },
  mounted() {
    axios
      .get(
        "http://localhost:3000/ip"
      )
      .then((response) => (this.info_ip = response.data))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  /*     axios
      .get(
        "https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_V9k8oFMeDgs5jBuBpu3WiqBLLgyDZ"
      )
      .then((response) => (this.info_ip = response.data))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }, */
};
</script>