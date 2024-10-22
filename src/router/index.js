import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PorfolioView from "@/views/PortfolioView.vue";
import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: HomeView,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: PorfolioView
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView
  },
  {
    path: "/about",
    name: "À propos",
    component: AboutView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
