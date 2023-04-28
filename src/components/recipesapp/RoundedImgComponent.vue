<template>
  <img :src="imgUrl" />
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["imgUrl"]);
</script>
