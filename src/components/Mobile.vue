<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      <v-bottom-sheet v-model="sheet" hide-overlay>
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-btn color="purple" dark v-bind="attrs" v-on="on"> apps </v-btn> -->
          <v-icon x-large color="primary" v-bind="attrs" v-on="on">apps</v-icon>
        </template>
        <div @click="sheet = false">
          <Navigation />
        </div>
      </v-bottom-sheet>
    </v-col>
  </v-footer>
</template>

<script>
import Navigation from "./Navigation";

export default {
  components: {
    Navigation,
  },
  data: () => ({
    sheet: false,
  }),
};
</script>