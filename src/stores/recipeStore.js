import { defineStore } from "pinia";
import axios from "axios";

export const useRecipeStore = defineStore("recipeStore", {
  state: () => ({
    page_index: 0,
    current_meal_id: null,
    recipe_ingrendient: "",
    search_term: "",
    current_meal_data: {},
    result_by_id: {},
    result_by_term: {},
    result_by_ingredient: {},
    isError: null,
    favorite_meals: [],
  }),

  getters: {
    getFavoriteMeals(state) {
      return state.favorite_meals;
    },

    getMealThumb(state) {
      state.current_meal_data.strMealThumb;
    },
  },

  actions: {
    /**
     * devuelve una receta al azar
     *
     * @param void
     * @returns void
     */
    async searchRandom() {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        //console.info(response.data.meals[0]);
        this.current_meal_data = response.data.meals[0];
        // set current meal id
        this.current_meal_id = response.data.meals[0].idMeal;
      } catch (e) {
        this.isError = e.message;
      }
    },

    /**
     * busca receta por el id
     * @param {Number} id
     * @return { Object } data
     *
     */
    async searchById(id) {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
        );
        this.current_meal_data = response.data.meals[0];
        // set current meal id
        this.current_meal_id = response.data.meals[0].idMeal;
      } catch (e) {
        console.log(e);
        this.isError = e.message;
      }
    },

    /**
     * añade una comida al array favorite_meals
     *
     * @param {Number} id
     * @param {String} img
     * @param {String} name
     */
    pushMealToFav(id, img, name) {
      // no quiero duplicar entradas
      let duplicate = false;
      const l = this.favorite_meals.length;

      // compruebo si ya tengo la comida entre los favoritos
      if (l > 0) {
        for (let i = 0; i < l; i++) {
          if (this.favorite_meals[i].meal_id == id) {
            duplicate = true;
          }
        }
      }

      if (!duplicate) {
        this.favorite_meals.push({
          meal_id: id,
          meal_img: img,
          meal_name: name,
        });
      }
    },

    /**
     * bora todos los elementos del array de comida favoritas
     */
    resetFavoriteMeals() {
      this.favorite_meals = [];
    },
  },
});
