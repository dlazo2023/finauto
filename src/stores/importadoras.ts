import { defineStore } from "pinia";
import importadoras, { type IImportadora } from "@/core/data/importadoras";

export const useImportadoraStore = defineStore("services", {
  state: () => ({
    importadoras: importadoras,
  }),
  actions: {
    updateService(updatedService: IImportadora) {
      const index = this.importadoras.findIndex(
        (s) => s.id === updatedService.id,
      );
      if (index !== -1) {
        // Actualiza el importadora existente
        this.importadoras[index] = updatedService;
      } else {
        console.warn("Importadora no encontrado para actualizar.");
      }
    },
    addService(service: IImportadora) {
      service.id = Math.floor(Math.random() * 99999) + 1;
      this.importadoras.push(service);
      console.log("Importadoras en el store:", this.importadoras);
    },
  },
  getters: {
    getService: (state) => state.importadoras,
  },
});
