<template>
  <div height="100%" :style="counterAppStyle" class="pb-12">
    <div class="mt-0 ml-8 pt-8">
      <v-btn to="/portfolio" icon="mdi-close" color="primary"> </v-btn>
    </div>

    <!-- formulario para crear un usuario temporal-->
    <CreateUserComponent v-show="!store.getUserStatus" />

    <!-- div calculadora -->
    <v-row
      v-if="store.user.exists && store.getBurnedCalories == 0"
      class="d-flex px-4 px-md-8"
    >
      <v-col cols="12" md="8" offset-md="2" class="my-8">
        <v-card color="primary" class="pa-8">
          <v-card-title class="text-center text-h5"
            ><p>CALCULADORA CALORIAS QUEMADAS</p></v-card-title
          >
          <v-card-text class="text-xl">
            Escoje un deporte y la duracion del ejercitio. Nuestra IA calculara
            las calorias quemadas.
          </v-card-text>
          <v-card-item width="100% px-4">
            <UserProfileComponent />
          </v-card-item>
        </v-card>
      </v-col>

      <!-- iconos deportes -->
      <IconsComponent />
    </v-row>

    <v-row
      v-if="store.user.exists && store.getBurnedCalories == 0"
      class="d-flex px-8 mx-md-3 mt-8"
    >
      <!-- bloque duration / boton calculadora-->
      <Transition>
        <v-col
          cols="12"
          md="8"
          offset-md="2"
          v-if="store.exercise.type"
          class="pa-12 bg-primary rounded"
        >
          <div>
            <p class="text-h5 mb-4 font-weight-light text-center">
              Has hecho
              <span class="font-weight-bold">{{ store.exercise.type }}</span>
            </p>
          </div>

          <!-- range component -->
          <RangeComponent />

          <Transition>
            <div v-if="store.exercise.duration != 0" class="mt-5 text-center">
              <v-btn
                class="rounded-pill py-2 px-6 text-white text-lg my-8"
                @click="fetchData"
                type="submit"
                color="teal"
                elevation="6"
              >
                Calcula las calorias
              </v-btn>
            </div>
          </Transition>
        </v-col>
      </Transition>
    </v-row>
    <!-- componente calorias -->
    <CaloriesComponent />
  </div>
</template>

<script setup>
import { useWorkoutStore } from "@/stores/workoutStore";

// components
import CreateUserComponent from "./CreateUserComponent.vue";
import CaloriesComponent from "./CaloriesComponent.vue";
import UserProfileComponent from "./UserProfileComponent.vue";
import RangeComponent from "./RangeComponent.vue";
import IconsComponent from "./IconsComponent.vue";
//import vueSmoothScroll from "vue-smooth-scroll";

// en Vite no funciona el clasico "require"
import img from "@/assets/images/workout/portada_workout.jpeg";
// background style
const counterAppStyle = {
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

// store
const store = useWorkoutStore();

/**
 * ejecuta el metodo getTotalCalories del store
 *
 * @return Int | calorias
 */
function fetchData() {
  // solo ejecutamos si la duracion es > 0
  if (store.exercise.duration > 0) {
    // ejecutamos la funcion getTotalCalories en store
    store.getTotalCalories();
  }
}
</script>

<style local>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
