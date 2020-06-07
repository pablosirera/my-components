<template>
  <div id="app">
    <h1>Mis componentes</h1>
    <TheButton>
      Soy un botón
    </TheButton>
  </div>
</template>

<script>
import TheButton from './components/TheButton.vue'

export default {
  name: 'App',
  components: {
    TheButton
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
