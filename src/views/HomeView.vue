<template>
  <div class="home">
    <Carousel></Carousel>
    <h1>Bienvenue</h1>
    <TextImage :image-left="true" :title="'Qui suis-je ?'" :paragraph1="'Je suis Maïken D\'Angelo, étudiante en BUT Informatique à l\'IUT Nord Franche-Comté à Belfort.'"
    :paragraph2="'Passionnée de l\'informatique, amoureuse de l\'art et de la nature depuis des années, j\'ai l\'objectif de me plonger dans la réalisation d\'un jeu vidéo, et de son moteur evidemment ! '"
    :BtnTxt="'En savoir plus'" :isButton="true" :BtnPath="'/about'" @navigation="navigate" :image-src="'logo.png'">
  </TextImage>
  <TextImage :image-left="false" :title="'Qui suis-je ?'" :paragraph1="'Je suis Maïken D\'Angelo, étudiante en BUT Informatique à l\'IUT Nord Franche-Comté à Belfort.'"
    :paragraph2="'Passionnée de l\'informatique, amoureuse de l\'art et de la nature depuis des années, j\'ai l\'objectif de me plonger dans la réalisation d\'un jeu vidéo, et de son moteur evidemment ! '"
    :BtnTxt="'En savoir plus'" :isButton="true" :BtnPath="'/about'" @navigation="navigate" :image-src="'logo.png'">
  </TextImage>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import TextImage from '@/components/TextImage.vue';
import router from "@/router/index"; // Il faudrait mettre le navigate et le router dans le store et mapper tout ça

export default {
  name: "HomeView",
  components: {
    Carousel,
    TextImage,
  },
  methods: {
    navigate(path){
      if(path !== router.currentRoute){
        console.log(path);
        router.push(path);
      }
    }
  },
};
</script>
