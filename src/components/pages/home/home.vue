<template>
  <layout> 
    home! 
    <br>
    <r-link route="other" :params="{id:23}">Нажми чтобы перейти на страницу с переопределенными шапкой и футером</r-link>    
  </layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({  
  name: 'home',
  created() {
    console.log('home');
  }
})
</script>