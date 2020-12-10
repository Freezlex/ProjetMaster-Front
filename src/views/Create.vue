<template>
  <h1>Créer un nouvel élément</h1>
  <form>
    <input class="form-control mr-xl-3" type="text" placeholder="Recherche" @keyup="createRequest()" v-model="searchField" />
    <input class="form-control mr-xl-3" type="text" placeholder="Recherche" @keyup="createRequest()" v-model="searchField" />
  </form>
</template>

<script>
export default {
  name: "Create"
}
</script>

<style scoped>

</style>
