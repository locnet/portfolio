<template>
  <v-row class="d-flex">
    <v-col cols="12" md="6" offset-md="3" class="px-12">
      <h1 class="text-center text-h4 text-md-2 mt-12">Proyectos Frontend</h1>
      <h4 class="text-center font-weight-light text-h6 text-md-h4 mt-8">
        Aplicando las últimas tendencias y tecnologías para crear experiencias
        únicas
      </h4>
    </v-col>
  </v-row>
  <v-row class="pa-8" dense>
    <v-col
      v-for="item in items"
      :key="item.title"
      cols="12"
      md="6"
      lg="4"
      height="400px"
    >
      <v-card
        :color="item.color"
        height="100%"
        class="py-2 py-md-6 px-6"
        elevation="12"
      >
        <v-card-title class="text-center">
          <p class="text-center text-h4 text-md-h2 mb-md-3">
            <v-icon>{{ item.icon }}</v-icon>
          </p>
          {{ item.title }}
        </v-card-title>

        <v-card-text class="text-h6 mt-2 mt-md-4"
          ><p class="text-body-2 text-md-h6">{{ item.description }}</p>
        </v-card-text>

        <v-card-actions class="text-center">
          <p class="text-center">
            <v-btn variant="outlined" :to="item.link" class="bg-white"
              ><v-icon class="mr-2">{{ item.icon }}</v-icon> PRUEBAME
            </v-btn>
          </p>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        title: "Calculadora Calorias Quemadas",
        description:
          "Calcula cuantas calorias se pueden quemar con cada ejercitio fisico.",
        icon: "mdi-heart-flash",
        link: "/workoutapp",
        color: "purple",
      },
      {
        title: "Aplicacion Del Tiempo",
        description:
          "Simple aplicacion del tiempo utilizando la api de Open Weather Map.",
        icon: "mdi-weather-partly-cloudy",
        link: "/weatherapp",
        color: "teal-lighten-2",
      },
      {
        title: "Recetas Del Mundo",
        description:
          "Recetas aleatorias de comidas  de todo el mundo a un solo click. ",
        icon: "mdi-hamburger",
        link: "/recipesapp",
        color: "orange-darken-2",
      },
      {
        title: "Buscador De Peliculas",
        description:
          "Sumergete en la mayor base de datos publicas de peliculas de todo el mundo.",
        icon: "mdi-movie-open-play",
        link: "/movieapp",
        color: "grey-darken-4",
      },
      {
        title: "Cuenta Atras Navideña",
        description: "Una cuenta atras para los que aman la Navidad.",
        icon: "mdi-calendar-month",
        link: "/counterapp",
        color: "light-blue-darken-2",
      },
    ];

    return {
      items,
    };
  },
};
</script>

<style scoped>
[v-cloack] {
  display: none;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
