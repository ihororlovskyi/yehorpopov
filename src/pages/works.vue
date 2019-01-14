<template>
  <section>
    <works/>
  </section>
</template>

<script>
  import Works from '@/components/Works'

  export default {
    components: {
      Works
    },
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
