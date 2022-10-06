<!-- HTML -->
<template>
  <section class="clientes">
    <div v-for="(pessoa, index) in listaPessoas" :key="`${index}-${pessoa}`" class="cliente">
      <img class="icone" src="../../../assets/user.svg" alt="Icone usuário">
      <h2>{{ pessoa.name }}<input v-maska="['+55 (##) #####-####', '+55 (##) ####-####']" v-model="pessoa.phone" />
      </h2>
      <button @click="removeUsuario(pessoa.name)" class="excluir">
        &times;
      </button>
    </div>
  </section>
</template>

<!-- JS -->
<script>
import { usuariosStore } from '../../../store/usuarios'
export default {
  setup() {
    const store = usuariosStore()
    let listaPessoas = store.listaPessoas

    function removeUsuario(idUsuario) {
      console.log(idUsuario)
      listaPessoas = listaPessoas.filter((x) => x.name !== idUsuario)
    }

    return {
      listaPessoas,
      removeUsuario
    }
  }
}
</script>

<!-- CSS -->
<style scoped>
.excluir {
  display: flex;
  font-size: 50px;
  background-color: var(--cor-fundo-tela);
  color: white;
}

input {
  margin-top: 10px;
}

section.clientes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 40px 40px 40px;
}

/* Cliente */
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

/* Veiculos */
.cliente .veiculos {
  display: flex;
  align-items: center;
}

.cliente .veiculos p {
  font-family: var(--bold);
  font-size: clamp(0.6rem, 3vw, 0.8rem);
  color: var(--cor-lista-branco);
}

.cliente .veiculos svg {
  width: 100%;
  max-width: 20px;
  min-width: 20px;
  fill: var(--cor-cera);
  margin: 0 5px 0 0;
}

/* estofados */
.cliente .estofados {
  display: flex;
  align-items: center;
}

.cliente .estofados p {
  font-family: var(--bold);
  font-size: clamp(0.6rem, 3vw, 0.8rem);
  color: var(--cor-lista-branco);
}

.cliente .estofados svg {
  width: 100%;
  max-width: 20px;
  min-width: 20px;
  fill: var(--cor-cera);
  margin: 0 5px 0 15px;
}

/* Vazio */
.vazio {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--cor-lista-borda);
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.9);
  transition: all 0.3s;
}

.vazio.mostrar {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}

.vazio p {
  font-family: var(--bold);
  font-size: clamp(0.7rem, 3vw, 0.9rem);
  color: var(--cor-lista-cinza-2);
  text-align: center;
  line-height: 1.5;
}

/* Carregar */
button.carregar {
  font-family: var(--bold);
  font-size: clamp(0.7rem, 3vw, 0.9rem);
  color: var(--cor-branco-fixo);
  background-color: var(--cor-lista-botao);
  padding: 15px 20px;
  border-radius: 10px;
  margin: 20px 0 0 0;
  transition: all 0.3s;
}

button.carregar:hover {
  background-color: var(--cor-lista-botao-2);
}

/* Responsivo */
@media screen and (max-width: 1000px) {
  section.clientes {
    padding: 20px 20px 40px 20px;
  }

  .cliente {
    position: relative;
    align-items: flex-start;
    padding: 15px 15px 45px 15px;
  }

  /* Veiculos */
  .cliente .veiculos {
    position: absolute;
    bottom: 15px;
    left: 15px;
  }

  .cliente .veiculos svg {
    max-width: 15px;
    min-width: 15px;
  }

  /* Estofados */
  .cliente .estofados {
    position: absolute;
    bottom: 15px;
    left: 95px;
  }

  .cliente .estofados svg {
    max-width: 15px;
    min-width: 15px;
  }

  .vazio p {
    width: 100%;
    max-width: 200px;
  }
}
</style>
