<template>
  <div class="grid grid-cols-2 gap-8 items-center justify-between px-8">
    <div class="pt-4 bg-white px-8 rounded-lg">
      <label for="timeRange" class="form-label text-xs text-purple-600">
        perspectiva {{ perspective }}px</label
      >
      <input
        type="range"
        class="form-range appearance-none w-full h-8 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
        min="100"
        max="300"
        step="5"
        v-model="perspective"
      />

      <label for="timeRange" class="form-label text-xs text-purple-600">
        rotate x: {{ x_rotate }} grados</label
      >
      <input
        type="range"
        class="form-range appearance-none w-full h-8 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
        min="0"
        max="180"
        step="5"
        v-model="x_rotate"
      />

      <label for="timeRange" class="form-label text-xs text-purple-600">
        rotate y: {{ y_rotate }} grados</label
      >
      <input
        type="range"
        class="form-range appearance-none w-full h-8 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
        min="0"
        max="180"
        step="5"
        v-model="y_rotate"
      />

      <label for="timeRange" class="form-label text-xs text-purple-600">
        rotate z: {{ z_rotate }} grados</label
      >
      <input
        type="range"
        class="form-range appearance-none w-full h-8 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
        min="0"
        max="180"
        step="5"
        v-model="z_rotate"
      />
    </div>

    <div
      class="bg-purple-500 h-24 lg:h-48 w-24 lg:w-48 rounded-lg"
      :style="box"
    ></div>

    <div class="flex col-span-2 justify-center">
      <button
        role="button"
        @click.prevent="reset"
        class="block rounded-lg bg-amber-400 py-1.5 px-8 mr-8"
      >
        Reset
      </button>

      <button
        role="button"
        @click.prevent="copy"
        class="block rounded-lg bg-amber-400 py-1.5 px-8 ml-8"
      >
        Copy
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const perspective = ref(100);
const x_rotate = ref(0);
const y_rotate = ref(0);
const z_rotate = ref(0);

const box = computed(() => {
  return {
    transform: `
            perspective(${perspective.value}px)
            rotateX(${x_rotate.value}deg)
            rotateY(${y_rotate.value}deg)
            rotateZ(${z_rotate.value}deg)
        `,
  };
});

// reset
const reset = () => {
  perspective.value = 100;
  x_rotate.value = 0;
  y_rotate.value = 0;
  z_rotate.value = 0;
};

// copy to clipboard
const copy = async () => {
  let text = `transform: ${box.value._value.transform}`;
  await navigator.clipboard.writeText(text);
  //alert("CSS style copied!");
  console.log(text);
};
</script>
