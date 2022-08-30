<template>
  <div class="home">
    <Container>
      <template #title>
        <UsersListCardHeader />
      </template>
      <template #content>
        <UsersListContentCard :users="users" @removeUser="removeUser" />
      </template>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';
import Container from '@/components/atoms/Container.vue';
import UsersListCardHeader from '@/components/molecules/UsersListCardHeader.vue';
import UsersListContentCard from '@/components/molecules/UsersListContentCard.vue';
import axios from '@/utils/axios';

export default defineComponent({
  name: 'UsersList',
  components: {
    Container,
    UsersListCardHeader,
    UsersListContentCard,
  },
  setup() {
    const toast = useToast();
    const users = ref([]);

    function getUsers() {
      return axios.get('/users');
    }

    async function loadUsers() {
      try {
        const response = await getUsers();
        users.value = response.data;
      } catch (err) {
        toast.error('Houve um erro na Api, a página não conseguiu carregar os usuários');
      }
    }

    onMounted(async () => {
      await loadUsers();
    });

    async function removeUser(id: number | string) {
      try {
        await axios.delete(`/users/${id}`);
        toast.success('Usuário removido com sucesso');
        await loadUsers();
      } catch {
        toast.error('Não foi possivel remover o usuário, tente novamente mais tarde');
      }
    }

    return { users, removeUser };
  },
});
</script>

<style scoped lang="scss">
.home {
  padding: 15px 30px;

  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
