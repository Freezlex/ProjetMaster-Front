<template>
    <div class="main">
        <div class="form-text">
            <div class="search-view">
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark" v-if="!filtered">
                <span class="navbar-brand" href="#">Recherche</span>
                <input class="form-control mr-xl-3" type="text" placeholder="Recherche" @keyup="createRequest()" v-model="searchField" />
                <input class="form-control mr-xl-3" type="number" placeholder="Date début" @keyup="createRequest()" v-model="startDate" />
                <input class="form-control mr-xl-3" type="number" placeholder="Date fin" @keyup="createRequest()" v-model="endDate" />
              </nav>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark" v-else>
                <span class="navbar-brand" href="#">Recherche avancée</span>
                <input class="form-control mr-xl-3" type="text" placeholder="Recherche" @keyup="createRequest()" v-model="searchField" />
                <input class="form-control mr-xl-3" type="text" placeholder="Recherche" @keyup="createRequest()" v-model="searchField" />
                <input class="form-control mr-xl-3" type="text" placeholder="Recherche" @keyup="createRequest()" v-model="searchField" />
                <input class="form-control mr-xl-3" type="number" placeholder="Date début" @keyup="createRequest()" v-model="startDate" />
                <input class="form-control mr-xl-3" type="number" placeholder="Date fin" @keyup="createRequest()" v-model="endDate" />
                <button id="voir" class="btn btn-black" :doc="value.id" @click="advancedRequest($event)">Voir plus</button>
              </nav>

              <ul class="list-group-item" v-for="value in result" v-bind:key="value.id">
                  <li class="sujet">{{ value.sujet }}</li>
                  <li class="author"> <strong>Date</strong> : {{ value.date + (value['date_max'] ? ` - ${value['date_max']}`: '') }}</li>
                  <li class="author"> <strong>Auteur</strong> : {{ value.auteur }}</li>
                  <img v-if="value.img" :src="value.img" :alt="value.auteur">
                <button id="voir" class="btn btn-black" :doc="value.id" @click="redirect($event)">Voir plus</button>

              </ul>
             </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import 'bootstrap';


export default {
  name: "SearchView",
  data(){
    return{
      filtered: false,
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
        console.log(response.data)
        if(!response.data.res)return this.api = {};
        return this.result = response.data.res
      })
    },
    async redirect(item){
      if(!item.target)return;
      await this.$router.push({path: 'result', query: { doc: await item.target.getAttribute("doc")}})
    }
  }
}
</script>

<style type="text/css">


    .sujet {
        font-size: 1.5em;
    }

ul{
    list-style-type: none;
}

.author{
    margin-right: auto;
}

    #voir:hover {
        color: lightgray;
    }

    #voir {
        color: white;
        margin-left: 70%;
        margin-top: -9%;
    }

    .form-text{
        margin-top: 5%;
    }
    .main{
        margin: auto;

    }
    .main-head{
        height: 150px;
        background: #FFF;

    }

    .sidenav {
        height: 100%;
        background-color: #000;
        overflow-x: hidden;
        padding-top: 20px;
    }


    .main {
        padding: 0px 10px;
    }

    @media screen and (max-height: 450px) {

    }

    @media screen and (max-width: 450px) {


        .register-form{

        }
    }

    @media screen and (min-width: 768px){
        .main{
            margin-left: 40%;
        }

        .sidenav{
            width: 40%;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
        }

        .login-form{
            margin-top: 80%;
        }

        .register-form{
            margin-top: 20%;
        }
    }


    .login-main-text{
        margin-top: 20%;
        padding: 60px;
        color: #fff;
    }

    .login-main-text h2{
        font-weight: 300;
    }

    .btn-black{
        background-color: #000 !important;
        color: #fff;
    }
</style>
