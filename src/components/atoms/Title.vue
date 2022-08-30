<template>
  <h1>
    <slot />
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Title',
});
</script>

<style scoped lang="scss">
h1 {
  font-size: 1.5rem;
  height: fit-content;
  width: fit-content;
}
</style>
