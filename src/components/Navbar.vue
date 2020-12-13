<template>
  <div>
    <v-app-bar color="primary" app dark>
      <button class="goToHome">
        <v-toolbar-title @click="$router.replace('home')">
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
  </div>
</template>

<script>
export default {
  data: () => ({
    sticky: false,
  }),
};
</script>

<style>
.goToHome:hover {
  cursor: pointer;
}
</style>