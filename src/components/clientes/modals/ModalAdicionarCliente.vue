<template>
  <section>
    <div class="background" @click="close" />
    <div @click.stop class="quadro animate__animated animate__fadeInRight animate__faster">
      <div class="titulo">
        <div class="texto">
          <h2><span>Novo</span></h2>
          <h2>CLIENTE</h2>
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
    }
    return {
      close: modal.close,
      salvar,
      adicionarPessoas
    }
  }
}
</script>

<!-- CSS -->
<style scoped>
/* Label */
.quadro label {
  margin: 20px 0 10px 0;
}

button.principal {
  margin: 20px 0 0 0;
}
</style>
