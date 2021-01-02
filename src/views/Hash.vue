<template>
  <div class="hash">
    <v-container fluid>
      <v-card class="pa-6">
        <h2>
          <v-icon color="primary" large class="mr-6"> code </v-icon> Hashage
          (md5 | sha1 | sha256)
        </h2>

        <v-form ref="form" v-model="valid" @submit="validate">
          <v-text-field
            v-model="name"
            :counter="200"
            :rules="nameRules"
            label="Texte"
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

        <section class="my-6" v-if="show">
          <v-card-title> md5 </v-card-title>
          <v-card-text>{{ formRespsMD5 }}</v-card-text>
          <v-divider></v-divider>
          <v-card-title> sha1 </v-card-title>
          <v-card-text>{{ formRespsSHA1 }}</v-card-text>
          <v-divider></v-divider>
          <v-card-title> sha256 </v-card-title>
          <v-card-text>{{ formRespsSHA256 }}</v-card-text>
        </section>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import md5 from "crypto-js/md5";
import sha1 from "crypto-js/sha1";
import sha256 from "crypto-js/sha256";

export default {
  data: () => ({
    valid: true,
    name: "",
    formRespsMD5: "",
    formRespsSHA1: "",
    formRespsSHA256: "",
    show: false,
    nameRules: [
      (v) => !!v || "Texte requis",
      (v) =>
        (v && v.length <= 200) ||
        "Le texte doit comporter moins de 200 caractères",
    ],
  }),

  methods: {
    validate: function (e) {
      this.$refs.form.validate();
      e.preventDefault();

      if (this.name === "") {
        return;
      } else {
        this.formRespsMD5 = md5(this.name);
        this.formRespsSHA1 = sha1(this.name);
        this.formRespsSHA256 = sha256(this.name);
        this.show = true;
      }
    },
    reset() {
      this.$refs.form.reset();
      //this.formResps.splice(this.formResp);
      this.show = false;

      this.formRespsMD5 = "";
      this.formRespsSHA1 = "";
      this.formRespsSHA256 = "";

    },
  },
};
</script>