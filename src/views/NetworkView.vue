<template>
    <main class="ml-2">
        <section>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-4" v-for="i in store.Products" :key="i.id">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <div
                        class="flex items-center gap-5 mb-1 text-4xl font-normal leading-none text-gray-100 dark:text-white">
                        <i :class='i.icon'></i><b class="text-lg">{{i.name}}</b>
                    </div>
                    <p class="mb-4 text-base font-normal text-white dark:text-gray-100">
                        {{i.link}}
                    </p>
                </li>
                <li class="mb-10 ml-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <div
                        class="flex items-center gap-5 mb-1 text-4xl font-normal leading-none text-gray-100 dark:text-white">
                        <i class='bx bxl-github'></i><b class="text-lg">github</b>
                    </div>
                    <p class="mb-4 text-base font-normal text-white dark:text-gray-100">
                        https://github.com/shahbozmamatkarimov/
                    </p>
                </li>
                <li class="mb-10 ml-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <div
                        class="flex items-center gap-5 mb-1 text-4xl font-normal leading-none text-gray-100 dark:text-white">
                        <i class='bx bxl-facebook-circle'></i><b class="text-lg">facebook</b>
                    </div>
                    <p class="mb-4 text-base font-normal text-white dark:text-gray-100">
                        https://facebook.com
                    </p>
                </li>
                <li class="ml-4 mb-10">
                    <form v-show="add" @submit.prevent="createProduct">
                        <div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input v-model="form.icon" type="text" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-40 mb-1 text-sm font-normal leading-none dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">icon</label>
                            </div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input v-model="form.name" type="text" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-1/2 mb-1 text-sm font-normal leading-none dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    network name
                                </label>
                            </div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input v-model="form.link" type="text" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-[90%] mb-1 text-sm font-normal leading-none dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    network link
                                </label>
                            </div>
                        </div>
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                        </div>
                        <button type="submit" class="text-white px-5 py-2 rounded-lg bg-[#3098ed]">Submit</button>
                    </form>
                    <button @click="add = !add" v-show="!add" class="text-white px-5 py-2 rounded-lg bg-[#3098ed]">Add
                        network</button>
                </li>
            </ol>

        </section>
    </main>
</template>

<script setup>
import { useNetworkStore } from '../stores/networks';
import { ref, reactive, onMounted } from 'vue';

const add = ref(false)
const store = useNetworkStore();

const form = reactive({
    name: "",
    link: "",
    icon: "",
    toggle: false,
    editToggle: false,
    toggle1: false,
    deleteToggle: false,
    edit: false,
})

const modal = reactive({
    name: "",
    link: "",
    icon: "",
    editId: "",
    deleteId: "",
})

function createProduct() {
    const data = {
        name: form.name,
        link: form.link,
        icon: form.icon,
    }
    add.value = false;
    form.name = "";
    form.link = "";
    form.icon = "";
    store.createProducts(data)
}

async function editModal(id) {
    modal.editId = id;
    const info = document.querySelector(`#e${id}`)
    console.log(info);
    modal.name = info.querySelector('b').innerHTML;
    modal.link = info.querySelector('img').src;

    form.editToggle = true;
}

function editProduct() {
    form.editToggle = false;
    const data = {
        name: modal.name,
        link: modal.link,
    }
    store.updateProduct(modal.editId, data);
}

function deleteProduct(id) {
    modal.deleteId = id;
    form.deleteToggle = true;
}

onMounted(() => {
    store.getProducts()
})
</script>

<style lang="scss" scoped></style>