<template>
  <v-row class="d-flex min-h-screen py-12" justify="start">
    <v-col cols="12">
      <v-card class="mx-auto mt-12" min-width="350" elevation="0">
        <v-img
          src="/contact_vector.png"
          alt="contact image"
          height="200"
          contain
        ></v-img> </v-card
    ></v-col>
    <v-col
      cols="12"
      md="6"
      offset-md="3"
      class="mt-12 pa-6 pa-sm-8 justify-start"
    >
      <p
        class="text-body-1 text-sm-h6 text-md-h5 font-weight-light mb-8 text-center text-grey-darken-4"
      >
        Como desarrollador, mi objetivo es crear soluciones tecnológicas
        efectivas y perfectas visualmente.
      </p>
      <h2 class="text-h5 text-sm-h4 text-md-h3 font-weight-light text-center">
        ¿Te gustaria tenerme en tu equipo?
      </h2>
    </v-col>

    <v-col cols="12" md="6" offset-md="3" class="px-8">
      <v-card elevation="6" rounded="lg" class="mb-12">
        <v-list density="compact">
          <v-list-item color="primary" class="rounded-circle">
            <template v-slot:prepend>
              <v-icon color="black" size="20" icon="mdi-mail"></v-icon>
            </template>
            <v-list-item-title href="mailto:locnetarganda@gmail.com"
              ><a href="mailto:locnetarganda@gmail.com" class="text-teal"
                >locnetarganda@gmail.com</a
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend
              ><v-icon color="black" size="20" icon="mdi-linkedin"></v-icon
            ></template>
            <v-list-item-title>
              <a
                class="text-teal"
                href="https://www.linkedin.com/in/adrian-ion-cojocaru-8b3769b/"
                >Linkedin
              </a>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend
              ><v-icon color="black" size="20" icon="mdi-cellphone"></v-icon
            ></template>
            <v-list-item-title
              ><a class="text-teal" href="tel://678971657"
                >678 971 657</a
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend
              ><v-icon color="black" size="20" icon="mdi-school"></v-icon
            ></template>
            <v-list-item-title>
              <a class="text-teal" href="./cv_Adrian_Ion.pdf" variant="text"
                >Descarga mi CV</a
              >
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const email = "locnetarganda@gmail.com";
</script>
