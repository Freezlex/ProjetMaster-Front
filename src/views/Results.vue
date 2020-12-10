<template>
  <h1>{{document}}</h1>
  <p>{{data}}</p>
</template>

<script>
import axios from 'axios'

export default {
  name: "Results",
  data(){
    return{
      document: "await result",
      data: ""
    }
  },
  async mounted() {
    axios.get(`http://localhost:4500/document?id=${await this.$route.query.doc}`)
    .then(async response => {
      return this.data = await response.data.res;
    })
    return this.document = this.$route.query.doc
  }
}
</script>

<style scoped>

</style>
