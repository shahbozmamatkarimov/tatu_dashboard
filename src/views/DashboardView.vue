<template>
    <main>
        <!-- <section>
            <div class="py-10 flex gap-5 justify-between">
                <div v-for="i in 4" :key="i"
                    class="relative min-w-[200px] shadow-lg shadow-gray-400 cursor-pointer border lg:w-1/4 bg-white rounded-lg mx-auto my-6">
                    <div class="flex justify-end p-5">
                        <div>
                            <i class="bx bx-user shadow-lg shadow-[#3098ed74] text-4xl bg-[#3098ed] p-4 text-white rounded-2xl absolute left-5 -top-5"></i>
                        </div>
                        <div class="text-end">
                            <h3>Today's Users</h3>
                            <h2 class="text-2xl font-bold">2,300</h2>
                        </div>
                    </div>
                    <p class="px-5 py-2 border-t-2">
                        <i class="bx bx-history"></i> <i class="text-green-600 font-bold">+3%</i> <i class="float-right">than last month</i>
                    </p>
                </div>
            </div>
        </section> -->
        <section>
            <Chart />
        </section>
        </main>
</template>

<script setup>
import { Chart } from "../components"
</script>

<style lang="scss" scoped></style>