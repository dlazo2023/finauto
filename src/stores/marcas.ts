import { defineStore } from "pinia";
import api from "@/services/api";

// Se define la interfaz de la marca según lo que necesita la API
interface IMarca {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

// Interfaz para el payload de creación
// interface IMarcaCreatePayload extends IMarca {
//   rules: {
//     method: "CREATE";
//     comparisonKind: "UINQUE";
//     field: string[];
//   };
// }

// Interfaz para el payload de actualización
interface IMarcaUpdatePayload extends IMarca {
  id: string;
  rules: {
    method: "UPDATE";
    comparisonKind: "UINQUE";
    field: string[];
  };
}

export const useMarcaStore = defineStore("marcas", {
  state: () => ({
    // Almacenamos las marcas en el estado, pudiendo actualizar la lista luego de cada acción
    marcas: [] as IMarca[],
  }),
  actions: {
    async fetchMarcas() {
      try {
        const { data } = await api.get("/marcas/all");
        if (data.isSuccess) {
          this.marcas = data.data;
        }
      } catch (error) {
        console.error("Error al obtener las marcas:", error);
      }
    },

    async addMarca(marca: IMarca) {
      // Se arma el payload requerido para crear una marca
      const payload = {
        ...marca,
      };

      try {
        const { data } = await api.post("/marcas", payload);
        if (data.isSuccess) {
          // Se puede agregar la nueva marca al estado si es necesario
          this.marcas.push(data.data);
        }
        return data;
      } catch (error) {
        console.error("Error al crear la marca:", error);
        throw error;
      }
    },

    async updateMarca(updatedMarcaID: string, marca: IMarca) {
      // Se arma el payload para actualizar, incluyendo el id y la regla de actualización
      const payload: IMarcaUpdatePayload = {
        id: updatedMarcaID,
        ...marca,
        rules: {
          method: "UPDATE",
          comparisonKind: "UINQUE",
          field: ["name"],
        },
      };

      try {
        const { data } = await api.patch(`/marcas/${updatedMarcaID}`, payload);
        if (data.isSuccess) {
          // Se actualiza la marca en el estado, buscando su índice y reemplazándola
          const index = this.marcas.findIndex(
            (item: any) => item.id === updatedMarcaID,
          );
          if (index !== -1) {
            this.marcas[index] = data.data;
          }
        }
        return data;
      } catch (error) {
        console.error("Error al actualizar la marca:", error);
        throw error;
      }
    },
  },
});
