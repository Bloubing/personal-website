<script setup lang="ts">
import Card from '@/components/DefaultCard.vue'
import NavLink from '@/components/NavLink.vue'
import { RouterLink } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import Layout from '@/shared/DefaultLayout.vue'
</script>

<template>
  <Layout>
    <section aria-label="introduction" class="px-4 py-20 text-gray-800 sm:px-8 md:py-32">
      <h1 class="text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-6xl">Bloubing</h1>
      <div class="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p class="mt-5 max-w-[50ch] sm:text-lg lg:text-xl">
          Étudiant en informatique qui aime le développement Web et les langues
        </p>
        <div class="relative mt-10 flex">
          <RouterLink
            to="/projects"
            class="relative bg-pistachio px-5 py-5 text-2xl font-semibold shadow transition-transform duration-300 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:scale-102 hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1000ms] sm:px-15 sm:py-10 md:text-3xl lg:text-4xl"
            >Mes projets</RouterLink
          >
          <img
            class="absolute -top-7 left-45 w-24 rotate-[-10deg] transition-transform duration-300 hover:scale-105 hover:rotate-0 sm:left-60 sm:w-36 md:left-70 lg:left-80"
            src="/src/assets/images/arrow.png"
            alt="Flèche pointant le bouton 'Projets'"
          />
        </div>
      </div>
    </section>

    <div class="flex flex-col space-y-10">
      <section aria-labelledby="technologies-heading">
        <div class="mx-4">
          <h2
            id="technologies-heading"
            class="bg-gray-800 px-4 py-2 text-base font-bold text-white sm:text-4xl"
          >
            Technologies
          </h2>
        </div>

        <Card>
          <ul class="flex flex-wrap items-center justify-center">
            <li>
              <a href="https://vuejs.org" target="_blank">
                <img
                  class="h-12 w-auto"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fimages%2Flarge%2Fvue-logo.png&f=1&nofb=1&ipt=fd1389060dc73130c681ff3ff36ff57278462f5e2830bc6657c746f89d3c7b30"
                  alt="Logo de Vue.js"
                />
              </a>
            </li>
            <li>
              <a href="https://laravel.com/" target="_blank">
                <img
                  class="h-20 w-auto"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdownload.logo.wine%2Flogo%2FLaravel%2FLaravel-Logo.wine.png&f=1&nofb=1&ipt=1a0edddb8d0b2ee002b3ee668dc143ee1713406ee65a7572b0c7aafce41682a6/"
                  alt="Logo de Laravel"
                />
              </a>
            </li>

            <li>
              <a href="https://tailwindcss.com" target="_blank">
                <img
                  class="h-9 w-auto"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd5%2FTailwind_CSS_Logo.svg%2F1024px-Tailwind_CSS_Logo.svg.png%3F20230715030042&f=1&nofb=1&ipt=7a1155ba04b2b2e722733b7e8a590cc01b74520f340f51682cb7ff920dd8ad29"
                  alt="Logo de Tailwind"
                />
              </a>
            </li>
          </ul>
        </Card>
      </section>

      <section class="mt-5" aria-labelledby="projects-heading">
        <div class="mx-4">
          <h2
            id="technologies-heading"
            class="bg-gray-800 px-4 py-2 text-base font-bold text-white sm:text-4xl"
          >
            Projets
          </h2>
        </div>
        <ul>
          <ProjectCard to="/projects/innovguide">
            <template v-slot:title>InnovGuide</template>
            Un PMS avec Laravel, Livewire et Vue.
          </ProjectCard>
          <ProjectCard to="/projects/self-hosting">
            <template v-slot:title>Auto-hébergement</template>
            Un serveur qui héberge des services comme Nextcloud et Vaultwarden.
          </ProjectCard>
          <ProjectCard to="/projects/recipes">
            <template v-slot:title>Recettes</template>
            Un site de recettes avec Laravel, Livewire et Alpine.js.
          </ProjectCard>
        </ul>
      </section>
    </div>
  </Layout>
</template>
