<template>
  <section>
    <hero :data="projects"/>
    <features :data="features"/>
    <projects :data="projects"/>
    <how-it-works :data="howItWorks"/>
    <works/>
    <team :data="team"/>
    <contacts :data="contacts"/>
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
    // data () {
    //   return {
    //     access_token: '176908350.1677ed0.3c30032e917a430e8d1f65eae2223b1e',
    //     url: 'https://api.instagram.com/v1/users/self/media/recent/',
    //     username: '',
    //     grams: [],
    //     next_url: '',
    //     error: false
    //  }
    // },
    async asyncData() {
      // const responseProjects = await fetch('https://yehorpopov-db.firebaseio.com/projects2.json')
      const responseFeatures = await fetch('https://yehorpopov-db.firebaseio.com/features.json')
      const responseHowItWorks = await fetch('https://yehorpopov-db.firebaseio.com/howItWorks.json')
      // const responseWorks = await fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=176908350.1677ed0.3c30032e917a430e8d1f65eae2223b1e')
      const responseTeam = await fetch('https://yehorpopov-db.firebaseio.com/team.json')
      const responseContacts = await fetch('https://yehorpopov-db.firebaseio.com/contacts.json')
      // const projects = await responseProjects.json()
      const features = await responseFeatures.json()
      const howItWorks = await responseHowItWorks.json()
      // const works = await responseWorks.json()
      const team = await responseTeam.json()
      const contacts = await responseContacts.json()
      return {
        // projects,
        features,
        howItWorks,
        // works,
        team,
        contacts
      }
    },
    computed: {
      projects () {
        return this.$store.getters.loadedProjectsSortedByDate
      }
    },
    head: {
      title: 'Home',
      meta: [
        { name: 'description', content: 'Home of Studio Yehor Popov ' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
