<template>
  <v-layout row wrap class="Team mb-5">
    <v-flex xs12>
      <div class="fs24 fw800 mb40">{{ data.title }}</div>
    </v-flex>
    <v-flex xs12 row wrap v-for="i in data.list" :key="i.name">
      <v-layout row wrap class="mb-5">
        <v-flex xs4>
          <img class="TeamPhoto" :src="i.photo" alt="">
        </v-flex>
        <v-flex xs8>
          <div v-if="i.quote" class="fs24 fw800" v-html="i.quote"/>
          <div>{{ i.name }}</div>
          <div class="fs12">{{ i.position }}</div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: [
      'data'
    ]
  }
</script>

<style lang="stylus">
  .Team
    &Photo
      width: 100%
      display: block
</style>
