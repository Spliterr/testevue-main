<template>
  <div id="clientes">
    <SectionTitulo @novo-cliente="gerenciarLogin" />
    <ModalAdicionarCliente />
    <SectionClientes />
  </div>
</template>

<script>
import SectionTitulo from './partials/SectionTitulo.vue';
import ModalAdicionarCliente from './modals/ModalAdicionarCliente.vue'
import SectionClientes from './partials/SectionClientes.vue';
import useModal from "../../hooks/useModal";

export default {
  components: {
    SectionTitulo,
    ModalAdicionarCliente,
    SectionClientes
  },

  setup() {
    const modal = useModal()

    function gerenciarLogin() {
      modal.open()
    }

    return {
      gerenciarLogin
    }
  }
}

</script>

<style scoped>
#clientes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: var(--cor-fundo-tela);
}
</style>
