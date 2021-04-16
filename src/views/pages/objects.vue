<template>

</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Page from "@views/components/page.vue";

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
  
}
</script>
