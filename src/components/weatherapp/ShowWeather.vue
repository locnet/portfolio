<template>
  <v-row class="d-flex">
    <v-col cols="12" v-if="!store.isError" class="justify-center">
      <p
        class="text-h5 text-h4-md font-weight-light text-white text-center mb-0"
      >
        {{ timeData.day + ", " + timeData.date + " " + timeData.month }}
      </p>
      <p
        class="text-body-1 text-h6-md font-weight-light text-teal-lighten-3 text-center mb-3"
      >
        {{ store.getWeatherData.city + ", " + store.getWeatherData.country }}
      </p>

      <v-row cols="12" class="pa-2 pa-md-6 mt-2 rounded-xl bg-teal-darken-4">
        <v-col cols="6">
          <p class="font-weight-bold text-h2 text-h1-md text-white text-center">
            {{ store.getWeatherData.temp + "º" }}
          </p>
          <p
            class="mt-2 text-center font-weight-light text-teal-lighten-4 text-body-2"
          >
            Sensacion {{ store.getWeatherData.feels_like }}º
          </p>
        </v-col>
        <v-col cols="6">
          <p class="text-h2 text-h1-md text-center font-light text-white">
            <i class="inline-block" :class="store.getIconClass"></i>
          </p>
          <p
            class="mt-2 text-body-2 text-center text-teal-lighten-4 font-weight-light"
          >
            {{ store.getWeatherData.description }}
          </p>
        </v-col>

        <v-col cols="12" class="items-center justify-center">
          <p class="text-center text-white text-h6 font-weight-light">
            Min. {{ store.getWeatherData.temp_min }}º / Max
            {{ store.getWeatherData.temp_max }}º
          </p>
        </v-col>
      </v-row>

      <v-row class="d-flex bg-teal-darken-4 rounded-xl mt-8 pa-4">
        <v-col class="content-center">
          <p class="text-body-2 text-center mb-1">Viento</p>
          <h2 class="text-body-1 font-weight-light text-white text-center">
            <i class="wi wi-strong-wind text-xl text-teal-lighten-4"></i>
            {{ store.getWeatherData.speed }} Mps
          </h2>
        </v-col>

        <v-col class="content-center">
          <p class="text-body-2 text-center mb-1">Amanecer</p>
          <h2 class="text-body-1 font-weight-light text-white text-center">
            <i class="wi wi-sunrise text-xl text-teal-lighten-4"></i>
            {{ timeToString(store.getWeatherData.sunrise) }}
          </h2>
        </v-col>

        <v-col class="content-center">
          <p class="text-body-2 text-center mb-1">Atardecer</p>
          <h2 class="text-body-1 font-weight-light text-white text-center">
            <i class="wi wi-sunset text-xl text-teal-lighten-4"></i>
            {{ timeToString(store.getWeatherData.sunset) }}
          </h2>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" v-else class="grid grid-cols-1 py-24">
      <p class="text-center mb-8 text-h1">
        <span class="text-teal-lighten-3 wi wi-alien"></span>
      </p>
      <h2 class="text-h5 text-white text-center">
        ¡UPSS! <br />No podemos encontrar la ciudad
        {{ '"' + this.store.getLocation + '"' }}
      </h2>
    </v-col>
  </v-row>
</template>

<script type="text/javascript">
import { weatherStore } from "@/stores/weatherStore";

export default {
  data() {
    return {
      store: weatherStore(), // pinia store
      timeData: this.getToday(),
      iconClass: "",
      time: "",
      timeCode: "",
      //getIcon: iconHelper()
    };
  },

  /**
   * se ejecuta justo al cargar la pagina
   * @params none
   * @return void
   */
  updated() {
    this.getToday();
    this.getCurrentTime();
  },

  // funciones
  methods: {
    /**
     * devuelve la fecha de hoy en formato Dia, fecha Mes
     * @param none
     * @return Object
     *
     */
    getToday() {
      var week = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
      ];
      var month = [
        "Ene",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      var t = new Date();
      return {
        day: week[t.getDay()],
        date: t.getDate(),
        month: month[t.getMonth()],
      };
    },

    /**
     * transforma de milisegundos a hora y minutos
     * @params int - tiempo en milisecundos
     * @return String - hora formateada
     */
    timeToString(t) {
      let d = new Date();
      d.setTime(t * 1000);
      return (
        d.getHours() + ":" + (d.getMinutes() === 0 ? "00" : d.getMinutes())
      );
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>
