<template>
  <v-app>
    <Navbar />

    <v-main class="ma-6">
      <router-view></router-view>
    </v-main>

    <Footer class="hidden-sm-and-down" />
    <Mobile class="hidden-md-and-up" />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mobile from "./components/Mobile";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Mobile,
  },
  data: () => ({
    //
  }),
};
</script>
