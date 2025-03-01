import { defineStore } from "pinia";
interface IMetodo {
  nombre: string;
  descripcion: string;
  image: string;
}

export const useMetodoStore = defineStore("metodos", {
  state: () => ({}),
  actions: {
    updateMetodo(updatedMetodoID: string) {
      //update
    },
    addMetodo(metodo: IMetodo) {
      // create
    },
  },
});
