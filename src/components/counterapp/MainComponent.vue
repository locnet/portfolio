<template>
  <v-row class="d-flex" align-content="start" :style="counterAppStyle">
    <v-col cols="12">
      <v-btn to="/portfolio" class="bg-primary ma-8" icon="mdi-close"> </v-btn>
    </v-col>
    <v-col cols="12" class="py-4">
      <h1 class="text-h4 text-md-h1 text-indigo text-center font-weight-bold">
        Dias hasta Navidad
      </h1>
    </v-col>
    <v-row class="justify-center pa-12 mb-12" align-content="start">
      <v-col cols="6" md="3" align-self="center" class="text-center rounded-lg">
        <v-card class="py-12 text-teal" elevation="6">
          <p class="text-h5 text-sm-h3 text-md-h2 font-weight-black">
            {{ days }}
          </p>
          <p class="text-body-2 text-sm-h5 text-md-h4 font-weight-light">
            Dias
          </p>
        </v-card>
      </v-col>

      <v-col cols="6" md="3" align-self="center" class="text-center rounded-lg">
        <v-card class="py-12 text-teal" elevation="6">
          <p class="text-h5 text-sm-h3 text-md-h2 font-weight-black">
            {{ hours }}
          </p>
          <p class="text-body-2 text-sm-h5 text-md-h4 font-weight-light">
            Horas
          </p>
        </v-card>
      </v-col>
      <v-col cols="6" md="3" align-self="center" class="text-center rounded-lg">
        <v-card class="py-12 text-teal" elevation="6"
          ><p class="text-h5 text-sm-h3 text-md-h2 font-weight-black">
            {{ minutes }}
          </p>
          <p class="text-body-2 text-sm-h5 text-md-h4 font-weight-light">
            Minutos
          </p></v-card
        >
      </v-col>
      <v-col cols="6" md="3" align-self="center" class="text-center rounded-lg">
        <v-card class="py-12 text-teal" elevation="6"
          ><p class="text-h5 text-sm-h3 text-md-h2 font-weight-black">
            {{ seconds }}
          </p>
          <p class="text-body-2 text-sm-h5 text-md-h4 font-weight-light">
            Secundos
          </p></v-card
        >
      </v-col>
    </v-row>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
// components
import PortfolioBackButton from "../ui/PortfolioBackButton.vue";

// en Vite no funciona el clasico "require"
import img from "@/assets/images/winter-landscape.webp";
// background style
const counterAppStyle = {
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

// variables reactivos
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

/**
 * calcula los secundos, minutos, horas y dias a partir de la direrencia
 * entre el momento actual y fecha Navidad
 * @args none
 * @return void
 *
 */
function counter() {
  // este instante
  const now = new Date();

  // necesitamos los digitos del año que viena, sumamos 1 al año actual
  const year = now.getFullYear() + 1;

  // fecha año nuevo
  const newYearDate = new Date(year + " 01 01 00:00").getTime();

  // hoy
  const currDate = now.getTime();

  // diferencia en segundos
  let secondsLeft = (newYearDate - currDate) / 1000;

  seconds.value = Math.floor(secondsLeft) % 60;
  minutes.value = Math.floor(secondsLeft / 60) % 60;
  hours.value = Math.floor(secondsLeft / 3600) % 24;
  days.value = Math.floor(secondsLeft / 3600 / 24);
}

// ejecuta la funcion counter cada segundo
setInterval(() => {
  counter();
}, 1000);
</script>
