<template>
  <v-layout row wrap class="Features mb-5">
    <v-flex xs4 v-for="i in features" :key="i.id">
      <div class="FeaturesItem">
        <div class="FeaturesItemTitle">{{ i.title }}</div>
        <div class="FeaturesItemDescription">{{ i.description }}</div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        features: [
          { id: '01', title: '1к кв.', description: 'Авторский функциональный дизайн smart квартир' },
          { id: '02', title: '60 дней', description: 'Срок готовности ремонта вашей квартиры под ключ' },
          { id: '03', title: '3 проекта', description: 'Реализованых дизайнов c индивидуальным проектом и перепланиркой квартир' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  .Features
    // margin 0 0 40px

    &Item
      padding-right 20px

      &Title
        font-weight 800
        font-size 32px

      &Description
        // display block
</style>
