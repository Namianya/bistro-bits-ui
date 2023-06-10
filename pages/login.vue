<template>
    <div class="min-h-screen flex justify-center items-center relative">
        <div
            class="absolute top-0 left-0 h-screen w-full bg-[url('https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] object-fill bg-cover">
        </div>
        <div class="absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-black/30 backdrop-blur-sm"></div>
        <div class="flex flex-col justify-center px-6 py-12 lg:px-8 card bg-base-100 shadow-md">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <NuxtLink to="/">
                    <p class="text-orange-500 font-normal text-center text-2xl "><span
                            class="text-lime-500 font-semibold ">Bistro</span>Bits</p>
                </NuxtLink>
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
                    account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    class="space-y-6"
                    action="#"
                    method="POST"
                >
                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >Email address</label>
                        <div class="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autocomplete="email"
                                required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                            >
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label
                                for="password"
                                class="block text-sm font-medium leading-6 text-gray-900"
                            >Password</label>
                            <div class="text-sm">
                                <a
                                    href="#"
                                    class="font-semibold text-lime-600 hover:text-lime-500"
                                >Forgot password?</a>
                            </div>
                        </div>
                        <div class="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autocomplete="current-password"
                                required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                            >
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                        >Sign in</button>
                    </div>
                </form>

                <p class="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a
                        href="#"
                        class="font-semibold leading-6 text-orange-500 hover:text-lime-500"
                    >Start a 30 day free trial</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const transactionDetails = { refrence: "AU234D6FR2", date: "9/6", time: "04:32", amount: "KES 19,500", status: "success", type: "credit" }

</script>

<style scoped></style>