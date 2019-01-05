<template>
  <v-layout row wrap class="Contacts mb-5">
    <v-flex xs12>
      <v-layout row wrap class="mb-5">
        <v-flex xs12>
          <div class="fs24 fw800 mb40">Контакты</div>
        </v-flex>
        <v-flex xs4>
          <v-btn small class="ma-0 px-0" style="min-width:28px" flat v-for="i in socialMenu" :key="i.key" :href="i.url" target="_blank">
            <v-icon small>{{ i.icon }}</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs4>
          <div>
            Киев<br>
            ул Петрова, оф. 17<br>
            +380 95 126 36 80
          </div>
        </v-flex>
        <v-flex xs4>
          <div>yehorpopov@gmail.com</div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap class="mb-5">
        <v-flex xs12>
          <iframe class="ContactsMap"
            src="https://www.google.com/maps/embed/v1/place?q=kyiv&key=AIzaSyBETsKlJoUTKVLYIAe7O_CkVWwAsjiWhVw"
            allowfullscreen
          />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        socialMenu: [
          { key: 'facebook', icon: 'mdi-facebook', url: 'https://www.instagram.com/sentimony.records/', target: 'true' },
          { key: 'instagram', icon: 'mdi-instagram', url: 'https://www.facebook.com/sentimony.records/', target: 'true'}
        ]
      }
    },
  }
</script>

<style lang="stylus">
  .Contacts
    &Map
      width: 100%
      height: 450px
      border: none
</style>
