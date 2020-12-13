<template>
  <div>
    <v-app-bar color="primary" app dark>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      
 <!--      <v-toolbar-title @click.router.push({ path: 'home' })> -->
      <v-toolbar-title>
        <v-img class="float-left mr-2" max-width="32" src="../assets/logo.svg">
        </v-img
        >tools.feranet.fr
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    sticky: false,
    route: "/home"
  }),
};
</script>