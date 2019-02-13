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
          <v-btn
            flat
            v-for="i in loadedSocialLinksSortedByOld"
            v-if="i.link"
            :key="i.key"
            :href="i.link"
            target="_blank"
          >
            <v-icon small v-if="i.icon">{{ i.icon }}</v-icon>
          </v-btn>
        </v-toolbar-items>

        <v-spacer class="hidden-lg-and-up"/>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up">
          <v-icon>mdi-menu</v-icon>
        </v-toolbar-side-icon>

      </v-toolbar>

      <!-- <v-content> -->
        <v-container class="MainContainer">
          <nuxt/>
        </v-container>
      <!-- </v-content> -->

      <v-navigation-drawer
        v-model="drawer"
        app
        right
      >
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
            :key="i.key"
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
            v-for="i in loadedSocialLinksSortedByOld"
            v-if="i.link"
            :key="i.key"
            :href="i.link"
            target="_blank"
          >
            <v-list-tile-action>
              <v-icon small v-if="i.icon">{{ i.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-if="i.title">{{ i.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider/>
        </v-list>
      </v-navigation-drawer>

    </v-app>
  </section>
</template>

<script>
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
        ]
      }
    },
    computed: {
      loadedSocialLinksSortedByOld () {
        return this.$store.getters.loadedSocialLinksSortedByOld
      }
    },
    methods: {
      onLoadPage (url) {
        this.$router.push(url)
      }
    }
  }
</script>

<style lang="stylus">
  .MainContainer
    margin-top 64px !important
</style>
