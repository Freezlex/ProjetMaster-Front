<template>
  <div class="sidenav">
    <h1 class="login-main-text">Projet Master <br>Histoire</h1>
  </div>

</template>

<script>

export default {
  name: "SideNav",
  props:{
    msg: String
  }
}
</script>
<style type="text/css">


  .sidenav {
    height: 100%;
    background-color: #000;
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


</style>
