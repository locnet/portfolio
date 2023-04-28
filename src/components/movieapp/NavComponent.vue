<template>
  <v-row class="d-flex rounded-lg pa-6" justify="start">
    <v-col md="3">
      <v-btn to="/portfolio" icon color="primary" class="rounded-circle mr-6">
        <v-icon color="white">mdi-close</v-icon>
        <v-tooltip activator="parent" location="bottom">Portfolio</v-tooltip>
      </v-btn>
      <v-btn
        @click="toggleDiv('search')"
        icon
        color="secondary"
        class="rounded-circle mr-6"
        :disabled="isVisible == 'search'"
      >
        <v-icon color="white">mdi-magnify</v-icon>
        <v-tooltip activator="parent" location="bottom"
          >Busca una pelicula</v-tooltip
        >
      </v-btn>
      <v-btn
        @click="toggleDiv('filter')"
        icon
        color="amber"
        class="rounded-circle"
        :disabled="isVisible == 'filter'"
      >
        <v-icon color="white">mdi-filter</v-icon>
        <v-tooltip activator="parent" location="bottom">Filtro</v-tooltip>
      </v-btn>
    </v-col>
    <v-col cols="12" md="4" v-if="isVisible == 'search'">
      <v-text-field
        variant="outlined"
        v-model="search_term"
        clearable
        label="Busca una pelicula"
        hide-details="true"
        prepend-inner-icon="mdi-magnify"
        @keyup.enter="store.searchMovie(search_term)"
        class="bg-grey-darken-3 text-white"
      />
    </v-col>

    <v-col
      cols="12"
      md="auto"
      align-self="center"
      v-if="isVisible == 'filter'"
      class="bg-grey-darken-3-md rounded-pill text-center"
    >
      <v-btn
        v-for="(item, index) in sort_array"
        :key="item.value"
        color="pink"
        class="mx-2 my-2 my-md-0 text-body-2 rounded-xl"
        width="135"
        elevation="4"
        :disabled="active_filter == item.value"
        @click="getMovies(item.value)"
        ripple
      >
        {{ item.text }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "../../stores/movieStore";

// store
const store = useMovieStore();

// search
const search_term = ref("");

// filtro activo
const active_filter = ref("null");

// toggle div
const isVisible = ref("null");

/**
 * esconde o enseña el filtro o la busqueda
 */

const toggleDiv = (term) => {
  isVisible.value = term;
};

// busqueda de peliculas
const getMovies = (filter_by) => {
  store.fetchData(filter_by);
  active_filter.value = filter_by;
};

const sort_array = ref([
  {
    value: "popular",
    text: "Populares Ahora",
  },
  {
    value: "top_rated",
    text: "Mejor Valoradas",
  },
  {
    value: "now_playing",
    text: "En Cines Ahora",
  },
  {
    value: "upcoming",
    text: "Proximamente",
  },
]);
</script>
