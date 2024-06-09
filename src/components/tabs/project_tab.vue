<template>
    <div class="w-[450px] h-[550px] rounded-xl border-2 gradient-border p-6">
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>
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
        border-color: #72ff6a ;
    }

    80% {
        border-color: #22a3c7;
    }

    100% {
        border-color: #8e60d6;
    }
}

.gradient-border {
    width: 450px;
    height: 550px;
    border-radius: 20px;
    border: 2px solid transparent;
    animation: moving-border 4s infinite;
}
</style>