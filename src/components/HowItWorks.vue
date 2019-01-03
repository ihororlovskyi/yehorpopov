<template>
  <v-layout row wrap class="Hiw mb-5">
    <div class="fs24 fw800">{{ data.title }}</div>
    <ul>
      <li class="HiwItem" v-for="i in data.list" :key="i.title">
        <img class="HiwItemImg" :src="i.img" alt="">
        <div class="fs24 fw800">{{ i.title }}</div>
        <ul>
          <li v-for="ii in i.description" :key="i.p">{{ ii.p }}</li>
        </ul>
      </li>
    </ul>
    <v-btn outline class="mx-0">
      Заказать просчет
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
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
  .Hiw
    //
    &Item
      //

      &Img
        width: 400px
        display: block
</style>
