<template>
  <main>
    <Toast></Toast>
    <button @click="scrollToTop" v-show="showButton" class="back-to-top">
      <Icon icon="carbon:back-to-top" class="size-8 font-black"></Icon>
    </button>
    <div class="w-full h-full bg-primary">
      <navbar @scrollTo="scrollToSection" />
      <home id="home"/>
      <projects id="projects" />
      <technologies id="technologies" />
      <about id="about" />
      <div :style="cursorStyle" class="glow"></div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import navbar from "@/components/main_components/navbar.vue";
import home from "@/components/main_components/home.vue";
import about from "@/components/main_components/about.vue";
import projects from "@/components/main_components/projects.vue";
import technologies from "@/components/main_components/technologies.vue";
import Toast from '@/components/tabs/toast.vue'

const cursorX = ref(0);
const cursorY = ref(0);
const isGlowActive = ref(true);

const showButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const handleScroll = () => {
  showButton.value = window.scrollY > 100;
};

const updateCursorPosition = (e) => {
  cursorX.value = e.clientX + window.scrollX;
  cursorY.value = e.clientY + window.scrollY;
};

const toggleGlow = (e) => {
  if (e.key === 'f' || e.key === 'F') {
    isGlowActive.value = !isGlowActive.value;
  }
};

onMounted(() => {
  window.addEventListener('mousemove', updateCursorPosition);
  window.addEventListener('keydown', toggleGlow);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursorPosition);
  window.removeEventListener('keydown', toggleGlow);
  window.removeEventListener('scroll', handleScroll);
});

const cursorStyle = computed(() => ({
  left: `${cursorX.value}px`,
  top: `${cursorY.value}px`,
  display: isGlowActive.value ? 'block' : 'none',
}));

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};
</script>

<style scoped>
.glow {
  position: absolute;
  width: 90px;
  height: 90px;
  background: rgba(114, 255, 106, 0.075);
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: difference;
  transition: transform 0.1s ease-out;
  transform: translate(-50%, -50%);
  z-index: 1000;
  box-shadow: 0 0 100px 100px rgba(114, 255, 106, 0.075);
}

.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}

.back-to-top:hover {
  @apply bg-secondary;
}
</style>
