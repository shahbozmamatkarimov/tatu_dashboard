<template>
    <main class="mb-20">
        <section>
            <div class="bg-white relative">
                <a class="absolute right-3 top-0 bg-[#3097ed] px-7 pb-1 mt-2 rounded-md shadow-lg shadow-[#3097ed]" target="_blank" href="https://www.copyandpastesymbols.net">icons</a>
                <Editor v-model="value"
                    editorStyle="height: 70vh; background:radial-gradient(circle, rgba(13, 36, 81, 1) 100%, rgba(12, 37, 86, 1) 100%); color:white; font-size: 16px;" />
            </div>
            <div class="flex justify-between items-center py-5">
                <button @click="send"
                    class="py-1 px-5 rounded-lg shadow-md shadow-[#3098ed9f] active:shadow-none bg-[#3097ed]">send</button>
                <button @click="reset"
                    class="py-1 px-5 rounded-lg shadow-md shadow-[#ffffffa8] active:shadow-none bg-white">reset</button>
            </div>
        </section>
        <section>
            <div id="contents"></div>
        </section>

        <!-- Main modal -->
        <section v-show="edit.editToggle">
            <div
                class="flex bg-[#80808058] justify-center  items-center absolute z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-4xl max-h-full border-2 border-gray-400 rounded-lg">
                    <div class="flex items-center bg-white justify-between px-4 py-2 rounded-t">
                        <h3 class="text-2xl font-semibold dark:text-white">
                            Edit content
                        </h3>
                        <button
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1 ml-auto items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <i @click="edit.editToggle = false" class="bx bx-x text-2xl font-bold"></i>
                        </button>
                    </div>
                    <div class="bg-white rounded-b-md">
                        <Editor v-model="edit.value"
                            editorStyle="height: 70vh; background:radial-gradient(circle, rgba(13, 36, 81, 1) 100%, rgba(12, 37, 86, 1) 100%); color:white; font-size: 16px;" />
                        <div class="flex justify-between items-center p-2 space-x-2 rounded-b-lg">
                            <button
                                @click="store.updateProduct(+edit.editId, { content: edit.value }); edit.editToggle = false; contents()"
                                class="text-white bg-[#3097ed] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>
                            <button @click="edit.editToggle = false"
                                class="text-gray-500 bg-white focus:ring-4 focus:ring-blue-300 rounded-lg border-2 border-gray-500 text-sm font-medium px-5 py-2.5">Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- delete modal -->
        <section>
            <div v-show="edit.deleteToggle" id="popup-modal" tabindex="-1"
                class="flex justify-center items-center absolute z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="popup-modal">
                            <i @click="edit.deleteToggle = false" class="bx bx-x text-xl font-bold px-1"></i>
                        </button>
                        <div class="p-6 text-center">
                            <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want
                                to delete this product?</h3>
                            <button data-modal-hide="popup-modal" type="button"
                                @click="store.deleteProduct(edit.deleteId); edit.deleteToggle = false; contents()"
                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Yes, I'm sure
                            </button>
                            <button data-modal-hide="popup-modal" type="button" @click="edit.deleteToggle = false"
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
import { onMounted, watch, reactive, ref } from 'vue';
import { useContentStore } from '../stores/content';
import Editor from 'primevue/editor';
const store = useContentStore();
const value = ref('');

const edit = reactive({
    editToggle: false,
    deleteToggle: false,
    editId: "",
    deleteId: "",
    value: "",
})

async function send() {
    await store.createProducts({ content: value.value.trimEnd() })
    value.value = "";
    contents();
}

function reset() {
    value.value = "";
}

async function contents() {
    const Content = document.querySelector('#contents')
    Content.innerHTML = ""
    console.log('objectobjectobjectobjectobject');
    const data = await store.getProducts()
    for (let i of data) {
        const div1 = document.createElement('div')
        const div = document.createElement('div')

        const divBtn = document.createElement('div')
        const i1 = document.createElement('i')
        const i2 = document.createElement('i')
        divBtn.className = 'flex absolute right-5 gap-5 h-7 text-white bg-gray-500 text-xl p-1 rounded'
        i1.className = 'bx bx-pencil cursor-pointer'
        i2.className = 'bx bx-trash cursor-pointer text-red-500'
        i1.addEventListener('click', async () => {
            edit.editId = i.id;
            edit.value = i.content;
            edit.editToggle = true;
        });
        i2.addEventListener('click', async () => {
            edit.deleteId = i.id;
            edit.deleteToggle = true;
        })

        divBtn.append(i1, i2);

        div1.className = 'relative flex justify-between overflow-hidden bg-white rounded my-5 p-2 shadow-md shadow-white'
        div.innerHTML = i.content;
        div1.appendChild(div)
        div1.appendChild(divBtn)
        Content.appendChild(div1)
    }
}

onMounted(async () => {
    const data = await store.getProducts();
    contents()
})

watch(() => {
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.code === 'Enter') {
            send()
        }
    });
})

</script>

<style lang="scss" scoped></style>