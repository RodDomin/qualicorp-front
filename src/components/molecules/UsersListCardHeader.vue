<template>
  <div class="users-list-card-header">
    <Title>Listagem de usuários</Title>
    <Button @click="goToCreateUser">&plus; Criar usuário</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/atoms/Button.vue';
import Title from '@/components/atoms/Title.vue';

export default defineComponent({
  name: 'UsersListCardHeader',
  components: {
    Button,
    Title,
  },
  methods: {
    goToCreateUser() {
      this.$router.push('/create');
    },
  },
});
</script>

<style scoped lang="scss">
.users-list-card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
