<template>
  <div class="container">
    <h1>Random Quote Generator</h1>

    <p v-if="loading">Loading...</p>
    <p v-else>"{{ quote }}"</p>
    <p class="author" v-if="author">- {{ author }}</p>

    <button @click="getQuote">Get New Quote</button>
    <GoBackButton />

  </div>
</template>

<script>
import axios from 'axios'
import GoBackButton from '../components/GoBackButton.vue'

export default {
  name: 'RandomQuotes',
  components: { GoBackButton },
  data() {
    return {
      quote: '',      
      author: '',     
      loading: false  
    }
  },
  methods: {
    async getQuote() {
      this.loading = true
      try {
        const response = await axios.get(
          'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en',
          {
            headers: {
              'x-rapidapi-host': 'quotes15.p.rapidapi.com',
              'x-rapidapi-key': '75c0a7dee7msh404783473d0c539p150843jsn501fa63b6d21'
            }
          }
        )
        this.quote = response.data.content
        this.author = response.data.originator.name
      } catch (error) {
        console.error('Error fetching quote:', error)
        this.quote = 'Oops! Something went wrong.'
        this.author = ''
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    this.getQuote()  
  }
}
</script>

<style>
.container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 50px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.author {
  font-style: italic;
  color: #555;
  margin-top: 5px;
}
</style>
