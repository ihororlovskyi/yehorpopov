<template>
  <section>
    <team :data="team"/>
  </section>
</template>

<script>
  import Team from '@/components/Team'

  export default {
    components: {
      Team
    },
    async asyncData() {
      const responseTeam = await fetch('https://yehorpopov-db.firebaseio.com/team.json')
      const team = await responseTeam.json()
      return { team }
    },
    head: {
      title: 'Team',
      meta: [
        { name: 'description', content: 'Team of Studio Yehor Popov ' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
