<template>
  <v-layout column wrap class="Projects mb-5" id="projects">
    <!-- <div v-if="loading" class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="60"
        color="black"
      />
    </div>
    <v-layout v-else row wrap class="ProjectsItem mb-5" v-for="i in data" :key="i.slug"> -->
    <v-layout row wrap class="ProjectsItem mb-5" v-for="i in data" :key="i.id">
      <v-flex xs12>
        <div class="fs24 fw800 mb80">{{ preTitle }} "{{ i.title }}"</div>
      </v-flex>
      <v-flex xs4>
        <div class="ProjectsItemText mb-5">
          <div class="mb-4" v-html="i.description"/>
          <div class="mb-4">{{ priceText }} <b>{{ i.price }}</b></div>
          <v-btn outline @click="onLoadProject(i.id)" class="mx-0">
            {{ btnText }}
            <v-icon right>{{ btnIcon }}</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex xs8>
        <img :src="i.imgCover" alt="" class="ProjectsItemImg mb-5">
      </v-flex>
      <v-flex xs12>
        <v-parallax class="mb-5" :src="i.imgCover" height="300"/>
        <v-divider/>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
  export default {
    props: [
      'data'
    ],
    data () {
      return {
        preTitle: 'Дизайн проект',
        priceText: 'Цена проекта и ремонта:',
        btnText: 'Подробнее',
        btnIcon: 'mdi-chevron-right'
      }
    },
    methods: {
      onLoadProject (id) {
        this.$router.push('/project/' + id)
      }
    },
    // computed: {
    //   loading () {
    //     return this.$store.getters.loading
    //   }
    // }
  }
</script>

<style lang="stylus">
  .Projects
    // display block

    &Item
      //

      &Text
        margin: 0 40px 0 0

      &Img
        width: 100%
        display: block

      &:nth-child(2n)

        & .flex

          &:nth-child(1)
            order: 0

          &:nth-child(2)
            order: 2

          &:nth-child(3)
            order: 0

          &:nth-child(4)
            order: 3

        & .ProjectsItemText
          margin: 0 0 0 40px
</style>
