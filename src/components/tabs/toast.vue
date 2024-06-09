<template>
    <transition name="fade" mode="in-out">
        <div v-if="showToast"
            class="w-96 absolute flex justify-between items-center border-2 rounded-lg py-2 px-4 right-8 top-24 text-tprimary font-inconsolata font-medium shadow-custom border-g">
            <span>Press "F" to turn off the flashlight.</span>
            <span @click="hideToast">
                <Icon icon="fa6-solid:xmark"></Icon>
            </span>
        </div>
    </transition>
</template>

<script setup>
import { ref } from 'vue';

const showToast = ref(true);

const hideToast = () => {
    showToast.value = false;
}
</script>

<style scoped>
.border-g {
    border: 2px solid transparent;
    animation: moving-border 4s infinite;
}

@keyframes moving-border {
    0% {
        border-color: #8e60d6;
    }

    20% {
        border-color: #22a3c7;
    }

    40% {
        border-color: #72ff6a;
    }

    60% {
        border-color: #72ff6a;
    }

    80% {
        border-color: #22a3c7;
    }

    100% {
        border-color: #8e60d6;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>