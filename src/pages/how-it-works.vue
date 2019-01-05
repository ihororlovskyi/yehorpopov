<template>
  <section>
    <how-it-works :data="howItWorks"/>
  </section>
</template>

<script>
  import HowItWorks from '@/components/HowItWorks'

  export default {
    components: {
      HowItWorks
    },
    async asyncData() {
      const responseHowItWorks = await fetch('https://yehorpopov-db.firebaseio.com/howItWorks.json')
      const howItWorks = await responseHowItWorks.json()
      return { howItWorks }
    }
  }
</script>

<style lang="stylus">
</style>
