<template>
  <div>
    <v-app-bar color="primary" app dark>
      <v-app-bar-nav-icon
        class="mr-6 hidden-sm-and-down"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <button class="goToHome">
        <v-toolbar-title @click="dohome">
          <v-img
            class="float-left mr-2"
            max-width="32"
            src="../assets/logo.svg"
          >
          </v-img
          >tools.feranet.fr
        </v-toolbar-title>
      </button>
    </v-app-bar>
    <v-navigation-drawer width="350" v-model="drawer" color="white" app>
      <Navigation />
    </v-navigation-drawer>
  </div>
</template>

<script>
import Navigation from "./Navigation";

export default {
  components: {
    Navigation,
  },
  data: () => ({
    sticky: false,
    drawer: true,
    overlay: false,
  }),
  methods: {
    dohome: function () {
      if (window.location.href.indexOf("home") > 0) {
        return;
      } else {
        this.$router.replace("home");
      }
    },
  },
};
</script>

<style>
.goToHome:hover {
  cursor: pointer;
}
</style>