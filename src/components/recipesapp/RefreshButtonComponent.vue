<template>
  <v-btn
    @click="getRecipes"
    class="rounded-full bg-teal-darken-4"
    icon
    elevation="6"
  >
    <v-icon color="white">mdi-refresh</v-icon>
    <v-tooltip activator="parent" location="bottom">Siguiente comida</v-tooltip>
  </v-btn>
</template>

<script setup>
import { useRecipeStore } from "@/stores/recipeStore";

const store = useRecipeStore();

// con la respuesta populamos  en  store la variable result_random
const getRecipes = () => {
  store.searchRandom();
};
</script>
