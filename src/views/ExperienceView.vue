<template>
    <main>
        <section>
            <ol class="relative border-l ml-2 border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-100">February
                        2022</time>
                    <h3 class="text-lg font-semibold text-white">Application UI code in Tailwind CSS</h3>
                    <p class="mb-4 text-base font-normal text-white dark:text-gray-100">Get access to over 20+ pages
                        including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing
                        pages.</p>
                </li>
                <li class="mb-10 ml-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-100">March 2022</time>
                    <h3 class="text-lg font-semibold text-white">Marketing UI design in Figma</h3>
                    <p class="text-base font-normal text-white dark:text-gray-100">All of the pages and components are
                        first designed in Figma and we keep a parity between the two versions even as we update the project.
                    </p>
                </li>
                <li class="ml-4 mb-10 ">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-100">April 2022</time>
                    <h3 class="text-lg font-semibold text-white">E-Commerce UI code in Tailwind CSS</h3>
                    <p class="text-base font-normal text-white dark:text-gray-100">Get started with dozens of web
                        components and interactive elements built on top of Tailwind CSS.</p>
                </li>
                <li class="ml-4 mb-10">
                    <form v-show="add">
                        <div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input type="text" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-40 mb-1 text-sm font-normal leading-none bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">April
                                    2022</label>
                            </div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input type="text" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-1/2 mb-1 text-lg leading-none bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white font-bold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">April
                                    2022</label>
                            </div>
                            <div class="relative z-0 w-full mx-1 mb-4 group">
                                <input type="text" name="floating_email" id="floating_email"
                                    class="block py-2.5 px-0 w-[90%] mb-1 text-md font-medium leading-none bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">April
                                    2022</label>
                            </div>
                        </div>
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                        </div>
                        <button type="submit" class="text-white px-5 py-2 rounded-lg bg-[#3098ed]">Submit</button>
                    </form>
                    <button @click="add = !add" v-show="!add" class="text-white px-5 py-2 rounded-lg bg-[#3098ed]">Add experience</button>
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