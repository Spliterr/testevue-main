<!-- HTML -->
<template>
  <teleport to="body">
    <section v-if="estado.mostrarModal" class="modal" @click="gerenciarModal({ status })">
      <component :is="estado.component" />
    </section>
  </teleport>
</template>

<!-- JS -->
<script>
import { reactive, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue';
import useModal from "../../../hooks/useModal";

const ModalAdicionarCliente = defineAsyncComponent(() => import('./ModalAdicionarCliente.vue'))
const ModalClienteFavoritos = defineAsyncComponent(() => import('./ModalClienteFavoritos.vue'))

export default {
  components: {
    ModalAdicionarCliente,
    ModalClienteFavoritos
  },
  setup() {
    const modal = useModal()
    const estado = reactive({
      mostrarModal: false,
      component: {},
    })

    onMounted(() => {
      modal.listen(gerenciarModal)
    })

    onBeforeUnmount(() => {
      modal.off(gerenciarModal)
    })

    function gerenciarModal(payload) {
      if (payload.status) {
        estado.component = payload.component
      } else {
        estado.component = {}
      }
      estado.mostrarModal = payload.status
    }

    return {
      close: modal.close,
      estado,
      gerenciarModal,
    }
  }
}
</script>

<style scoped>
section.modal {
  z-index: 10;
}
</style>
