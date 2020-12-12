<template>
  <div class="whois">
    <h1>
      <v-icon color="brown" large class="mr-6"> dns </v-icon> Information WHOIS
    </h1>

    <v-container class="my-6">
      <v-card class="pa-2">
        <v-form ref="form" v-model="valid" @submit="validate">
          <v-text-field
            v-model="name"
            :counter="100"
            :rules="nameRules"
            label="Domaine ou IP"
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

        <v-simple-table class="my-12">
          <template v-slot:default>
            <pre>{{ formResps }}</pre>
          </template>
        </v-simple-table>
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
        if (!ipRegex().test(this.name) || !isValidDomain(this.name)) {
          this.formResps = "Adresse Ip ou domaine non valide";
          console.log("Adresse Ip non valide");
        } else {
          axios
            .get("https://api.feranet.fr/whois/" + this.name)
            .then((response) => (this.formResps = response.data))
            .catch((error) => {
              console.log(error);
              this.errored = true;
            });
        }
      }
    },
    reset() {
      this.$refs.form.reset();
      this.formResps = "";
    },
  },
};
</script>