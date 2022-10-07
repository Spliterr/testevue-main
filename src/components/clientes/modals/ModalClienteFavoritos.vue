<template>
  <section>
    <div class="background" @click="close" />
    <div @click.stop class="quadro animate__animated animate__fadeInRight animate__faster">
      <h1>Lista favoritos</h1>
      <div v-for=" (pessoa, index) in listaPessoas" :key="`${index}-${pessoa}`">
        <div v-if="pessoa.isFavorite" class="cliente">
          <img class="icone" src="../../../assets/user.svg" alt="Icone usuário">
          <h2>{{ pessoa.name }}<input v-maska="['+55 (##) #####-####', '+55 (##) ####-####']" v-model="pessoa.phone" />
          </h2>
          <a class="favorito" @click="pessoa.isFavorite = !pessoa.isFavorite">
            <img v-if="pessoa.isFavorite" src="../../../assets/heart.svg" alt="favorito icone" />
            <img v-else src="../../../assets/heart-outline.svg" alt="favorito icone" />
          </a>
          <button @click="removePessoas(pessoa.name)" class="excluir">
            &times;
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- JS -->
<script>
import { computed } from 'vue';
import useModal from "../../../hooks/useModal";
import { usuariosStore } from '../../../store/usuarios'

export default {
  setup() {
    const modal = useModal()
    const store = usuariosStore()
    const listaPessoas = computed(() => store.listaPessoas)

    return {
      close: modal.close,
      listaPessoas
    }
  }
}
</script>

<!-- CSS -->
<style scoped>
h1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: var(--regular);
  font-size: 3rem !important;
  color: var(--cor-lista-branco);
  width: 100%;
  max-width: 600px;
  margin-right: auto;
  padding: 0 20px 0 10px;
  pointer-events: none;
  padding-bottom: 20px;
  padding-top: 20px;
}

.favorito {
  display: flex;
  margin-right: 10px;
  cursor: pointer;
}

.favorito img {
  width: 30px;
  margin: 0 auto;
}

.excluir {
  display: flex;
  font-size: 50px;
  background-color: var(--cor-fundo-tela);
  color: white;
}

.quadro label {
  margin: 20px 0 10px 0;
}

input {
  margin-top: 10px;
}

.cliente {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 2px solid var(--cor-lista-borda);
  border-radius: 10px;
  padding: 15px;
  margin: 0 0 10px 0;
  cursor: pointer;
  transition: all 0.3s;
}

.cliente:hover {
  border: 2px solid var(--cor-lista-borda-2);
  background: var(--cor-lista-degrade);
}

.icone {
  width: 100%;
  max-width: 30px;
  min-width: 30px;
  transition: all 0.3s;
}

.cliente h2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: var(--regular);
  font-size: clamp(0.8rem, 3vw, 1rem);
  color: var(--cor-lista-branco);
  width: 100%;
  max-width: 600px;
  margin-right: auto;
  padding: 0 20px 0 10px;
  pointer-events: none;
}

.cliente h2 span {
  font-family: var(--bold);
  font-size: clamp(0.5rem, 3vw, 0.7rem);
  color: var(--cor-lista-cinza);
  padding: 5px 0 0 0;
}

/* Responsivo */
@media screen and (max-width: 1000px) {
  .cliente {
    position: relative;
    align-items: flex-start;
    padding: 15px 15px 45px 15px;
  }
}
</style>