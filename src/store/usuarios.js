import { defineStore } from "pinia";
import actions from "./actions";

export const usuariosStore = defineStore("usuarios", {
  actions,
  state: () => {
    return {
      listaPessoas: [
        {
          id: "1",
          name: "Otávio Ribeiro",
          phone: "18965669999",
          isFavorite: true,
        },
        {
          id: "2",
          name: "Robson Carvalho",
          phone: "189656688888",
          isFavorite: false,
        },
        {
          id: "3",
          name: "Claudio Castro",
          phone: "18965667777",
          isFavorite: true,
        },
      ],
    };
  },
});
