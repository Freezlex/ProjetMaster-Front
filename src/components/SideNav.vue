<template>
  <div class="sidenav">
    <h1 class="login-main-text">Projet Master <br>Histoire</h1>
    <button class="btn btn-white" @click="create">Créer</button>
  </div>

</template>

<script>

export default {
  name: "SideNav",
  props:{
    msg: String
  },
  methods: {
    async create(){
      await this.$router.push({path: 'create'})
    }
  }
}
</script>
<style type="text/css">


  .sidenav {
    height: 100%;
    background-image: url("https://www.bibliotheque-humaniste.fr/fileadmin/_processed_/4/f/csm_Rhenana_61d8d6082c.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    /*background-color: #000;*/
    overflow-x: hidden;
    padding-top: 20px;
  }



  @media screen and (max-height: 450px) {

  }

  @media screen and (max-width: 450px) {


  }

  @media screen and (min-width: 768px) {

    .sidenav {
      width: 40%;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
    }


    .login-main-text {
      margin-top: 20%;
      padding: 60px;
      color: #fff;
    }

    .login-main-text h2 {
      font-weight: 300;
    }
  }

  .btn-white{
    background-color: #FFFFFF !important;
    color: #000000;
  }
</style>
