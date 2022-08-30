<template>
  <label :for="$props.name">
    {{ $props.label }}
    <input
      :id="$props.name"
      :value="$props.modelValue"
      @input="inputChange"
      :placeholder="$props.placeholder"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    modelValue: {
      type: String,
      required: false,
      default: '',
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    inputChange(event: any) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
});
</script>

<style lang="scss" scoped>
label {
  display: flex;
  flex-direction: column;

  max-width: 200px;

  input {
    margin-top: 10px;
    padding: 10px 10px;
  }
}
</style>
