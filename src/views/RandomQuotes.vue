<template>
  <div>
    <h1>Random Quotes</h1>
    <p>{{ quote }}</p>
    <button @click="getQuote">Get Another Quote</button>

    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'RandomQuotesView',
  data() {
    return {
      quote: ''
    }
  },
  methods: {
    async getQuote() {
      try {
        const response = await fetch('https://api.quotable.io/random')
        const data = await response.json()
        this.quote = data.content
      } catch (error) {
        this.quote = 'Failed to load quote.'
      }
    }
  },
  mounted() {
    this.getQuote()
  }
}
</script>
