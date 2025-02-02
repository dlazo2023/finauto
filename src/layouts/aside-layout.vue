<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import asideProducts from "@/views/apps/productos/aside-products.vue";
</script>
<template>
    <div class="row my-6">
        <div class="col-md-4 my-5 d-flex justify-content-center">
          <asideProducts></asideProducts>
        </div>
    <div class="col-md-8">
      <router-view></router-view> <!-- Aquí se renderizan las vistas hijas -->
    </div>
  </div>
</template>