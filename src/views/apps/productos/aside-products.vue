<script setup></script>
<template>
    <!--begin::Aside column-->
    <div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
        <!--begin::Thumbnail settings-->
        <div class="card card-flush py-4">
            <!--begin::Card header-->
            <div class="card-header">
                <!--begin::Card title-->
                <div class="card-title">
                    <h2>Thumbnail</h2>
                </div>
                <!--end::Card title-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body text-center pt-0">
                <!--begin::Image input-->
                <!--begin::Image input placeholder-->
                <!-- <style>
                    .image-input-placeholder {
                        background-image: url('assets/media/svg/files/blank-image.svg');
                    }

                    [data-bs-theme="dark"] .image-input-placeholder {
                        background-image: url('assets/media/svg/files/blank-image-dark.svg');
                    }
                </style> -->
                <!--end::Image input placeholder-->
                <div class="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                    data-kt-image-input="true">
                    <!--begin::Preview existing avatar-->
                    <div class="image-input-wrapper w-150px h-150px"></div>
                    <!--end::Preview existing avatar-->
                    <!--begin::Label-->
                    <label
                        class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                        data-kt-image-input-action="change" data-bs-toggle="tooltip"
                        title="Change avatar">
                        <i class="ki-duotone ki-pencil fs-7">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                        <!--begin::Inputs-->
                        <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                        <input type="hidden" name="avatar_remove" />
                        <!--end::Inputs-->
                    </label>
                    <!--end::Label-->
                    <!--begin::Cancel-->
                    <span
                        class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                        data-kt-image-input-action="cancel" data-bs-toggle="tooltip"
                        title="Cancel avatar">
                        <i class="ki-duotone ki-cross fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                    </span>
                    <!--end::Cancel-->
                    <!--begin::Remove-->
                    <span
                        class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                        data-kt-image-input-action="remove" data-bs-toggle="tooltip"
                        title="Remove avatar">
                        <i class="ki-duotone ki-cross fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                    </span>
                    <!--end::Remove-->
                </div>
                <!--end::Image input-->
                <!--begin::Description-->
                <div class="text-muted fs-7">Set the product thumbnail image. Only
                    *.png, *.jpg and *.jpeg image files are accepted</div>
                <!--end::Description-->
            </div>
            <!--end::Card body-->
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
                    id="kt_ecommerce_add_product_store_template">
                    <option></option>
                    
                    <option value="electronics">Cars</option>
                    <option value="office">Parts</option>
                    <option value="fashion">Garage</option>
                    <option value="fashion">Services</option>
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
<style>
.image-input-placeholder {
  background-image: url("public/media/svg/files/blank-image.svg") !important;
}

[data-bs-theme="dark"] .image-input-placeholder {
  background-image: url("public/media/svg/files/blank-image.svg") !important;
}
</style>