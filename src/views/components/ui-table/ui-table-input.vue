<template>
   <input class="ui-table-input input" v-model="search" placeholder="Поиск.."/>
  <button class="ui-table-input btn"  @click="onFilterChanged()"><img src="@assets/img/search.png" alt=""></button>
</template>
<script lang="ts">
import { Options, Prop, Vue, Ref } from "vue-property-decorator";

@Options<UiTableInput>({
 emits: ["onFilterChanged"]
})
export default class UiTableInput extends Vue {
  search = "";
  onFilterChanged() {
    this.$emit("onFilterChanged", this.search);
  }
}
</script>
<style scoped>
.btn{
    background-color:#D25338;
    height: 36px;
    width: 36px;
    border: 0px;
}
.input{
    height: 35px;
    margin-top: 19px;
    margin-bottom: 22px;
    min-width: 500px;
}
</style>