<template>
  <v-row class="pa-8">
    <v-col cols="12" md="6" offset-md="3" class="pa-2 pa-md-12">
      <v-card class="bg-grey-lighten-5">
        <v-card-text class="text-center pa-6 pa-md-12">
          <p class="text-h6 text-md-h5 text-grey-3 font-weight-light">
            Mi Evolucion Como Desarrollador Web: Desde HTML y CSS Hasta las
            Últimas Tecnologías
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" offset-md="3">
      <v-timeline align="center" side="end">
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :dot-color="year.color"
          size="small"
        >
          <div
            :class="`pt-1 headline font-weight-bold text-${year.color}`"
            v-text="year.year"
          ></div>

          <div>
            <h2
              :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`"
            >
              {{ year.title }}
            </h2>
            <div>
              <p class="text-body-2 text-md-body-1">{{ year.description }}</p>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-col>

    <v-col cols="12" md="8" offset-md="2">
      <v-card>
        <div class="text-center py-12">
          <v-btn
            class="rounded-pill bg-indigo px-8 py-2"
            href="./cv_Adrian_Ion.pdf"
            >Descarga mi Curriculum</v-btn
          >
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const years = [
  {
    color: "black",
    year: "2003",
    title: "Mi primer PC",
    description: `En 2003, con 30 años, me compro mi primer ordenador. Solo
    tenia 256Mb de RAM, 32GB de disco duro y venia con Windows Millenium. 
    Usaba un modem para conectarse a Internet, que tardaba una eternidad.`,
  },
  {
    color: "cyan",
    year: "2004",
    title: "Linux: el principio de todo",
    description: `El 2004 es el año que leo sobre Linux en una revista
       y descubro el mundo del software libre. Instalo Gentoo, mi primera
        distribucion Linux.`,
  },
  {
    color: "brown",
    year: "2005-2007",
    title: "Destripando Internet",
    description: `Tengo mucha curiosidad de como funciona Internet.
    Leo varios libros sobre el tema, aprendo sobre servidores, firewalls,
    protocolos de red, vulnerabilidades y puntos fuertes de las redes,
    securidad y pen-testing.`,
  },
  {
    color: "green",
    year: "2008",
    title: "Desarrollo web",
    description: `El desarrollo web era la siguiente parada natural en
    mi camino. Aprendo por mi solo a programar paginas web estaticas
    con HTML y Css.`,
  },
  {
    color: "pink",
    year: "2009",
    title: "JavaScript y jQuery",
    description: `Me adentro mas en el desarrollo web.
    Aprendo Php, JavaScript y jQuery para desarrollar paginas web dinamicas
    y mejorar la experiencia del usuario.`,
  },
  {
    color: "amber",
    year: "2011",
    title: "Mi primera pagina web profesional",
    description: `Recibo mi primer para 
    desarrollar una aplicacion web para una empresa de traduccion de documentos 
    legales. La aplicacion permite crear una cuenta de cliente, calcular 
    el precio del servicio, subir los documentos a un servidor y hacer el 
    pago con PayPal. Tambien permite al cliente hacer un seguimiento del pedido. 
    Tecnologias usadas: HTML, PHP, MySql, Css y JavaScript.`,
  },
  {
    color: "orange",
    year: "2012",
    title: "Mi primer encargo fullstack serio ",
    description: `Recibo un encargo complejo, una aplicacion
     web para una agencia de viajes. La aplicacion tenia que integrar los 
     servicios XML de Sidetours, un mayorista de viajes. En la misma aplicacion 
     se podia buscar, ver disponibilidad, reservar, pagar las reservas y descargar
     el comprobante de la reserva hecha.
     Tecnologias usadas: PHP, MySql, jQuery y Css.`,
  },
  {
    color: "grey",
    year: "2013",
    title: "Codeigniter y Laravel",
    description: `Los frameworks Php 
    empezaron a ponerse de moda en aguella epoca. Aprendo la filosofia 
    MVC que hay detras de los frameworks modernos. 
    Reescribo desde cero varias paginas web de mis clientes en Codeigniter.`,
  },
  {
    color: "blue",
    year: "2014",
    title: "Android y Java",
    description: `Dedico un tiempo a aprender programacion de aplicaciones 
    Android con Java. Participo en el desarrollo de una aplicacion
     para buscar vuelos con la compania BlueAir.`,
  },
  {
    color: "pink",
    year: "2015-2018",
    title: "Me hago freelance",
    description: `Durante este tiempo he trabajado como freelance,
     desarrollando y participando en todo tipo de proyectos web.
     Tambien he estado involucrado en proyectos de optimizaciones SEO/SEM
      y campañas de publicidad en Google Ads.`,
  },
  {
    color: "lime",
    year: "2019",
    title: "Vue.js",
    description: `En 2019 me he incorporado a Admadesign, un pequeño estudio de 
    diseño web como desarrollador fullstack donde participo en diversos 
    proyectos basados en Laravel y Vue.js.`,
  },
  {
    color: "teal",
    year: "2020",
    title: "Python y Flask",
    description: `El Covid-19 nos obliga a encerarnos en casa y a teletrabajar.
     Aprovecho para tomar el curso online 
     "100 Days of Code: The Complete Python Pro Bootcamp"
      de Udemy. Este curso me ha servido para mejorar mis habilidades 
      como desarrollador backend incorporando Flask a mis conocimientos.`,
  },
  {
    color: "grey-darken-3",
    year: "2022",
    title: "Fin de una etapa",
    description: `En 31 de diciembre decido buscar nuevos retos y doy
     por terminada mi relacion laboral con mi anterior empresa.`,
  },
  {
    color: "cyan",
    year: "2023",
    title: "Un nuevo capitulo",
    description: `Esta historia aun no ha terminado, sigo buscando mi sitio.
      ¿Quieres ser el proximo capitulo en mi historia?
      Contactame.`,
  },
];
</script>
