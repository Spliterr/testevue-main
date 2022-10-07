<template>
  <div id="clientes">
    <SectionTitulo @novo-cliente="gerenciarNovoCliente" @clientes-favoritos="gerenciarListaFavoritos" />
    <SectionClientes />
    <ModalPrincipal />
  </div>
</template>

<script>
import SectionTitulo from './partials/SectionTitulo.vue';
import SectionClientes from './partials/SectionClientes.vue';
import useModal from "../../hooks/useModal";
import ModalPrincipal from './modals/ModalPrincipal.vue';

export default {
  components: {
    SectionTitulo,
    SectionClientes,
    ModalPrincipal
  },
  setup() {
    const modal = useModal()

    function gerenciarNovoCliente() {
      modal.open({
        component: 'ModalAdicionarCliente'
      })
    }

    function gerenciarListaFavoritos() {
      modal.open({
        component: 'ModalClienteFavoritos'
      })
    }
    return {
      gerenciarNovoCliente,
      gerenciarListaFavoritos
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
