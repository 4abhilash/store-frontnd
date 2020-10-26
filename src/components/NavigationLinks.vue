<template>
 <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify ="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        block
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="13"
      >
        {{ new Date().getFullYear() }} — <strong>Yoga Store</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'NavigationLinks',
  data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
}
</script>

