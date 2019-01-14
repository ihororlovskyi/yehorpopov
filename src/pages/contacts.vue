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
    },
    head: {
      title: 'Contacts',
      meta: [
        { name: 'description', content: 'Contacts of Studio Yehor Popov ' },
        { property: 'og:image', content: '' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
