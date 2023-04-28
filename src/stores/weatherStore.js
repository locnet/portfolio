import { defineStore } from "pinia";
import axios from "axios";

export const weatherStore = defineStore("weatherStore", {
  state: () => ({
    api_key: "35347d093e8d761a399380e8f24f6730",
    api_endpoint: "https://api.openweathermap.org/data/2.5/weather",
    location: "",
    isError: false,
    errorMessage: "",
    background_name: "default.jpg",
    weatherData: {},
    iconClass: "",
    time: "",
  }),

  getters: {
    /**
     * los datos del set "weather"
     * @params Obj state
     *
     * @return object weather
     *
     */
    getWeatherData(state) {
      return state.weatherData;
    },

    /**
     * devuelve la locacion
     *
     * @param Obj state
     *
     * @return String location
     */
    getLocation(state) {
      return state.location;
    },

    /**
     * control de erores
     * @param Obj state
     *
     * @return boolean isError
     */
    getError(state) {
      return state.isError;
    },

    /**
     * devuelve el nombre de la imagen del background
     *
     * @param Obj state
     * @return String background_name
     */
    getBackgroundImgName(state) {
      return state.background_name;
    },

    /**
     * devuelve la clase css del icono
     *
     * @param none
     * @return String iconClass
     */
    getIconClass(state) {
      return state.iconClass;
    },
  },

  actions: {
    /**
     * cosumamos la api de weather.org
     */
    async fetchWeatherData() {
      this.isError = false;

      try {
        const response = await axios.get(
          this.api_endpoint +
            "?q=" +
            this.location +
            "&appid=" +
            this.api_key +
            "&units=metric&lang=es"
        );

        this.weatherData = {
          time_code: response.data.weather[0].id,
          temp: Math.round(response.data.main.temp),
          temp_min: Math.round(response.data.main.temp_min),
          temp_max: Math.round(response.data.main.temp_max),
          feels_like: Math.round(response.data.main.feels_like),
          description: response.data.weather[0].description,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country: response.data.sys.country,
          city: response.data.name,
          speed: response.data.wind.speed,
        };
        //console.log(response.data);

        // ejecutamos la funcion que cambia el background y el icono del tiempo

        this.getIcon(response.data.weather[0].id, this.getCurrentTime());
      } catch (e) {
        // descomentar para debug
        //console.log(error);
        this.isError = true;
        this.errorMessage = e.message;
      }
    },

    /**
     * metodo para cambiar la localizacion
     *
     * @param String location
     *
     * @return none
     */
    setLocation(location) {
      this.location = location.toLowerCase();

      //console.log("Location establecida: " + location);
    },

    /**
     * metodo para cambiar el background segun el tiempo que hace
     *
     * @param String name
     * @return void
     */
    setBackgroundName(name) {
      this.background_name = name;
    },

    /**
     * metodo para cambiar la clase css del icono segun el codigo de tiempo
     * llamado en ShowWeather.vue, metodo getIcon
     *
     * @param String  iconClass
     * @return void
     */
    setIconClass(icon) {
      this.iconClass = icon;
    },

    /**
     * metodo para verificar si es de dia o de noche
     *
     * @params none
     * @return void
     */
    getCurrentTime() {
      let t = new Date();
      let m = t.getTime(); // time in miliseconds
      // comparamos t con la hora de amanecer y atardecer
      if (
        m > this.getWeatherData.sunrise * 1000 &&
        m <= this.getWeatherData.sunset * 1000
      ) {
        return "day";
      } else {
        return "night";
      }
    },

    /**
     * establece el icono del tiempo segun el codigo del tiempo y el momento del dia
     * tambien cambia la imagen del background
     *
     * @param String timeCode - codigo de tiempo optenido de la api
     * @param String time  - day / night
     *
     * @return void
     */
    getIcon(timeCode, time) {
      switch (timeCode) {
        case 200:
          if (time === "day") {
            this.setBackgroundName("day-rain.jpg"); // cambiamos el background
            this.setIconClass("wi wi-day-sleet"); // cambiamos el icono
          } else {
            this.setBackgroundName("night-rain.jpg");
            this.setIconClass("wi wi-night-sleet");
          }

          break;
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
          if (time === "day") {
            this.setBackgroundName("day-rain.jpg"); // cambiamos el background
            this.setIconClass("wi wi-day-storm-shower");
          } else {
            this.setBackgroundName("night-rain.jpg");
            this.setIconClass("wi wi-night-storm-shower");
          }

          break;
        case 230:
        case 231:
        case 232:
          if (time === "day") {
            this.setBackgroundName("day-thunderstorm.jpg"); // cambiamos el background
            this.setIconClass("wi wi-day-thunderstorm");
          } else {
            this.setBackgroundName("thunderstorm.jpg");
            this.setIconClass("wi wi-night-thunderstorm");
          }

          break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
          if (time === "day") {
            this.setBackgroundName("day-sprinkle.jpg");
            this.setIconClass("wi wi-day-sprinkle");
          } else {
            this.setBackgroundName("night-rain.jpg");
            this.setIconClass("wi wi-night-sprinkle");
          }

          break;
        case 500:
          this.setBackgroundName("day-rain.jpg");
          this.setIconClass("wi wi-day-rain-mix");

          break;
        case 501:
        case 502:
          if (time === "day") {
            this.setBackgroundName("day-rain.jpg");
            this.setIconClass = "wi wi-day-rain";
          } else {
            this.setBackgroundName("night-rain.jpg");
            this.setIconClass = "wi wi-night-alt-rain";
          }

          break;
        case 503:
        case 504:
        case 511:
          this.setBackgroundName("sleet-rain.jpg");
          if (time === "day") {
            this.setIconClass("wi wi-day-sleet");
          } else {
            this.setIconClass("wi wi-night-sleet");
          }
          break;
        case 520:
        case 521:
          if (time === "day") {
            this.setBackgroundName("day-sprinkle.jpg");
            this.setIconClass("wi wi-day-showers");
          } else {
            this.setBackgroundName("night-rain.jpg");
            this.setIconClass("wi wi-night-showers");
          }
          break;
        case 522:
        case 530:
          if (time === "day") {
            this.setBackgroundName("day-rain.jpg");
            this.setIconClass("wi wi-day-rain");
          } else {
            this.setBackgroundName("night-rain.jpg");
            this.setIconClass("wi wi-night-rain");
          }

          break;
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
          if (time === "day") {
            this.setBackgroundName("day-snow.jpg");
            this.setIconClass("wi wi-day-snow");
          } else {
            this.setBackgroundName("night-snow.jpg");
            this.setIconClass("wi wi-night-snow");
          }

          break;
        case 701:
          if (time === "day") {
            this.setBackgroundName("fog.jpg");
            this.setIconClass("wi wi-day-fog");
          } else {
            this.setBackgroundName("night-fog.jpg");
            this.setIconClass("wi wi-night-fog");
          }

          break;
        case 711:
        case 721:
          this.setIconClass("wi wi-day-haze");
          break;
        case 731:
        case 741:
          if (time === "day") {
            this.setBackgroundName("fog.jpg");
            this.setIconClass("wi wi-day-fog");
          } else {
            this.setBackgroundName("night-fog.jpg");
            this.setIconClass("wi wi-night-fog");
          }

          break;
        case 751:
          this.setBackgroundName("sandstorm.jpg");
          this.setIconClass("wi wi-sandstorm");

          break;
        case 761:
        case 762:
        case 771:
        case 781:
          this.setBackgroundName("tornado.jpg");
          this.setIconClass("wi wi-tornado");
          break;
        case 800:
          if (time === "day") {
            this.setBackgroundName("sunny-day.jpg"); // change the background
            this.setIconClass("wi wi-day-sunny");
          } else {
            this.setBackgroundName("clear-night.jpg");
            this.setIconClass("wi wi-night-clear");
          }

          break;
        case 801:
        case 802:
        case 803:
        case 804:
          if (time === "day") {
            this.setBackgroundName("day-clouds.jpg");
            this.setIconClass("wi wi-day-cloudy");
          } else {
            this.setBackgroundName("night-clouds.jpg");
            this.setIconClass("wi wi-night-cloudy");
          }

          break;
        case 900:
        case 901:
        case 902:
        case 903:
        case 904:
          this.setBackgroundName("hot.jpg");
          this.setIconClass("wi wi-hot");
          break;
        case 905:
        case 906:
          this.setBackgroundName("hail.jpg");
          if (time === "day") {
            this.setIconClass("wi wi-day-hail");
          } else {
            this.setIconClass("wi wi-night-hail");
          }

          break;
        case 951:
        case 952:
        case 953:
        case 954:
        case 955:
        case 956:
        case 957:
        case 958:
        case 959:
        case 960:
        case 961:
        case 962:
          this.setBackgroundName("tornado.jpg");
          this.setIconClass("wi wi-tornado");

          break;
        default:
          // change the background
          this.setBackgroundName("default.jpg");
          this.setIconClass("wi wi-day-sunny");

          break;
      }
    },
  },
});
