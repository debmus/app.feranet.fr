<template>
  <div class="scanport">
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="6">
          <v-card class="pa-6">
            <h2>
              <v-icon large class="mr-6" color="primary">search</v-icon>Scan de
              port
            </h2>

            <v-form ref="form" v-model="valid" @submit="validate">
              <v-row>
                <v-col cols="12" md="9">
                  <v-text-field
                    v-model="name"
                    :counter="100"
                    :rules="nameRulesNAME"
                    label="Domaine ou adresse IP"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-model="port"
                    :rules="nameRulesPORT"
                    label="Port"
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

              <v-btn color="error" class="mr-4" @click="reset">
                Supprimer
              </v-btn>
            </v-form>

            <section class="my-6" v-if="errored">
              <v-alert type="info" border="left">
                L'adresse IP, le domaine ou le port n'est pas valide
              </v-alert>
            </section>

            <!-- feranet.fr -->
            <section class="my-6" v-if="formResps">
              <v-card-title>
                <div v-if="formResps.isOpen">
                  <v-icon large color="green">check_circle</v-icon>
                  Le port {{ formResps.port }} est ouvert
                </div>

                <div v-else>
                  <v-icon large color="red">cancel</v-icon>
                  Le port {{ formResps.port }} est fermé
                </div>
              </v-card-title>
              <v-card-subtitle v-if="formResps.label !== 'unknow'">
                {{ formResps.label }}
              </v-card-subtitle>
            </section>
          </v-card>
        </v-col>
      </v-row>
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
    port: "",
    formResps: "",
    errored: false,
    nameRulesNAME: [
      (v) => !!v || "Champs requis",
      (v) =>
        (v && v.length <= 100) ||
        "Le texte doit comporter moins de 100 caractères",
    ],
    nameRulesPORT: [
      (v) => !!v || "Champs requis",
      (v) => (v && v >= 1 && v <= 65535) || "Doit être compris en : 1 et 65535",
    ],
  }),

  methods: {
    validate: function (e) {
      this.$refs.form.validate();
      e.preventDefault();

      this.formResps = "";

      if (this.name === "" && this.port === "") {
        return;
      } else {
        if (
          !ipRegex({ exact: true }).test(this.name) &&
          !isValidDomain(this.name)
        ) {
          this.errored = true;
        } else {
          axios
            .get(
              "https://api.feranet.fr/ScanPort/" + this.name + "/" + this.port
            )
            .then((response) => (this.formResps = response.data[this.port]));
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