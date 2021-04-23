<template>
  <div class="page">
    <div class="page-header">
      <div class="page-header__name">
        <h1>{{ name }}</h1>
      </div>
      <slot name="btn" />
    </div>
    <slot name="input" />
   <!--    <filter :filter="filter" @onChangeFlite="onChangeFlite">
        <input
          class="ui-table-input input"
          v-model="search"
          placeholder="Поиск.."
        />
        <button
          class="ui-table-input btn"
          @click="$emit('onFilterChanged', search)"
        >
          <img src="@assets/img/search.png" alt="" />
        </button> </filter
    > -->
    <slot />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UiTableInput from "@/views/components/ui-table/ui-table-input.vue";

@Options({
  emits: ["onFilterChanged"],
  props: {
    name: {
      type: String,
      default: "Название страницы",
    },
  },
   components: {
    UiTableInput,
  },
})
export default class PageTemplate extends Vue {
  
  search = "";
  onChangeFlite(filter: Object) {
    console.log(this.search);
    console.log(filter);
  }
}
</script>
<style lang="less">
@BaseColor: #d25338;
.page {
  background: white;
  height: 100%;
  padding: 0 26px;
  .page-header {
    font-size: 17px;
    line-height: 20, 71px;
    color: #162147;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 21px;
    border-bottom: 2px solid #f0f0f0;
    padding: 14px 0px;
  }
  .page__btn {
    background-color: @BaseColor;
    width: 108px;
    height: 36px;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    border: 0px;
  }
  .input {
    height: 35px;
    margin-top: 19px;
    min-width: 500px;
  }
  .btn {
    background-color: #d25338;
    height: 36px;
    width: 36px;
    border: 0px;
  }
}
</style>
