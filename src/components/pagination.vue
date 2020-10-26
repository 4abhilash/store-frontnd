<template>

 <div class="text-center">
    <v-pagination
      v-model="page"
      :length="2"
      circle
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
   data () {
      return {
        page: 1,
      }
    },
}
</script>

