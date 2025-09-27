<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
</script>

<template>
  <Layout back="/projects">
    <template v-slot:heading>Recettes</template>
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>Recettes</Heading>
        <p>
          <strong>Recettes</strong> est un site de recettes comme Marmiton réalisé avec Laravel,
          Livewire, Tailwind & Alpine.js dans le cadre d'un projet académique, en groupe de 3.
        </p>

        <p>
          Ce projet comprend notamment une gestion des recettes, de commentaires, d'ingrédients et
          de notes. Il est possible d'ajouter des images pour les recettes. Il y a également une
          interface d'administration permettant de gérer les recettes et de modérer les commentaires
          en vérifiant les signalements.
        </p>

        <p>
          Le projet est disponible sur
          <a href="https://recettes.bloubing.com" class="text-blue-500 hover:underline">ce lien</a>
          et le dépôt GitHub du projet est disponible
          <a href="https://github.com/Bloubing/M1-recettes" class="text-blue-500 hover:underline"
            >ici</a
          >.
        </p>
      </div>
    </div>
  </Layout>
</template>
