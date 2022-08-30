<template>
  <div class="container" :style="{ maxWidth: widthSize, maxHeight: heightSize }">
    <div class="container-title">
      <slot name="title" />
    </div>
    <slot name="content" />
    <slot name="footer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Container',
  props: {
    widthSize: {
      type: String,
      required: false,
      default: '1250px',
    },
    heightSize: {
      type: String,
      required: false,
      default: '100%',
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  border-radius: 10px;

  width: 100%;
  height: 90vh;

  padding: 20px;
  background-color: white;

  * {
    margin-bottom: 25px;
  }

  *:nth-last-child {
    margin-bottom: 0px;
  }

  &-title {
    padding: 0;
  }
}
</style>
