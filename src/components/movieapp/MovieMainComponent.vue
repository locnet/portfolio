<template>
  <div class="bg-grey-darken-4">
    <NavComponent />
    <v-row class="px-2">
      <v-col
        cols="12"
        sm="6"
        md="3"
        v-for="movie in store.data"
        v-bind:key="movie.id"
        class="relative bg-grey-darken-3"
      >
        <div>
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="mx-auto"
              color="grey-darken-3"
              max-width="600"
              v-bind="props"
            >
              <v-img
                :aspect-ratio="1 / 1"
                cover
                :src="store.movie_image_url + movie.poster_path"
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-grey-darken-2 v-card--reveal text-body-1 pa-4"
                    style="height: 100%"
                  >
                    {{ movie.overview }}
                  </div>
                </v-expand-transition>
              </v-img>

              <v-card-text class="pt-6">
                <div
                  class="font-weight-light text-orange text-body-1 text-md-h5 mb-2"
                >
                  {{ movie.title }}
                </div>

                <p class="text-body-2 font-weight-light text-lighten-2 mb-2">
                  <b>Rating: </b>{{ movie.vote_average }}
                </p>
                <p class="text-body-2 font-weight-light text-lighten-2 mb-2">
                  <b>Lanzamiento: </b>{{ movie.release_date }}
                </p>
              </v-card-text>
            </v-card>
          </v-hover>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import NavComponent from "./NavComponent.vue";
import { useMovieStore } from "../../stores/movieStore";
import { ref } from "vue";

// store
const store = useMovieStore();

const visibleId = ref(null);
const sorted_by = ref("popular");

// ejecutamos una primera vez al cargar la pagina
store.fetchData(sorted_by.value);
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
