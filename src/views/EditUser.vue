<template>
  <div class="edit">
    <Container widthSize="200px" heightSize="400px">
      <template #title>
        <Title>Editar usuário</Title>
      </template>
      <template #content>
        <UserForm :user="user" @confirm="editUser" @back="backToList" />
      </template>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useToast } from 'vue-toastification';
import { useRouter, useRoute } from 'vue-router';
import axios from '@/utils/axios';
import Container from '@/components/atoms/Container.vue';
import Title from '@/components/atoms/Title.vue';
import UserForm from '@/components/organisms/UserForm.vue';
import { AxiosError } from 'axios';

export default defineComponent({
  name: 'EditUser',
  components: {
    Container,
    UserForm,
    Title,
  },
  setup() {
    const toast = useToast();
    const router = useRouter();
    const route = useRoute();

    const user = ref({});

    function backToList() {
      router.push('/');
    }

    function processEditError(error: Error) {
      if (error instanceof AxiosError && error.response?.status === 400) {
        toast.error('Deixe todos os campos preenchidos, e o email deve estar num formato de email');
        return;
      }

      toast.error('Não foi possível atualizar este usuário');
    }

    async function getUser(id: number | string) {
      try {
        const response = await axios
          .get(`/users/${id}`);

        user.value = response.data;
      } catch {
        toast.error('Não foi possível consultar os dados deste usuário');
        router.push('/');
      }
    }

    async function editUser(data: Record<string, string>) {
      try {
        await axios
          .put(`/users/${route.params.id}`, data);

        toast.success('Usuário editado com sucesso');
        backToList();
      } catch (err) {
        processEditError(err as Error);
      }
    }

    onMounted(async () => { await getUser(route.params.id as string); });

    return { user, editUser, backToList };
  },
});
</script>

<style scoped lang="scss">
.edit {
  padding: 15px 30px;

  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
