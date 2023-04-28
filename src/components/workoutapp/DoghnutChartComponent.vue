<template>
  <Doughnut
    :data="chartData"
    :id="chartId"
    :width="width"
    :height="height"
    :options="chartOptions"
  />
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import { inject } from "vue";
import { useWorkoutStore } from "@/stores/workoutStore";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const props = defineProps({
  chartId: {
    type: String,
    default: "doughnut-chart",
  },
  datasetIdKey: {
    type: String,
    default: "label",
  },
  width: {
    type: Number,
    default: 400,
  },
  height: {
    type: Number,
    default: 400,
  },
});

// inject,
const colors = inject("colors");

const store = useWorkoutStore();

/**
 * extrae y devuelve solo las calorias del array "sessions", en store
 *
 * @return array
 *
 */
const extractSessionData = () => {
  // array con las calorias gastadas
  let cArray = [];

  store.getSessionArray.forEach(function (item) {
    cArray.push(item.calories);
  });

  return cArray;
};
const chartData = {
  labels: [],

  datasets: [
    {
      backgroundColor: colors,
      data: extractSessionData(),
    },
  ],
};
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  backgroundColor: "#aaffaa",
  borderWidth: 1,
  cutout: "60%",
  borderRadius: 0,
};
</script>
