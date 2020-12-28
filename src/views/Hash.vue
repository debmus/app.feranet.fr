<template>
  <div class="hash">
    <v-container fluid>
      <!--       <v-row>
        <v-col cols="12" lg="6"> -->
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
          <v-list-item v-for="formResp in formResps" :key="formResp">
            <v-list-item-content>
              <v-list-item-title>{{ formResp }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </section>
      </v-card>
      <!--         </v-col>
      </v-row> -->
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
    formResps: [],
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

      this.formResps = [];

      if (this.name === "") {
        return;
      } else {
        this.formResps.push("[md5] → " + md5(this.name));
        this.formResps.push("[sha1] → " + sha1(this.name));
        this.formResps.push("[sha256] → " + sha256(this.name));
        this.show = true;
      }
    },
    reset() {
      this.$refs.form.reset();
      this.formResps.splice(this.formResp);
      this.show = false;
    },
  },
};
</script>