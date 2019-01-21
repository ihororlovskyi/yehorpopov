<template>
  <section>
    <v-app>

      <v-toolbar flat fixed class="Header">

        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat @click="onLoadPage(home.url)" exact>
            <v-icon left>{{ home.icon }}</v-icon>
            <span>{{ home.title }}</span>
          </v-btn>
        </v-toolbar-items>
        <v-spacer class="hidden-md-and-down"/>
        <v-toolbar-items class="hidden-md-and-down">
          <v-btn flat v-for="i in menu" :key="i.key" @click="onLoadPage(i.url)">
            <span>{{ i.title }}</span>
          </v-btn>
        </v-toolbar-items>
        <v-spacer class="hidden-md-and-down"/>
        <v-toolbar-items class="hidden-md-and-down">
          <v-btn flat v-for="i in socialMenu" :key="i.key" :href="i.url" target="_blank">
            <v-icon small>{{ i.icon }}</v-icon>
          </v-btn>
        </v-toolbar-items>

        <v-spacer class="hidden-lg-and-up"/>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up">
          <v-icon>mdi-menu</v-icon>
        </v-toolbar-side-icon>

      </v-toolbar>

      <!-- <app-header></app-header> -->

        <!-- <div v-if="loading" class="text-xs-center">
          <v-progress-circular
            indeterminate
            :size="60"
            color="black"
          />
        </div>
        <nuxt v-else/> -->

      <!-- <v-content> -->
        <v-container class="MainContainer">
          <nuxt/>
        </v-container>
      <!-- </v-content> -->

      <v-navigation-drawer
        persistent
        v-model="drawer"
        app
        right
      >
        <!-- <v-toolbar flat class="transparent" dense> -->
          <v-list>

            <v-list-tile exact :to="home.url">
              <v-list-tile-action>
                <v-icon>{{ home.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ home.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider/>

            <v-list-tile
              v-for="i in menu"
              :key="i.url"
              :to="i.url"
            >
              <v-list-tile-action>
                <v-icon>{{ i.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ i.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider/>

            <v-list-tile
              v-for="i in socialMenu"
              :key="i.url"
              :href="i.url"
              target="_blank"
            >
              <v-list-tile-action>
                <v-icon>{{ i.icon }}</v-icon>
              </v-list-tile-action>
              <!-- <v-list-tile-content>
                <v-list-tile-title>{{ i.title }}</v-list-tile-title>
              </v-list-tile-content> -->
            </v-list-tile>

            <v-divider/>
          </v-list>

        </v-toolbar>
      </v-navigation-drawer>

    </v-app>
  </section>
</template>

<script>
  // import AppHeader from '@/components/Header'
  //
  // export default {
  //   components: {
  //     AppHeader
  //   },
  //   // computed: {
  //   //   loading () {
  //   //     return this.$store.getters.loading
  //   //   }
  //   // }
  // }

  export default {
    data () {
      return {
        drawer: false,
        home: { key: 'home', title: 'Studio Yehor Popov', icon: 'mdi-circle', url: '/' },
        menu: [
          { key: 'projects', title: 'Проекты', url: '/projects' },
          { key: 'howitworks', title: 'Как мы работаем', url: '/how-it-works' },
          { key: 'works', title: 'Наши работы', url: '/works' },
          { key: 'team', title: 'Команда', url: '/team' },
          { key: 'contacts', title: 'Контакты', url: '/contacts' }
        ],
        socialMenu: [
          { key: 'telegram', icon: 'mdi-telegram', url: 'https://www.instagram.com/sentimony.records/', target: 'true' },
          { key: 'facebook', icon: 'mdi-facebook', url: 'https://www.instagram.com/sentimony.records/', target: 'true' },
          { key: 'instagram', icon: 'mdi-instagram', url: 'https://www.facebook.com/sentimony.records/', target: 'true'}
        ]
      }
    },
    methods: {
      onLoadPage (url) {
        // drawer = !drawer
        this.$router.push(url)
      }
    }
  }
</script>

<style lang="stylus">
  .MainContainer
    margin-top 64px !important
</style>
