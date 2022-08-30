<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
@import './assets/styles/reset.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;700&display=swap');

:root {
  background-color: #C0C0C0;
  font-family: 'Roboto Mono', monospace;
}
</style>
