<template>
    <div class="card-wrap">
        <div class="card">
            <h3 class="title">{{ title }}</h3>
            <img class="image" alt="project_img" :src="require(`@/assets/${image}`)" height="64" width="64">
            <p class="description">{{ description }}</p>
            <button class="expand" @click="handle_expand">En savoir plus</button>
        </div>
        <div class="card-expanded" v-if="expand">
            <div class="expanded-black">
                <div class="expanded-page">
                    <div class="close-expanded">
                        <button @click="handle_expand()">X</button>
                    </div>
                    <div class="expanded-content">
                        <h2 class="title-expanded">{{ title }}</h2>
                    <p v-for="paragraph in paragraphs" :key="paragraph.id">
                        {{ paragraph.text }}<br><br>
                    </p>
                    <button onclick="location.href = '{{ github }}'">Github</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data: () => ({
        expand: false,
    }),
    props: {
        title: String,
        description: String,
        image: String,
        start_date: String,
        end_date: String,
        paragraphs: Array,
        github: String,
    },
    methods: {
        handle_expand(){
            this.expand = !this.expand;
        }
    }
}
</script>

<style scoped>
.card-wrap{
    display: flex;
}
.card{
    padding: 10%;
    width: 25vw;
    border: 1px solid white;
    border-radius: 15px;
    flex: 0 0 100%;
}
.card:hover{
    transition: 0.1s linear;
    transform: scale(1.05);
    box-shadow: 0px 0px 15px goldenrod;
}
.title{
    font-size: 24px;
}
.image{
    margin-left: auto;
    margin-right: auto;
    margin-top: 3vh;
    margin-bottom: 3vh;
}
.description{
    font-size: 1.75vh;
    height: 15vh;
}
.expand{
    padding: 2%;
    border: 1px solid white;
    border-radius: 10px;
    margin-top: auto;
    margin-bottom: 2vh;
}
.expand:hover{
    transition: 0.1s linear;
    transform: scale(1.05);
    box-shadow: 0px 0px 15px cyan;
}

.card-expanded{
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}
.expanded-black{
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
}
.expanded-content{
    position: absolute;
    top: 5vh;
    left: 50%;
    transform: translate(-50%, 0%);
}
.close-expanded{
    position: absolute;
    left: 95vw;
    top: 1vh;
    height: 0.5vw;
    width: 0.5vw;
    font-size: 30px;
}
.close-expanded button{
    background-color: rgba(0,0,0,0.8);
    border: 1px solid white;
    padding: 10px;
    border-radius: 50px;
}
.close-expanded button:hover{
    transition: 0.1s linear;
    transform: scale(1.05);
    box-shadow: 0px 0px 15px red;
}
.title-expanded{
    font-size: 5vh;
    margin-bottom: 5vh;
}
</style>