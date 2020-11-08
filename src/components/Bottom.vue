<template>
  <div class="text-center">
    <v-bottom-navigation>
      <v-btn depressed x-large router :to="route">
        <v-icon x-large color="#2d88ed">home</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data: () => ({
    route: "/",
  }),
};
</script>