<template>
    <main>
        <section v-show="form.editToggle" class="flex justify-center items-center px-10 text-xl relative">
            <div class="flex absolute right-40 top-20 gap-5 text-white text-2xl">
                <i v-show="store.Profile.length" class='bx bx-window-close cursor-pointer'
                    @click="form.editToggle = false"></i>
            </div>
            <div
                class="lg:w-[80%] shadow-md relative rounded-lg shadow-gray-400 border-t border-gray-500 mr-5 md:min-h-full min-h-[700px] p-5 w-full mt-32 sm:p-10 md:float-left">
                <div class="flex flex-col justify-center items-center relative photo">
                    <img v-show="!form.image"
                        class="w-[120px] h-[120px] mx-auto rounded-full ring-4 ring-gray-300 -my-32 mb-4"
                        src="https://t3.ftcdn.net/jpg/01/80/58/26/360_F_180582645_OC9VCIHohTXPFKKas6TKVTQW8ltmHmtV.webp"
                        alt="img" />
                    <img v-show="form.image"
                        class="w-[120px] h-[120px] mx-auto rounded-full ring-4 ring-gray-300 -my-32 mb-4" :src="form.image"
                        alt="img" />
                    <div
                        class="camera hidden justify-center items-end absolute -top-16 text-white bg-[#808080a8] w-32 pb-4 cursor-pointer pt-2 rounded-b-full">
                        <label for="image">
                            <i class='bx bxs-camera cursor-pointer text-3xl'></i>
                        </label>
                        <input @change="upload" type="file" id="image" class="w-0 h-0 absolute">
                    </div>
                </div>
                <div class="login-box relative">
                    <form @submit.prevent="createProduct">
                        <div class="relative user-box lg:w-1/3 w-full float-left">
                            <input v-model="form.company" type="search" class="w-[90%]" required="" />
                            <label>Company</label>
                        </div>
                        <div class="relative user-box lg:w-1/3 w-full float-left">
                            <input v-model="form.first_name" type="search" class="w-[90%]" required="" />
                            <label>First name...</label>
                        </div>
                        <div class="relative user-box lg:w-1/3 w-full float-left">
                            <input v-model="form.last_name" type="search" class="w-[89%]" required="" />
                            <label>Last name...</label>
                        </div>
                        <div class="relative user-box lg:w-1/2 w-full float-left">
                            <input v-model="form.email" type="email" class="w-[90%]" required="" />
                            <label>Your email...</label>
                        </div>
                        <div class="relative user-box lg:w-1/2 w-full float-left">
                            <input v-model="form.phone" type="tel" class="w-[89%]" required="" />
                            <label>Your phone number...</label>
                        </div>
                        <div class="relative user-box md:w-1/2 w-full float-left">
                            <input v-model="form.city" type="search" class="w-[90%]" required="" />
                            <label>City...</label>
                        </div>
                        <div class="relative user-box md:w-1/2 w-full float-left">
                            <input v-model="form.district" type="search" class="w-[92%]" required="" />
                            <label>District...</label>
                        </div>
                        <div class="relative user-box w-full float-left">
                            <input v-model="form.address" type="search" class="w-[96%]" required="" />
                            <label>Address...</label>
                        </div>
                        <div class="relative user-box w-full float-left">
                            <input v-model="form.description" type="searcharea" class="w-[96%] z-0" required="" />
                            <label class="md:text-2xl text-[17px]">About you...</label>
                        </div>
                        <div class="relative w-full border-b-0 outline-none text-center float-left">
                            <input class="bg-[#3097ed] px-5 py-1 rounded-lg cursor-pointer" type="submit">
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section v-show="!form.editToggle" class="flex justify-center admin_panel items-center px-10 text-xl relative"
            v-for="i in store.Profile" :key="i.id">
            <div class="flex absolute right-40 top-20 gap-5 text-white text-2xl">
                <i class='bx bx-pencil cursor-pointer' @click="editModal(i.id)"></i><i @click="deleteProduct(i.id)"
                    class='bx bx-trash cursor-pointer text-red-500'></i>
            </div>
            <div
                class="lg:w-[80%] shadow-md relative rounded-lg shadow-gray-400 border-t border-gray-500 mr-5 md:min-h-full min-h-[700px] p-5 w-full mt-32 sm:p-10 md:float-left">
                <div class="flex flex-col justify-center items-center relative photo">
                    <img class="w-[120px] h-[120px] mx-auto rounded-full ring-4 ring-gray-300 -my-32 mb-4"
                        :src="i.image || 'https://t3.ftcdn.net/jpg/01/80/58/26/360_F_180582645_OC9VCIHohTXPFKKas6TKVTQW8ltmHmtV.webp'"
                        id="photo" alt="img" />
                </div>
                <div class="login-box modal relative">
                    <div>
                        <div class="relative user-box lg:w-1/3 w-full float-left">
                            <input id="company" disabled :value="i.company" type="search" class="w-[90%]" required="" />
                            <label>Company</label>
                        </div>
                        <div class="relative user-box lg:w-1/3 w-full float-left">
                            <input id="first_name" disabled :value="i.first_name" type="search" class="w-[90%]"
                                required="" />
                            <label>First name...</label>
                        </div>
                        <div class="relative user-box lg:w-1/3 w-full float-left">
                            <input id="last_name" disabled :value="i.last_name" type="search" class="w-[89%]" required="" />
                            <label>Last name...</label>
                        </div>
                        <div class="relative user-box lg:w-1/2 w-full float-left">
                            <input id="email" disabled type="email" :value="i.email" class="w-[90%]" required="" />
                            <label>Your email...</label>
                        </div>
                        <div class="relative user-box lg:w-1/2 w-full float-left">
                            <input id="phone" disabled type="tel" :value="i.phone" class="w-[89%]" required="" />
                            <label>Your phone number...</label>
                        </div>
                        <div class="relative user-box md:w-1/2 w-full float-left">
                            <input id="city" disabled :value="i.city" type="search" class="w-[90%]" required="" />
                            <label>City...</label>
                        </div>
                        <div class="relative user-box md:w-1/2 w-full float-left">
                            <input id="district" disabled :value="i.district" type="search" class="w-[92%]" required="" />
                            <label>District...</label>
                        </div>
                        <div class="relative user-box w-full float-left">
                            <input id="address" disabled :value="i.address" type="search" class="w-[96%]" required="" />
                            <label>Address...</label>
                        </div>
                        <div class="relative user-box w-full float-left">
                            <input id="description" disabled :value="i.description" type="searcharea" class="w-[96%] z-0"
                                required="" />
                            <label class="md:text-2xl text-[17px]">About you...</label>
                        </div>
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
                                @click="store.deleteProduct(form.deleteId); form.deleteToggle = false; form.editToggle = true;"
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
import { useProfileStore } from '../stores/profile';
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

