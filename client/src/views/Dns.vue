<template>
  <div class="dns">
    <h1>
      <v-icon color="pink" large class="mr-6"> dns </v-icon> Recherche DNS
    </h1>

    <v-container class="my-6">
      <v-card class="pa-2">
<!--         <v-form ref="form" v-model="valid" @submit="validate">
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
        </v-form> -->

        <v-simple-table class="my-12">
          <template v-slot:default>
            <tbody>
              <tr v-for="formResp in formResps" :key="formResp">
                <td>{{ formResp.dnsRecords }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      formResps: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://www.whoisxmlapi.com/whoisserver/DNSService?apiKey=at_V9k8oFMeDgs5jBuBpu3WiqBLLgyDZ&type=A,MX,NS&outputFormat=json&domainName=bensimon.fr"
      )
      .then((response) => (this.formResps = response.data))
      .catch((error) => {
        console.log(error);
        //this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>