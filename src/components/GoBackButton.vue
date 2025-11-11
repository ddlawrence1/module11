<template>
  <button @click="goBack">Go Back</button>
</template>

<script>
export default {
  name: "GoBack",
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style>
button {
  margin-top: 20px;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
}
</style>
