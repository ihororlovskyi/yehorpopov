<template>
  <v-layout row wrap class="Projects mb-5">
    <v-flex xs12 v-for="i in projects" :key="i.slug">
      <h4>{{ i.title }}</h4>
      <div v-html="i.description"/>
      <div>Цена проекта и ремонта: <b>{{ i.price }}</b></div>
      <v-btn outline @click="onLoadProject(i.slug)" class="mx-0">
        Подробнее
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: [
      'projects'
    ],
    methods: {
      onLoadProject (slug) {
        this.$router.push('/project/' + slug)
      }
    }
  }
</script>

<style lang="stylus">
  .Projects
    // display block
</style>
