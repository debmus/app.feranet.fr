<template>
  <v-app-bar color="primary" app dark>
    <button class="goToHome">
      <v-toolbar-title @click="dohome">
        <v-img class="float-left mr-2" max-width="32" src="../assets/logo.svg">
        </v-img
        >tools.feranet.fr
      </v-toolbar-title>
    </button>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    sticky: false,
    drawer: true,
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