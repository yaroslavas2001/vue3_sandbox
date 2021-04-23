<template>
<page-template name="Объекты" ref="Page-template">
    <!-- КНОПКА ОРАНЖЕВАЯ ДЛЯ ШАБЛОНА СТРАНИЦЫ -->
    <template #btn><button class="page__btn">Добавить</button> </template>
    
</page-template>
   
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({

})
export default class Сatalog extends Vue {
  headerList = ["Все","Не все","Почти все"]
}
</script>
