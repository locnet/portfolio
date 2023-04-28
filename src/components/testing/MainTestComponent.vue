<template>
    <div class="flex justify-center">
        <div>
            <button 
                class="rounded-lg py-2 px-8 bg-teal-400 text-white"
                :class="{bg: mouseX > 100}">
                Test
            </button>
            <p>mouseX: {{ mouseX }} , mouseY: {{ mouseY }}</p>
        </div>
    </div>

</template>

<script setup>
import { ref,  onMounted} from "vue";
const mouseX = ref(0);
const mouseY = ref(0);



const update = (event) => {
    mouseX.value = event.pageX;
    mouseY.value = event.pageY;
}
onMounted(() => window.addEventListener('mousemove', update))
</script>

<style>
    .bg {
        background-color: brown;
    }
</style>