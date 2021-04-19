<template>
  <div class="pagination">
    <div
      class="pages"
      v-for="page in totalPageCount"
      :class="{ active: page == currentPage }"
      :key="page"
      @click="pageClick(page)"
    >
      {{ page }}
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";

@Options({
  name: "pagination",
})
export default class Pagination extends Vue {
  @Prop({
    type: Number,
    required: true,
    default: 1 /*, validator: function(value: number) {
    return value > 0;
    //
}*/,
  })
  currentPage!: number;
  @Prop({ type: Number }) totalCount!: number;
  @Prop({ type: Number, default: 10 }) pageSize!: number;

  pageClick(page: Number) {
    this.$emit("pageClick", page);
  }
  get totalPageCount(): number {
    return this.totalCount;
  }
}
</script>
<style lang="less">
.pagination {
  display: flex;
margin: 26px;
justify-content: flex-end;
}
.pages {
  background: #e2e2e2;
  padding: 10px;

  margin-right: 5px;
  cursor: pointer;
  &.active {
    background-color: #d25338;
  }
}
</style>