<template>
    <div class="navbar">
        <div class="nav-logo">
            <a @click="handleClick('/')"><img src="../assets/logo.png" alt="navlogo" width="48" height="48"></a>
            <h1 class="text-2xl tracking-widest font-bold" style="width: 100%;">Maïken D'Angelo - Portfolio</h1>
        </div>
        <div class="nav-links">
            <button v-for="(route) in routes" :key="route.name" class="nav-button rounded-lg border border-cyan-100" @click="handleClick(route.path)">{{ route.name }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    methods:{
        handleClick(path){
            this.$emit('navigation', path);
        }
    },
    props:{
        routes: Array
    }
}
</script>

<style scoped>
.navbar{
    background-color: rgba(20,20,20,0.1);
    padding: 1%;
    display: flex;
    flex-direction: row;
    position: relative;
}
.nav-logo{
    display: flex;
    flex-direction: row;
    gap: 2%;
    justify-content: left;
    width: 33%;
}
.nav-logo img{
    margin-left: 1vw;
    border-radius: 100px;
    padding: 0.2vw;
}
.nav-logo img:hover{
    cursor:grab;
    transition: 0.15s linear;
    transform:scale(1.25);
    box-shadow: 0px 0px 20px #399fe1;
}
.nav-logo h1{
    margin: auto;
}
.nav-links{
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: 1%;
    justify-content: right;
    gap: 2%;
}
.nav-button{
    width: 10vw;
    height: 50px;
    padding: 5px;
}
.nav-button:hover{
    cursor:grab;
    transition: 0.15s linear;
    transform:scale(1.05);
    box-shadow: 0px 0px 15px #399fe1;
    background-color: rgba(20,20,20,0.1);
}
.title{
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-left: 5%;
}
</style>