<template>
  <div :style="setBg(store.getBackgroundImgName)">
    <v-row class="d-flex justify-center align-start">
      <v-col cols="12" class="pt-8 pl-8">
        <v-btn to="/portfolio" icon="mdi-close" color="primary"> </v-btn>
      </v-col>

      <v-col
        cols="10"
        md="4"
        class="mb-12 pa-8 pa-16-md bg-teal-darken-3 rounded-xl"
        style="opacity: 0.92"
      >
        <select-location></select-location>
        <show-weather></show-weather>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { weatherStore } from "@/stores/weatherStore";
import SelectLocation from "./SelectLocation.vue";
import ShowWeather from "./ShowWeather.vue";

export default {
  name: "App",

  components: {
    SelectLocation,
    ShowWeather,
  },

  data() {
    return {
      store: weatherStore(),
    };
  },

  /**
   * establece el fondo en la pagina principal
   * @param String - nombre imagen
   * @return Object - estilo para el fondo
   *
   */
  methods: {
    setBg(img) {
      // el clasico "require" no funciona con Vite
      const getImageUrl = (name) => {
        return new URL(
          `../../assets/images/weatherapp/${name}`,
          import.meta.url
        ).href;
      };

      let bgImage = getImageUrl(img);

      return {
        backgroundImage: `url('${bgImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      };
    },
  },
};
</script>

<style scoped>
[v-cloack] {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
