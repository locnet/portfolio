<template>
  <div class="justify-center bg-amber-lighten-3 rounded-lg pb-4">
    <FavoritMealsComponent />

    <div class="rounded-lg pa-6 pa-md-0">
      <ShowMealComponent />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import { useRecipeStore } from "@/stores/recipeStore";
import ErrorComponent from "./ErrorComponent.vue";
import LoadingComponent from "./LoadingComponent.vue";
import FavoritMealsComponent from "./FavoritMealsComponent.vue";

const store = useRecipeStore();
// get first random meal
store.searchRandom();

// componente asincrono
const ShowMealComponent = defineAsyncComponent({
  // the loader function
  loader: () => import("./ShowMealComponent.vue"),

  // A component to use while the async component is loading
  loadingComponent: LoadingComponent,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,

  // A component to use if the load fails
  errorComponent: ErrorComponent,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
});
</script>
