import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import apiDataSourcePlugin from "../dataSource/api/apiDataSourceNext.plugin";
// import apiDataSourcePlugin from "../dataSource/api/apiDataSourceNext.plugin";
import UiModalWindow from "@views/components/ui-modal-window/ui-modal-window.vue";
import UiTable from "@views/components/ui-table/ui-table.vue";
import UiPagination from "@components/ui-table/ui-pagination.vue";
import UiTableHeaderItem from "@views/components/ui-table/ui-table-header-item.vue";
import UiTableBodyItem from "@views/components/ui-table/ui-table-body-item.vue";
import UiButton from "@components/ui-button.vue";
import UiLoading from "@components/ui-loading.vue";
import UiImagePreview from "@components/ui-crop-image/ui-image-preview.vue";
import UiCropImage from "@components/ui-crop-image/ui-crop-image.vue";
import UiFileInput from "@components/ui-file-input.vue";
import UiCheckbox from "@components/ui-checkbox.vue";
import UiDatePicker from "@components/ui-date-picker/ui-date-picker.vue";
import ControlValidatorGroup from "@views/components/control-validator-group.vue";
// import BsCol from "@views/components/bootstrap/bs-col.vue";
// import BsRow from "@views/components/bootstrap/bs-row.vue";
// import BsContainer from "@views/components/bootstrap/bs-container.vue";
//plagins
import ErrorHandler from "./plugins/errorHandler";
import UiTableInput from "@views/components/ui-table/ui-table-input.vue";

// import StorageManipulatorPlugin from "@/plugins/storageManipulator";
// import { suppressDeprecationWarnings } from "moment";
const app = createApp(App);

app.use(ErrorHandler, {
  handler: (err: Error) => {
    console.error('Err: ', err);
    
    // app.config.globalProperties.$notification.error(err);
  },
});


app.use(router);


app.component("ui-modal-window", UiModalWindow);
app.component("ui-table-header-item", UiTableHeaderItem);
app.component("ui-pagination", UiPagination);
app.component("ui-table-body-item", UiTableBodyItem);
app.component("ui-table", UiTable);
app.component("ui-table-input", UiTableInput);
app.component("ui-button", UiButton);
app.component("ui-checkbox", UiCheckbox);
app.component("ui-loading", UiLoading);
app.component("ui-image-preview", UiImagePreview);
app.component("ui-crop-image", UiCropImage);
app.component("ui-file-input", UiFileInput);
app.component("ui-date-picker", UiDatePicker);
app.component("control-validation-group", ControlValidatorGroup);
// app.component("bs-row", BsRow);
// app.component("bs-col", BsCol);
// app.component("bs-container", BsContainer);

app.mount("#app");
