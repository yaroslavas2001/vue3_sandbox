<template>
  <page
    name="Агенты / Пользователи"
    :getDataFuncAsync="getDataFuncAsync"
    :filter="filter"
    @onAdd="onAdd"
    ref="page"
    searchPlaceholder="Название товара..."
  ></page>

</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({

})
export default class Сatalog extends Vue {
  
}
</script>
