<template>
  <v-layout row wrap class="Projectpage">
    <v-flex xs12>
      <h1>{{ project.title }}</h1>
    </v-flex>
    <v-flex xs4>
      <div v-html="project.description"/>
      <div>Цена проекта и ремонта: <b>{{ project.price }}</b></div>
    </v-flex>
    <v-flex xs8>
      <img :src="project.img" alt="" class="ProjectpageImg">
    </v-flex>
  </v-layout>
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
  .Projectpage
    //
    &Img
      width: 100%;
      display: block;
</style>
