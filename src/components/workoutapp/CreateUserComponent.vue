<template>
  <v-sheet width="350" class="rounded-lg mx-auto my-12 py-8">
    <div width="100%">
      <p class="text-h6 text-center text-teal-lighten-3">
        Crea un perfil temporal y anonimo
      </p>
    </div>
    <v-form fast-fail @submit.prevent class="pa-8" ref="form">
      <v-text-field
        v-model="height"
        label="Altura (cm)"
        variant="outlined"
        :rules="heightRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="weight"
        label="Peso (kg)"
        variant="outlined"
        :rules="weightRules"
        required
      ></v-text-field>

      <v-select
        v-model="gender"
        label="Genero"
        variant="outlined"
        :items="genderOptions"
        :rules="genderRules"
        required
      ></v-select>

      <v-text-field
        v-model="age"
        label="Edad"
        variant="outlined"
        :rules="ageRules"
        required
      ></v-text-field>

      <div class="d-flex flex-column">
        <v-btn
          @click="createUserProfile"
          block
          class="mt-2 py-4 bg-teal-darken-2"
          >Submit</v-btn
        >
      </div>

      <v-snackbar v-model="snackbar">
        {{ text }}
        <template v-slot:actions>
          <v-btn color="green" variant="text" @click="snackbar = false">
            CERRAR
          </v-btn>
        </template>
      </v-snackbar>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import { useWorkoutStore } from "@/stores/workoutStore";

const store = useWorkoutStore(); // nuestro store

const form = ref(null);
const height = ref(null);
const weight = ref(null);
const gender = ref(null);
const age = ref(null);
const genderOptions = ["hombre", "mujer"];

// validacion
const valid = ref(true);

// snackbar
const snackbar = ref(false);
const text = "Usuario creado corectamente!";

const heightRules = [
  (value) => {
    if (!value || value < 100 || value > 230 || !/[0-9]/.test(value)) {
      return "Por favor, revisa la altura";
    } else {
      return true;
    }
  },
];

const weightRules = [
  (value) => {
    if (!value || value < 35 || value > 300 || !/[0-9]/.test(value)) {
      return "Por favor, revisa el peso introducido";
    } else {
      return true;
    }
  },
];

const ageRules = [
  (value) => {
    if (!value || value < 8 || value > 100 || !/[0-9]/.test(value)) {
      return "Por favor, revisa tu edad";
    } else {
      return true;
    }
  },
];

const genderRules = [(v) => !!v || "El genero es obligatorio"];

/**
 * crea un perfil temporal de un usuario para
 * @params none
 * @return void
 */
function createUserProfile() {
  if (formIsValid()) {
    if (
      store.createUserProfile(
        height.value,
        weight.value,
        gender.value,
        age.value
      )
    ) {
      console.log("Usuario creado!");
      snackbar.value = true;

      setTimeout(() => {
        snackbar.value = false;
      }, 6000);
    }
  } else {
    console.log("Hay un error de validacion");
  }
}

/**
 * valida el formulario antes de enviar
 *
 * @params none
 * @return boolean
 */
const formIsValid = async () => {
  valid.value = await form.value.validate();
  console.log(gender.value);
};
</script>
