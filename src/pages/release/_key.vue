<template>
  <div>
    <h2 class="headline">Rendered From:<span class="render-result">{{renderSource}}</span></h2>
    <h1>{{ release.title }}</h1>
  </div>
</template>

<script>
  import fetch from 'isomorphic-fetch'

  export default {
    async asyncData({ route }) {
      const { key } = route.params
      const response = await fetch('https://yehorpopov-db.firebaseio.com/releases/' + key + '.json')
      const release = await response.json()
      return {
        release,
        renderSource: process.static ? 'static' : (process.server ? 'server' : 'client')
      }
    }
  }
</script>

<style>
</style>
