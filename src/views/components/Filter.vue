<template>
  <input class="filter__input" v-model="search" placeholder="Поиск.."/>
 
  <button class="filter__btn" @click="searchFromTo()"><img src="@assets/img/search.png" alt=""></button>
</template>
<script lang="ts">
import { Options, Prop, Vue, Ref } from "vue-property-decorator";

@Options({
  name: "filter",
  emits: ["change"]
})
export default class Filter extends Vue {
  search = "";
  searchFromTo() {
    this.$emit("change", this.search);
  }
}
</script>
<style scoped>
.filter__btn{
    background-color:#D25338;
    height: 36px;
    width: 36px;
    border: 0px;
}
.filter__input{
    height: 35px;
    margin-top: 19px;
    margin-bottom: 22px;
    min-width: 500px;
}
</style>