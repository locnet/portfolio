<template>
    <div class="flex grid-cols-3 w-full  py-8 border-l-2 border-teal-500">
        <div class="flex items-center">
            <div class="h-6 w-6 rounded-full border-2 border-blue-400 bg-white -ml-3.5"></div>
        </div>
        <div class="flex items-center ml-4">
            <div class="rotate-45 -mr-8 w-6 h-6 bg-gray-100"></div>
        </div>
        
        <div class="p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-3">
            <div class="flex justify-between mb-4">
                <p class="font-medium text-teal-600 hover:text-teal-700
                    focus:text-teal-800 duration-300 transition ease-in-out text-sm">
                <slot name="title"></slot></p>
                <p class="font-medium text-teal-600 hover:text-teal-700
                    focus:text-teal-800 duration-300 transition ease-in-out text-sm">
                    <slot name="time"></slot></p>
            </div>
            <p class="text-gray-700 mb-6">
                <slot name="description"></slot>
            </p>
        </div>
    </div>
</template>