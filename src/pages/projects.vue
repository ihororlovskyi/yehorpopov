<template>
  <div>
    <h2 class="headline">Rendered From:<span class="render-result">{{renderSource}}</span></h2>
    <ul>
      <li v-for="i in releases" :key="i.slug">
        <router-link :to="'/release/' + i.slug + '/'">
          {{ i.title }}
        </router-link>
        <v-btn @click="onLoadProject(i.slug)">
          <v-icon left>mdi-key</v-icon>
          {{ i.title }}
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
  import fetch from 'isomorphic-fetch'

  export default {
    async asyncData() {
      const response = await fetch('https://yehorpopov-db.firebaseio.com/releases.json')
      const releases = await response.json()
      return {
        releases,
        renderSource: process.static ? 'static' : (process.server ? 'server' : 'client')
      }
    },
    methods: {
      onLoadProject (slug) {
        this.$router.push('/release/' + slug)
      }
    }
  }
</script>

<style>
</style>
