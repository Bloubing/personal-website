<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
</script>

<template>
  <Layout back="/projects">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>Auto-hébergement</Heading>

        <p>
          J'héberge depuis chez moi plusieurs services comme Nextcloud, Vaultwarden ou encore ce
          site Internet. Pour ce faire, j'ai mis en place un tunnel SSL avec CloudFlare, un reverse
          proxy avec Nginx Proxy Manager où j'expose chacun de mes services, qui sont tous dans des
          conteneurs Docker.
        </p>

        <p>
          Pour voir la documentation de mon serveur, cliquez sur
          <a class="text-blue-500 hover:underline" href="https://docs.bloubing.com">ce lien</a>.
        </p>
      </div>
    </div>
  </Layout>
</template>
