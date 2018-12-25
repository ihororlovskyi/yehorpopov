<template>
  <section>
    <hero :projects="projects"/>
    <features/>
    <projects :projects="projects"/>
    <how-it-works/>
    <works/>
    <team/>
    <contacts/>
  </section>
</template>

<script>
  import Hero from '@/components/Hero'
  import Features from '@/components/Features'
  import Projects from '@/components/Projects'
  import HowItWorks from '@/components/HowItWorks'
  import Works from '@/components/Works'
  import Team from '@/components/Team'
  import Contacts from '@/components/Contacts'
  import fetch from 'isomorphic-fetch'

  export default {
    components: {
      Hero,
      Features,
      Projects,
      HowItWorks,
      Works,
      Team,
      Contacts
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
