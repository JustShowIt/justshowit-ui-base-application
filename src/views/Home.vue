<template>
  <div class="home">
    <Search msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
  name: 'home',
  components: {
    Search
  }
}
</script>
