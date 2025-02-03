<template>
  <div
    class="modal fade"
    id="kt_modal_add_servicio"
    ref="addProvinciaModalRef"
    tabindex="-1"
    aria-hidden="true"
  >

  <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_provincia_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Añadir un Servicio</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_provincia_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>


  <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ resetForm }" ref="formRef">
      <div class="my-6">
        <div class="">
          <div class="card shadow-sm">
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <div class="card card-flush py-4">
    <div class="card-header">
      <div class="card-title">
        <h2>Thumbnail</h2>
      </div>
    </div>

    <div class="card-body text-center pt-0">
      <div 
        class="image-input image-input-outline mb-3"
        :class="{ 'image-input-empty': !imagePreview }"
        @dragover.prevent
        @dragenter.prevent
        @drop="handleImageDrop"
      >
        <div 
          class="image-input-wrapper w-150px h-150px" 
          :style="imagePreview ? `background-image: url(${imagePreview})` : ''"
        ></div>

        <!-- Botón para seleccionar archivo -->
        <label class="btn-change" @click="triggerFileInput">
          <i class="bi bi-pencil text-white"></i>
        </label>

        <!-- Input oculto para cargar imagen -->
        <input 
          type="file" 
          class="hidden-input" 
          accept="image/png, image/jpg, image/jpeg" 
          @change="handleImageUpload"
          ref="imageInput"
        />

        <!-- Botón para cancelar selección -->
        <span class="btn-cancel" @click="restorePreviousImage">
          <i class="bi bi-x text-white"></i> 
        </span>

        <!-- Botón para eliminar imagen -->
        <span class="btn-delete" @click="removeImage">
          <i class="bi bi-trash text-white"></i>
        </span>
      </div>

      <div class="text-muted fs-7">
        Selecciona una imagen. Solo formatos: PNG, JPG y JPEG.
      </div>

      <div v-if="errors.image" class="text-danger mt-2">{{ errors.image }}</div>
    </div>
  </div>
            </div>
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre del servicio</label>
              <Field name="nombre" as="input" type="text" class="form-control" placeholder="Ponga el nombre del servicio" />
              <ErrorMessage name="nombre" class="text-danger" />
            </div>
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Descripcion</label>
              <Field name="descripcion" as="textarea" class="form-control" placeholder="Ponga la descripcion" />
              <ErrorMessage name="descripcion" class="text-danger" />
            </div>
          </div>
          <div class="card-footer my-8 d-flex justify-content-end">
            <a href="#" class="btn btn-bg-secondary" id="kt_modal_add_provincia_close"
            data-bs-dismiss="modal">Cancelar</a>
            <button type="submit" class="btn btn-bg-primary mx-3">Guardar</button>
          </div>
        </div>
      </div>
    </Form>
  </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent ,ref, nextTick } from "vue";
  import * as yup from "yup";
  import { Form, Field, ErrorMessage } from "vee-validate";
  import { hideModal } from "@/core/helpers/modal";
  import { useServiceStore } from "@/stores/servicios"; 
  import { type IServicio } from "@/core/data/servicios"; 
  import { useForm } from "vee-validate";
  
  export default defineComponent({
    name: "AddServicio",
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    setup() {
      const serviceStore = useServiceStore();  
      const formRef = ref<null | HTMLFormElement>(null);
     const addServicioModalRef = ref<null | HTMLElement>(null);
      const imageFile = ref<File | null>(null);
    const imagePreview = ref<string | null>(null);
    const previousImage = ref<string | null>(null); 
    const imageInput = ref<HTMLInputElement | null>(null);

      const schema = yup.object({
        image: yup
    .mixed<File>()
    .required("La imagen es obligatoria")
    .test("fileFormat", "Formato no válido. Solo PNG, JPG, JPEG", (file) => {
      return file instanceof File && ["image/png", "image/jpg", "image/jpeg"].includes(file.type);
    })
    .test("fileSize", "La imagen no debe superar 2MB", (file) => {
      return file instanceof File && file.size <= 2 * 1024 * 1024; // 2MB
    }),
        nombre: yup.string().required("El nombre es requerido"),
        descripcion: yup.string().required("La descripción es requerida"),
      });
      
    const { errors, setFieldValue } = useForm({ schema });

    const handleImageUpload = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        const file = target.files[0];
        setFieldValue("image", file);
        imageFile.value = file;
        previousImage.value = imagePreview.value;
        imagePreview.value = URL.createObjectURL(file);
      }
    };

    const handleImageDrop = (event: DragEvent) => {
      event.preventDefault();
      if (event.dataTransfer?.files[0]) {
        const file = event.dataTransfer.files[0];
        setFieldValue("image", file);
        imageFile.value = file;
        previousImage.value = imagePreview.value;
        imagePreview.value = URL.createObjectURL(file);
      }
    };

    const restorePreviousImage = () => {
      imagePreview.value = previousImage.value;
    };

    const removeImage = () => {
      imageFile.value = null;
      imagePreview.value = null;
    };

      const handleSubmit = (values: any, { resetForm }: { resetForm: () => void }) => {
        const newService: IServicio = {
          id: Math.floor(Math.random() * 99999) + 1, 
          image: imagePreview.value || "",
          nombre: values.nombre,
          descripcion: values.descripcion,
        };
        serviceStore.addService(newService);
        console.log("servicio agregado:", newService);
        hideModal(addServicioModalRef.value);
        hideModal(formRef.value);
        resetForm();
      };

      const triggerFileInput = () => {
      nextTick(() => {
        imageInput.value?.click();
      });
    };
      return {
        schema,
        handleSubmit,
        formRef,
        addServicioModalRef,
        handleImageUpload,
        handleImageDrop,
        removeImage,
        restorePreviousImage,
        triggerFileInput,
        errors,
        imagePreview,
        imageInput,
      };
    },
  });
</script>

<style scoped>
/* 🎨 Contenedor general del input */
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

/* 📷 Estilos para la imagen */
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

/* ✅ Input oculto */
.hidden-input {
  display: none;
}

/* 🔵 Botón para cambiar imagen */
.btn-change {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: #007bff;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.btn-change:hover {
  background: #0056b3;
}

/* 🟠 Botón para cancelar selección */
.btn-cancel {
  position: absolute;
  top: -10px;
  left: -10px;
  background: #ffc107;
  color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.btn-cancel:hover {
  background: #e0a800;
}

/* 🔴 Botón para eliminar imagen */
.btn-delete {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #dc3545;
  color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.btn-delete:hover {
  background: #bd2130;
}
</style>