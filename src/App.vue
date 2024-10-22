<template>
  <nav>
    <NavBar :routes="routes" @navigation="navigate"></NavBar>
  </nav>
  <router-view class="body" />
  <FooterComponent></FooterComponent>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import router from "@/router/index";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  data: () => ({
    routes: router.getRoutes(),
  }),
  components:{
    NavBar,
    FooterComponent,
  },
  methods: {
    navigate(path){
      if(path !== router.currentRoute){
        router.push(path);
      }
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to){
        document.title = to.meta.title || "Maïken D'Angelo - Portfolio";
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgba(20,20,20,0.1);
  color: rgb(50,45,60);
}
.body{
  margin: 1cm;
}
</style>
