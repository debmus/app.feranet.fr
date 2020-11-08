<template>
  <v-app>
    <Navbar />

    <v-main class="ma-6">
      <router-view></router-view>
    </v-main>

    <Bottom class="hidden-md-and-up"/>
    <Footer class="hidden-sm-and-down" />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Bottom,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
