<template>
  <section>
    <projects :data="loadedProjectsSortedByOld"/>
  </section>
</template>

<script>
  import Projects from '@/components/Projects'
  import fetch from 'isomorphic-fetch'

  export default {
    components: {
      Projects
    },
    // async asyncData() {
    //   const responseProjects = await fetch('https://yehorpopov-db.firebaseio.com/projects2.json')
    //   const projects = await responseProjects.json()
    //   return { projects }
    // },
    computed: {
      loadedProjectsSortedByOld () {
        return this.$store.getters.loadedProjectsSortedByOld
      }
    },
    head: {
      title: 'Projects',
      meta: [
        { name: 'description', content: 'Projects of Studio Yehor Popov ' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
