<template>
    <button
      class="button"
      :class="$props.buttonType"
      @click="$props.onClick?.()"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    onClick: {
      type: Function,
      required: false,
      default: () => {},
    },
    buttonType: {
      type: String,
      required: false,
      default: 'primary',
    },
  },
});
</script>

<style scoped lang="scss">
.button {
  height: 45px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #000;
  cursor: pointer;
  transition: 200ms;
}
  .primary {
    background-color: #000;
    color: #fff;
  }

  .primary:hover {
    background-color: #fff;
    color: #000;
  }

  .danger {
    border: 1px solid #DC143C;
    background-color: #DC143C;
    color: white;
  }

  .danger:hover {
    color: #DC143C;
    background-color: white;
  }

  .info {
    border-color: #D1D100;
    background-color: #D1D100;
    color: white;
  }

  .info:hover {
    background-color: white;
    color: #D1D100;
  }
</style>
