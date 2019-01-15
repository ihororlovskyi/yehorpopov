<template>
  <section>

  <div v-if="loading" class="text-xs-center">
    <v-progress-circular
      indeterminate
      :size="60"
      color="black"
    />
  </div>

  <v-layout v-else row wrap class="Works mb-5" align-center v-if="username">
    <v-flex xs6>
      <div class="fs24 fw800 mb-4">{{ title }}</div>
      <div v-if="username"><a :href="instapage" target="_blank">@{{ username }}</a></div>
      <div>{{ position }}</div>
    </v-flex>
    <v-flex xs6 class="text-xs-right" >
      <v-btn outline class="mx-0" :href="instapage" target="_blank">
        <v-icon left>{{ btnFollowIcon }}</v-icon>
        {{ btnFollowText }}
      </v-btn>
    </v-flex>

    <v-layout row wrap class="WorksList mb-5">
      <v-flex xs3 v-for="i in grams" :key="i.id" class="WorksListItem">
        <a :href="i.link" target="_blank">
          <img class="WorksListItemImg" :src="i.images.standard_resolution.url" :alt="i.text" />
        </a>
      </v-flex>
    </v-layout>

    <!-- <div v-else class="loading"></div> -->
    <!-- <div v-if="error" class="error">Sorry, the Instagrams couldn't be fetched.</div> -->

    <v-flex xs12 class="text-sm-center" v-if="next_url">
      <v-btn @click="getMoreGrams" outline class="mx-0">
        {{ btnLoadText }}
        <v-icon right>{{ btnLoadIcon }}</v-icon>
      </v-btn>
    </v-flex>

  </v-layout>
  </section>

</template>

<script>
  import axios from 'axios'
  // import fetch from 'isomorphic-fetch'

  export default {
    // props: [
    //   'data'
    // ],
    data () {
      return {
        btnFollowText: 'Follow',
        btnFollowIcon: 'mdi-instagram',
        title: 'Наши работы',
        position: 'Главный архитектор дизайн студии',
        btnLoadText: 'Подзагрузить',
        btnLoadIcon: 'mdi-chevron-down',

        // access_token: '176908350.1677ed0.3c30032e917a430e8d1f65eae2223b1e',
        // url: 'https://api.instagram.com/v1/users/self/media/recent/',
        // username: this.data.data[0].user.username,
        // grams: this.data.data,
        // next_url: this.data.pagination.next_url,
        // error: false
        access_token: '176908350.1677ed0.3c30032e917a430e8d1f65eae2223b1e',
        url: 'https://api.instagram.com/v1/users/self/media/recent/',
        username: '',
        grams: [],
        next_url: '',
        loading: true,
        error: false
      }
    },
    computed: {
      instapage() {
        return 'https://www.instagram.com/' + this.username
      }
    },
    methods: {
      getGrams() {
        axios.get(this.url + '?access_token=' + this.access_token)
          .then(({data}) => {
            this.grams = data.data
            this.username = data.data[0].user.username
            this.next_url = data.pagination.next_url
            this.loading = false
          })
          .catch(function (error) {
            console.log(error)
            this.error = true
          })
      },
      getMoreGrams() {
        axios.get(this.next_url)
          .then(({data}) => {
            this.grams = this.grams.concat(data.data)
            this.next_url = data.pagination.next_url
          })
          .catch(function (error) {
            console.log(error)
            this.error = true
          })
      }
    },
    created() {
      this.getGrams()
    }
  }
</script>

<style lang="stylus">
  .Works
    &List
      &Item
        padding: 25px

        &Img
          width: 100%
          display: block
</style>
