<template>
    <main>
        <section class="flex justify-center items-center px-10 text-xl relative">
            <div
                class="lg:w-[80%] shadow-md relative rounded-lg shadow-gray-400 border-t border-gray-500 mr-5 md:min-h-full min-h-[700px] p-5 w-full mt-32 sm:p-10 md:float-left">
                <div class="flex flex-col justify-center items-center relative photo">
                    <img class="w-[120px] h-[120px] mx-auto rounded-full ring-4 ring-gray-300 -my-32 mb-4"
                        src="https://t3.ftcdn.net/jpg/01/80/58/26/360_F_180582645_OC9VCIHohTXPFKKas6TKVTQW8ltmHmtV.webp"
                        alt="" />
                    <div
                        class="camera hidden justify-center items-end absolute -top-16 text-white bg-[#808080a8] w-32 pb-4 cursor-pointer pt-2 rounded-b-full">
                        <label for="img">
                            <i class='bx bxs-camera cursor-pointer text-3xl'></i>
                        </label>
                        <input type="file" id="img" class="hidden">
                    </div>
                </div>
                <div class="login-box relative">
                    <form>
                        <div class="relative user-box lg:w-1/3 w-full float-left">
                            <input type="search" class="w-[90%]" required="" />
                            <label>Company</label>
                        </div>
                        <div class="relative user-box lg:w-1/3 w-full float-left">
                            <input type="search" class="w-[90%]" required="" />
                            <label>First name...</label>
                        </div>
                        <div class="relative user-box lg:w-1/3 w-full float-left">
                            <input type="search" class="w-[89%]" required="" />
                            <label>Last name...</label>
                        </div>
                        <div class="relative user-box md:w-1/2 w-full float-left">
                            <input type="search" class="w-[90%]" required="" />
                            <label>Shahar...</label>
                        </div>
                        <div class="relative user-box md:w-1/2 w-full float-left">
                            <input type="search" class="w-[92%]" required="" />
                            <label>Tuman...</label>
                        </div>
                        <div class="relative user-box w-full float-left">
                            <input type="search" class="w-[96%]" required="" />
                            <label>Manzil...</label>
                        </div>
                        <div class="relative user-box w-full float-left">
                            <input type="searcharea" class="w-[96%] z-0" required="" />
                            <label class="md:text-2xl text-[17px]">O'zingiz haqingizda...</label>
                        </div>
                        <div class="relative w-full border-b-0 outline-none text-center float-left">
                            <input class="bg-[#3097ed] px-5 py-1 rounded-lg cursor-pointer" type="submit">
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>

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

.photo:hover {
    .camera {
        display: flex;
    }
}
</style>