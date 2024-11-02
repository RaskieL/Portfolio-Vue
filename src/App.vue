<template>
  <div class="text-teal-100 bg-sky-950 aspect-auto font-mono text-base font-normal tracking-wide">
  <nav>
    <NavBar :routes="routes" @navigation="navigate"></NavBar>
  </nav>
  <router-view class="body" />
  <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import router from "@/router/index";
import FooterComponent from "@/components/FooterComponent.vue";
import { mapActions } from "vuex";

export default {
  data: () => ({
    routes: router.getRoutes(),
  }),
  components:{
    NavBar,
    FooterComponent,
  },
  methods: {
    ...mapActions(['getPortfolio']),
    navigate(path){
      if(path !== router.currentRoute){
        router.push(path);
      }
    }
  },
  mounted() {
    this.getPortfolio();
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
}
.body{
  margin: 1cm;
}
</style>
