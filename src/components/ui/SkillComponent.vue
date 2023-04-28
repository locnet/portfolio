<template>
  <div class="bg-gray-50 rounded-lg shadow-lg shadow-teal-600">
    <div class="bg-zinc-300 rounded-t-lg py-4">
      <p class="text-center text-teal-400">
        <slot name="icon"></slot>
      </p>

      <p class="text-center text-xl text-slate-600 mt-4 uppercase">
        <slot name="title"></slot>
      </p>
    </div>

    <div class="p-6">
      <p class="text-center md:text-left font-base text-slate-500">
        <slot name="skills"></slot>
      </p>
    </div>
  </div>
</template>
