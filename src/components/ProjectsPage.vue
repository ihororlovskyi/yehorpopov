<template>
  <v-layout row wrap class="ProjectsPage">
    <v-flex xs12>
      <h1 class="fs24 fw800 mb80">{{ data.title }}</h1>
    </v-flex>
    <v-flex xs4>
      <div class="ProjectsPageText mb-5">
        <div class="mb-4" v-html="data.description"/>
        <div class="mb-4">{{ priceText }} <b>{{ data.price }}</b></div>
      </div>
    </v-flex>
    <v-flex xs8>
      <img :src="data.img" alt="" class="ProjectsPageImg mb-5">
    </v-flex>
    <v-flex xs12>
      <img :src="data.imgSlim" alt="" class="ProjectsPageImg mb-5">
      <v-divider/>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: [
      'data'
    ],
    data () {
      return {
        priceText: 'Цена проекта и ремонта:',
        btnText: 'Подробнее',
        btnIcon: 'mdi-chevron-right'
      }
    }
  }
</script>

<style lang="stylus">
  .ProjectsPage
    &Text
      margin: 0 40px 0 0
    &Img
      width: 100%;
      display: block;
</style>
