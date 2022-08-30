<template>
  <form>
    <Input
      v-model="name"
      name="name"
      placeholder="digite o nome"
      label="Nome"
    />

    <Input
      v-model="email"
      name="email"
      placeholder="digite o email"
      label="Email"
    />

   <Input
      v-model="cpf"
      name="cpf"
      placeholder="digite o cpf"
      label="Cpf"
    />

    <Input
      v-model="phone"
      name="phone"
      placeholder="digite o telefone"
      label="Telefone"
    />
  </form>
  <div class="button-container">
    <Button :onClick="confirm">Confirmar</Button>
    <Button :onClick="back" buttonType="info">Voltar</Button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, ref, watch,
} from 'vue';
import Button from '@/components/atoms/Button.vue';
import Input from '@/components/atoms/Input.vue';

export default defineComponent({
  components: {
    Button,
    Input,
  },
  props: {
    user: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  emits: ['confirm', 'back'],
  setup(props, { emit }) {
    const name = ref('');
    const email = ref('');
    const cpf = ref('');
    const phone = ref('');

    const back = () => emit('back');
    const confirm = () => emit('confirm', {
      name: name.value,
      email: email.value,
      cpf: cpf.value,
      phone: phone.value,
    });

    const populateDataFromUser = (user: Record<string, string>) => {
      name.value = user.name;
      email.value = user.email;
      cpf.value = user.cpf;
      phone.value = user.phone;
    };

    watch(
      () => props.user,
      (newUser) => populateDataFromUser(newUser),
    );

    onMounted(() => {
      if (props.user) {
        populateDataFromUser(props.user);
      }
    });

    return {
      confirm,
      back,
      name,
      email,
      cpf,
      phone,
    };
  },
});
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
