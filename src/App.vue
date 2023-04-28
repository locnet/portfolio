<template>
  <v-app>
    <NavComponent />
    <v-main>
      <router-view />
    </v-main>
    <FooterView />
  </v-app>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import FooterView from "./views/FooterView.vue";
export default {
  name: "App",
  components: {
    NavComponent,
    FooterView,
  },
};
</script>
