import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/timeline",
      name: "timeline",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TimelineView.vue"),
    },
    {
      path: "/contacto",
      name: "contacto",
      component: () => import("@/views/ContactView.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/PortfolioView.vue"),
    },
    {
      path: "/weatherapp",
      name: "weatherapp",
      component: () => import("../components/weatherapp/MainComponent.vue"),
    },
    {
      path: "/counterapp",
      name: "counterapp",
      component: () => import("../components/counterapp/MainComponent.vue"),
    },
    {
      path: "/workoutapp",
      name: "workoutapp",
      component: () => import("../components/workoutapp/MainComponent.vue"),
    },
    {
      path: "/recipesapp",
      name: "recipesapp",
      component: () =>
        import("../components/recipesapp/RecipeMainComponent.vue"),
    },
    {
      path: "/movieapp",
      name: "movieapp",
      component: () => import("../components/movieapp/MovieMainComponent.vue"),
    },
    {
      path: "/testing",
      name: "testing",
      component: () => import("../components/testing/MainTestComponent.vue"),
    },
    {
      path: "/animations",
      name: "animations",
      component: () =>
        import("../components/animations/AnimationsComponent.vue"),
    },
    {
      path: "/contact",
      component: () => import("@/views/ContactView.vue"),
    },
  ],
});

export default router;
