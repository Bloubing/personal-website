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
          site Internet. Pour ce faire, j'ai mis en place un tunnel SSL avec CloudFlare, un
          <i>reverse proxy</i> avec Nginx Proxy Manager où j'expose chacun de mes services, qui sont
          tous dans des conteneurs Docker.
        </p>

        <div>
          <h2 class="font-semibold my-3 text-md">Liens</h2>
          <ul class="flex flex-col space-y-4">
            <li>
              <a
                href="https://docs.bloubing.com"
                class="text-blue-500 flex space-x-1 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
                <p>Documentation du serveur</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>
