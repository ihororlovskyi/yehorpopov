<template>
  <section>
    <projects-page :data="project"/>
    <how-it-works :data="howItWorks"/>

  </section>
</template>

<script>
  import ProjectsPage from '@/components/ProjectsPage'
  import HowItWorks from '@/components/HowItWorks'
  // import fetch from 'isomorphic-fetch'

  export default {
    components: {
      ProjectsPage,
      HowItWorks
    },
    async asyncData() {
      const responseHowItWorks = await fetch('https://yehorpopov-db.firebaseio.com/howItWorks.json')
      const howItWorks = await responseHowItWorks.json()
      return { howItWorks }
    },
    // async asyncData({ route }) {
    //   const { key } = route.params
    //   const response = await fetch('https://yehorpopov-db.firebaseio.com/projects/' + key + '.json')
    //   const project = await response.json()
    //   return { project }
    // },
    computed: {
      project () {
        return this.$store.getters.loadedProject(this.$route.params.key)
      }
    },
    head: {
      title: 'Project',
      meta: [
        { name: 'description', content: 'Project of Studio Yehor Popov ' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
