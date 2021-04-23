<template>
  <select name="" id="" class="select">
    <option
      class="option"
      v-for="item in list"
      :key="item"
      :v-bind:value="item.value"
    >
      {{ item }}
    </option>
  </select>
</template>
<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";

@Options({})
export default class UiSelect extends Vue {
  @Prop({ type: Array }) list!: any;
}
</script>
<style scoped>
.select {
  height: 35px;
  min-width: 225px;
  padding-left: 22px;
  margin-right: 24px;
  appearance:unset;
}
.option {
  font-size: 15px;
  line-height: 18px;
  color: #545661;
}
</style>