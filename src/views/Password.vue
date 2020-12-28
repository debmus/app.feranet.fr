<template>
  <div class="password">
    <v-container fluid>
<!--       <v-row>
        <v-col cols="12" lg="8"> -->
          <v-card class="pa-6">
            <h2>
              <v-icon color="primary" large class="mr-6"> vpn_key </v-icon>
              Générateur de mot de passe
            </h2>

            <!-- v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  type="button"
                  @click="doCopy"
                  depressed
                  class="ml-2 hidden-sm-and-down"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> content_copy </v-icon>Copier
                </v-btn>
              </template>
              <span>Copier</span>
            </v-tooltip> -->

            <v-card-title>{{ generatedPassword }}</v-card-title>

            <br />

            <v-slider
              min="1"
              max="100"
              v-model="passwordLength"
              class="slider"
              thumb-label="always"
            ></v-slider>

            <!-- <v-card-sub-title>{{ passwordLength }} / 100</v-card-sub-title> -->

            <v-btn
              class="my-3 ml-2 success"
              @click="refreshPassword = !refreshPassword"
            >
              Générer
            </v-btn>

            <v-btn class="my-3 ml-2 hidden-sm-and-down" @click="doCopy"
              ><v-icon> content_copy </v-icon>
              Copier
            </v-btn>
          </v-card>
<!--         </v-col>
      </v-row> -->
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <v-card class="pa-6">
            <!-- <v-card-actions> -->
            <v-list flat>
              <v-list-item-title class="title text-center">
                Liste des options
              </v-list-item-title>

              <v-list-item v-for="(option, index) in optiondata" :key="index">
                <v-checkbox v-model="option.status"></v-checkbox>
                <v-list-item-title>{{ option.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <!-- </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>
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