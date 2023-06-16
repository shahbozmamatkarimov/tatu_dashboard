<template>
    <main>
        <section>
            <ol class="relative border-l ml-8 border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-6" v-for="i in 3" :key="i">
                    <span
                        class="absolute flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full -left-8 dark:ring-gray-900 dark:bg-blue-900">
                        <img class="w-full h-full rounded-full shadow-lg"
                            src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                            alt="img" />
                    </span>
                    <div
                        class="p-4 mx-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                        <div class="items-center justify-between mb-3 sm:flex">
                            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                            <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Thomas Lean</div>
                        </div>
                        <div
                            class="p-3 text-sm italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                            Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your
                            design system! This is the second session of our new webinar series on #DesignSystems
                            discussions where we'll be speaking about Measurement.</div>
                    </div>
                    <div class="mx-5 hidden" :id="`id${i}`">
                        <form>
                            <textarea :id="`text${i}`"
                                class="p-3 mt-1 w-full text-sm italic font-medium border border-gray-50 rounded-lg bg-gray-300 outline-none dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"
                                rows="2" required></textarea>
                            <div class="flex justify-between items-center w-full">
                                <button type="submit"
                                    class="flex items-center gap-2 text-white bg-[#8080805b] px-5 rounded-lg">
                                    send <i class='bx bxs-send'></i>
                                </button>
                                <button class="flex items-center gap-2 text-white bg-[#8080805b] px-5 rounded-lg">
                                    <i class='bx bx-refresh'></i> reset
                                </button>
                            </div>
                        </form>
                    </div>
                    <label :for="`text${i}`">
                        <button @click="reply(i)" :id="`btn${i}`"
                            class="flex items-center gap-2 text-white bg-[#8080805b] px-3 rounded-lg mt-5 ml-5"><i
                                class='bx bx-reply'></i>reply</button>
                    </label>
                </li>
            </ol>
        </section>
    </main>
</template>

<script setup>
function reply(id) {
    console.log(document.querySelector(`#id${id}`));
    console.log(document.querySelector(`#btn${id}`));
    document.querySelector(`#id${id}`).className = 'mx-5';
    document.querySelector(`#btn${id}`).className += ' hidden';
}
</script>

<style lang="scss" scoped></style>