<template>
    <div class="navbar">
        <div class="nav-logo">
            <a @click="handleClick('/')"><img src="../assets/logo.png" alt="navlogo" width="48" height="48"></a>
        </div>
        <div class="nav-links">
            <button v-for="(route) in routes" :key="route.name" class="nav-button" @click="handleClick(route.path)">{{ route.name }}</button>
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
}
.nav-logo{
    justify-content: left;
}
.nav-logo img{
    margin-left: 1vw;
    border-radius: 100px;
    padding: 0.2vw;
    box-shadow: 0px 0px 20px #399fe1;
}
.nav-logo img:hover{
    cursor:grab;
    transition: 0.1s linear;
    transform:scale(1.25);
    box-shadow: 0px 0px 30px #399fe1;
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
    border: none;
    border-radius: 15px;
}
.nav-button:hover{
    cursor:grab;
    transition: 0.15s linear;
    transform:scale(1.05);
    box-shadow: 0px 0px 15px #399fe1;
    background-color: rgba(20,20,20,0.1);
}
</style>