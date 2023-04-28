<template>
  <v-card class="pt-8">
    <v-card-text class="pt-4 px-8 rounded-lg">
      <label
        for="timeRange"
        class="text-weigth-regular text-body-1 text-h5-md text-center"
        >¿Duracion del ejercitio? {{ duration }} minutos</label
      >
    </v-card-text>
    <v-slider
      type="range"
      class="px-12 px-md-24"
      min="0"
      max="300"
      step="10"
      v-model="duration"
    >
    </v-slider>
  </v-card>
</template>

<script setup>
import { useWorkoutStore } from "@/stores/workoutStore";
import { ref, computed } from "vue";

const store = useWorkoutStore();
const duration = ref(0);

store.exercise["duration"] = computed(() => {
  return duration.value;
});
</script>
