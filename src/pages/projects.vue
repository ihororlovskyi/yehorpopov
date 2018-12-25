<template>
  <section>
    <projects :projects="projects"/>
  </section>
</template>

<script>
  import Projects from '@/components/Projects'
  import fetch from 'isomorphic-fetch'

  export default {
    components: {
      Projects
    },
    async asyncData() {
      const response = await fetch('https://yehorpopov-db.firebaseio.com/projects.json')
      const projects = await response.json()
      return { projects }
    }
  }
</script>

<style lang="stylus">
</style>
