<template>
  <section>
    <projects-page :data="project"/>
  </section>
</template>

<script>
  import ProjectsPage from '@/components/ProjectsPage'
  import fetch from 'isomorphic-fetch'

  export default {
    components: {
      ProjectsPage
    },
    async asyncData({ route }) {
      const { key } = route.params
      const response = await fetch('https://yehorpopov-db.firebaseio.com/projects/' + key + '.json')
      const project = await response.json()
      return { project }
    }
  }
</script>

<style lang="stylus">
</style>
