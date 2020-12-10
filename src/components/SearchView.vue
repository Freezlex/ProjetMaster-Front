<template>
  <div class="search-view">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <span class="navbar-brand" href="#">Recherche</span>
          <input class="form-control mr-xl-3" type="text" placeholder="Recherche" v-model="searchField" />
          <input class="form-control mr-xl-3" type="number" placeholder="Date début" v-model="startDate" />
          <input class="form-control mr-xl-3" type="number" placeholder="Date fin" v-model="endDate" />
          <button class="btn btn-primary" v-on:click="createRequest()">Rechercher</button>

        </nav>


        <li class="list-group-item" v-for="value in result" v-bind:key="value.id">
          <span class="author"> {{ value.sujet }}</span>
          <button @click="redirect()">REDIRECTION</button>
        </li>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchView",
  data(){
    return{
      searchField: "",
      result: null,
      startDate: null,
      endDate: null,
    }
  },
  mounted() {
    axios.get('http://localhost:4500/documents').then(response => {
      this.result = response.data.res
    })
  },
  methods:{
    async createRequest(){

      axios.post('http://localhost:4500/search', {
        "data": this.searchField,
        "date-min": this.startDate ? await parseInt(this.startDate, 10) : null,
        "date-max": this.endDate ? await parseInt(this.endDate, 10) : null
      }).then(response => {
        if(!response.data.res)return this.api = {};
        return this.result = response.data.res
      })
    },
    async redirect(){
      await this.$router.push('about')
    }
  }
}
</script>

<style scoped>

</style>
