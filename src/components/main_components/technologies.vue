<template>
    <div class="h-screen flex flex-col mx-60 pt-[100px]">
        <div class="w-full mb-8">
            <span class="text-4xl font-inconsolata font-bold text-tprimary">Technologies</span>
        </div>
        <div class="w-full h-auto flex flex-col justify-center mb-2" v-for="items in skills">
            <div class="w-full flex flex-col">
                <span class="text-lg text-tprimary font-inconsolata tracking-widest">{{items.language}}</span>
                <div class="flex items-center">
                    <div class="w-full">
                        <div class="h-3 rounded-full gradient" :class="items.percent"></div>
                    </div>
                    <span class="mx-4 text-tprimary text-base font-inconsolata">{{items.knowledge}}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const skills = [
    { language: "HTML", percent: "w-[87%]", knowledge: "Advanced" },
    { language: "CSS", percent: "w-[87%]", knowledge: "Advanced" },
    { language: "JavaScript", percent: "w-[90%]", knowledge: "Advanced" },
    { language: "Vue", percent: "w-[90%]", knowledge: "Advanced" },
    { language: "Tailwind CSS", percent: "w-[87%]", knowledge: "Advanced" },
    { language: "React", percent: "w-[65%]", knowledge: "Regular" },
    { language: "PHP", percent: "w-[50%]", knowledge: "Regular" },
    { language: "Java", percent: "w-[35%]", knowledge: "Beginner" },
    { language: "C/C#/C++", percent: "w-[25%]", knowledge: "Beginner" },
]
</script>

<style scoped>
.gradient {
    background: linear-gradient(30deg, #8e60d6, #22a3c7, #72ff6a, #8e60d6);
    background-size: 400% 400%;
    animation: gradient-animation 10s ease infinite;
}

@keyframes gradient-animation {
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