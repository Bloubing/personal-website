import AboutPage from '@/pages/AboutPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ProjectIndex from '@/pages/projects/ProjectIndex.vue'
import ProjectInnovGuide from '@/pages/projects/ProjectInnovGuide.vue'
import ProjectPersonalWebsite from '@/pages/projects/ProjectPersonalWebsite.vue'
import ProjectRecipes from '@/pages/projects/ProjectRecipes.vue'
import ProjectSelfHosting from '@/pages/projects/ProjectSelfHosting.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/projects',
      name: 'projects.index',
      component: ProjectIndex,
    },
    {
      path: '/projects/recipes',
      name: 'projects.recipes',
      component: ProjectRecipes,
    },
    {
      path: '/projects/innovguide',
      name: 'projects.innovguide',
      component: ProjectInnovGuide,
    },
    {
      path: '/projects/personal-website',
      name: 'projects.personal_website',
      component: ProjectPersonalWebsite,
    },
    {
      path: '/projects/self-hosting',
      name: 'projects.self_hosting',
      component: ProjectSelfHosting,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
  ],
})

export default router
