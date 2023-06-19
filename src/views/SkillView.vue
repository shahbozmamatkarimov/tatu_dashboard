<template>
    <main>
        <section>
            <ol class="relative border-l border-gray-200 ml-2 dark:border-gray-700">
                <li class="flex justify-between mb-10 ml-4" v-for="i in store.Skills    " :key="i.id">
                    <div :id="`e${i.id}`">
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                        </div>
                        <div
                            class="flex items-center gap-5 mb-1 text-4xl font-normal leading-none text-gray-100 dark:text-white">
                            <img class="w-12 h-12 rounded-full" :src="i.image" alt="">
                            <b class="text-lg">{{ i.name }}</b>
                        </div>
                    </div>
                    <div class="flex gap-5 text-white text-xl">
                        <i class='bx bx-pencil cursor-pointer' @click="editModal(i.id)"></i><i @click="deleteProduct(i.id)"
                            class='bx bx-trash cursor-pointer text-red-500'></i>
                    </div>
                </li>
                <li class="ml-4 mb-10">
                    <form v-show="add" @submit.prevent="createProduct">
                        <div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input v-model="form.image" type="text" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-1/2 mb-1 text-sm font-normal leading-none dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">icon's
                                    url</label>
                            </div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input v-model="form.name" type="text" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-1/2 mb-1 text-sm font-normal leading-none dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    skill's name
                                </label>
                            </div>
                        </div>
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                        </div>
                        <button type="submit" class="text-white px-5 py-2 rounded-lg bg-[#3098ed]">Submit</button>
                    </form>
                    <button @click="add = !add" v-show="!add" class="text-white px-5 py-2 rounded-lg bg-[#3098ed]">Add
                        skill</button>
                </li>
            </ol>
        </section>
        <!-- toggle modal -->
        <section v-show="form.editToggle">
            <div tabindex="-1" aria-hidden="true"
                class="flex justify-center bg-[#8080801c] items-center absolute z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-start justify-between py-4 px-6 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900">
                                Edit exprerience
                            </h3>
                            <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center"
                                data-modal-hide="defaultModal"><i @click="form.editToggle = false"
                                    class='bx bx-x px-1 text-lg font-bold'></i></button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-6 space-y-6">
                            <form @submit.prevent="editProduct">
                                <div>
                                    <div class="relative z-0 w-full mx-1 mb-4 group">
                                        <input v-model="modal.name" type="text" name="floating_email" id="floating_email"
                                            class="block py-2.5 px-0 w-full mb-1 text-sm font-normal leading-none bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" " required />
                                        <label for="floating_email"
                                            class="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transmodal -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Skill's
                                            name</label>
                                    </div>
                                    <div class="relative z-0 w-full mx-1 mb-4 group">
                                        <input v-model="modal.image" type="text" name="floating_email" id="floating_email"
                                            class="block py-2.5 px-0 w-full mb-1 text-lg leading-none bg-transparent border-0 border-b-2 border-gray-300 appearance-none font-bold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" " required />
                                        <label for="floating_email"
                                            class="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transmodal -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Icon's
                                            url</label>
                                    </div>
                                    <div
                                        class="flex items-center justify-between py-6 px-1 space-x-2 w-full rounded-b dark:border-gray-600">
                                        <button data-modal-hide="defaultModal" type="submit"
                                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Edit</button>
                                        <button data-modal-hide="defaultModal" type="button"
                                            @click="form.editToggle = false"
                                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- Modal body -->
                    </div>
                </div>
            </div>
        </section>

        <!-- delete modal -->
        <section>
            <div v-show="form.deleteToggle" id="popup-modal" tabindex="-1"
                class="flex justify-center items-center absolute z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="popup-modal">
                            <i @click="form.deleteToggle = false" class="bx bx-x text-xl font-bold px-1"></i>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-6 text-center">
                            <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to
                                delete this product?</h3>
                            <button data-modal-hide="popup-modal" type="button"
                                @click="store.deleteProduct(modal.deleteId); form.deleteToggle = false"
                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Yes, I'm sure
                            </button>
                            <button data-modal-hide="popup-modal" type="button" @click="form.deleteToggle = false"
                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
                                cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <!-- end delete modal -->
    </main>
</template>

<script setup>
import { useSkillStore } from '../stores/skill';
import { ref, reactive, onMounted } from 'vue';

const add = ref(false)
const store = useSkillStore();

const form = reactive({
    name: "",
    image: "",
    toggle: false,
    editToggle: false,
    toggle1: false,
    deleteToggle: false,
    edit: false,
})

const modal = reactive({
    name: "",
    image: "",
    editId: "",
    deleteId: "",
})

function createProduct() {
    const data = {
        name: form.name,
        image: form.image,
        link: 'link',
    }
    add.value = false;
    form.name = "";
    form.image = "";
    store.createProducts(data)
}

async function editModal(id) {
    modal.editId = id;
    const info = document.querySelector(`#e${id}`)
    console.log(info);
    modal.name = info.querySelector('b').innerHTML;
    modal.image = info.querySelector('img').src;

    form.editToggle = true;
}

function editProduct() {
    form.editToggle = false;
    const data = {
        name: modal.name,
        image: modal.image,
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