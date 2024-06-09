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
         <a href="https://drive.google.com/file/d/1FD-jLYJqIkqHwtXPglh2Wik6SN76mMYu/view?usp=drive_link" target="_blank">
            <button type="button"
               class="w-max h-auto flex items-center px-5 py-3 rounded-full text-tprimary button-bg">
               View Resume <Icon class="ml-2"
                  icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"></Icon>
            </button>
         </a>
      </div>
      <div class="image h-max mt-24 rounded-lg">
         <transition name="fade" mode="out-in">
            <img class="rounded-lg" :key="currentIndex" :src="currentImage" :alt="altText" />
         </transition>
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

const startSlideShow = () => {
   setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % images.length;
      currentImage.value = images[currentIndex.value];
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
   animation: gradientAnimation 1s ease infinite;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
}

.image:hover {
   transform: scale(1.1);
   transition: transform 0.3s ease;
   box-shadow: 0 0 10px #ffffff;
}

.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
   opacity: 0.1;
}

@keyframes gradientAnimation {
   0% {
      background-position: 0% 50%;
   }

   50% {
      background-position: 100% 50%;
   }

   100% {
      background-position: 0% 50%;
   }
}
</style>