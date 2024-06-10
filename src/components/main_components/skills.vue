<template>
    <div class="h-max flex flex-col mx-60 pt-[100px]">
        <div class="w-full mb-8">
            <span class="text-4xl font-inconsolata font-bold text-tprimary">Languages & Frameworks</span>
        </div>
        <div class="w-full h-auto flex flex-col justify-center mb-2" v-for="items in skills">
            <div class="w-full flex flex-col">
                <span class="text-lg text-tprimary font-inconsolata tracking-widest">{{ items.language }}</span>
                <div class="flex">
                    <div class="w-full flex items-center">
                        <div class="h-3 rounded-full gradient mr-4" :class="items.percent"></div>
                        <Icon :icon="items.icon" class="size-8"></Icon>
                    </div>
                    <span class="mx-4 text-tprimary text-base font-inconsolata">{{ items.knowledge }}</span>
                </div>
            </div>
        </div>
        <div class="w-full h-auto flex flex-col justify-center mb-20">
            <div class="w-full flex flex-col">
                <span class="text-lg text-tprimary font-inconsolata tracking-widest">C/C#/C++</span>
                <div class="flex items-center">
                    <div class="w-full flex items-center">
                        <div class="w-1/4 h-3 rounded-full gradient mr-4"></div>
                        <Icon icon="devicon:c" class="size-6 mr-4"></Icon>
                        <Icon icon="devicon:csharp" class="size-6 mr-4"></Icon>
                        <Icon icon="devicon:cplusplus" class="size-6"></Icon>
                    </div>
                    <span class="mx-4 text-tprimary text-base font-inconsolata">Beginner</span>
                </div>
            </div>
        </div>

        <div class="w-full mb-8">
            <span class="text-4xl font-inconsolata font-bold text-tprimary">Additional Skills</span>
        </div>
        <div class="w-full h-auto flex gap-x-12 mb-8">
            <div class="w-full flex " v-for="items in add_skills">
                <div class="flex flex-col items-center">
                    <Icon :icon="items.icon" class="size-16"></Icon>
                    <span class="text-tprimary text-lg font-inconsolata font-medium pt-2">{{ items.skill }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const skills = [
    { language: "HTML", percent: "w-[87%]", knowledge: "Advanced", icon: "devicon:html5" },
    { language: "CSS", percent: "w-[87%]", knowledge: "Advanced", icon: "devicon:css3" },
    { language: "JavaScript", percent: "w-[91%]", knowledge: "Advanced", icon: "devicon:javascript" },
    { language: "Vue", percent: "w-[89%]", knowledge: "Advanced", icon: "devicon:vuejs" },
    { language: "Tailwind CSS", percent: "w-[87%]", knowledge: "Advanced", icon: "devicon:tailwindcss" },
    { language: "React", percent: "w-[55%]", knowledge: "Regular", icon: "devicon:react" },
    { language: "PHP", percent: "w-[50%]", knowledge: "Regular", icon: "devicon:php" },
    { language: "Java", percent: "w-[35%]", knowledge: "Beginner", icon: "devicon:java" },
    { language: "Python", percent: "w-[23%]", knowledge: "Beginner", icon: "devicon:python" },
]

const add_skills = [
    { skill: "Git", icon: "devicon:git" },
    { skill: "GitHub", icon: "skill-icons:github-light" },
    { skill: "Bitbucket", icon: "devicon:bitbucket" },
    { skill: "Vercel", icon: "skill-icons:vercel-light" },
    { skill: "Figma", icon: "devicon:figma" },
    { skill: "Canva", icon: "devicon:canva" },
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