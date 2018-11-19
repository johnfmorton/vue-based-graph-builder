<template>
  <div class="home">
    <h1>Bar Graph Maker</h1>
    <img alt="Mind Blowing" src="../assets/mindblowing.gif">
    <HomeWidget msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeWidget from '@/components/HomeWidget.vue'

export default {
  name: 'home',
  components: {
      HomeWidget
  }
}
</script>
