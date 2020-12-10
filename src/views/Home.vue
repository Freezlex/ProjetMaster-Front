<template>
  <div class="home">
    <SideNav class="side-nav-element" msg="Projet Master"/>
    <SearchView class="search-view-element"></SearchView>
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from "@/components/SideNav";
import SearchView from "@/components/SearchView";

export default {
  name: 'Home',
  components: {
    SearchView,
    SideNav
  }
}
</script>

<style>
</style>
