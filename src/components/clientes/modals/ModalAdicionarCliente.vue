<!-- HTML -->
<template>
  <section v-if="estado.mostrarModal" class="modal">
    <!-- Background -->
    <div class="background" @click="close" />
    <!-- Quadro -->
    <div class="quadro animate__animated animate__fadeInRight animate__faster">
      <!-- Título -->
      <div class="titulo">
        <div class="texto">
          <h2><span>Novo</span></h2>
          <h2>CLIENTE</h2>
        </div>
        <button type="button" @click="close">Fechar</button>
      </div>
      <!-- Nome -->
      <label>Nome <span>*</span></label>
      <div class="input cinza">
        <input type="text" autocomplete="false" spellcheck="false" placeholder="Digite aqui..."
          v-model="salvar.salvarNome">
      </div>
      <!-- Whatsapp -->
      <label>Whatsapp <span>*</span></label>
      <div class="input cinza">
        <input type="tel" autocomplete="false" spellcheck="false" placeholder="(99) 99999-9999"
          v-maska="['+55 (##) #####-####', '+55 (##) ####-####']" v-model="salvar.salvarNumero">
      </div>
      <button type="button" class="principal" @click="adicionarPessoas(salvar.salvarNome, salvar.salvarNumero)">Salvar
        Cliente</button>
    </div>
  </section>
</template>

<!-- JS -->
<script>
import { reactive, onMounted, onBeforeUnmount } from 'vue';
import useModal from "../../../hooks/useModal";
import { usuariosStore } from '../../../store/usuarios'


export default {
  props: {
    abrirModal: Boolean,
  },
  setup(props) {
    const modal = useModal()
    const estado = reactive({
      mostrarModal: false,
    })
    const store = usuariosStore()
    const listaPessoas = store.listaPessoas

    let salvar = reactive({
      salvarNome: "",
      salvarNumero: ""
    })

    function adicionarPessoas(salvarNome, salvarNumero) {
      const construcao = {
        name: salvarNome,
        phone: salvarNumero
      }
      listaPessoas.push(construcao)
      estado.mostrarModal = false
      salvar.salvarNome = ""
      salvar.salvarNumero = ""
    }

    onMounted(() => {
      modal.listen(gerenciarModal);
    })

    onBeforeUnmount(() => {
      modal.off(gerenciarModal)
    })

    function gerenciarModal(payload) {
      estado.mostrarModal = payload.status
    }

    return {
      close: modal.close,
      estado,
      gerenciarModal,
      listaPessoas,
      salvar,
      adicionarPessoas,
    }
  }
}
</script>

<!-- CSS -->
<style scoped>
section.modal {
  z-index: 10;
}

/* Label */
.quadro label {
  margin: 20px 0 10px 0;
}

/* Linha */
input.endereco {
  margin: 10px 0 0 0;
}

/* Data */
.quadro .data #seletorCalendario {
  position: absolute;
  top: 70px;
  left: -10px;
}

button.principal {
  margin: 20px 0 0 0;
}

/* Responsivo */
@media screen and (max-width: 1000px) {}
</style>
