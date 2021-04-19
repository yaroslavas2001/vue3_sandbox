<template>
  <div class="page">
    <div class="page-header">
      <div class="page-header__name">
        <h1>{{ name }}</h1>
      </div>
      <!-- <slot name="title">
        <div class="page-header__bnts">
          <ui-button @click="onClick" tabindex="1" active>Добавить</ui-button>
        </div>
      </slot> -->
      <button class="page__btn">Добавить</button>
    </div>
    <Grid />
    <div class="page-content">
      <div  v-if="!noFilter">
        <slot name="filter"></slot>

        <div class=" page-content__panel">
          <div class="ui-input">
            <input
              v-model="search"
              :placeholder="searchPlaceholder"
              tabindex="2"
              @keydown.enter="onSearch"
            />
            <div class="ui-input__btn" tabindex="3" @click="onSearch">
              <span class="icon-apteka-search"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ui-loading :loading="isLoading" />
          <slot name="content" :items="innerItems"></slot>
        </div>
      </div>
      <div
        v-show="!noPagination && innerItems && innerItems.length > 0"
        class="panel"
      >
        <div class="row align-items-center">
          <div class="col-auto ml-auto">
            <ui-pagination
              ref="pagination"
              :size="countPerPage"
              :count="totalItems"
              class="mt-4"
              @onChange="onPaginationChanged"
            >
            </ui-pagination>
          </div>
        </div>
      </div>
      <div
        class="row"
        v-if="
          !noPagination &&
          innerItems &&
          innerItems.length == 0 &&
          isLoading == false
        "
      >
        <div class="pb-2 pt-4 col-12" style="text-align: center">
          Нет данных
        </div>
      </div>
    </div>

    <slot name="modal-window"> </slot>
  </div>
</template>

<script lang="ts">
import { reactive, ref, provide } from "vue";
import { Options, Vue } from "vue-class-component";
import Grid from "@views/components/Grid.vue";


import UiPaginationComponent from "./ui-table/ui-pagination.vue";

@Options<Page>({
  props: {
    searchPlaceholder: { default: "Поиск", type: String },
    noApi: { default: false, type: Boolean },
    noFilter: { default: false, type: Boolean },
    defaultSearchField: String,
    noPagination: { default: false, type: Boolean },
    name: {
      type: String,
      default: "Название страницы",
    },
    getDataFuncAsync: { type: Function, requared: true },
    // filter: {
    //   required: true,
    //   type: FilterRequest,
    //   default: new FilterRequest({
    //     Pagination: { Skip: 0, Take: 10 },
    //     Search: [],
    //     Sort: { FieldName: "", Desc: false },
    //   }),
    // },
  },
  watch: {
    filter(value) {
      this.innerItems = this.filter;
    },
  },
  emits: ["onAdd"],
components: {
    Grid
  },
})
export default class Page extends Vue {
  readonly searchPlaceholder: string = "Поиск";
  readonly name: string = "Название страницы";
  readonly noApi: boolean = false;
  readonly noFilter: boolean = false;
  readonly noPagination: boolean = false;
  readonly defaultSearchField = "Name";


  isLoading = false;
  totalItems = 0;
  currentPage = 1;
  innerItems: any[] = [];

  hasFilter = false;

  countPerPage = 10;
  pagination = true;
  search = "";

  onClick() {
    this.$emit("onAdd");
  }

  async created() {
    if (this.noApi) {
      return;
    }
    await this.refresh();
  }

  mounted() {
    this.hasFilter = this.$slots.filter != null;
  }

  addSearch(item: any) {
  }

  sort(sortName: string, sortType: string) {
    // if (sortName != "" && this.innerFilter.Sort == null) {
    //   this.innerFilter.Sort = { FieldName: "", Desc: false };
    // }
    // this.innerFilter.Sort.FieldName = sortName;
    // this.innerFilter.Sort.Desc = sortType == "1";
    // (this.$refs.pagination as UiPaginationComponent).currentPage = 1;

    this.refresh();
  }

  async refresh() {
  }

  get pageSize(): number {
    return 10;
    // const x = this.innerFilter.Pagination.Take;
    // return x;
  }

  resetPagination() {
    // this.innerFilter.Pagination.Skip = 0;
    this.currentPage = 1;
    this.totalItems = 0;
  }
  onSort(sortName: string, sortType: string) {
    // console.log("sortType", sortType);
    this.resetPagination();
    this.refresh();
  }


  onPaginationChanged(currentPage: number) {
    this.currentPage = currentPage;
    // this.innerFilter.Pagination.Skip =
    //   (currentPage - 1) * this.innerFilter.Pagination.Take;
    this.refresh();
  }

