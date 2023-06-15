<template>
  <div class="flex justify-between">
    <Header class="m-4" />
    <div class="my-4 ml-5 mr-10 w-full overflow-y-auto max-h-screen">
      <Menu class="w-[79%]">{{ routerUrl }}</Menu>
      <div class="h-20"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue';
import { RouterView } from 'vue-router'
import { Header, Menu } from './components'
import { useRoute } from "vue-router";
const route = useRoute();


const routerUrl = ref("Dashboard")

watch(
  () => route.fullPath,
  async () => {
    // let main = document.querySelector('#main');
    // main.scrollTo(0, 0);
    routerUrl.value = route.fullPath.split('/').join('');
    routerUrl.value = routerUrl.value.slice(0, 1).toUpperCase() + routerUrl.value.slice(1) || 'Dashboard';
  }
);
</script>

<style lang="scss"></style>