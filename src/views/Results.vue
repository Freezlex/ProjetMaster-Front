<template>
    <div class="list-group-result">
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
        <h1>{{data.sujet}}</h1>
      </a>
    </div>


    <div class="list-group groupe">
        <h2 class="document">Document : </h2>
        <br>
      <a href="#" class="list-group-item list-group-item-action ">
        <div class="d-flex w-100 justify-content-between">
          <h3 class="">Par : {{data.auteur}}</h3>
            <h3 class="mb-1">Type : {{data.type}}</h3>

            <small class="text-muted"> </small>
        </div>
      </a>
        <br>
        <h2 class="document">Localisation : </h2>
        <br>
        <a href="#" class="list-group-item list-group-item-action ">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="">Adresse : {{localisation.adresse}}</h6>
                <h6 class="mb-1">Code postal : {{localisation.code_postal}}</h6>

                <small class="text-muted"> </small>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action ">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="">Email : {{localisation.email}}</h6>
                <h6 class="mb-1">Intitule : {{localisation.intitule}}</h6>

                <small class="text-muted"> </small>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action ">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="">Telephone : {{localisation.telephone}}</h6>
                <h6 class="mb-1">Ville : {{localisation.ville}}</h6>

                <small class="text-muted"> </small>
            </div>
        </a>
        <br>
        <h2 class="document">Discipline : </h2>
        <br>
        <a href="#" class="list-group-item list-group-item-action ">
            <div class="d-flex w-100 justify-content-between">
                <h3 class="">Intitule : {{discipline.intitule}}</h3>

                <small class="text-muted"> </small>
            </div>
        </a>
        <br>
        <h2 class="document">Specialiste : </h2>
        <br>
        <a href="#" class="list-group-item list-group-item-action ">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="">Intitule : {{specialiste.email}}</h4>
                <h4 class="mb-1">Ville : {{specialiste.nom}}</h4>

                <small class="text-muted"> </small>
            </div>
        </a>



  </div>











</template>

<script>
import axios from 'axios'

export default {
  name: "Results",
  data(){
    return{
      document: "await result",
      data: "",
        localisation: "",
        discipline: "",
        specialiste: ""
    }
  },
  async mounted() {
    axios.get(`http://localhost:4500/document?id=${await this.$route.query.doc}`)
    .then(async response => {
console.log(response.data)
        this.localisation = await response.data.res.d_localisation
        this.discipline = await response.data.res.d_discipline
        this.specialiste = await response.data.res.d_specialiste
        return this.data = await response.data.res;
    })
    return this.document = this.$route.query.doc
  }
}
</script>

<style type="text/css">

    .localisation {
        margin-right: 50%;
    }

    .document {
        margin-right: 70%;
    }

  .list-group-result {
    padding: 1.5%;
  }

 .groupe {
     padding: 1.5%;
     width: 60%;
 }

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

  .sidenav-result {
    height: 100%;
    background-color: black;
    overflow-x: hidden;
    padding-top: 20px;
  }





  @media screen and (min-width: 768px){
    .main{
      margin-left: 40%;
    }

    .sidenav-result{
      width: 60%;
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
    }

    .login-form{
      margin-top: 80%;
    }

    .register-form{
      margin-top: 20%;
    }
  }


  .login-main-text-result {
    margin-right: 65%;
    padding: 60px;
  }

  .login-main-text-result h2{
    font-weight: 300;
  }

  .btn-black{
    background-color: #000 !important;
    color: #fff;
  }

</style>
