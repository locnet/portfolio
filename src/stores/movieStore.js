import { defineStore } from "pinia";
import axios from "axios";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    // tmdb - datos de acceso
    apiKey: import.meta.env.VITE_TMDB_API_KEY,
    userId: import.meta.env.VITE_TMDB_USER,
    api_endpoint: "https://api.themoviedb.org/3/",
    movie_image_url: "https://image.tmdb.org/t/p/w500/",
    data: null,
  }),
  // metodos store
  actions: {
    /**
     *
     * @param {String} action
     */
    async fetchData(sorted_by = "popular") {
      const url = this.api_endpoint + "movie/" + sorted_by;
      await axios
        .get(url, {
          params: {
            api_key: this.apiKey,
            language: "es-ES",
          },
        })
        .then((response) => {
          this.data = response.data.results;
          console.info(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /**
     * busca una pelicula por el nombre
     * @param { String } search_term
     */
    async searchMovie(search_term) {
      const url = this.api_endpoint + "search/movie";

      await axios
        .get(url, {
          params: {
            api_key: this.apiKey,
            language: "es-ES",
            query: search_term,
            include_adult: false,
          },
        })
        .then((response) => {
          this.data = response.data.results;
          console.info(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
