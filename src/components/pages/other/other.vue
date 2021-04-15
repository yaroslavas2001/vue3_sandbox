<template>
  <layout>
    <slot name="header">other-header</slot>
    <slot name="footer">other-footer</slot>    
  </layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({  
  name: 'other',
  created() {
    console.log('other');
  }
})
</script>