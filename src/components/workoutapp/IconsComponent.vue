<template>
  <v-row class="d-flex px-6 px-md-8" v-if="!store.exercise.type">
    <v-col cols="12" md="8" offset-md="2" class="bg-primary rounded mt-8 pt-8">
      <p class="text-center text-h5 text-md-4 text-white font-weight-light">
        Escoge un deporte
      </p>

      <v-row class="d-flex pa-8 px-md-8">
        <v-col
          cols="4"
          sm="2"
          md="2"
          v-for="item in items"
          :key="item.description"
        >
          <IconCardComponent @click="setExerType(item.description)">
            <template v-slot:icon>
              <font-awesome-icon
                :icon="item.icon"
                size="lg"
              ></font-awesome-icon>
            </template>
            <template v-slot:description>{{ item.description }}</template>
          </IconCardComponent>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { useWorkoutStore } from "@/stores/workoutStore";

// components
import IconCardComponent from "./IconCardComponent.vue";

// font awesome
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faPersonBiking,
  faPersonWalking,
  faPersonRunning,
  faHeartPulse,
  faPersonSwimming,
  faBaseball,
  faYinYang,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faPersonBiking,
  faPersonWalking,
  faPersonRunning,
  faHeartPulse,
  faPersonSwimming,
  faBaseball,
  faYinYang,
  faFutbol
);

const store = useWorkoutStore();

/**
 * actualiza el tipo de ejercitio
 * @param { String } e
 * @return void
 */
function setExerType(e) {
  store.exercise.type = e;
}

const items = [
  {
    icon: "fa-solid fa-person-walking",
    description: "Andar",
  },
  {
    icon: "fa-solid fa-person-running",
    description: "Correr",
  },
  {
    icon: "fa-solid fa-person-biking",
    description: "Bicicleta",
  },
  {
    icon: "fa-solid fa-heart-pulse",
    description: "Crossfit",
  },
  {
    icon: "fa-solid fa-person-swimming",
    description: "Nadar",
  },
  {
    icon: "fa-solid fa-baseball",
    description: "Tenis",
  },
  {
    icon: "fa-solid fa-yin-yang",
    description: "Yoga",
  },
  { icon: "fa-solid fa-person-biking", description: "Spinning" },
  { icon: "fa-solid fa-futbol", description: "Futbol" },
];
</script>
