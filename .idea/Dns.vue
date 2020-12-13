<template>
  <div class="dns">
    <h1>
      <v-icon color="pink" large class="mr-6"> dns </v-icon> Recherche DNS
    </h1>

    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="msgBody"
              label="Message"
              required
            ></v-text-field>
            <v-btn @click="submit">Submit</v-btn>
          </v-col>
        </v-row>

        <v-list-item v-for="message in messages" :key="message">
          <v-list-item-content>
            <v-list-item-title v-text="message"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      messages: [],
      msgBody: "",
    };
  },
  created() {
    axios
      .get("http://localhost:3000/messages")
      .then((response) => (this.messages = response.data));
  },
  methods: {
    submit() {
      axios
        .post("http://localhost:3000/messages")
        .then((response) => (this.messages = response.data));
      console.log(this.msgBody);
    },
  },
};
</script>