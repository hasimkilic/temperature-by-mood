<template>
  <Temperature class="body" />
</template>

<script>
import Temperature from './components/Temperature.vue'

export default {
  name: 'App',
  components: {
    Temperature
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:#fff;
  list-style-type: none;
}
.body{
  height: 100vh;
  max-width: 100%;
  background-color: rgb(231, 210, 210);
  overflow:hidden;
}
</style>

