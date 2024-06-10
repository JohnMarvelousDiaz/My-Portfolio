<template>
   <div class="h-screen flex mx-60 pt-20">
      <div class="w-[1500px] flex flex-col pt-32">
         <div class="flex flex-col gap-y-2 mb-12">
            <span class="text-5xl font-inconsolata animated-text">
               Hello, I am
            </span>
            <span class="text-5xl font-semibold animated-text">
               John Marvelous S. Diaz.
            </span>
            <span class="text-5xl font-inconsolata animated-text">
               Frontend Developer
            </span>
         </div>
         <div class="w-[570px] flex flex-col gap-y-2 mb-12">
            <span class="text-sm text-tprimary">{{ description }}</span>
         </div>
         <a href="https://drive.google.com/file/d/1FD-jLYJqIkqHwtXPglh2Wik6SN76mMYu/view?usp=drive_link"
            target="_blank">
            <button type="button" class="w-max h-auto flex items-center px-5 py-3 rounded-full text-tprimary button-bg">
               View Resume <Icon class="ml-2"
                  icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"></Icon>
            </button>
         </a>
      </div>
      <div class="image w-[800px] h-max flex items-center mt-24 rounded-lg">
         <img :class="['rounded-lg', 'shadow-custom', 'transition-opacity', fadeClass]" :key="currentIndex" :src="currentImage" :alt="altText" />
      </div>
   </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';

const description = "As a frontend developer, I specialize in crafting immersive digital experiences through sleek, intuitive interfaces. Leveraging HTML, CSS, and JavaScript along with frameworks like React.js, Vue.js, and Tailwind CSS, I meticulously scrutinize every detail of my work. With a dedication to perfection, I ensure that every aspect of the user experience is seamless and captivating."

const images = [
   image1,
   image2,
   image3,
];

const altText = ref('Slideshow Image');
const currentIndex = ref(0);
const currentImage = ref(images[currentIndex.value]);
const fadeClass = ref('');

const startSlideShow = () => {
   setInterval(() => {
      fadeClass.value = 'opacity-0';
      setTimeout(() => {
         currentIndex.value = (currentIndex.value + 1) % images.length;
         currentImage.value = images[currentIndex.value];
         fadeClass.value = 'opacity-100';
      }, 500);
   }, 5000);
};

onMounted(() => {
   startSlideShow();
});
</script>

<style scoped>
.animated-text {
   background-image: linear-gradient(45deg, #8e60d6, #22a3c7, #72ff6a);
   background-size: 200% 200%;
   animation: gradientAnimation 3s ease infinite;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
}

.image:hover {
   transform: scale(1.1);
   transition: transform 0.3s ease;
}

.transition-opacity {
   transition: opacity 0.5s ease;
}

@keyframes gradientAnimation {
   0% {
      background-position: 0% 50%;
      text-shadow: 0 0 10px #8d60d680;
   }

   50% {
      background-position: 100% 50%;
      text-shadow: 0 0 10px #72ff6a80;
   }

   100% {
      background-position: 0% 50%;
      text-shadow: 0 0 10px #22a3c780;
   }
}
</style>
