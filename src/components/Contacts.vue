<template>
  <v-layout row wrap class="Contacts mb-5">
    <v-flex xs12>
      <v-layout row wrap class="mb-5">
        <v-flex xs12>
          <div class="fs24 fw800 mb40">{{ data.title }}</div>
        </v-flex>
        <v-flex xs4>
          <v-btn
            small
            class="ma-0 px-0"
            style="min-width:28px"
            flat
            v-for="i in social"
            v-if="i.link"
            :key="i.key"
            :href="i.link"
            target="_blank"
          >
            <v-icon small v-if="i.icon">{{ i.icon }}</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs4>
          <div v-html="data.text"/>
        </v-flex>
        <v-flex xs4>
          <div>{{ data.email }}</div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap class="mb-5">
        <v-flex xs12>
          <iframe class="ContactsMap"
            :src="'https://www.google.com/maps/embed/v1/place?q=' + data.mapLocation + '&key=AIzaSyBETsKlJoUTKVLYIAe7O_CkVWwAsjiWhVw'"
            allowfullscreen
          />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: [
      'data',
      'social'
    ]
  }
</script>

<style lang="stylus">
  .Contacts
    &Map
      width: 100%
      height: 450px
      border: none
</style>
