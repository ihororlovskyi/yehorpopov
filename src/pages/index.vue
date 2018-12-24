<template>
  <div>
    <div>Выберите дизайн проект, а мы сделаем перепланировку, ремонт и архитекторский надзор за 60 дней</div>
    <div>Егор Попов</div>
    <div>Главный архитектор дизайн студии</div>
    <div>
      <div v-for="i in releases" :key="i.slug">
        <!-- <router-link :to="'/release/' + i.slug + '/'">
          {{ i.title }}
        </router-link> -->
        <v-btn @click="onLoadProject(i.slug)">
          <!-- <v-icon left>mdi-key</v-icon> -->
          {{ i.title }}
        </v-btn>
      </div>
    </div>

    <h4>1к кв.</h4>
    <div>Авторский функциональный дизайн smart квартир</div>
    <h4>60 дней</h4>
    <div>Срок готовности ремонта вашей квартиры под ключ</div>
    <h4>3 проекта</h4>
    <div>Реализованых дизайнов c индивидуальным проектом и перепланиркой квартир</div>

    <h4>Дизайн проект Manhattan</h4>
    <div>
      Современный французский интерьер предпочитает стилистические акценты, выполненные с роскошью, шиком.<br>
      Представленный проект – атмосфера художественности, импровизации, случайности, беспорядка.
    </div>
    <div>Цена проекта и ремонта $500 / м2</div>
    <div>Подробнее</div>

    <h4>Дизайн проект Hannover</h4>
    <div>
      Индивидуальный проект перепланирки квартиры<br>
      Материалы для ремонта<br>
      Кухня<br>
      Ванная комната и туалет квартиры<br>
      Материалы для ремонта<br>
      Кухня<br>
      Ванная комната и туалет
    </div>
    <div>Цена проекта и ремонта $400 / м2</div>
    <div>Подробнее</div>

    <h4>Дизайн проект Manhattan</h4>
    <div>
      Современный французский интерьер предпочитает стилистические акценты, выполненные с роскошью, шиком.<br>
      Представленный проект – атмосфера художественности, импровизации, случайности, беспорядка.
    </div>
    <div>Цена проекта и ремонта $450 / м2</div>
    <div>Подробнее</div>

    <h4>Собственный проект</h4>
    <div>
      Индивидуальный проект перепланирки квартиры<br>
      Материалы для ремонта<br>
      Кухня<br>
      Ванная комната и туалет квартиры<br>
      Материалы для ремонта<br>
      Кухня<br>
      Ванная комната и туалет
    </div>
    <div>Цена проекта и ремонта $350 / м2</div>
    <div>Заказать просчет</div>

    <h4>Как мы работаем!</h4>
    <ol>
      <li>Знакомство</li>
      <li>Проектные работы</li>
      <li>Ремонтные работы</li>
      <li>Квартира готова! Можно заезжать!</li>
    </ol>
    <div>Заказать просчет</div>

    <h4>Наши работы</h4>
    <div>@eyhorpopov</div>
    <div>Главный архитектор дизайн студии</div>
    <div>Follow</div>

    <h4>Наша команда</h4>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
      Ut enim ad minim veniam, quis nostrud exercitation
    </div>
    <div>Егор Попов</div>
    <div>Главный архитектор дизайн студии</div>

    <div>Константин Проколов</div>
    <div>Старший архитектор студии</div>

    <div>Егор Попов</div>
    <div>Главный прораб студии</div>

    <div>Контакты</div>
    <div>facebook</div>
    <div>instagram</div>
    <div>
      Киев<br>
      ул Петрова, оф. 17<br>
      +380 95 126 36 80
    </div>
    <div>yehorpopov@gmail.com</div>

  </div>
</template>

<script>
  import fetch from 'isomorphic-fetch'

  export default {
    async asyncData() {
      const response = await fetch('https://yehorpopov-db.firebaseio.com/releases.json')
      const releases = await response.json()
      return { releases }
    },
    methods: {
      onLoadProject (slug) {
        this.$router.push('/release/' + slug)
      }
    }
  }
</script>

<style>
</style>
