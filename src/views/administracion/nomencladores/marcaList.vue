<script setup>
import { onMounted, ref } from "vue";
import api from "@/services/api";

const marcas = ref([]);

onMounted(async () => {
  try {
    const { data } = await api.get("/marcas/all");
    marcas.value = data;
    console.log(data);
  } catch (error) {
    console.error("Error al obtener las marcas:", error);
  }
});
</script>

<template>
  <div>
    <h2>askdjlkasdlkadks</h2>
    <h1>askijudaisdhaisdiasoidjoaisjdojas</h1>
  </div>
</template>

<style scoped></style>
