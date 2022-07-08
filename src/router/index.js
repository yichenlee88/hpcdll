import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Research from "@/views/Research.vue";
import Publication from "@/views/Publication.vue";
import Youtube from "@/views/Youtube.vue";
import Members from "@/views/Members.vue";
import Gallery from "@/views/Gallery.vue";
import Resource from "@/views/Resource.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/research",
    component: Research,
  },
  {
    path: "/publication",
    component: Publication,
  },
  {
    path: "/youtube",
    component: Youtube,
  },
  {
    path: "/youtube",
    component: Youtube,
  },
  {
    path: "/members",
    component: Members,
  },
  {
    path: "/gallery",
    component: Gallery,
  },
  {
    path: "/resource",
    component: Resource,
  },
  {
    path: "/contact",
    component: Contact,
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;