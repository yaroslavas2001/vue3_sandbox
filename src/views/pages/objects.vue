<template>
    <div>
     <ui-checkbox v-for="item in headerList" :key="item">{{item}}</ui-checkbox>

   </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({

})
export default class Сatalog extends Vue {
  headerList = [1,2,3]
}
</script>
