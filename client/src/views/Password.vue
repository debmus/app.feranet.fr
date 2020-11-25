<template>
  <div class="password">
    <h1>
      <v-icon color="green" large class="mr-6"> vpn_key </v-icon> Générateur de
      mot de passe
    </h1>

    <v-container class="my-6">
      <v-card class="mx-auto">
        <v-card-title>{{ generatedPassword }}</v-card-title>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              type="button"
              @click="doCopy"
              depressed
              icon
              class="ml-2 hidden-sm-and-down float-left"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon> content_copy </v-icon>
            </v-btn>
          </template>
          <span>Copier</span>
        </v-tooltip>

        <v-slider
          min="1"
          max="100"
          v-model="passwordLength"
          class="slider"
        ></v-slider>
        <v-card-actions>
          <v-list flat>
            <v-list-item-title class="title text-center">
              {{ passwordLength }} / 100
              <v-btn
                class="my-3 success"
                block
                @click="refreshPassword = !refreshPassword"
              >
                Générer
              </v-btn>
            </v-list-item-title>

            <v-list-item v-for="(option, index) in optiondata" :key="index">
              <v-list-item-icon>
                <v-checkbox v-model="option.status"></v-checkbox>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ option.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// https://github.com/webnoobcodes/vuejs-passwordgenerator
// https://codepen.io/webnoobcodes/pen/eqLpJP
export default {
  data: () => ({
    passwordLength: 20,
    refreshPassword: false,
    optiondata: [
      {
        name: "Minuscule",
        status: true,
        chars: "abcdefghjkmnopqrstuvwxyz",
      },
      {
        name: "Majuscule",
        status: true,
        chars: "ABCDEFGHJKLMNOPQRSTUVWXYZ",
      },
      {
        name: "Nombres",
        status: true,
        chars: "0123456789",
      },
      {
        name: "Caractères spéciaux",
        status: false,
        chars: "'~!@#$%^&*-_=+[]{}();:,.>/?€|",
      },
    ],
  }),
  methods: {
    doCopy: function () {
      this.$copyText(this.generatedPassword).then(function () {});
    },
  },
  computed: {
    charset() {
      return [...this.optiondata]
        .map((element) => {
          if (element.status === true) return element.chars;
        })
        .join("");
    },
    generatedPassword() {
      this.refreshPassword;

      return [
        ...window.crypto.getRandomValues(new Uint32Array(this.passwordLength)),
      ]
        .map((value) => this.charset[value % this.charset.length])
        .join("");
    },
  },
};
</script>