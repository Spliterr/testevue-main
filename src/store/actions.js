const actions = {
  removeUsuario(NomeUsuario) {
    this.listaPessoas = this.listaPessoas.filter((x) => x.name !== NomeUsuario);
  },
};

export default { ...actions };
