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
    }
  }
</script>

<style lang="stylus">
</style>
