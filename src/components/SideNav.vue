<template>
  <div class="side-nav">
    <h1 class="login-main-text">{{ msg }}</h1>
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
<style scoped>
.side-nav {
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
}
.login-main-text{
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

</style>
