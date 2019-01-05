<template>
  <section>
    <projects :data="projects"/>
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
      const responseProjects = await fetch('https://yehorpopov-db.firebaseio.com/projects.json')
      const projects = await responseProjects.json()
      return { projects }
    }
  }
</script>

<style lang="stylus">
</style>
