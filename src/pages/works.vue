<template>
  <section>
    <works/>
  </section>
</template>

<script>
  import Works from '@/components/Works'
  // import fetch from 'isomorphic-fetch'

  export default {
    components: {
      Works
    },
    // async asyncData() {
    //   const responseWorks = await fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=176908350.1677ed0.3c30032e917a430e8d1f65eae2223b1e')
    //   const works = await responseWorks.json()
    //   return {
    //     works
    //   }
    // },
    head: {
      title: 'Works',
      meta: [
        { name: 'description', content: 'Works of Studio Yehor Popov ' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
