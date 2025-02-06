<template>
	<!--begin::App-->
	<div class="d-flex flex-column flex-root app-root" id="kt_app_root">
		<!--begin::Page-->
		<div class="app-page flex-column flex-column-fluid" id="kt_app_page">
			
			<!--begin::Wrapper-->
			<div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper_carro">

				<!--begin::Main-->
				<div class="app-main flex-column flex-row-fluid" id="kt_app_main">
					<!--begin::Content wrapper-->
					<div class="d-flex flex-column flex-column-fluid">
						<!--begin::Toolbar-->
						<div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
							<!--begin::Toolbar container-->
							<div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
								<!--begin::Page title-->
								<div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
									<!--begin::Title-->
									<h1
										class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
										Product Form</h1>
									<!--end::Title-->
									<!--begin::Breadcrumb-->
									<ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
										<!--begin::Item-->
										<li class="breadcrumb-item text-muted">
											<a href="index.html" class="text-muted text-hover-primary">Home</a>
										</li>
										<!--end::Item-->
										<!--begin::Item-->
										<li class="breadcrumb-item">
											<span class="bullet bg-gray-500 w-5px h-2px"></span>
										</li>
										<!--end::Item-->
										<!--begin::Item-->
										<li class="breadcrumb-item text-muted">eCommerce</li>
										<!--end::Item-->
										<!--begin::Item-->
										<li class="breadcrumb-item">
											<span class="bullet bg-gray-500 w-5px h-2px"></span>
										</li>
										<!--end::Item-->
										<!--begin::Item-->
										<li class="breadcrumb-item text-muted">Carro</li>
										<!--end::Item-->
									</ul>
									<!--end::Breadcrumb-->
								</div>
								<!--end::Page title-->
								
							</div>
							<!--end::Toolbar container-->
						</div>
						<!--end::Toolbar-->
						<!--begin::Content-->
						<div id="kt_app_content" class="app-content flex-column-fluid">
							<!--begin::Content container-->
							<div id="kt_app_content_container" class="app-container container-xxl">
								<!--begin::Form-->
								<form id="kt_ecommerce_add_product_form" class="form d-flex flex-column flex-lg-row"
									data-kt-redirect="apps/ecommerce/catalog/products.html">
									
									<!--begin::Main column-->
									<div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
										<!--begin:::Tabs-->
										<ul
											class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2">
											<!--begin:::Tab item-->
											<li class="nav-item">
												<a class="nav-link text-active-primary pb-4 active" data-bs-toggle="tab"
													href="#kt_ecommerce_add_product_general">General</a>
											</li>
											<!--end:::Tab item-->
											<!--begin:::Tab item-->
											<li class="nav-item">
												<a class="nav-link text-active-primary pb-4" data-bs-toggle="tab"
													href="#kt_ecommerce_add_product_advanced">Advanced</a>
											</li>
											<!--end:::Tab item-->
										</ul>
										<!--end:::Tabs-->
										<!--begin::Tab content-->
										<div class="tab-content">
											<!--begin::Tab pane-->
											<div class="tab-pane fade show active" id="kt_ecommerce_add_product_general"
												role="tab-panel">
												<div class="d-flex flex-column gap-7 gap-lg-10">
													<!--begin::General options-->
													<div class="card card-flush py-4">
														<!--begin::Card header-->
														<div class="card-header">
															<div class="card-title">
																<h2>General</h2>
															</div>
														</div>
														<!--end::Card header-->
														<!--begin::Card body-->
														<div class="card-body">
															<Form  :validation-schema="schema">
      <!-- Nombre del producto -->
      <div class="mb-3">
        <label class="form-label required">Nombre del producto</label>
        <Field name="nombre" type="text" class="form-control" />
        <ErrorMessage name="nombre" class="text-danger" />
      </div>

      <!-- Descripción -->
      <div class="mb-3">
        <label class="form-label required">Descripción</label>
        <Field name="descripcion" as="textarea" class="form-control" />
        <ErrorMessage name="descripcion" class="text-danger" />
      </div>

      <!-- Precio -->
      <div class="mb-3">
        <label class="form-label required">Precio</label>
        <Field name="precio" type="number" class="form-control" />
        <ErrorMessage name="precio" class="text-danger" />
      </div>

      <!-- Marca y Modelo -->
      <div class="row">
        <div class="col-md-6">
          <label class="form-label required">Marca</label>
          <Field name="marca" type="text" class="form-control" />
          <ErrorMessage name="marca" class="text-danger" />
        </div>
        <div class="col-md-6">
          <label class="form-label">Modelo</label>
          <Field name="modelo" type="text" class="form-control" />
          <ErrorMessage name="modelo" class="text-danger" />
        </div>
      </div>

      <!-- Dimensiones -->
      <div class="mb-3">
        <label class="form-label">Dimensiones</label>
        <Field name="dimensiones" type="text" class="form-control" />
        <ErrorMessage name="dimensiones" class="text-danger" />
      </div>

      <!-- Tamaño de la caja de carga -->
      <div class="mb-3">
        <label class="form-label">Tamaño de la caja de carga</label>
        <Field name="tamanoCajaCarga" type="text" class="form-control" />
        <ErrorMessage name="tamanoCajaCarga" class="text-danger" />
      </div>

      <!-- Otros campos -->
      <div class="row">
        <div class="col-md-6">
          <label class="form-label">Weebare</label>
          <Field name="weebare" type="text" class="form-control" />
          <ErrorMessage name="weebare" class="text-danger" />
        </div>
        <div class="col-md-6">
          <label class="form-label">Asientos</label>
          <Field name="asientos" type="number" class="form-control" />
          <ErrorMessage name="asientos" class="text-danger" />
        </div>
      </div>

      <!-- Distancia al suelo -->
      <div class="mb-3">
        <label class="form-label">Distancia al suelo</label>
        <Field name="distanciaSuelo" type="text" class="form-control" />
        <ErrorMessage name="distanciaSuelo" class="text-danger" />
      </div>

      <!-- Más especificaciones -->
      <div class="row">
        <div class="col-md-6">
          <label class="form-label">Peso vacío</label>
          <Field name="pesoVacio" type="number" class="form-control" />
          <ErrorMessage name="pesoVacio" class="text-danger" />
        </div>
        <div class="col-md-6">
          <label class="form-label">Desplazamiento</label>
          <Field name="desplazamiento" type="text" class="form-control" />
          <ErrorMessage name="desplazamiento" class="text-danger" />
        </div>
      </div>

      <!-- Potencia máxima y Torque -->
      <div class="row">
        <div class="col-md-6">
          <label class="form-label">Potencia máxima</label>
          <Field name="potenciaMaxima" type="text" class="form-control" />
          <ErrorMessage name="potenciaMaxima" class="text-danger" />
        </div>
        <div class="col-md-6">
          <label class="form-label">Torque</label>
          <Field name="torque" type="text" class="form-control" />
          <ErrorMessage name="torque" class="text-danger" />
        </div>
      </div>

      <!-- Velocidad máxima -->
      <div class="mb-3">
        <label class="form-label">Velocidad máxima</label>
        <Field name="velocidadMaxima" type="text" class="form-control" />
        <ErrorMessage name="velocidadMaxima" class="text-danger" />
      </div>

      <!-- Tracción y tipo de freno -->
      <div class="row">
        <div class="col-md-6">
          <label class="form-label">Tracción</label>
          <Field name="traccion" type="text" class="form-control" />
          <ErrorMessage name="traccion" class="text-danger" />
        </div>
        <div class="col-md-6">
          <label class="form-label">Tipo de freno</label>
          <Field name="tipoFreno" type="text" class="form-control" />
          <ErrorMessage name="tipoFreno" class="text-danger" />
        </div>
      </div>

      <!-- Capacidad del tanque de combustible -->
      <div class="mb-3">
        <label class="form-label">Capacidad del tanque de combustible</label>
        <Field name="capacidadTanque" type="text" class="form-control" />
        <ErrorMessage name="capacidadTanque" class="text-danger" />
      </div>

     
    </Form>
														</div>
											
														<!--end::Card header-->
													</div>
													<!--end::General options-->
													<!--begin::Media-->
													<div class="card card-flush py-4">
														<!--begin::Card header-->
														<div class="card-header">
															<div class="card-title">
																<h2>Media</h2>
															</div>
														</div>
														<!--end::Card header-->
														<!--begin::Card body-->
														<div class="card-body pt-0">
															<!--begin::Input group-->
															<div class="fv-row mb-2">
																<!--begin::Dropzone-->
																<div class="dropzone"
																	id="kt_ecommerce_add_product_media">
																	<!--begin::Message-->
																	<div class="dz-message needsclick">
																		<!--begin::Icon-->
																		<i
																			class="ki-duotone ki-file-up text-primary fs-3x">
																			<span class="path1"></span>
																			<span class="path2"></span>
																		</i>
																		<!--end::Icon-->
																		<!--begin::Info-->
																		<div class="ms-4">
																			<h3 class="fs-5 fw-bold text-gray-900 mb-1">
																				Drop files here or click to upload.</h3>
																			<span
																				class="fs-7 fw-semibold text-gray-500">Upload
																				up to 10 files</span>
																		</div>
																		<!--end::Info-->
																	</div>
																</div>
																<!--end::Dropzone-->
															</div>
															<!--end::Input group-->
															<!--begin::Description-->
															<div class="text-muted fs-7">Set the product media gallery.
															</div>
															<!--end::Description-->
														</div>
														<!--end::Card header-->
													</div>
													<!--end::Media-->
												
												</div>
											</div>
											<!--end::Tab pane-->
											<!--begin::Tab pane-->
											<div class="tab-pane fade" id="kt_ecommerce_add_product_advanced"
												role="tab-panel">
												<div class="d-flex flex-column gap-7 gap-lg-10">
													<!--begin::Inventory-->
													<div class="card card-flush py-4">
														<!--begin::Card header-->
														<div class="card-header">
															<div class="card-title">
																<h2>Inventory</h2>
															</div>
														</div>
														<!--end::Card header-->
														<!--begin::Card body-->
														<div class="card-body pt-0">
															<!--begin::Input group-->
															<div class="mb-10 fv-row">
																<!--begin::Label-->
																<label class="required form-label">SKU</label>
																<!--end::Label-->
																<!--begin::Input-->
																<input type="text" name="sku" class="form-control mb-2"
																	placeholder="SKU Number" value="" />
																<!--end::Input-->
																<!--begin::Description-->
																<div class="text-muted fs-7">Enter the product SKU.
																</div>
																<!--end::Description-->
															</div>
															<!--end::Input group-->
															<!--begin::Input group-->
															<div class="mb-10 fv-row">
																<!--begin::Label-->
																<label class="required form-label">Barcode</label>
																<!--end::Label-->
																<!--begin::Input-->
																<input type="text" name="barcode"
																	class="form-control mb-2"
																	placeholder="Barcode Number" value="" />
																<!--end::Input-->
																<!--begin::Description-->
																<div class="text-muted fs-7">Enter the product barcode
																	number.</div>
																<!--end::Description-->
															</div>
															<!--end::Input group-->
															<!--begin::Input group-->
															<div class="mb-10 fv-row">
																<!--begin::Label-->
																<label class="required form-label">Quantity</label>
																<!--end::Label-->
																<!--begin::Input-->
																<div class="d-flex gap-3">
																	<input type="number" name="shelf"
																		class="form-control mb-2" placeholder="On shelf"
																		value="" />
																	<input type="number" name="warehouse"
																		class="form-control mb-2"
																		placeholder="In warehouse" />
																</div>
																<!--end::Input-->
																<!--begin::Description-->
																<div class="text-muted fs-7">Enter the product quantity.
																</div>
																<!--end::Description-->
															</div>
															<!--end::Input group-->
															<!--begin::Input group-->
															<div class="fv-row">
																<!--begin::Label-->
																<label class="form-label">Allow Backorders</label>
																<!--end::Label-->
																<!--begin::Input-->
																<div
																	class="form-check form-check-custom form-check-solid mb-2">
																	<input class="form-check-input" type="checkbox"
																		value="" />
																	<label class="form-check-label">Yes</label>
																</div>
																<!--end::Input-->
																<!--begin::Description-->
																<div class="text-muted fs-7">Allow customers to purchase
																	products that are out of stock.</div>
																<!--end::Description-->
															</div>
															<!--end::Input group-->
														</div>
														<!--end::Card header-->
													</div>
													<!--end::Inventory-->
													<!--begin::Variations-->
													<div class="card card-flush py-4">
														<!--begin::Card header-->
														<div class="card-header">
															<div class="card-title">
																<h2>Variations</h2>
															</div>
														</div>
														<!--end::Card header-->
														<!--begin::Card body-->
														<div class="card-body pt-0">
															<!--begin::Input group-->
															<div class=""
																data-kt-ecommerce-catalog-add-product="auto-options">
																<!--begin::Label-->
																<label class="form-label">Add Product Variations</label>
																<!--end::Label-->
																<!--begin::Repeater-->
																<div id="kt_ecommerce_add_product_options">
																	<!--begin::Form group-->
																	<div class="form-group">
																		<div data-repeater-list="kt_ecommerce_add_product_options"
																			class="d-flex flex-column gap-3">
																			<div data-repeater-item=""
																				class="form-group d-flex flex-wrap align-items-center gap-5">
																				<!--begin::Select2-->
																				<div class="w-100 w-md-200px">
																					<select class="form-select"
																						name="product_option"
																						data-placeholder="Select a variation"
																						data-kt-ecommerce-catalog-add-product="product_option">
																						<option></option>
																						<option value="color">Color
																						</option>
																						<option value="size">Size
																						</option>
																						<option value="material">
																							Material</option>
																						<option value="style">Style
																						</option>
																					</select>
																				</div>
																				<!--end::Select2-->
																				<!--begin::Input-->
																				<input type="text"
																					class="form-control mw-100 w-200px"
																					name="product_option_value"
																					placeholder="Variation" />
																				<!--end::Input-->
																				<button type="button"
																					data-repeater-delete=""
																					class="btn btn-sm btn-icon btn-light-danger">
																					<i class="ki-duotone ki-cross fs-1">
																						<span class="path1"></span>
																						<span class="path2"></span>
																					</i>
																				</button>
																			</div>
																		</div>
																	</div>
																	<!--end::Form group-->
																	<!--begin::Form group-->
																	<div class="form-group mt-5">
																		<button type="button" data-repeater-create=""
																			class="btn btn-sm btn-light-primary">
																			<i class="ki-duotone ki-plus fs-2"></i>Add
																			another variation</button>
																	</div>
																	<!--end::Form group-->
																</div>
																<!--end::Repeater-->
															</div>
															<!--end::Input group-->
														</div>
														<!--end::Card header-->
													</div>
													<!--end::Variations-->
													
												</div>
											</div>
											<!--end::Tab pane-->
										</div>
										<!--end::Tab content-->
										<div class="d-flex justify-content-end">
											<!--begin::Button-->
											<a href="apps/ecommerce/catalog/products.html"
												id="kt_ecommerce_add_product_cancel"
												class="btn btn-light me-5">Cancel</a>
											<!--end::Button-->
											<!--begin::Button-->
											<button type="submit" id="kt_ecommerce_add_product_submit"
												class="btn btn-primary">
												<span class="indicator-label">Save Changes</span>
												<span class="indicator-progress">Please wait...
													<span
														class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
											</button>
											<!--end::Button-->
										</div>
									</div>
									<!--end::Main column-->
								</form>
								<!--end::Form-->
							</div>
							<!--end::Content container-->
						</div>
						<!--end::Content-->
					</div>
					<!--end::Content wrapper-->
					<!--begin::Footer-->

				</div>
				<!--end::Footer-->
			</div>
			<!--end:::Main-->
		</div>
		<!--end::Wrapper-->
	</div>
	<!--end::Page-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  components: { Form, Field, ErrorMessage },
  setup() {
    const schema = yup.object({
      nombre: yup.string().required("El nombre es obligatorio"),
      descripcion: yup.string().required("La descripción es obligatoria"),
      precio: yup.number().required("El precio es obligatorio").positive("Debe ser un número positivo"),
      marca: yup.string().required("La marca es obligatoria"),
      modelo: yup.string().required("El modelo es obligatorio"),
      capacidadTanque: yup.string().required("Este campo es obligatorio"),
    });

    const { handleSubmit } = useForm({ validationSchema: schema });

    const onSubmit = handleSubmit((values) => {
      console.log("Producto agregado:", values);
      alert("Producto agregado con éxito 🎉");
    });

    return { schema, onSubmit };
  },
});
</script>

<style>
#kt_app_wrapper_carro {
  margin: 0;
}
</style>