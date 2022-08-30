<template>
  <div class="users-list-container">
  <Table>
    <template #head>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>CPF</th>
        <th>Telefone</th>
        <th>Ações</th>
      </tr>
    </template>
    <template #body>
      <tr v-for="user in users" :key="user.id" class="users-list">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.cpf }}</td>
        <td>{{ user.phone }}</td>
        <td class="actions">
          <Button
            buttonType="info"
            :onClick="editUser(user.id)"
          >Editar</Button>
          <Button
            buttonType="danger"
            :onClick="removeUser(user.id)"
          >Remover</Button>
        </td>
      </tr>
    </template>
  </Table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Table from '@/components/atoms/Table.vue';
import Button from '@/components/atoms/Button.vue';

export default defineComponent({
  name: 'UsersListContentCard',
  props: {
    users: {
      type: Array as PropType<Array<Record<string, string>>>,
      required: false,
      default: () => [],
    },
  },
  components: {
    Table,
    Button,
  },
  methods: {
    editUser(id: string) {
      return () => {
        this.$router.push(`/edit/${id}`);
      };
    },
    removeUser(id: string) {
      return () => {
        this.$emit('removeUser', id);
      };
    },
  },
});
</script>

<style scoped lang="scss">
.users-list-container {
  height: 80%;
}

.users-list {
  td {
    padding: 10px;
  }
}

.actions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  min-width: 140px;
}
</style>
