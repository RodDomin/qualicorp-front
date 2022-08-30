<template>
  <div class="table-container">
  <table class="table" cellspacing="0">
    <thead>
      <slot name="head" />
    </thead>
    <tbody>
      <slot name="body" />
    </tbody>
  </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Table',
});
</script>

<style lang="scss">
.table-container {
  overflow-x: auto;

  border-radius: 15px;
  width: 100%;
  height: 100%;
}

.table {
  border-collapse: separate;
  width: 100%;

  thead {
    border-spacing:0;
    background-color: #C0C0C0;

    tr {
      border-radius: 15px 0 0 15px;
    }

    th {
      padding: 10px 0;
    }
  }

  tbody {
    overflow-y: scroll;

    tr {
      background-color: white;
      text-align: center;
    }

    tr:nth-child(even) {
      background-color: #DCDCDC;
    }
  }
}
</style>
