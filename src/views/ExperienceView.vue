<template>
    <main>
        <section>
            <ol class="relative border-l ml-2 border-gray-200 dark:border-gray-700">
                <li class="flex justify-between mb-10 ml-4" v-for="i in store.Experiences" :key="i.id">
                    <div :id="`e${i.id}`">
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                        </div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-100">{{ i.time }}</time>
                        <h3 class="text-lg font-semibold text-white">{{ i.title }}</h3>
                        <p class="mb-4 text-base font-normal text-white dark:text-gray-100">{{ i.description }}</p>
                        <ul class="flex flex-wrap gap-5 pb-5 text-white">
                            <li class="flex gap-1 items-center bg-[#8080805b] px-3 rounded-full"
                                v-for="(i, id) in i.languages.split(',')" :key="id"><span class="py-1">{{ i }}</span></li>
                        </ul>
                    </div>
                    <div class="flex gap-5 text-white text-xl w-40">
                        <i class='bx bx-pencil cursor-pointer' @click="editFunc(i.id)"></i><i @click="deleteProduct(i.id)"
                            class='bx bx-trash cursor-pointer text-red-500'></i>
                    </div>
                </li>
                <li class="ml-4 mb-10">
                    <form v-show="add" @submit.prevent="formInfo">
                        <div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input v-model="form.time" type="text" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-40 mb-1 text-sm font-normal leading-none bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">April
                                    2022</label>
                            </div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input v-model="form.title" type="text" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-1/2 mb-1 text-lg leading-none bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white font-bold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">April
                                    2022</label>
                            </div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input v-model="form.description" type="text" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-[90%] mb-1 text-md font-medium leading-none bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">April
                                    2022</label>
                            </div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <button class="py-1 px-4 bg-white rounded-lg" @click="form.toggle = !form.toggle"
                                    type="button">languages</button>
                                <ul v-show="form.toggle" @click="selected"
                                    class="bg-white max-w-fit absolute bottom-9 h-48 overflow-hidden overflow-y-auto rounded">
                                    <li class="hover:bg-gray-500 px-3">
                                        <p class="cursor-pointer">HTML</p>
                                    </li>
                                    <li class="hover:bg-gray-500 px-3 py-1">
                                        <p class="cursor-pointer">CSS</p>
                                    </li>
                                    <li class="hover:bg-gray-500 px-3 py-1">
                                        <p class="cursor-pointer">SASS/SCSS</p>
                                    </li>
                                    <li class="hover:bg-gray-500 px-3 py-1">
                                        <p class="cursor-pointer">JavaScript</p>
                                    </li>
                                    <li class="hover:bg-gray-500 px-3 py-1">
                                        <p class="cursor-pointer">VueJS</p>
                                    </li>
                                    <li class="hover:bg-gray-500 px-3 py-1">
                                        <p class="cursor-pointer">NuxtJS</p>
                                    </li>
                                    <li class="hover:bg-gray-500 px-3 py-1">
                                        <p class="cursor-pointer">JavaScript</p>
                                    </li>
                                    <li class="hover:bg-gray-500 px-3 py-1">
                                        <p class="cursor-pointer">VueJS</p>
                                    </li>
                                    <li class="hover:bg-gray-500 px-3 py-1">
                                        <p class="cursor-pointer">NuxtJS</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="flex flex-wrap gap-5 pb-5 text-white">
                                    <li class="flex gap-1 items-center bg-[#8080805b] px-3 rounded-full"
                                        v-for="(i, id) in form.languages" :key="id">{{ i }}<i @click="selectedLang(id)"
                                            class='bx bx-x cursor-pointer text-black font-bold'></i></li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                        </div>
                        <button type="submit" class="text-white px-5 py-2 rounded-lg bg-[#3098ed]">Submit</button>
                    </form>
                    <button @click="add = !add" v-show="!add" class="text-white px-5 py-2 rounded-lg bg-[#3098ed]">Add
                        experience</button>
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
                                data-modal-hide="defaultModal"><i @click="closeFunc"
                                    class='bx bx-x px-1 text-lg font-bold'></i></button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-6 space-y-6">
                            <form @submit.prevent="editProduct">
                                <div>
                                    <div class="relative z-0 w-full mx-1 mb-4 group">
                                        <input v-model="modal.time" type="text" name="floating_email" id="floating_email"
                                            class="block py-2.5 px-0 w-40 mb-1 text-sm font-normal leading-none bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" " required />
                                        <label for="floating_email"
                                            class="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transmodal -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Time</label>
                                    </div>
                                    <div class="relative z-0 w-full mx-1 mb-4 group">
                                        <input v-model="modal.title" type="text" name="floating_email" id="floating_email"
                                            class="block py-2.5 px-0 w-1/2 mb-1 text-lg leading-none bg-transparent border-0 border-b-2 border-gray-300 appearance-none font-bold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" " required />
                                        <label for="floating_email"
                                            class="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transmodal -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                                    </div>
                                    <div class="relative z-0 w-full mx-1 mb-4 group">
                                        <input v-model="modal.description" type="text" name="floating_email"
                                            id="floating_email"
                                            class="block py-2.5 px-0 w-[90%] mb-1 text-md font-medium leading-none bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" " required />
                                        <label for="floating_email"
                                            class="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                                    </div>
                                    <div class="relative z-0 w-full mx-1 mb-4 group">
                                        <button class="py-1 px-4 bg-white rounded-lg" @click="form.toggle1 = !form.toggle1"
                                            type="button">languages</button>
                                        <ul v-show="form.toggle1" @click="selected"
                                            class="bg-white max-w-fit absolute bottom-9 h-48 overflow-hidden overflow-y-auto rounded">
                                            <li class="hover:bg-gray-500 px-3">
                                                <p class="cursor-pointer">HTML</p>
                                            </li>
                                            <li class="hover:bg-gray-500 px-3 py-1">
                                                <p class="cursor-pointer">CSS</p>
                                            </li>
                                            <li class="hover:bg-gray-500 px-3 py-1">
                                                <p class="cursor-pointer">SASS/SCSS</p>
                                            </li>
                                            <li class="hover:bg-gray-500 px-3 py-1">
                                                <p class="cursor-pointer">JavaScript</p>
                                            </li>
                                            <li class="hover:bg-gray-500 px-3 py-1">
                                                <p class="cursor-pointer">VueJS</p>
                                            </li>
                                            <li class="hover:bg-gray-500 px-3 py-1">
                                                <p class="cursor-pointer">NuxtJS</p>
                                            </li>
                                            <li class="hover:bg-gray-500 px-3 py-1">
                                                <p class="cursor-pointer">JavaScript</p>
                                            </li>
                                            <li class="hover:bg-gray-500 px-3 py-1">
                                                <p class="cursor-pointer">VueJS</p>
                                            </li>
                                            <li class="hover:bg-gray-500 px-3 py-1">
                                                <p class="cursor-pointer">NuxtJS</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul class="flex flex-wrap gap-5 pb-5 text-white">
                                            <li class="flex gap-1 items-center bg-[#8080805b] px-3 rounded-full"
                                                v-for="(i, id) in form.languages" :key="id">{{ i }}<i
                                                    @click="selectedLang(id)"
                                                    class='bx bx-x cursor-pointer text-black font-bold'></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    class="flex items-center justify-between py-6 px-1 space-x-2 w-full rounded-b dark:border-gray-600">
                                    <button data-modal-hide="defaultModal" type="submit"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Edit</button>
                                    <button data-modal-hide="defaultModal" type="button" @click="closeFunc"
                                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
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
import { onMounted, reactive, ref } from 'vue';
import { useExperienceStore } from '../stores/experience';
const store = useExperienceStore();

