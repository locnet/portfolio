<template>
  <v-col cols="12">
    <v-text-field
      class="py-2 px-4 text-xl text-center"
      label="Introduce una ciudad"
      variant="outlined"
      :placeholder="location"
      prepend-inner-icon="mdi-map-marker"
      @keydown.enter="fetchWeatherData"
      @click="clearSearch"
      v-model.trim="location"
    />
  </v-col>
</template>

<script type="text/javascript">
import { weatherStore } from "@/stores/weatherStore";

export default {
  data() {
    return {
      store: weatherStore(), // pinia store
      location: "Madrid",
      country: "",
    };
  },

  methods: {
    /**
     * el metodo establece la locacion y consume la api
     *
     * @params none
     * @return void
     *
     */
    fetchWeatherData() {
      if (this.location && this.location != "Ingresa algo...") {
        this.store.setLocation(this.location);

        // consumimos la api en el store
        this.store.fetchWeatherData();
      } else {
        this.location = "Ingresa algo...";
      }
    },

    clearSearch() {
      this.location = "";
    },
  },

  computed: {
    getLocation() {
      return this.location;
    },
  },

  beforeMount() {
    // presentamos al user como predeterminado la temperatura de Madrid
    this.fetchWeatherData();
  },
};
</script>
