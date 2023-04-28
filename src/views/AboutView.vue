<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <v-card class="px-2 py-8 mx-4 mt-4 mt-md-12">
        <v-card-text>
          <p class="text-h3 text-md-h1 dark--text-red font-weight-light">
            Hola, soy <span class="font-weight-bold">Adrian</span>
          </p>
        </v-card-text>
        <v-card-text class="mb-4">
          <p class="text-h6 text-md-h5 font-weight-bold">
            Programador full-stack. Autodidacta. Curioso por naturaleza.
          </p>
        </v-card-text>
        <v-card-text>
          <p class="text-body-1">
            Soy un desarrollador fullstack autodidacta, muy detallista, con una
            solida base PHP, JavaScript y Python. Soy experto en creacion de
            aplicaciones web responsive con un alto grado de usabilidad.
          </p>
        </v-card-text>

        <v-card-text>
          <p class="text-body-1">
            Siempre estoy al dia con las ultimas tecnologías y las mejores
            practicas en desarrollo web.
          </p>
        </v-card-text>

        <v-card-text>
          <p class="text-body-1">
            Soy competente en desarrollo front-end con Vue.js, HTML y CSS; y en
            el back-end con Laravel o Flask y MySql.
          </p>
        </v-card-text>

        <v-card-text>
          <p class="text-body-1">
            Estoy familiarizado con metodologías ágiles de desarrollo y control
            de versiones usando Git. Estoy capacitado para trabajar en equipo o
            de forma individual.
          </p>
        </v-card-text>

        <v-card-text>
          <p class="text-body-1">
            Te preguntaras, ¿que puedo hacer como programador web-full stack?
          </p>
        </v-card-text>

        <v-card-text>
          <p class="text-body-1">
            Puedo planear, diseñar, programar, lanzar y mantener una aplicación
            web. Desde cero a un precioso producto finito.
          </p>
        </v-card-text>

        <v-card-text>
          <p class="text-body-1">
            Uso herramientas y tecnologías open source, como Linux, Laravel o
            Vue para entregar resultados llamativos.
          </p>
        </v-card-text>
      </v-card>

      <v-sheet class="mt-8 pa-4 rounded-lg">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="item in items"
            :key="item.title"
          >
            <v-card elevation="6">
              <v-card-item
                class="bg-blue-grey-darken-1 round-t pt-3 text-center text-h6 text-md-h4"
              >
                <v-icon color="white">{{ item.icon }}</v-icon>

                <v-card-title>{{ item.title }}</v-card-title>
              </v-card-item>

              <v-card-text class="py-4">
                <v-list density="compact">
                  <v-list-item
                    v-for="(item, i) in item.value"
                    :key="i"
                    :value="item"
                    active-color="primary"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        title: "Lenguajes",
        icon: "mdi-code-tags",
        value: ["Php", "JavaScript", "MySql", "Python", "HTML", "CSS"],
      },
      {
        title: "Frameworks",
        icon: "mdi-vuejs",
        value: [
          "Vue",
          "Laravel",
          "Wordpress",
          "Flask",
          "Codeigniter",
          "Android",
        ],
      },
      {
        title: "Herramientas",
        icon: "mdi-tools",
        value: [
          "Visual Studio Code",
          "Sublime Text",
          "Android Studio",
          "Git",
          "Chrome Devtools",
          "Ui Path Studio",
        ],
      },
      {
        title: "Diseño",
        icon: "mdi-pencil-ruler",
        value: [
          "Inkscape",
          "Gimp",
          "Vuetify",
          "Tailwind CSS",
          "UI/UX",
          "Prototyping",
        ],
      },
      {
        title: "Educacion",
        icon: "mdi-school",
        value: [
          "Bachillerato",
          "Curso Vue.js",
          "Curso programacion en Python",
          "Curso Google Ads",
          "Curso Ui Path Studio",
          "Nivel ingles B2",
        ],
      },
    ];

    return { items };
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
