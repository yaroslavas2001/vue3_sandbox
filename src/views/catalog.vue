<template>
  <page
    name="Агенты / Пользователи"
    :getDataFuncAsync="getDataFuncAsync"
    :filter="filter"
    @onAdd="onAdd"
    ref="page"
    searchPlaceholder="Название товара..."
  >
    <template #title></template>
    <template v-slot:filter>
      <!-- <div class="col">
        <div class="ui-input"><input /></div>
      </div> -->
      <div class="col pl-0"></div>
      <div class="col-auto"></div>
    </template>
    
    <template #content="innerItems">
      <ui-table
        :items="innerItems.items"
        template-columns="100px auto auto auto auto 36px 36px"
        style="overflow-x: auto"
      >
        <template #header>
          <ui-table-header-item> #</ui-table-header-item>
          <ui-table-header-item>Логин</ui-table-header-item>
          <ui-table-header-item>ФИО</ui-table-header-item>
          <!-- :sort-name="'Producer'"
            default-sort="'asc'"
            @onSort="onSort" -->
          <ui-table-header-item>Тип</ui-table-header-item>
          <ui-table-header-item>Состояние</ui-table-header-item>
          <ui-table-header-item />
          <ui-table-header-item />
        </template>

        <template #body="data">
          <ui-table-body-item>
            {{ data.item.Id }}
          </ui-table-body-item>
          <ui-table-body-item>
            {{ data.item.Name }}
          </ui-table-body-item>
          <ui-table-body-item>
            {{ data.item.Producer }}
          </ui-table-body-item>
          <ui-table-body-item>
            {{ data.item.Categories.join(", ") }}
          </ui-table-body-item>
          <ui-table-body-item>
            {{ data.item.Stores }}
          </ui-table-body-item>
          <ui-table-body-item>
            <div
              class="icon-apteka-pencil pointer"
              @click="onEdit(data.item)"
            ></div>
          </ui-table-body-item>
          <!-- <ui-table-body-item>
            <div
              class="icon-apteka-delete pointer"
              @click="onDelete(data.item)"
            ></div>
          </ui-table-body-item> -->
        </template>
      </ui-table>
    </template>
  </page>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Page from "@views/components/page.vue";

import ImagePreviewModel from "./components/ui-crop-image/ImagePreviewModel";
@Options({
  components: {
    Page,
  },
  // watch:{
  //   count:(value)=>{console.log("count=",value)},
  //   size:(value)=>{console.log("size=",value)}
  // }
})
export default class Сatalog extends Vue {
  isVisibleModalWindow: boolean = false;
  image: ImagePreviewModel = {
    Left: 0,
    Top: 0,
    Height: 0,
    Width: 0,
    ImageSrc: "",
  };

  filter = {};
  CityIds: number[] = [];
  StoreIds: number[] = [];
  cityId: number = null;
  innerItems: Object[] = [];
  onAdd() {
    console.log("on Add");
  }
  init() {}
  onSort(sortName: string, sortType: string) {
    if (this.$refs.page) {
      (this.$refs.page as Page).sort(sortName, sortType);
    }
  }

  onChangePharm(item: any) {
    if (item.id == 0) {
      this.StoreIds = [];
      return;
    }

    this.StoreIds = [item.id];
    this.cityId = 1;
    this.cityId = 0;
    (this.$refs.page as Page).refresh();
  }
  async getDataFuncAsync() {
    console.log("async lalalal");
  }

  async onSave() {
    // const item = this.item;
    // let itemUpdate: UpdateItemRequest = {
    //   Id: item.Id,
    //   IsBestSeller: item.IsBestSeller,
    //   IsNew: item.IsNew,
    //   IsRecomendedToDoctors: item.IsRecomendedToDoctor,
    //   AddPhotoRequest: this.isBase64(this.image.ImageSrc)
    //     ? {
    //         Width: this.image.Width,
    //         Left: this.image.Left,
    //         Top: this.image.Top,
    //         Height: this.image.Height,
    //         Base64Image: this.image.ImageSrc,
    //       }
    //     : null,
    // };
    // // если нет ошибок
    // this.init();
    // (this.$refs.page as any).refresh();
    // this.closeModalWindow();
  }

  isBase64(item: string): boolean {
    const finde = item.indexOf("base64");
    return finde != -1;
  }

  onCancel() {
    this.closeModalWindow();
  }
  closeModalWindow() {
    this.isVisibleModalWindow = false;
  }

  getStories(stores: number[]): string {
    return "";
  }
  // onEdit(item: ItemResponse) {
  //   this.isVisibleModalWindow = true;

  //   const tmp = JSON.stringify(item);
  //   this.item = JSON.parse(tmp);
  //   this.image.ImageSrc = item.ImageUrl ? item.ImageUrl : "";
  // }
}
</script>
