<template>
  <div class="bg-blue-lighten-1 text-center rounded pa-4">
    <p class="text-font-bold">
      Tu perfil: {{ store.user.gender }} / edad {{ store.user.age }} / peso
      {{ store.user.weight }} kg / altura {{ store.user.height }} cm
    </p>
    <v-btn
      prepend-icon="mdi-undo"
      color="blue-grey-darken-2"
      @click.prevent="resetProfile"
      variant="flat"
      class="mt-4"
    >
      Cambiar prefil
    </v-btn>
  </div>
</template>

<script setup>
import { useWorkoutStore } from "@/stores/workoutStore";

const store = useWorkoutStore();

function resetProfile() {
  store.$reset();
}
</script>
