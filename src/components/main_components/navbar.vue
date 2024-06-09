<template>
  <div class="fixed w-full h-auto flex justify-center items-center pt-8 py-4 drop-blur z-[1001]">
    <div class="flex">
      <span class="text-3xl font-bold font-inconsolata text-tprimary cursor-pointer" @click="scrollToSection('home')">
        {{ title }}
      </span>
    </div>

    <div class="w-auto flex mx-40">
      <span @click="scrollToSection(item.sectionId)"
        class="text-hover text-lg font-inconsolata text-tprimary mx-4 cursor-pointer" v-for="item in tabs">
        {{ item.text }}
      </span>
    </div>

    <div class="w-auto flex">
      <a v-bind:href="item.link" target="_blank" v-for="item in socials" :key="item.icon">
        <Icon class="icon size-7 mx-3" :class="item.class" :icon="item.icon"></Icon>
      </a>
    </div>

  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { defineEmits } from 'vue';

const emit = defineEmits();

const title = "</JohnMarvelous>";

const tabs = [
  { text: "Projects", sectionId: "projects" },
  { text: "Technologies", sectionId: "technologies" },
  { text: "About Me", sectionId: "about" },
];

const socials = [
  { icon: "skill-icons:gmail-light", class: "rounded-lg", link: "mailto:johnmarvelous705@gmail.com" },
  { icon: "skill-icons:linkedin", class: "rounded-lg", link: "https://www.linkedin.com/in/johnmarvelousdiaz/" },
  { icon: "skill-icons:github-light", class: "rounded-lg", link: "https://github.com/JohnMarvelousDiaz" },
  { icon: "logos:facebook", class: "rounded-full", link: "https://www.facebook.com/jm2d8" },
];

const scrollToSection = (sectionId) => {
  emit('scrollTo', sectionId);
};
</script>

<style scoped>
.icon:hover {
  box-shadow: 0 0 12px #ffffff;
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

.text-hover:hover {
  text-shadow: 0 0 10px #ffffff;
  transition: transform 0.3s ease;
  transform: scale(1.2);
}

.dark-mode {
  background-color: black;
  color: white;
}

.drop-blur {
  backdrop-filter: blur(5px)
}
</style>
