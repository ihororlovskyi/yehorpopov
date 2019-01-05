<template>
  <v-layout row wrap class="Works mb-5">
    <v-flex xs6>
      <div class="fs24 fw800 mb-4">Наши работы</div>
      <div>@eyhorpopov</div>
      <div>Главный архитектор дизайн студии</div>
    </v-flex>
    <v-flex xs6 class="text-xs-right">
      <v-btn outline class="mx-0">
        <v-icon left>{{ btnIcon }}</v-icon>
        {{ btnText }}
      </v-btn>
    </v-flex>
    <v-layout row wrap class="WorksList mb-5">
      <v-flex xs4 v-for="i in worksList" :key="i.img" class="WorksListItem">
        <img class="WorksListItemImg" :src="i.img" alt=""></div>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        worksList: [
          { img: 'https://images.unsplash.com/photo-1545652144-6b11c89f8aa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=700&q=69' },
          { img: 'https://images.unsplash.com/photo-1546012112-142c81b59a42?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=700&q=69' },
          { img: 'https://images.unsplash.com/photo-1496616481515-56fd775bb2f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=700&q=69' },
          { img: 'https://images.unsplash.com/photo-1546012112-142c81b59a42?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=700&q=69' },
          { img: 'https://images.unsplash.com/photo-1545652144-6b11c89f8aa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=700&q=69' },
          { img: 'https://images.unsplash.com/photo-1496616481515-56fd775bb2f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=700&q=69' },
          { img: 'https://images.unsplash.com/photo-1545652144-6b11c89f8aa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=700&q=69' },
          { img: 'https://images.unsplash.com/photo-1496616481515-56fd775bb2f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=700&q=69' },
          { img: 'https://images.unsplash.com/photo-1546012112-142c81b59a42?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=700&q=69' },
        ],
        btnText: 'Follow',
        btnIcon: 'mdi-instagram'
      }
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
