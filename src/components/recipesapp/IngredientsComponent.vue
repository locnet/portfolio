<template>
  <v-col cols="12" class="pb-12">
    <v-list density="compact">
      <v-list-subheader>Ingredientes (en ingles)</v-list-subheader>
      <v-list-item
        v-for="(entry, index) in getIngrendients()"
        :key="index"
        :value="entry"
        active-color="primary"
      >
        <v-list-item-title v-text="entry"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-col>
</template>

<script setup>
import { useRecipeStore } from "@/stores/recipeStore";

const store = useRecipeStore();

/**
 * devuelve los ingredientes con las cantidades corespondientes
 * @returns {Array} - lista con los ingredientes
 */
const getIngrendients = () => {
  const data = [];
  for (let i = 1; i <= 20; i++) {
    // los ingredientes vienen como strIngredient1...
    let ingredient = "strIngredient" + i;
    // las cantidaes vienen como strMeasure1....
    let quantity = "strMeasure" + i;

    // si tenemos ingrediente lo añadimos al array
    if (store.current_meal_data[ingredient]) {
      data.push(
        store.current_meal_data[ingredient] +
          " - " +
          store.current_meal_data[quantity]
      );
    }
  }
  return data;
};
</script>
