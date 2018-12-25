<template>
  <v-layout row wrap class="Hero mb-5">
    <v-flex xs4>
      <div>Выберите дизайн проект, а мы сделаем перепланировку, ремонт и архитекторский надзор за 60 дней</div>
      <div>Егор Попов</div>
      <div>Главный архитектор дизайн студии</div>
    </v-flex>
    <v-flex xs8>
      <v-layout>
        <v-flex xs4 v-for="i in projects" :key="i.slug" v-if="i.homeTopImg">
          <a class="topImgItem"
            @click="onLoadProject(i.slug)"
            :style="'background-image:url(' + i.homeTopImg + ')'"
          >
            <div :class="'topImgItem__hover topImgItem__hover--' + i.slug">
              <div class="topImgItem__title">{{ i.shorttitle }}</div>
              <v-btn outline class="mx-0 mt-4">
                Подробнее
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </a>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: [
      'projects'
    ],
    methods: {
      onLoadProject (slug) {
        this.$router.push('/project/' + slug)
      }
    }
  }
</script>

<style lang="stylus">
  .Hero
    // display block

  .topImgItem
    display block
    min-height 460px
    position relative
    overflow hidden
    background-size cover
    background-position center bottom

    &:hover
      .topImgItem__hover
        bottom 0

    &__hover
      height 190px
      position absolute
      bottom -150px
      left 0
      width 100%
      // z-index 10
      transition: bottom .1s ease
      padding 7px 12px

      &--minimalism
        background-color #f2f2f2

      &--le-corbusier
        background-color #e8ca6a

      &--brutal-electricity
        background-color #b17629

    &__title
      font-weight 800
      color #262626
      font-size 17px


</style>
