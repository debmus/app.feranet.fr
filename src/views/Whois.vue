<template>
  <div class="whois">
    <v-container>
      <h1>
        <v-icon large class="mr-6" color="blue">domain</v-icon>Information WHOIS
      </h1>
      <v-card class="pa-6 my-6">
        <v-form ref="form" v-model="valid" @submit="validate">
          <v-text-field
            v-model="name"
            :counter="100"
            :rules="nameRules"
            label="Domaine ou adresse IP"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            type="submit"
            value="Submit"
          >
            Executer
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Supprimer </v-btn>
        </v-form>
      </v-card>

      <section v-if="errored">
        <v-alert type="info" border="left">
          L'adresse IP ou le domaine n'est pas valide
        </v-alert>
      </section>

      <v-card class="pa-6 my-6" v-if="formResps">
        <pre>{{ formResps }}</pre>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import ipRegex from "ip-regex";
import isValidDomain from "is-valid-domain";

export default {
  data: () => ({
    valid: true,
    name: "",
    formResps: "",
    errored: false,
    nameRules: [
      (v) => !!v || "Texte requis",
      (v) =>
        (v && v.length <= 100) ||
        "Le texte doit comporter moins de 100 caractères",
    ],
  }),

  methods: {
    validate: function (e) {
      this.$refs.form.validate();
      e.preventDefault();

      this.formResps = "";

      if (this.name === "") {
        return;
      } else {
        if (
          !ipRegex({ exact: true }).test(this.name) &&
          !isValidDomain(this.name)
        ) {
          this.errored = true;
        } else {
          axios
            .get("https://api.feranet.fr/whois/" + this.name)
            .then((response) => (this.formResps = response.data));
          this.errored = false;
        }
      }
    },
    reset() {
      this.$refs.form.reset();
      this.formResps = "";
      this.errored = false;
    },
  },
};
</script>