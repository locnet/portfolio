<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        class="d-lg-none"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </template>
    <v-toolbar-title
      class="text-body-2 text-sm-h5 text-center font-weight-light"
      >FULL STACK DEVELOPER</v-toolbar-title
    >
    <v-avatar class="mr-4" to="/">
      <v-img src="/adrian_ion_cojocaru.png" alt="Adrian Ion Cojocaru"></v-img>
    </v-avatar>

    <template v-slot:append>
      <v-btn
        icon="mdi-theme-light-dark"
        class="mr-2"
        @click.stop="toggleTheme"
      ></v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer class="pt-4 temporary" v-model="drawer">
    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        to="/"
        prepend-icon="mdi-account"
        title="Sobre mi"
        value="about"
      ></v-list-item>

      <v-list-item
        to="/portfolio"
        prepend-icon="mdi-pencil-ruler"
        title="Portfolio"
        value="home"
      ></v-list-item>

      <v-list-item
        to="/timeline"
        prepend-icon="mdi-timeline-minus"
        title="Mi historia"
        value="test"
      ></v-list-item>

      <v-list-item
        to="/contact"
        prepend-icon="mdi-card-account-phone"
        title="Contratame"
        value="contratame"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { ref } from "vue";
import { useTheme } from "vuetify";
export default {
  setup() {
    const drawer = ref(null);
    // theme control
    const theme = useTheme();

    return {
      drawer,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
};
</script>