const add = ref(false)
const store = useProfileStore();

const form = reactive({
    image: "",
    company: "",
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
    city: "",
    district: "",
    address: "",
    description: "",
    toggle: false,
    editToggle: false,
    toggle1: false,
    deleteToggle: false,
    editId: "",
    deleteId: "",
})

const modal = reactive({
    image: "",
    email: "",
    phone: "",
    company: "",
    first_name: "",
    last_name: "",
    city: "",
    district: "",
    address: "",
    description: "",
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
    const file = e.target.files[0];
    form.image = await uploadImage(file);
}

function createProduct() {
    const data = {
        image: form.image,
        company: form.company,
        email: form.email,
        phone: form.phone,
        first_name: form.first_name,
        last_name: form.last_name,
        city: form.city,
        district: form.district,
        address: form.address,
        description: form.description,
    }
    add.value = false;
    form.image = ""
    form.email = ""
    form.phone = ""
    form.company = ""
    form.first_name = ""
    form.last_name = ""
    form.city = ""
    form.district = ""
    form.address = ""
    form.description = ""
    form.editToggle = false;
    console.log(data);
    if (store.Profile.length) {
        store.updateProduct(form.editId, data)
        return
    }
    store.createProducts(data)
}

function editModal(id) {
    form.editId = id;
    const data = document.querySelector('.admin_panel')
    form.editToggle = true;
    form.image = data.querySelector('#photo').src
    form.company = data.querySelector('#company').value
    form.email = data.querySelector('#email').value
    form.phone = data.querySelector('#phone').value
    form.first_name = data.querySelector('#first_name').value
    form.last_name = data.querySelector('#last_name').value
    form.city = data.querySelector('#city').value
    form.district = data.querySelector('#district').value
    form.address = data.querySelector('#address').value
    form.description = data.querySelector('#description').value
}

function editProduct() {
    form.editToggle = false;
    const data = {
        name: modal.name,
        link: modal.link,
    }
    store.updateProduct(data);
}

function deleteProduct(id) {
    form.deleteId = id;
    form.deleteToggle = true;
    form.company = ""
    form.email = ""
    form.phone = ""
    form.first_name = ""
    form.last_name = ""
    form.city = ""
    form.district = ""
    form.address = ""
    form.description = ""
}

onMounted(async () => {
    const data = await store.getProducts()
    if (data.length == 0) {
        form.editToggle = true;
    }
});

</script>

<style lang="scss" scoped>
.login-box {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
}

.login-box .user-box input {
    padding: 10px 0;
    color: white;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    background: transparent;
    height: 50px;
}

input:focus,
textarea:focus {
    border-bottom: 3px solid blue !important;
}

label {
    color: white;
}

.login-box .user-box label,
textarea {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    pointer-events: none;
    transition: 0.5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
    top: -25px;
    left: 0;
    color: #03e9f4;
    font-size: 16px;
}

.modal label {
    position: absolute;
    top: -25px !important;
    left: 0;
    color: #03e9f4;
    font-size: 16px;
}

.photo:hover {
    .camera {
        display: flex;
    }
}
</style>