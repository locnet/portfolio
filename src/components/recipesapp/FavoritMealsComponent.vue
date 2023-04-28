<template v-if="store.favorite_meals.lenght > 0">
  <v-row class="d-flex align-center pa-4">
    <v-col cols="4">
      <v-btn
        to="/portfolio"
        class="rounded-full"
        icon="mdi-close"
        color="primary"
      ></v-btn>
    </v-col>
    <v-spacer></v-spacer>
    <v-col
      cols="8"
      v-if="store.getFavoriteMeals.length > 0"
      class="d-flex justify-end"
    >
      <v-btn
        class="rounded-pill"
        color="pink"
        @click="resetFav"
        icon-prepend="mdi-refresh"
        >Reinicia Favoritos</v-btn
      >
    </v-col>
  </v-row>
  <v-row class="pa-4">
    <v-col
      cols="2"
      md="1"
      v-for="(meal, index) in getFavoriteMeals"
      :key="index"
      class="d-flex child-flex"
    >
      <div elevation="6" class="h-100 w-100">
        <v-img
          :src="meal.meal_img"
          ratio="1"
          elevation="6"
          class="bg-pink rounded-circle"
          @click="showMealDetails(meal.meal_id)"
        />
        <v-tooltip activator="parent" location="bottom" class="gb-pink">{{
          meal.meal_name
        }}</v-tooltip>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { useRecipeStore } from "@/stores/recipeStore";
import { computed } from "vue";

const store = useRecipeStore();

const getFavoriteMeals = computed(() => {
  return store.getFavoriteMeals;
});

/**
 * obtiene los detalles de una comida por su id llamando el metodo
 * searchById del store
 *
 * @param {Integer} id
 */
const showMealDetails = (id) => {
  // solo quiero ejecutar si se ha hecho click en una comida diferente a la actual
  if (store.current_meal_id != id) {
    store.searchById(id);
  }
};

/**
 * resetea el array de las comidas favoritas
 */
const resetFav = () => {
  store.resetFavoriteMeals();
};
</script>
