// pinia store
import { defineStore } from "pinia";
import axios from "axios";
import { reactive } from "vue";

export const useWorkoutStore = defineStore("workoutStore", {
  state: () => ({
    // nutritionix - datos acceso
    apiId: import.meta.env.VITE_APP_ID,
    apiKey: import.meta.env.VITE_APP_KEY,
    nutritionixUser: import.meta.env.VITE_USER,
    exercise_endpoint: "https://trackapi.nutritionix.com/v2/natural/exercise",
    autorization_token: "Basic YWRyaWFuNzI6YWxrZGpmbGthYWxrZGpsazM0NTc=",

    errorMessage: "",
    // user params
    user: {
      height: null,
      weight: null,
      gender: null,
      age: null,
      exists: false,
    },

    // ejercitio
    exercise: reactive({
      type: null,
      duration: null,
    }),

    // array de las sessiones de entrenamiento
    sessions: [],

    // calorias quemadas
    burnedCalories: 0,
  }),

  getters: {
    /**
     * devuelve el mensaje del error
     *
     * @param state
     * @return {String}
     */
    getErrorMessage(state) {
      return state.errorMessage;
    },

    /**
     * devuelve el objeto user
     *
     * @param obj state
     * @return {object} user
     */
    getUserParams(state) {
      return state.user;
    },

    /**
     * devuelve las sesiones guardadas
     *
     * @params none
     * @return {Array} array of objects
     */
    getSessionArray(state) {
      return state.sessions;
    },

    /**
     * devuelve las calorias
     * @param state
     * @return {String}  calorias
     */
    getBurnedCalories(state) {
      return Math.round(state.burnedCalories);
    },

    getUserStatus(state) {
      return state.user.exists;
    },

    /**
     * devuelve el ejercitio
     * @params { Object } state
     * @return {Object}
     */
    getExercise(state) {
      return state.exercise;
    },

    /**
     * devuelve la suma de las calorias gastadas
     *
     * @returns {Number}
     */
    getOnlyCalories(state) {
      let a = state.sessions;
      let total = 0;
      for (let i = 0; i < a.length; i++) {
        total += a[i].calories;
      }

      return total;
    },
  },

  // metodos
  actions: {
    /**
     * crea el perfil del usuario
     *
     * @param height int
     * @param weight int
     * @param gender String
     * @param bmi int
     * @return {boolean}
     */
    createUserProfile(height, weight, gender, age) {
      if (height && weight && gender && age) {
        // perfil creado
        this.user.height = height;
        this.user.weight = weight;
        this.user.gender = gender;
        this.user.age = age;
        this.user.exists = true;

        return true;
      } else {
        return false;
      }
    },

    /**
     * actualiza el array se las sessiones
     * @param String ex_type - tipo ejercitio
     * @param Int calories - calorias quemadas
     *
     * @return {String} status mensaje
     */
    updateSessionArray(ex, calories) {
      if (ex && calories) {
        if (!this.sessions.length) {
          // el array esta vacio
          this.sessions.push({
            ex_type: ex,
            calories: calories,
          });
        } else {
          // no quiero duplicar elementos del array, por ej. si ya tengo una session de correr
          // en el array y el usuario crea otra session de correr
          // sumo las calorias en vez de crear un elemento nuevo en el array
          let duplicate_entry = -1;

          for (let i = 0; i < this.sessions.length; i++) {
            // ya tenemos este ejercitio en el array
            if (ex == this.sessions[i].ex_type) {
              duplicate_entry = i;
            }
          }

          if (duplicate_entry >= 0) {
            this.sessions[duplicate_entry]["calories"] += calories;
          } else {
            this.sessions.push({
              ex_type: ex,
              calories: calories,
            });
          }
        }

        return "Ejercitio salvado corectamente!";
      } else {
        this.errorMessage = "No se ha podido guardar el ejercitio!";
        return this.errorMessage;
      }
    },

    /**
     * obtenemos datos de la api de Nutritionix
     *
     * @param array|data
     * @return {Double} nr. de calorias
     */
    async getTotalCalories() {
      // console.log("data from store: " + data[0] + " / " + data[1]);

      await axios
        .post(
          this.exercise_endpoint,
          {
            query: this.exercise.type + " " + this.exercise.duration + " min",
            gender: this.user.gender,
            weight_kg: this.user.weight,
            height_cm: this.user.height,
            age: this.user.age,
          },
          {
            headers: {
              "x-app-id": this.apiId,
              "x-app-key": this.apiKey,
              user: this.nutritionixUser,
              Authorization: this.autorization_token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          // del set de datos solo extraemos las calorias quemadas
          this.burnedCalories = response.data.exercises[0].nf_calories;

          // actualizamos el array de las sessiones
          this.updateSessionArray(this.exercise.type, this.getBurnedCalories);
        })
        .catch((error) => {
          console.log("ERROR: " + error);
        });
    },

    /**
     * pone las calorias a cero y el ejercitio
     * @params none
     * @return void
     */
    resetCalories() {
      this.burnedCalories = 0;
      // reseteamos el ejercitio
      this.exercise.type = null;
      this.exercise.duration = null;
      return true;
    },
  },
});
