<template>
    <!-- <router-view/> -->
    <div>dddd</div>
</template>
<script lang="ts">
import { Vue, Options, setup } from 'vue-class-component'
import { ref, reactive, onMounted } from 'vue'
import {DiagramComponent} from '@syncfusion/ej2-vue-diagrams'


function useCounter () {
  const count = ref(0)

  function increment () {
    count.value++
  }

  onMounted(() => {
    console.log('onMounted')
  })

  return {
    count,
    increment
  }
}

@Options({  
  components: {DiagramComponent}
})
export default class AppComponent extends Vue {  
  setup() {
      return {counter: useCounter() }
  }
}
</script>