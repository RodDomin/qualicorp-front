<template>
  <div class="create">
    <Container widthSize="200px" heightSize="400px">
      <template #title>
        <Title>Criar usuário</Title>
      </template>
      <template #content>
        <UserForm @confirm="createUser" @back="backToList" />
      </template>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from '@/utils/axios';
import Container from '@/components/atoms/Container.vue';
import Title from '@/components/atoms/Title.vue';
import UserForm from '@/components/organisms/UserForm.vue';

export default defineComponent({
  components: {
    Container,
    UserForm,
    Title,
  },
  setup() {
    const toast = useToast();
    const router = useRouter();

    function backToList() {
      router.push('/');
    }

    async function createUser(data: Record<string, string>) {
      try {
        await axios
          .post('/users', data);

        toast.success('Usuário criado com sucesso');
        backToList();
      } catch (err) {
        toast.error('Não foi possivel criar o usuário, tente novamente mais tarde');
      }
    }

    return { createUser, backToList };
  },
});
</script>

<style scoped lang="scss">
.create {
  padding: 15px 30px;

  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
