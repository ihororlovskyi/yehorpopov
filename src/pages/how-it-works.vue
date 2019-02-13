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
    },
    head: {
      title: 'How It Works',
      meta: [
        { name: 'description', content: 'How It Works of Studio Yehor Popov ' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