const add = ref(false)

const form = reactive({
    time: "",
    title: "",
    description: "",
    languages: [],
    toggle: false,
    editToggle: false,
    toggle1: false,
    deleteToggle: false,
    edit: false,
})

const modal = reactive({
    time: "",
    title: "",
    description: "",
    languages: [],
    editId: "",
    deleteId: "",
})

function selectedLang(id) {
    form.languages.splice(id, 1)
}

function selected(e) {
    console.log(e.target);
    console.log(form.languages);
    try {
        if (e.target.innerHTML.split(" ").length == 1 && e.target.innerHTML != "" && !e.target.innerHTML.includes(">")) {
            if (form.languages.length) {
                for (let i in form.languages) {
                    if (form.languages[i] == e.target.innerHTML) {
                        form.languages.splice(i, 1)
                    }
                }
            }
            form.languages.push(e.target.innerHTML);
        }
    } catch (error) {
        console.log(error);
    }
}

async function editFunc(id) {
    modal.editId = id;
    const info = document.querySelector(`#e${id}`)
    modal.time = info.querySelector('time').innerHTML;
    modal.title = info.querySelector('h3').innerHTML;
    modal.description = info.querySelector('p').innerHTML;
    const langs = info.querySelectorAll('span');

    for (let i of langs) {
        form.languages.push(i.innerHTML);
        console.log(form.languages);
    }

    form.editToggle = true;
}

function closeFunc() {
    form.time = "";
    form.title = "";
    form.description = "";
    form.languages = [];
    form.editToggle = false;
    store.state.productOne = [];
}

const formInfo = () => {
    store.createProducts(form)
    form.time = ""
    form.title = ""
    form.description = ""
    form.toggle = false;
    add.value = false;
}

function editProduct() {
    let data = {
        time: modal.time,
        title: modal.title,
        description: modal.description,
        languages: form.languages.join(','),
    }
    store.updateProduct(modal.editId, data);
    form.editToggle = false;
}

function deleteProduct(id) {
    modal.deleteId = id;
    form.deleteToggle = true;
}

onMounted(() => {
    store.getProducts();
})
</script>

<style lang="scss" scoped></style>