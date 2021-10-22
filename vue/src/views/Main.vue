<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <div v-if="name === ''">
          Your profile
        </div>
        <div v-else>
          Welcome to Vue, {{ name }}
        </div>
        <v-spacer/>
      </v-card-title>
      <div class="pa-8">
        <v-text-field
          v-model="name"
          label="Name"
        >
        </v-text-field>
        <div>
          Output of <code>main</code>: {{ mainOut }}
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import api from "@/api/main";

export default Vue.extend({
  name: "Main",
  data: function () {
    return {
      name: "",
      mainOut: ""
    };
  },
  async mounted() {
    this.mainOut = await api.main();
  },
});
</script>
