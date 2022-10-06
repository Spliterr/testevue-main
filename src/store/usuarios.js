import { defineStore } from "pinia";

export const usuariosStore = defineStore("usuarios", {
  state: () => {
    return {
      listaPessoas: [
        {
          name: "Lucas Gomes",
          phone: "21965665513",
        },
      ],
    };
  },
});
