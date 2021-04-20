<template>
<h1>Показания счетчиков</h1>
 <!-- <slot name="title">
        <div class="page-header__bnts">
          <ui-button @click="onClick" tabindex="1" active>Добавить</ui-button>
        </div>
      </slot> -->
      <div>
      <button class="page__btn">Добавить</button>
    </div>
    <!-- <Filter @change="onFilterChanged" /> -->

    <!-- <Grid :usersToDisplay="usersToDisplay" /> -->
    <ui-table :items="usersToDisplay" templateColumns="1fr 1fr 1fr 100px">
      <template #header>
        <ui-table-header-item>0</ui-table-header-item>
        <ui-table-header-item>2</ui-table-header-item>
        <ui-table-header-item>3</ui-table-header-item>
        <ui-table-header-item>4</ui-table-header-item>
      </template>
      <template #body="data">
        <ui-table-body-item>{{data.item.login}}</ui-table-body-item>
        <ui-table-body-item>{{data.item.name}}</ui-table-body-item>
        <ui-table-body-item>{{data.item.name}}</ui-table-body-item>
        <ui-table-body-item>{{data.item.name}}</ui-table-body-item>
      </template>
    </ui-table>
  <content-block title="Список юзеров">

  <content-table>
    <template #filter>
      <ui-input v-model="filter.search"></ui-input>
    </template>
    <template #default="data" :filter="filter" :getDataFunc="getDataFunc">
      <ui-table-body-item>{{data.login}}</ui-table-body-item>
      <ui-table-body-item>{{data.name}}</ui-table-body-item>
      <ui-table-body-item>{{data.name}}</ui-table-body-item>
      <ui-table-body-item>{{data.name}}</ui-table-body-item>
    </template>
  </content-table>
  </content-block>
    <!-- <Pagination
      :currentPage="currentPage"
      :pageSize="pageSize"
      :totalCount="totalPageCount"
      @pageClick="pageClick"
    /> -->
    <ui-pagination :size="pageSize"
      :count="totalCount" @onChange="onPaginationChanged"/>
    <!-- <div class="page-content">
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
    </div> -->

    <slot name="modal-window"> </slot>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({

})
export default class Сatalog extends Vue {
  
}
</script>
