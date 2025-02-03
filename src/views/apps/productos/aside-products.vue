<script setup></script>
<template>
    <!--begin::Aside column-->
    <div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
        <!--begin::Thumbnail settings-->
        <div class="card card-flush py-4">
    <!-- Card header -->
    <div class="card-header">
      <div class="card-title">
        <h2>Thumbnail</h2>
      </div>
    </div>

    <!-- Card body -->
    <div class="card-body text-center pt-0">
      <!-- Image input -->
      <div 
        class="image-input image-input-outline mb-3"
        :class="{ 'image-input-empty': !imagePreview }"
        @dragover.prevent
        @dragenter.prevent
        @drop="handleImageDrop"
      >
        <!-- Preview -->
        <div 
          class="image-input-wrapper w-150px h-150px" 
          :style="imagePreview ? `background-image: url(${imagePreview})` : ''"
        ></div>

        <!-- Change Image -->
        <label 
          class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
          title="Change avatar"
          @click="triggerFileInput"
        >
          <i class="ki-duotone ki-pencil fs-7"></i>
          <input 
            type="file" 
            class="d-none" 
            accept="image/png, image/jpg, image/jpeg" 
            @change="handleImageUpload"
            ref="imageInput"
          />
        </label>

        <!-- Cancel (Restore previous image) -->
        <span 
          class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
          title="Cancel avatar"
          @click="restorePreviousImage"
        >
          <i class="ki-duotone ki-cross fs-2"></i>
        </span>

        <!-- Remove -->
        <span 
          class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
          title="Remove avatar"
          @click="removeImage"
        >
          <i class="ki-duotone ki-cross fs-2"></i>
        </span>
      </div>

      <!-- Description -->
      <div class="text-muted fs-7">
        Set the product thumbnail image. Only *.png, *.jpg, and *.jpeg files are accepted.
      </div>

      <div v-if="errors.image" class="text-danger mt-2">{{ errors.image }}</div>
    </div>
  </div>
        <!--end::Thumbnail settings-->
        <!--begin::Status-->
        <div class="card card-flush py-4">
            <!--begin::Card header-->
            <div class="card-header">
                <!--begin::Card title-->
                <div class="card-title">
                    <h2>Status</h2>
                </div>
                <!--end::Card title-->
                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                    <div class="rounded-circle bg-success w-15px h-15px"
                        id="kt_ecommerce_add_product_status"></div>
                </div>
                <!--begin::Card toolbar-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-0">
                <!--begin::Select2-->
                <select class="form-select mb-2" data-control="select2"
                    data-hide-search="true" data-placeholder="Select an option"
                    id="kt_ecommerce_add_product_status_select">
                    <option></option>
                    <option value="published">Published</option>
                    <option value="draft">Stock</option>
                    
                    <option value="inactive">Inactive</option>
                </select>
                <!--end::Select2-->
                
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Status-->

        <!--begin::Template settings-->
        <div class="card card-flush py-4">
            <!--begin::Card header-->
            <div class="card-header">
                <!--begin::Card title-->
                <div class="card-title">
                    <h2>Product Template</h2>
                </div>
                <!--end::Card title-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-0">
                <!--begin::Select store template-->
                <label for="kt_ecommerce_add_product_store_template"
                    class="form-label">Select a product template</label>
                <!--end::Select store template-->
                <!--begin::Select2-->
                <select class="form-select mb-2" data-control="select2" 
                    data-hide-search="true" data-placeholder="Select an option"
                    id="kt_ecommerce_add_product_store_template" @change="redirectToRoute($event)">
                    <option disabled selected>Selecciona el tipo de producto</option>
                    <option value="/apps/productos/addproduct/carro">Cars</option>
                    <option value="/apps/productos/addproduct/piezas">Parts</option>
                    <option value="/apps/productos/addproduct/piezas">Garage</option>
                    <option value="/apps/productos/addproduct/servicio">Services</option>
                </select>
                <!--end::Select2-->
                <!--begin::Description-->
                <div class="text-muted fs-7">Assign a template from your current theme
                    to define how a single product is displayed.</div>
                <!--end::Description-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Template settings-->
    </div>
    <!--end::Aside column-->
</template>


<script>
import { ref, nextTick } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const imageFile = ref(null);
    const imagePreview = ref("");
    const previousImage = ref(""); // Guarda la imagen anterior en caso de cancelar
    const imageInput = ref(null);
    const router = useRouter();

    const redirectToRoute=(event)=> {
      const selectedValue = event.target.value; 
      router.push(selectedValue); 
    }

    const { setErrors, errors } = useForm({
      validationSchema: yup.object({
        image: yup.mixed().nullable().required("La imagen es obligatoria"),
      }),
    });

    // Subir imagen desde input
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      validateImage(file);
    };

    // Manejo de arrastrar y soltar imagen
    const handleImageDrop = (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      validateImage(file);
    };

    // Validar y mostrar imagen
    const validateImage = (file) => {
      if (!file) {
        setErrors({ image: "Debes seleccionar una imagen" });
        return;
      }
      if (!file.type.startsWith("image/")) {
        setErrors({ image: "El archivo debe ser una imagen" });
        return;
      }

      imageFile.value = file;
      previousImage.value = imagePreview.value; // Guardar imagen anterior por si cancela
      imagePreview.value = URL.createObjectURL(file);
    };

    // Restaurar imagen anterior (Cancelar)
    const restorePreviousImage = () => {
      imagePreview.value = previousImage.value;
    };

    // Eliminar imagen
    const removeImage = () => {
      imageFile.value = null;
      imagePreview.value = "";
    };

    // Activar input file correctamente
    const triggerFileInput = () => {
      nextTick(() => {
        imageInput.value.click();
      });
    };

    return {
      imagePreview,
      imageInput,
      handleImageUpload,
      handleImageDrop,
      restorePreviousImage,
      triggerFileInput,
      removeImage,
      errors,
      router,
      redirectToRoute,
    };
  },
};
</script>

<style scoped>
.image-input-placeholder {
  background-image: url("public/media/svg/files/blank-image.svg") !important;
}

[data-bs-theme="dark"] .image-input-placeholder {
  background-image: url("public/media/svg/files/blank-image.svg") !important;
}

.image-input {
  position: relative;
  display: inline-block;
  border-radius: 10px;
  border: 2px dashed #ccc;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.image-input:hover {
  border-color: #007bff;
  background: rgba(0, 123, 255, 0.1);
}
.image-input-wrapper {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  background-color: #f8f9fa;
}
.image-input-empty .image-input-wrapper {
  background-image: url("https://via.placeholder.com/150");
}
</style>