  onSearch() {

    // this.innerFilter.Pagination.Skip = 0;
    this.currentPage = 1;
    this.refresh();
  }
}
</script>
<style lang="less">
@BaseColor: #D25338;
.page {
  background: white;
  height: 100%;
  label {
    font-size: 13px;
  }
  h1 {
    font-size: 18px;
    line-height: 22px;
    color: #262838;
    font-weight: 400;
  }
  
  .page-header {
   
    font-size: 17px;
    line-height: 20,71px;
    color: #162147;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 21px;
    border-bottom: 2px solid #F0F0F0;
    padding: 14px 26px;
    
    // .page-header__bnts {
    //   margin-left: auto;
    //   .ui-button {
    //     height: 36px;
    //     font-size: 1rem;
    //   }
    // }
  }
  .page__btn{
    background-color: @BaseColor;
    width: 108px;
    height: 36px;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    border: 0px;
  }
  .page-content {
    margin: 19px 28px 55px 26px;
  }
  .page-content__panel {
    // margin-bottom: 10px;
    // background: #f8f8f8;
    // padding: 8px 16px;
  }
  .ui-input {
    display: flex;
    margin-bottom: 22px;
    max-width: 535px;
    input {
      // background: #fcfcfc;
      font-family: ProximaNova;
      border: 1px solid #CED4DE;
      box-sizing: border-box;
      padding: 5px 10px 5px 10px;
      font-size: 14px;
      width: 100%;
      
      &::placeholder {
        // color: #787878;
      }
      &:focus {
        outline: none;
        border: solid 1px @BaseColor;
      }
    }
    .ui-input__btn {
      background: @BaseColor;
      min-width: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      cursor: pointer;
    }
  }
  .ui-textarea {
    background: #fff;
    border: 1px solid #d2d2d2;
    font-size: 14px;
    padding: 10px;
    font-family: ProximaNova;
    resize: none;

    &:focus {
      border: 1px solid @BaseColor;
    }
  }
  .ui-dropdown {
    ui-input input:focus &:focus {
      .ui-select {
        border: 1px solid @BaseColor;
      }
      .ui-box-menu {
        border: 1px solid @BaseColor;
      }
    }

    .ui-box-menu {
      background: #fff;
      border: 1px solid #d2d2d2;
      top: 1px;
    }
    .ui-list-view-item.selected {
      background: #e2e2e2;
    }
    .ui-list-view-item:hover {
      background: #e2e2e2;
      color: #000;
      font-weight: 600;
    }
  }
  .pointer {
    cursor: pointer;
  }
  @-webkit-keyframes fadeInOut {
    0% {
      opacity: 0;
      top: -0.5em;
    }
    25% {
      opacity: 1;
      top: 0;
    }
    75% {
      opacity: 0;
      top: 0.5em;
    }
    100% {
      opacity: 0;
      top: 0.5em;
    }
  }
  @keyframes fadeInOut {
    0% {
      opacity: 0;
      top: -0.5em;
    }
    25% {
      opacity: 1;
      top: 0;
    }
    75% {
      opacity: 0;
      top: 0.5em;
    }
    100% {
      opacity: 0;
      top: 0.5em;
    }
  }
  .add {
    .add__btn::before {
      color: @BaseColor;
      cursor: pointer;
    }
    .add__text {
      text-decoration: underline;
      cursor: pointer;
      color: #000;
    }
  }
  input.ui-checkbox {
    transform: scale(1.3);
    &:checked {
    }
  }
  .ui-date-picker {
    input {
      border: 1px solid #d2d2d2;
    }
    input,
    input:focus {
      background: #fff;
      color: #414351;
    }
    input:focus {
      border: 1px solid @BaseColor;
    }
    .icon {
      color: #414351;
    }
    .date-time {
      background: #fff;
      color: #414351;
      border: 1px solid @BaseColor;
      transition: all 1s;
      .navigation {
        color: #414351;
        .title_date-picker {
          transition: all 1s;
        }
        .title_date-picker:hover {
          background: @BaseColor;
          color: #fff;
        }
        .backward,
        .next {
          transition: all 1s;
        }
        .backward:hover,
        .next:hover {
          background: @BaseColor;
          color: #fff;
        }
      }
      .minute,
      .hour {
        > div {
          transition: all 1s;
        }
      }
      .minute:hover,
      .hour:hover {
        > div {
          background: @BaseColor;
          color: #fff;
        }
      }
    }
  }
  .icon-apteka-pencil,
  .icon-apteka-delete {
    color: #9e9e9e;
    transition: all 0.5s;
    &:hover {
      color: unset;

      text-shadow: 1px 1px 2px black, 0 0 1em @BaseColor;
    }
  }
  .ui-input {
    .invalid {
      border-color: #dc3545;
    }
  }
  .icon {
    margin-right: 0;
  }
  label {
    line-height: 1.5rem;
  }
}
</style>
