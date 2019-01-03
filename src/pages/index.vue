<template>
  <section>
    <hero :data="projects"/>
    <features/>
    <projects :data="projects"/>
    <how-it-works :data="howItWorks"/>
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
      const responseProjects = await fetch('https://yehorpopov-db.firebaseio.com/projects.json')
      const responseHowItWorks = await fetch('https://yehorpopov-db.firebaseio.com/howItWorks.json')
      const projects = await responseProjects.json()
      const howItWorks = await responseHowItWorks.json()
      return { projects, howItWorks }
    }
  }
</script>

<style lang="stylus">
</style>
