import { defineStore } from "pinia";
import actions from "./actions";

export const usuariosStore = defineStore("usuarios", {
  actions,
  state: () => {
    return {
      listaPessoas: [
        {
          name: "Otávio Ribeiro",
          phone: "18965669999",
        },
      ],
    };
  },
});
