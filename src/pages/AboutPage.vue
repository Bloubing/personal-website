<script setup lang="ts">
import Heading from '../components/Heading.vue'
import Layout from '../shared/DefaultLayout.vue'
</script>

<template>
  <Layout back="/">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>À propos</Heading>
        <p>
          Bonjour ! Je suis un étudiant en informatique et je m'intéresse au développement web et
          aux langues.
        </p>
        <p>Ma stack est Laravel (PHP), Vue (JS) et Tailwind (CSS).</p>
        <p>Je parle anglais et espagnol couramment, et j'étudie en ce moment l'allemand.</p>
        <p>
          Je recherche un stage de 4 à 6 mois vers février 2026 pour ma dernière année d'université.
          Contactez-moi en cliquant sur le bouton de bas de page !
        </p>
      </div>
    </div>
  </Layout>
</template>
