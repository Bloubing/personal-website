<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
</script>

<template>
  <Layout back="/projects">
    <Head title="Recettes" />

    <template v-slot:heading>Site personnel</template>
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>Site personnel</Heading>
        <p>
          Ce projet est le site que vous êtes actuellement en train de consulter. J'ai utilisé Vue
          et Tailwind pour le réaliser.
        </p>

        <p>
          Le dépôt GitHub du projet est disponible
          <a
            href="https://github.com/Bloubing/personal-website"
            class="text-blue-500 hover:underline"
            >ici</a
          >.
        </p>
      </div>
    </div>
  </Layout>
</template>
