<template>
  <section>
    <v-app>
      <app-header></app-header>
      <v-container class="MainContainer">
        <div v-if="loading" class="text-xs-center">
          <v-progress-circular
            indeterminate
            :size="60"
            color="black"
          />
        </div>
        <nuxt v-else/>
      </v-container>
    </v-app>
  </section>
</template>

<script>
  import AppHeader from '@/components/Header'

  export default {
    components: {
      AppHeader
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>

<style lang="stylus">
  .MainContainer
    margin-top 64px
</style>
