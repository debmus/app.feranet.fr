<template>
  <div class="dns">
    <v-container fluid>
      <v-card class="pa-6">
        <h2>
          <v-icon large class="mr-6" color="primary">dns</v-icon>Information DNS
        </h2>

        <v-form ref="form" v-model="valid" @submit="validate">
          <v-row>
            <v-col cols="12" md="3">
              <v-select
                :items="items"
                :rules="nameRulesCHAMPS"
                v-model="champs"
                label="Champs"
                required
                @click="clear"
              ></v-select>
            </v-col>
            <v-col cols="12" md="9">
              <v-text-field
                v-model="name"
                :counter="100"
                :rules="nameRulesNAME"
                label="Domaine"
                required
              ></v-text-field>
            </v-col>
          </v-row>

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

        <section class="my-6" v-if="errored">
          <v-alert type="info" border="left">
            Le domaine n'est pas valide
          </v-alert>
        </section>

        <section class="my-6" v-if="formResps">
          <v-card-title>
            Résultat de {{ champs }} sur {{ name }}

            <v-list-item v-for="(i, index) in formResps" :key="index">
              <v-list-item-title v-if="champs === 'MX'">{{
                formResps[index].exchange
              }}</v-list-item-title>
              <v-list-item-title v-else>{{
                formResps[index]
              }}</v-list-item-title>
            </v-list-item>
          </v-card-title>
        </section>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import isValidDomain from "is-valid-domain";

export default {
  data: () => ({
    valid: "",
    name: "",
    champs: "",
    formResps: "",
    errored: false,
    items: ["MX", "NS", "A", "AAAA"],
    nameRulesNAME: [
      (v) => !!v || "Champ requis",
      (v) =>
        (v && v.length <= 100) ||
        "Le texte doit comporter moins de 100 caractères",
    ],
    nameRulesCHAMPS: [(v) => !!v || "Champ requis"],
  }),

  methods: {
    validate: function (e) {
      this.$refs.form.validate();
      e.preventDefault();

      this.formResps = "";

      if (this.name === "" && this.champs === "") {
        return;
      } else {
        if (!isValidDomain(this.name)) {
          this.errored = true;
        } else {
          axios
            .get("https://api.feranet.fr/dns/" + this.name + "/" + this.champs)
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
    clear() {
      this.formResps = "";
    },
  },
};
</script>