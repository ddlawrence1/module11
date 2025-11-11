<template>
  <div id="app">
    <!-- Navigation -->
    <nav>
      <router-link to="/about">About</router-link> |
      <router-link to="/quotes">Random Quotes</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>

    <!-- Routed pages appear here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
nav {
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
}

router-link {
  margin-right: 10px;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

router-link:hover {
  text-decoration: underline;
}
</style>
