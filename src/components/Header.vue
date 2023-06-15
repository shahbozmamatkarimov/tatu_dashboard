<template>
    <header class="header min-h-[95vh] min-w-fit w-72 rounded-xl text-white">
        <h1 class="cursor-pointer text-2xl p-5">
            <router-link class="adminpanel flex items-center gap-3" to="/"><i class='bx bx-home text-3xl'></i>Admin panel</router-link>
        </h1>
        <hr class="border-gray-500">
        <nav class="p-4">
            <div class="flex flex-col justify-center gap-4">
                <router-link class="text-lg flex gap-3 rounded-lg py-2 px-3 items-center" v-for="i in header" :key="i.id"
                    :to="i.link"><i class="text-xl" :class="i.icon"></i>{{ i.title }}</router-link>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { header } from "../constants/header"
</script>

<style lang="scss" scoped>
.header {
    background: radial-gradient(circle, rgba(13, 36, 81, 1) 100%, rgba(12, 37, 86, 1) 100%);
}

.router-link-active {
    background: #3097ed;
    box-shadow: 2px 2px 8px #3098ed74;
    transition-duration: 1s;
}

.adminpanel{
    background: none;
    box-shadow: none;
}
</style>