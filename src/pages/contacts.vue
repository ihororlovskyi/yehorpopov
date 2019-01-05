<template>
  <section>
    <contacts :data="contacts"/>
  </section>
</template>

<script>
  import Contacts from '@/components/Contacts'

  export default {
    components: {
      Contacts
    },
    async asyncData() {
      const responseContacts = await fetch('https://yehorpopov-db.firebaseio.com/contacts.json')
      const contacts = await responseContacts.json()
      return { contacts }
    }
  }
</script>

<style lang="stylus">
</style>
