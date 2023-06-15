<template>
    <div class="bg-white">
        <Editor v-model="value"
            editorStyle="height: 75vh; background:radial-gradient(circle, rgba(13, 36, 81, 1) 100%, rgba(12, 37, 86, 1) 100%); color:white; font-size: 16px;" />
    </div>
</template>

<script setup>
import Editor from 'primevue/editor';
import { ref } from "vue";

const value = ref('');
</script>

<style lang="scss" scoped></style>