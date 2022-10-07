<!-- HTML -->
<template>
  <section class="titulo">
    <button class="adicionar" @click="() => emit('clientes-favoritos')">
      <p>Clientes favoritos</p>
    </button>
    <button class="adicionar" @click="() => emit('novo-cliente')">
      <p>Adicionar novo cliente</p>
    </button>
  </section>
</template>

<!-- JS -->
<script>
export default {
  setup(_, { emit }) {
    return {
      emit
    }
  }
}
</script>

<!-- CSS -->
<style scoped>
button.adicionar {
  margin-left: auto;
}

/* Responsivo */
@media screen and (max-width: 1000px) {

  section.titulo {
    width: 90% !important;
  }

  button.adicionar {
    margin-left: 0;
  }
}
</style>
