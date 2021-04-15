<template>
    <router-view/>
</template>

<script lang="ts">
// import { Vue } from "vue-class-component";
// import { Component, Vue } from 'vue-property-decorator'

// @Component
// export default class BaseLayout extends Vue {

// }
import { defineComponent } from 'vue'

const Component = defineComponent({
    name: 'base-layout'
  // type inference enabled
})
export default Component;
</script>

<style scoped>

</style>