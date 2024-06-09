<template>
    <div class="h-max flex flex-col mx-60 pt-[100px]">
        <div class="w-full mb-8">
            <span class="text-4xl font-inconsolata font-bold text-tprimary">Projects</span>
        </div>
        <div class="w-full flex justify-center gap-x-24 mb-16">
            <projecttab>
                <div class="w-full flex-col">
                    <img class="w-full h-auto rounded-lg mb-4 shadow-custom zoom" :src="RMO" alt="">
                    <span class="text-[13px] text-tprimary">{{ RMO_Text }}</span><br><br><br>
                    <span class=" w-full text-[13px] text-tprimary italic"> Role: Frontend Developer</span>
                    <div class="w-full flex justify-center mt-12">

                        <a href="https://rmo-rpts.bulsu-ovprei.com/" target="_blank">
                            <button type="button"
                                class="w-max h-auto flex items-center px-5 py-3 rounded-full text-tprimary button-bg">
                                View Website
                            </button>
                        </a>
                    </div>
                </div>
            </projecttab>
            <projecttab>
                <div class="w-full flex-col">
                    <img class="w-full h-auto rounded-lg mb-4 shadow-custom zoom" :src="Caps" alt="">
                    <span class="text-[13px] text-tprimary">{{ Caps_Text }}</span><br><br><br>
                    <span class=" w-full text-[13px] text-tprimary italic"> Role: Full-stack Developer</span>
                    <div class="w-full flex justify-center mt-12 gap-x-8">
                        <a href="https://wp1cict.vercel.app/" target="_blank">
                            <button type="button"
                                class="w-max h-auto flex items-center px-5 py-3 rounded-full text-tprimary button-bg">
                                View Website
                            </button>
                        </a>

                        <a href="https://github.com/JohnMarvelousDiaz/Appointment-System-with-Chatbot" target="_blank">
                            <button type="button"
                                class="w-max h-auto flex items-center px-5 py-3 rounded-full text-tprimary border-2 button">
                                View Repository
                            </button>
                        </a>
                    </div>
                </div>
            </projecttab>
        </div>
        <div class="w-full flex justify-center gap-x-24 mb-16">
            <projecttab>
                <div class="w-full flex-col">
                    <img class="w-full h-auto rounded-lg mb-4 shadow-custom zoom" :src="BMIS" alt="">
                    <span class="text-[13px] text-tprimary">{{ BMIS_Text }}</span><br><br><br>
                    <span class=" w-full text-[13px] text-tprimary italic"> Role: Full-stack Developer</span>
                    <div class="w-full flex justify-center mt-12 gap-x-8">

                        <a href="https://github.com/JohnMarvelousDiaz/Barangay-MIS" target="_blank">
                            <button type="button"
                                class="w-max h-auto flex items-center px-5 py-3 rounded-full text-tprimary border-2 button">
                                View Repository
                            </button>
                        </a>
                    </div>
                </div>
            </projecttab>
            <projecttab>
                <div class="w-full flex-col">
                    <div class="flex gap-x-16 justify-center">
                        <img class="w-auto h-[270px] rounded-lg mb-4 shadow-custom zoom" :src="Weather1" alt="">
                        <img class="w-auto h-[270px] rounded-lg mb-4 shadow-custom zoom" :src="Weather2" alt="">
                    </div>
                    <span class="text-[13px] text-tprimary">Weather Forecast App served as my final project in Android
                        App Development</span><br><br>
                    <span class=" w-full text-[13px] text-tprimary italic"> Role: Full-stack Developer</span>
                    <div class="w-full flex justify-center mt-12 gap-x-8">
                        <a href="https://github.com/JohnMarvelousDiaz/Weather-Forecast-Android-App" target="_blank">
                        <button type="button"
                            class="w-max h-auto flex items-center px-5 py-3 rounded-full text-tprimary border-2 button">
                            View Repository
                        </button>
                        </a>
                    </div>
                </div>
            </projecttab>
        </div>
    </div>
</template>

<script setup>
import projecttab from '@/components/tabs/project_tab.vue'
import BMIS from '@/assets/project_images/BMIS.png'
import Caps from '@/assets/project_images/Caps.png'
import RMO from '@/assets/project_images/RMO.png'
import Weather1 from '@/assets/project_images/Weather1.jpg'
import Weather2 from '@/assets/project_images/Weather2.jpg'

const RMO_Text = "The Research Management Office System is designed to streamline and enhance the efficiency of research and managing proposal within the RMO. Utilizing Vue.js and Tailwind CSS for the front-end and PHP-Laravel for the back-end."

const Caps_Text = "The BulSU CICT Appointment System is designed to streamline and enhance the efficiency of scheduling and managing appointments within the BulSU CICT. Utilizing React.js for the front-end and Google Firebase for the back-end."

const BMIS_Text = "Barangay Management Information System (MIS), is a web-based application designed to streamline and enhance the management of barangay operations. The frontend is developed using HTML, CSS, and JavaScript while the backend is powered by PHP and MySQL."

</script>

<style scoped>
.zoom:hover {
    transform: scale(2.3);
    transition: transform 0.3s ease;
}
</style>