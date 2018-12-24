<template>
  <v-app>
    <app-header></app-header>
    <v-container>
      <v-layout>
        <v-flex>
          <nuxt/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import AppHeader from '@/components/Header'

  export default {
    components: {
      AppHeader
    },
    methods: {
      reloadPage () {
        window.location.reload()
      }
    }
  }
</script>

<style>
</style>
