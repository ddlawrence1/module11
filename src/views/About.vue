<template>
  <div>
    <h1>About</h1>
    <p>Welcome! This is the About page of my Module11 SPA.</p>
    <GoBackButton /> 
  </div>
</template>

<script>
import GoBackButton from '../components/GoBackButton.vue'

export default {
  name: "AboutPage",
    components: { GoBackButton }
}
</script>
