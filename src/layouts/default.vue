<template>
  <section>
    <v-app>
      <app-header></app-header>
      <v-container class="MainContainer">
        <nuxt/>
      </v-container>
    </v-app>
  </section>
</template>

<script>
  import AppHeader from '@/components/Header'

  export default {
    components: {
      AppHeader
    }
  }
</script>

<style lang="stylus">
  .MainContainer
    margin-top 64px
</style>
