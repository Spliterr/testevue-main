<template>
  <section>
    <div class="background" @click="close" />
    <div @click.stop class="quadro animate__animated animate__fadeInRight animate__faster">
      <div class="titulo">
        <div class="texto">
          <h1>Adicionar novo cliente</h1>
        </div>
        <button type="button" @click="close">Fechar</button>
      </div>
      <label>Nome <span>*</span></label>
      <div class="input cinza">
        <input type="text" autocomplete="false" spellcheck="false" placeholder="Digite aqui..."
          v-model="salvar.salvarNome">
      </div>
      <label>Whatsapp <span>*</span></label>
      <div class="input cinza">
        <input v-on:keyup.enter="adicionarPessoas(salvar.salvarNome, salvar.salvarNumero)" type="tel"
          autocomplete="false" spellcheck="false" placeholder="(99) 99999-9999"
          v-maska="['+55 (##) #####-####', '+55 (##) ####-####']" v-model="salvar.salvarNumero">
      </div>
      <button type="button" class="principal" @click="adicionarPessoas(salvar.salvarNome, salvar.salvarNumero)">Salvar
        Cliente</button>
    </div>
  </section>
</template>

<!-- JS -->
<script>
import { reactive } from 'vue';
import useModal from "../../../hooks/useModal";
import { usuariosStore } from '../../../store/usuarios'


export default {
  setup() {
    const modal = useModal()
    const store = usuariosStore()
    let salvar = reactive({
      salvarNome: "",
      salvarNumero: ""
    })

    const close = modal.close

    function adicionarPessoas(salvarNome, salvarNumero) {
      var ultimoObjeto = store.listaPessoas[store.listaPessoas.length - 1]
      let ultimoId = ultimoObjeto.id
      const construcao = {
        id: ++ultimoId,
        name: salvarNome,
        phone: salvarNumero,
        isFavorite: false,
      }
      store.listaPessoas.push(construcao)
      salvar.salvarNome = ""
      salvar.salvarNumero = ""
      close(true)
    }
    return {
      close,
      salvar,
      adicionarPessoas
    }
  }
}
</script>

<style scoped>
h1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: var(--regular);
  font-size: 2rem !important;
  color: var(--cor-lista-branco);
  width: 100%;
  max-width: 600px;
  margin-right: auto;
  padding: 0 20px 0 10px;
  pointer-events: none;
  padding-bottom: 20px;
  padding-top: 20px;
}

.quadro label {
  margin: 20px 0 10px 0;
}

button.principal {
  margin: 20px 0 0 0;
}

@media screen and (max-width: 768px) {
  section.modal .quadro {
    min-width: 100vw !important;
  }
}
</style>
