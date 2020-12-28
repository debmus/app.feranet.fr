<template>
  <div class="ip">
    <v-container fluid>
      <!--       <v-row>
        <v-col cols="12" md="6" lg="4"> -->
      <v-card class="pa-6">
        <h2>
          <v-icon large class="mr-6" color="primary">public</v-icon>Votre
          Adresse IP
        </h2>

        <section class="my-6 pa-6">
          <v-card-title>
            <img
              v-bind:src="
                'https://api.feranet.fr/flags/' + infoIiGeoCountry.toLowerCase()
              "
              width="28"
              class="mr-2"
            />
            {{ infoIP }}
          </v-card-title>
          <v-btn class="mx-3 mt-6" @click="doCopy"
            ><v-icon> content_copy </v-icon>
            Copier
          </v-btn>
        </section>
      </v-card>
      <!--         </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      infoIP: "",
      infoIiGeoCountry: "",
    };
  },
  methods: {
    doCopy: function () {
      this.$copyText(this.infoIP).then(function () {});
    },
  },
  mounted() {
    axios
      .get("https://api.feranet.fr/ip")
      .then(
        (response) => (
          (this.infoIP = response.data.ip),
          (this.infoIiGeoCountry = response.data.geo.country)
        )
      );
  },
};
</script>