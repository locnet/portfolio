<template>
  <v-sheet min-height="650" :style="counterAppStyle">
    <v-row class="pa-2 pa-md-12" align-content="start">
      <v-col cols="12" md="7" class="py-4 rounded-xl pa-8 pa-sm-8">
        <v-row class="d-flex bg-white rounded-lg rounded-pill-md mt-2">
          <v-col cols="12" sm="5" class="text-center text-sm-left">
            <RefreshButtonComponent />
            <v-btn
              class="rounded-full bg-pink-accent-3 ml-4"
              @click="addFavorite"
              elevation="6"
              icon
            >
              <v-icon color="white">mdi-heart</v-icon>
              <v-tooltip activator="parent" location="bottom"
                >Añade a favoritos</v-tooltip
              >
            </v-btn>
            <v-btn
              class="rounded-full bg-amber-darken-4 ml-4"
              @click="toggleTextDiv"
              elevation="6"
              icon
            >
              <v-icon color="white">mdi-format-list-bulleted-square</v-icon>
              <v-tooltip activator="parent" location="bottom"
                >Ver receta e ingredientes</v-tooltip
              >
            </v-btn>
          </v-col>
          <v-col cols="12" sm="7">
            <h1
              class="text-h6 mt-n3 mt-sm-1 text-center text-pink font-weight-light"
              style="line-height: 1em"
            >
              {{ store.current_meal_data.strMeal }} <br />
              <span class="text-body-2 text-grey-darken-4">
                Categoria: {{ store.current_meal_data.strCategory }} / Area:
                {{ store.current_meal_data.strArea }}
              </span>
            </h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="textDivIsVisible" cols="12" md="7" class="pa-8">
        <v-row class="d-flex fill-height bg-white rounded-lg pa-12">
          <v-col cols="12">
            <v-btn
              elevation="6"
              prepend-icon="mdi-magnify"
              class="rounded-lg text-white px-4 py-2"
              :class="{ 'bg-teal': isVisible, 'bg-amber': !isVisible }"
              @click="isVisible = !isVisible"
            >
              <span v-if="isVisible">VER LOS INGREDIENTES</span>
              <span v-if="!isVisible">VER LA RECETA</span>
            </v-btn>
          </v-col>
          <Transition>
            <div v-if="isVisible">
              <p class="text-h5 text-teal font-bold">Receta (en ingles)</p>
              <p class="mt-5 text-lg font-serif">
                {{ store.current_meal_data.strInstructions }}
              </p>
            </div>
          </Transition>
          <Transition>
            <div v-if="!isVisible">
              <IngredientsComponent />
            </div>
          </Transition>
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
import { useRecipeStore } from "@/stores/recipeStore";
import RefreshButtonComponent from "./RefreshButtonComponent.vue";
import IngredientsComponent from "./IngredientsComponent.vue";
import { ref, computed } from "vue";

const store = useRecipeStore();
const isVisible = ref(false);

// metodo computed para cambiar el backgroud del div con la imagen de la comida
const counterAppStyle = computed(() => {
  return {
    backgroundImage: `url(${store.current_meal_data.strMealThumb})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
});

const addFavorite = () => {
  let id = store.current_meal_data.idMeal;
  let img = store.current_meal_data.strMealThumb;
  let name = store.current_meal_data.strMeal;

  if ((id, img, name)) {
    store.pushMealToFav(id, img, name);
    // esconder el div de la receta
    textDivIsVisible.value = false;
  }
};

/**
 * show / hide text div
 */
const textDivIsVisible = ref(false);
const toggleTextDiv = () => {
  textDivIsVisible.value = !textDivIsVisible.value;
};
</script>

<style scope>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
