<template>
  <section>
    <h1>{{ project.title }}</h1>
    <div v-html="project.description"/>
    <div>Цена проекта и ремонта: <b>{{ project.price }}</b></div>
  </section>
</template>

<script>
  import fetch from 'isomorphic-fetch'

  export default {
    async asyncData({ route }) {
      const { key } = route.params
      const response = await fetch('https://yehorpopov-db.firebaseio.com/projects/' + key + '.json')
      const project = await response.json()
      return { project }
    }
  }
</script>

<style lang="stylus">
</style>
