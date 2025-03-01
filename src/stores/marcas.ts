import { defineStore } from "pinia";
interface IMarca {
  nombre: string;
  descripcion: string;
}

export const useMarcaStore = defineStore("marcas", {
  state: () => ({}),
  actions: {
    updateMarca(updatedMarcaID: string) {
      //update
    },
    addMarca(marca: IMarca) {
      // create
    },
  },
});
