<template>
  <div class="home">
    <h1>Welcome to My Vue Router App</h1>
    <p>This is the home page for Module 11.</p>

    <nav>
      <router-link to="/about">About</router-link> |
      <router-link to="/quotes">Random Quotes</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
nav a {
  margin: 0 8px;
  text-decoration: none;
  color: #42b983;
}
</style>
