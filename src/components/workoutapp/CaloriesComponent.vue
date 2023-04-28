<template>
  <div v-if="store.getBurnedCalories > 0" class="h-screen-md align-center">
    <v-row align-self="center" class="d-flex px-12">
      <v-col
        cols="12"
        md="6"
        offset-md="3"
        class="text-center mt-12 py-12 px-8 rounded-lg bg-primary"
      >
        <v-card class="pa-8">
          <p class="text-body-1 text-h5-md text-primary">
            Has quemado <br />
            <span class="text-h5 text-md-h2 font-weight-bold">{{
              store.getBurnedCalories
            }}</span>
            <span class="text-h6 text-h4-md ml-2">cal</span>
          </p>
          <p class="text-body-1 text-h5-md font-weight-light text-primary">
            en <b>{{ store.exercise.duration }}</b> minutos de
            <b>{{ store.exercise.type }}</b>
          </p>

          <v-btn
            elevation="6"
            class="rounded-pill bg-secondary py-2 px-6 mt-8"
            prepend-icon="mdi-refresh"
            @click="resetData()"
          >
            Otra vez
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" class="bg-primary mt-12 rounded-lg">
        <v-row class="d-flex pa-8 align-center">
          <v-col cols="12" md="5" align-self="center">
            <v-card class="py-8 px-4">
              <p
                class="text-body-1 text-h5-md"
                v-for="(data, index) in store.getSessionArray"
                v-bind:key="index"
                v-bind:style="[
                  index == 0 ? 'color:' + colorArray[0] + ';' : '',
                  index == 1 ? 'color:' + colorArray[1] + ';' : '',
                  index == 2 ? 'color:' + colorArray[2] + ';' : '',
                  index == 3 ? 'color:' + colorArray[3] + ';' : '',
                  index == 4 ? 'color:' + colorArray[4] + ';' : '',
                  index == 5 ? 'color:' + colorArray[5] + ';' : '',
                  index == 6 ? 'color:' + colorArray[6] + ';' : '',
                  index == 7 ? 'color:' + colorArray[7] + ';' : '',
                  index == 8 ? 'color:' + colorArray[8] + ';' : '',
                ]"
              >
                {{ index + 1 }}. {{ data.ex_type + ":  " + data.calories }} cal
              </p>
              <p class="text-h6 text-md-4 font-weihgt-bold text-primary">
                Total calorias: {{ store.getOnlyCalories }}
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="7">
            <DoghnutChartComponent />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useWorkoutStore } from "@/stores/workoutStore";
import { provide } from "vue";
import DoghnutChartComponent from "./DoghnutChartComponent.vue";

export default {
  components: {
    DoghnutChartComponent,
  },
  setup() {
    const store = useWorkoutStore();

    // colores para el grafico doghnut
    const colorArray = [
      "#0f9f40",
      "#d946ef",
      "#ff6384",
      "#00d8ff",
      "#757083",
      "#bd2d87",
      "#3e92cc",
      "#e2c044",
      "#2dd4bf",
    ];

    // provide - el array de colores para el doghnut
    provide("colors", colorArray);

    // reset in store
    const resetData = async () => {
      await store.resetCalories();
    };
    return {
      resetData,
      colorArray,
      store,
    };
  },
};
</script>
