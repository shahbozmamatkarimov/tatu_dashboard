<template>
    <main class="text-white">
        <section class="flex flex-wrap">
            <div class="flex lg:w-1/2 mb-10" v-for="i in 4" :key="i">
                <div class="w-[40%]">
                    <img src="../assets/website.png" alt="img">
                    <p>06/12/2022</p>
                    <p class="font-bold">06/01/2023</p>
                </div>
                <div class="w-[60%] px-5">
                    <h1 class="pb-2 text-lg font-medium">Build a Spotify Connected</h1>
                    <p class="text-sm text-gray-300">Video course that teaches how to build a web app with the Spotify Web
                        API. Topics covered include the
                        principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                    <p class="py-2 flex items-center gap-2"><i class='bx bxs-star'></i>421</p>
                    <div class="flex flex-wrap gap-2 items-center">
                        <button class="bg-[#8080805b] px-3 rounded-full">HTML</button>
                        <button class="bg-[#8080805b] px-3 rounded-full">CSS</button>
                        <button class="bg-[#8080805b] px-3 rounded-full">JavaScript</button>
                        <button class="bg-[#8080805b] px-3 rounded-full">VueJS</button>
                    </div>
                </div>
            </div>
            <div class="flex lg:w-1/2 mb-10 w-full">
                <div class="flex flex-col flex-coljustify-center lg:h-28 w-[40%]">
                    <div>
                        <label for="img">
                            <img class="lg:h-28 h-32 w-full cursor-pointer"
                                src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                                alt="img">
                        </label>
                        <input type="file" id="img" class="hidden">
                    </div>
                    <input type="text" class="border mt-1 bg-transparent outline-none border-none"
                        placeholder="start time...">
                    <input type="text" class="border mt-1 bg-transparent outline-none border-none"
                        placeholder="end time...">
                </div>
                <div class="w-[60%] px-5">
                    <h1 class="pb-2 text-lg font-medium">
                        <input v-model="form.title" class="bg-transparent outline-none" type="text" placeholder="title...">
                    </h1>
                    <p class="text-sm text-gray-300">
                        <textarea v-model="form.description" minlength="10" maxlength="200" class="w-full bg-transparent outline-none px-1" rows="4"
                            placeholder="About project..." required></textarea>
                    </p>
                    <p class="py-2 flex items-center gap-2"><i class='bx bx-star'></i>0</p>
                    <div class="flex flex-wrap gap-2">
                        <select class="bg-[#8080805b] px-3 rounded-full">
                            <option class="bg-[black]" value="1">HTML</option>
                            <option class="bg-[black]" value="1">CSS</option>
                            <option class="bg-[black]" value="1">JavaScript</option>
                            <option class="bg-[black]" value="1">VueJS</option>
                            <option class="bg-[black]" value="1">Nuxt</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
    image: "",
    title: "",
    description: "",
    link: "",
    github_link: "",
    languages: "",
    comment_id: ""
})
</script>

<style lang="scss" scoped></style>