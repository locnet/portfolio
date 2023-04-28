<template>
  <v-row>
    <v-footer class="d-flex">
      <div class="py-8 bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Adrian Ion Cojocaru</strong>
      </div>
    </v-footer>
  </v-row>
</template>

<script>
//import { reactive } from "vue";

export default {
  setup() {
    const icons = [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram",
    ];
    return { icons };
  },
};
</script>
