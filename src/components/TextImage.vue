<template>
    <div :class="{'containerL': imageLeft, 'containerR': !imageLeft}">
        <div class="image">
            <img :src="require(`../assets/${imageSrc}`)" alt="ParagraphImg">
        </div>
        <div class="text bg-slate-700">
            <h3>{{ title }}</h3>
            <p>{{ paragraph1 }}</p>
            <p>{{ paragraph2 }}</p>
            <p>{{ paragraph3 }}</p>
            <div v-if="isButton" class="buttons">
                <button class="btn" @click="btnClicked(BtnPath)">{{ BtnTxt }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TextImage",
        props: {
            imageLeft: Boolean,
            imageSrc: String,
            title: String,
            paragraph1: String,
            paragraph2: String,
            paragraph3: String,
            isButton: Boolean,
            BtnTxt: String,
            BtnPath: String,
        },
        methods: {
            btnClicked(path){
                console.log(path);
                this.$emit('navigation', path);
            }
        }
    }
</script>

<style scoped>
.containerL{
    display: flex;
    flex-direction: row;
    gap: 3vw;
    text-align: left;
    @apply bg-slate-500
}
.containerR{
    display: flex;
    flex-direction: row-reverse;
    gap: 3vw;
    text-align: right;
}
.text{
    display: flex;
    flex-direction: column;
}
</style>