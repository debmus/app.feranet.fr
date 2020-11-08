<template>
  <div class="speedtest">
    <h1>
      <v-icon large class="mr-6" color="orange">network_check</v-icon>Test de
      débit
    </h1>

    <v-container class="my-6">
      <div v-if="!iframe.loaded">
        <v-progress-linear
          color="#2d88ed"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </div>

      <iframe
        :src="iframe.src"
        ref="frame"
        @load="load"
        width="100%"
        height="650px"
        frameborder="0"
      ></iframe>
    </v-container>
  </div>
  <!-- v-show="iframe.loaded" -->
</template>

<script>
export default {
  data() {
    return {
      iframe: {
        src: "https://feranet.speedtestcustom.com",
        loaded: false,
      },
    };
  },
  methods: {
    load: function () {
      this.iframe.loaded = true;
    },
  },
};
</script>

