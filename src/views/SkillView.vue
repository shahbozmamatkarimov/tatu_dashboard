<template>
    <main>
        <section>
            <ol class="relative border-l border-gray-200 ml-2 dark:border-gray-700">
                <li class="mb-10 ml-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <div
                        class="flex items-center gap-5 mb-1 text-4xl font-normal leading-none text-gray-100 dark:text-white">
                        <img class="w-12 h-12 rounded-full"
                            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" alt="html">
                        <b class="text-lg">HTML</b>
                    </div>
                </li>
                <li class="mb-10 ml-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <div
                        class="flex items-center gap-5 mb-1 text-4xl font-normal leading-none text-gray-100 dark:text-white">
                        <img class="w-12 h-12 rounded-full"
                            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="html">
                        <b class="text-lg">CSS</b>
                    </div>
                </li>
                <li class="mb-10 ml-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <div
                        class="flex items-center gap-5 mb-1 text-4xl font-normal leading-none text-gray-100 dark:text-white">
                        <img class="w-12 h-12 rounded-full"
                            src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
                            alt="html">
                        <b class="text-lg">JavaScript</b>
                    </div>
                </li>
                <li class="mb-10 ml-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <div
                        class="flex items-center gap-5 mb-1 text-4xl font-normal leading-none text-gray-100 dark:text-white">
                        <img class="w-12 h-12 rounded-full" src="https://images.ctfassets.net/ooa29xqb8tix/RrX9HCiZ8qPoIpJSlHphR/f9778b44e2b768d31fafb4ac70956682/vue-logo.png?w=400&q=50"
                            alt="html">
                        <b class="text-lg">VueJS</b>
                    </div>
                </li>
                <li class="ml-4 mb-10">
                    <form v-show="add">
                        <div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input type="text" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-40 mb-1 text-sm font-normal leading-none dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">icon url</label>
                            </div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input type="text" name="floating_email" id="floating_email"
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
    </main>
</template>

<script setup>
import { ref } from 'vue';

const add = ref(false)
</script>

<style lang="scss" scoped></style>