<template>
  <button @click="goBack" class="go-back-btn">
    ← Go Back
  </button>
</template>

<script>
export default {
  name: 'GoBackButton',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.go-back-btn {
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}
.go-back-btn:hover {
  background-color: #2c8f6b;
}
</style>
