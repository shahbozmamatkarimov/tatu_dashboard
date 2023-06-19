<template>
    <main>
        <section class="flex flex-wrap justify-between -ml-3 pb-20">
            <div v-show="store.Projects" :id="`e${i.id}`" class="lg:w-1/3 md:w-1/2 max-w-sm" v-for="i in store.Projects" :key="i">
                <div class="bg-white ml-3 mr-9 my-2 shadow-md border border-gray-200 rounded max-w-sm">
                    <div class="relative">
                        <div class="imgbtn relative">
                            <a :href="i.link">
                                <img id="image" class="rounded-t h-48 mx-auto" :src="i.image" alt="img">
                            </a>
                            <div class="btn bg-gray-500 rounded-lg px-2 py-1 hidden absolute right-0 top-0 gap-5 text-white text-2xl">
                                <i class='bx bx-pencil cursor-pointer' @click="editFunc(i.id)"></i><i
                                    @click="deleteProduct(i.id)" class='bx bx-trash cursor-pointer text-red-500'></i>
                            </div>
                        </div>
                        <div>
                            <i
                                class='bx bxs-message-rounded chat cursor-pointer text-4xl absolute -right-6 text-white -bottom-1'><b
                                    class="absolute bottom-8 hidden left-0 text-black text-[20px]">chat</b></i>
                        </div>
                    </div>
                    <div class="p-3">
                        <div class="flex justify-between">
                            <h5 id="title" class="font-bold text-lg tracking-tight w-[80%] truncate">{{ i.title }}</h5>
                            <button type="button" class="flex gap-1 bg-amber-600 px-2 rounded-lg items-center">0<i
                                    class='bx bxs-star text-[yellow] star duration-1000'></i></button>
                        </div>
                        <p id="description" class="title text-sm font-medium leading-5 text-gray-700 mb-3">{{ i.description
                        }}</p>
                        <div v-if="!(i.languages==undefined)" id="languages" class="flex flex-wrap justify-center gap-1 text-xs py-1 items-center h-14">
                            <button class="bg-[#8080805b] px-3 py-1 rounded-full" v-for="lang in i.languages.split(',')"
                                :key="lang">{{ lang }}</button>
                        </div>
                        <div class="flex justify-center gap-5 items-center py-1">
                            <a id="github_link" target="_blank" :href="i.github_link"><i
                                    class='bx bxl-github text-2xl py-1 cursor-pointer'></i></a>
                            <a id="link" target="_blank" :href="i.link"
                                class="bg-[#3098edcd] px-4 py-1 cursor-pointer rounded-lg shadow-md shadow-[#3097ed]">Preview</a>
                        </div>
                        <div v-if="i.start_time" class="flex justify-between">
                            <time id="start_time" class="text-sm font-medium text-gray-500">{{ i.start_time.slice(0, 10)
                            }}</time>
                            <time id="end_time" class="text-sm font-medium text-red-500">{{ i.end_time.slice(0, 10)
                            }}</time>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 max-w-sm">
                <form @submit.prevent="formInfo"
                    class="bg-white ml-3 mr-9 my-2 shadow-md border border-gray-200 rounded max-w-sm">
                    <div class="relative">
                        <label for="img">
                            <img v-show="!form.image" class="rounded-t border-2 h-48 cursor-pointer"
                                src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                                alt="img">
                            <img v-show="form.image" class="rounded-t border-2 h-48 cursor-pointer" :src="form.image"
                                alt="img">
                        </label>
                        <input type="file" @change="upload" id="img" class="w-0 h-0 absolute" required>
                        <div>
                            <i
                                class='bx bxs-message-rounded chat cursor-pointer text-4xl absolute -right-6 text-white -bottom-1'><b
                                    class="absolute bottom-8 hidden left-0 text-black text-[20px]">chat</b></i>
                        </div>
                    </div>
                    <div class="p-3">
                        <div class="flex justify-between">
                            <a href="#">
                                <h5 class="font-bold text-lg tracking-tight">
                                    <input v-model="form.title" class="bg-transparent outline-none" type="text"
                                        placeholder="title..." required>
                                </h5>
                            </a>
                            <button class="flex gap-1 bg-amber-500 px-2 rounded-lg items-center">0<i
                                    class='bx bxs-star text-[grey] star duration-1000'></i></button>
                        </div>
                        <p class="text-sm font-medium leading-5 text-gray-700 mb-3">
                            <textarea v-model="form.description" minlength="10" maxlength="200"
                                class="w-full bg-transparent text-gray-700 outline-none px-1" rows="4"
                                placeholder="About project..." required></textarea>
                        </p>
                        <div class="relative z-0 w-full mx-1 mb-4 group">
                            <button type="button" class="py-1 px-4 bg-gray-500 rounded-lg"
                                @click="form.toggle1 = !form.toggle1">languages</button>
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
                        <div class="flex flex-wrap justify-center gap-1 text-xs py-1 items-center">
                            <button type="button" class="bg-[#8080805b] px-3 py-1 rounded-full" v-for="i in form.languages"
                                :key="i">
                                {{ i }}<i class="bx bx-x font-bold" @click="selectedLang"></i>
                            </button>
                        </div>
                        <div class="flex justify-center relative gap-5 items-center py-1">
                            <input v-model="form.github_link" v-show="form.github" id="github"
                                class="absolute border-2 border-black bg-black text-white rounded -top-8 shadow-lg shadow-gray-600 left-0 w-full p-1"
                                type="text" required>
                            <label for="github">
                                <i @click="form.github = !form.github; form.prewiew = false"
                                    class='bx bxl-github text-2xl py-1 cursor-pointer'></i>
                            </label>

                            <input v-model="form.link" v-show="form.prewiew" id="preview"
                                class="absolute border-2 bg-[#3098edcd] border-black rounded -top-8 shadow-lg shadow-gray-600 left-0 w-full p-1"
                                type="text" required>
                            <label for="preview">
                                <i @click="form.prewiew = !form.prewiew; form.github = false" class=" bg-[#3098edcd] px-4 py-1 cursor-pointer rounded-lg shadow-md
                                    shadow-[#3097ed]">Preview</i>
                            </label>
                        </div>
                        <div class="flex justify-between">
                            <time class="text-sm font-medium text-gray-500">
                                <input v-model="form.start_time" type="date" required>
                            </time>
                            <time class="text-sm font-medium text-red-500">
                                <input v-model="form.end_time" type="date" required>
                            </time>
                        </div>
                    </div>
                    <div class="flex justify-center items-center bg-[#343E59] -mx-1 -my-2 h-10">
                        <button class="bg-[#3097ed] px-5 py-1 rounded-lg">deploy</button>
                    </div>
                </form>
            </div>
        </section>

        <!-- Main modal -->
        <div v-show="form.editToggle"
            class="flex justify-center items-center max-h-screen absolute bg-[#80808069] z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]">
            <div class="relative w-full max-w-sm mx-auto max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between py-1 px-4 rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Edit product
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="defaultModal">
                            <i @click="form.editToggle = false" class="bx bx-x px-1 text-2xl"></i>
                        </button>
                    </div>
                    <!-- edit modal -->
                    <form class="max-w-sm form">
                        <div class="bg-white shadow-md border border-gray-200 rounded max-w-sm">
                            <div class="relative">
                                <label for="img1">
                                    <img v-show="!modal.image" class="rounded-t border-2 h-48 mx-auto cursor-pointer"
                                        src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                                        alt="img">
                                    <img v-show="modal.image" class="rounded-t border-2 h-48 mx-auto cursor-pointer"
                                        :src="modal.image" alt="img">
                                </label>
                                <input type="file" @input="uploadModal" id="img1" class="w-0 h-0 absolute" required>
                                <div>
                                    <i
                                        class='bx bxs-message-rounded chat cursor-pointer text-4xl absolute -right-6 text-white -bottom-1'><b
                                            class="absolute bottom-8 hidden left-0 text-black text-[20px]">chat</b></i>
                                </div>
                            </div>
                            <div class="p-3">
                                <div class="flex justify-between">
                                    <a href="#">
                                        <h5 class="font-bold text-lg tracking-tight">
                                            <input v-model="modal.title" class="bg-transparent outline-none" type="text"
                                                placeholder="title..." required>
                                        </h5>
                                    </a>
                                    <button class="flex gap-1 bg-amber-500 px-2 rounded-lg items-center">0<i
                                            class='bx bxs-star text-[grey] star duration-1000'></i></button>
                                </div>
                                <p class="text-sm font-medium leading-5 text-gray-700 mb-3">
                                    <textarea v-model="modal.description" minlength="10" maxlength="200"
                                        class="w-full bg-transparent text-gray-700 outline-none px-1" rows="4"
                                        placeholder="About project..." required></textarea>
                                </p>
                                <div class="relative z-0 w-full mx-1 mb-4 group">
                                    <button type="button" class="py-1 px-4 bg-gray-500 rounded-lg"
                                        @click="modal.toggle1 = !modal.toggle1">languages</button>
                                    <ul v-show="modal.toggle1" @click="selectedModal"
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
                                <div class="flex flex-wrap justify-center gap-1 text-xs py-1 items-center">
                                    <button type="button" class="bg-[#8080805b] px-3 py-1 rounded-full"
                                        v-for="i in modal.languages" :key="i">
                                        {{ i }} <i class="bx bx-x font-bold" @click="selectedLangModal"></i>
                                    </button>
                                </div>
                                <div class="flex justify-center relative gap-5 items-center py-1">
                                    <input v-model="modal.github_link" v-show="modal.github" id="github1"
                                        class="absolute border-2 border-black bg-black text-white rounded -top-8 shadow-lg shadow-gray-600 left-0 w-full p-1"
                                        type="text" required>
                                    <label for="github1">
                                        <i @click="modal.github = !modal.github; modal.prewiew = false"
                                            class='bx bxl-github text-2xl py-1 cursor-pointer'></i>
                                    </label>

                                    <input v-model="modal.link" v-show="modal.prewiew" id="preview1"
                                        class="absolute border-2 bg-[#3098edcd] border-black rounded -top-8 shadow-lg shadow-gray-600 left-0 w-full p-1"
                                        type="text" required>
                                    <label for="preview1">
                                        <i @click="modal.prewiew = !modal.prewiew; modal.github = false" class=" bg-[#3098edcd] px-4 py-1 cursor-pointer rounded-lg shadow-md
                                shadow-[#3097ed]">Preview</i>
                                    </label>
                                </div>
                                <div class="flex justify-between">
                                    <time class="text-sm font-medium text-gray-500">
                                        <input v-model="modal.start_time" type="date" required>
                                    </time>
                                    <time class="text-sm font-medium text-red-500">
                                        <input v-model="modal.end_time" type="date" required>
                                    </time>
                                </div>
                            </div>
                            <div class="flex justify-center items-center bg-[#343E59] -mx-1 -my-2 h-10">
                                <input @click="editProduct" type="submit" value="edit product"
                                    class="bg-[#3097ed] px-5 cursor-pointer py-1 rounded-lg">
                            </div>
                        </div>
                    </form>
                    <!-- edit modal -->
                </div>
            </div>
        </div>
        <section>
            <!-- delete modal -->
            <section>
                <div v-show="form.deleteToggle" id="popup-modal" tabindex="-1"
                    class="flex bg-[#80808069] justify-center items-center absolute z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
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
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want
                                    to delete this product?</h3>
                                <button data-modal-hide="popup-modal" type="button"
                                    @click="store.deleteProduct(form.deleteId); form.deleteToggle = false"
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
        </section>
    </main>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useProjectsStore } from '../stores/projects.js';
import axios from 'axios';
const store = useProjectsStore();

const form = reactive({
    image: "",
    title: "",
    description: "",
    start_time: "",
    end_time: "",
    link: "",
    github_link: "",
    languages: [],
    comment_id: "",
    toggle: false,
    editToggle: false,
    toggle1: false,
    deleteToggle: false,
    edit: false,
    editId: "",
    deleteId: "",
    github: false,
    prewiew: false,
})

const API_KEY = '04f841bed370d686fb72279fb8a11160';
const UPLOAD_URL = 'https://api.imgbb.com/1/upload';

async function uploadImage(image) {
    try {
        const formData = new FormData();
        formData.append('key', API_KEY);
        formData.append('image', image);

        const response = await axios.post(UPLOAD_URL, formData);
        return response.data.data.url;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function upload(e) {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    form.image = await uploadImage(file);
}

async function uploadModal(e) {
    const files = e.target.files[0];
    modal.image = await uploadImage(files);
}

const modal = reactive({
    image: "",
    title: "",
    description: "",
    start_time: "",
    end_time: "",
    link: "",
    github_link: "",
    languages: [],
    comment_id: "",
    toggle: false,
    editToggle: false,
    toggle1: false,
    deleteToggle: false,
    edit: false,
    github: false,
    prewiew: false,
})

function selectedLang(id) {
    form.languages.splice(id, 1)
}

function selectedLangModal(id) {
    modal.languages.splice(id, 1)
}

function selected(e) {
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

function selectedModal(e) {
    try {
        if (e.target.innerHTML.split(" ").length == 1 && e.target.innerHTML != "" && !e.target.innerHTML.includes(">")) {
            if (modal.languages.length) {
                for (let i in modal.languages) {
                    if (modal.languages[i] == e.target.innerHTML) {
                        modal.languages.splice(i, 1)
                    }
                }
            }
            modal.languages.push(e.target.innerHTML);
        }
    } catch (error) {
        console.log(error);
    }
}

async function editFunc(id) {
    form.editToggle = true;
    form.editId = id;
    const data = document.querySelector(`#e${id}`)
    console.log(data);
    modal.image = data.querySelector('#image').src;
    modal.title = data.querySelector('#title').innerHTML;
    modal.description = data.querySelector('#description').innerHTML;
    modal.start_time = data.querySelector('#start_time').innerHTML;
    modal.end_time = data.querySelector('#end_time').innerHTML;
    modal.link = data.querySelector('#link').href;
    modal.github_link = data.querySelector('#github_link').href;
    const langs = data.querySelector('#languages').querySelectorAll('button');

    for (let i of langs) {
        modal.languages.push(i.innerHTML);
    }

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
    const data = {
        image: form.image,
        title: form.title,
        description: form.description,
        start_time: form.start_time,
        end_time: form.end_time,
        link: form.link,
        github_link: form.github_link,
        languages: form.languages.join(","),
    }
    store.createProducts(data)
    form.image = ""
    form.title = ""
    form.description = ""
    form.start_time = ""
    form.end_time = ""
    form.link = ""
    form.github_link = ""
    form.languages = []
}

function editProduct() {
    let data = {
        image: modal.image,
        title: modal.title,
        description: modal.description,
        start_time: modal.start_time,
        end_time: modal.end_time,
        link: modal.link,
        github_link: modal.github_link,
        languages: modal.languages.join(','),
        comment_id: 1,
    }
    store.updateProduct(form.editId, data);
    form.editToggle = false;
    modal.image = ""
    modal.title = ""
    modal.description = ""
    modal.start_time = ""
    modal.end_time = ""
    modal.link = ""
    modal.github_link = ""
    modal.languages = []
}

function deleteProduct(id) {
    form.deleteId = id;
    form.deleteToggle = true;
}

onMounted(() => {
    store.getProducts();
})
</script>

<style lang="scss" scoped>
.title {
    overflow: hidden !important;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    height: 5.2rem;
}

.imgbtn:hover {
    .btn {
        display: flex;
    }
}

@keyframes ping {

    75%,
    100% {
        transform: scale(2);
        opacity: 0;
    }
}

.star:active {
    animation: ping 5s cubic-bezier(0.9, 0.9, 0.9, 0.9) ease;
    transform: scale(20);
}

.chat:hover {
    b {
        display: inline-block;
    }
}
</style>