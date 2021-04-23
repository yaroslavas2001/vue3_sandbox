<template>
  <div
    tabindex="0"
    @focus="onGetFocus"
    @blur="onBlur"
    ref="root"
    class="ui-select"
  >
    <div @click="clickCurrent">
      <slot name="current" :value="innerValue">
        <div class="current" :class="{ active: open }">{{ activeText }}</div>
      </slot>
    </div>
    <slot name="container" :data="items">
      <div class="container" :class="{ active: open }">
        <div
          class="item"
          v-for="(item, index) in items"
          v-bind:key="index"
          @click="select(item)"
          :class="{ active: isSelect(item), hover: index == hoveredIdx }"
        >
          <slot
            name="item"
            :item="item"
            :index="index"
            :hover="index == hoveredIdx"
            :active="isSelect(item)"
            >{{ getValue(item) }}</slot
          >
        </div>
      </div>
    </slot>
  </div>
</template>
<script lang="ts">
import { Vue, Options, Prop, Watch, Model } from "vue-property-decorator";
@Options({
  name: "ui-select",
  emits: ["update:modelValue"],
})
export default class UiSelectComponent extends Vue {
  @Prop() keyField?: string;
  @Prop() valueField?: string;
  // todo: сделать проверку на повторяющиеся значения ключей и кидать ошибку/предупреждение
  @Prop({ default: () => new Array<any>(), type: Array, required: true })
  items!: any[];
  @Prop({ default: false }) multiple: boolean;
  @Prop({ default: null }) selectText: string;
  @Prop({ default: true }) closeOnSelect: boolean;
  @Prop({ default: false }) checkActiveByRef: boolean;
  @Prop({ type: [String, Number, Number, Date, Object, Array] })
  modelValue: any | any[] | String | Number | string | number | Date;

  innerValue: any | any[] | String | Number | string | number | Date = null;
  // обычное значение
  @Watch("modelValue")
  onValueChanged() {
    this.innerValue = this.modelValue;
  }
  // внутреннее значение
  @Watch("innerValue")
  onInnerValueChanged() {
    this.$emit("update:modelValue", this.innerValue);
  }
  private open = false;
  preventCurrentClick = false;
  setOpen(value: boolean) {
    this.open = value;
    var active = this.active;
    if (!active) {
      this.setHoveredIdx(0);
    }
    Array.isArray(active)
      ? this.setHoveredIdx(this.items.indexOf(active[active.length - 1]))
      : this.setHoveredIdx(this.items.indexOf(active));
  }
  clickCurrent() {
    if (this.preventCurrentClick) {
      return;
    }
    this.setOpen(!this.open);
  }
  hoveredIdx: number = null;
  hasFocus = false;
  mounted() {
    document.addEventListener("keydown", this.onKeyDown.bind(this));
  }
  beforeDestroy() {
    document.removeEventListener("keydown", this.onKeyDown.bind(this));
  }
  onGetFocus() {
    this.setOpen(true);
    this.preventCurrentClick = true;
    setTimeout(() => (this.preventCurrentClick = false), 300);
    this.hasFocus = true;
  }
  onBlur() {
    this.setOpen(false);
    this.hasFocus = false;
  }
  onKeyDown(ev: KeyboardEvent) {
    if (!this.hasFocus) {
      return;
    }
    var key = ev.key.toLowerCase();
    if (key == "escape") {
      return (this.open = false);
    }
    if (key == "enter") {
      return this.open ? this.onEnter() : this.setOpen(true);
    }
    if (key == "arrowdown" || key == "arrowup") {
      ev.preventDefault();
      return this.open
        ? key === "arrowdown"
          ? this.setHoveredIdx(++this.hoveredIdx)
          : this.setHoveredIdx(--this.hoveredIdx)
        : this.setOpen(true);
    }
  }
  isSelect(item: any) {
    var key = this.getKey(item);
    return this.multiple
      ? (this.innerValue || []).some((el: any) => this.isEqual(el, key))
      : this.isEqual(key, this.modelValue);
  }
  isEqual(fst: any, scd: any): boolean {
    return this.checkActiveByRef
      ? fst === scd
      : JSON.stringify(fst) === JSON.stringify(scd);
  }
  setHoveredIdx(idx: number) {
    this.hoveredIdx = (idx + this.items.length) % this.items.length;
  }
  onEnter() {
    this.select(this.items[this.hoveredIdx]);
  }
  @Watch("items")
  onItemsChanged() {
    this.setDefault();
  }
  setDefault() {
    if (!this.selectText && this.items.length > 0) {
      this.select(this.items[0]);
    }
  }
  get active(): any {
    return this.multiple
      ? this.items.filter((el: any) =>
          this.innerValue.some((iv: any) => this.isEqual(iv, this.getKey(el)))
        )
      : (this.items.filter((el: any) =>
          this.isEqual(this.getKey(el), this.innerValue)
        ) || [])[0];
  }
  get activeText(): string {
    var active = this.active;
    if (Array.isArray(active)) {
      var text =
        active.length > 0
          ? active.map((el: any) => this.getValue(el)).join(",")
          : this.selectText || "";
    } else {
      text = active ? this.getValue(active) : this.selectText || "";
    }
    return text;
  }
  select(item: any) {
    if (this.multiple) {
      this.innerValue = this.innerValue || [];
      this.isSelect(item)
        ? (this.innerValue = this.innerValue.filter(
            (el: any) => !this.isEqual(el, this.getKey(item))
          ))
        : this.innerValue.push(this.getKey(item));
    } else {
      this.innerValue = this.getKey(item);
      if (this.closeOnSelect) {
        this.setOpen(false);
      }
    }
    this.setHoveredIdx(this.items.indexOf(item));
  }
  created() {
    this.innerValue = this.modelValue;
    this.setDefault();
  }
  getKey(item: any) {
    if (this.keyField) {
      return item[this.keyField];
    }
    return item;
  }
  getValue(item: any) {
    if (this.valueField) {
      const resText = item[this.valueField];
      if (resText == undefined) {
        console.error("Не найден valueField");
      }
      return resText;
    }
    return item;
  }
}
</script>
<style lang="less" scoped>
@uiSelectColor: #3c3f40;
@uiSelectIconColor: #d25338;
@uiSelectBorderColor: #263958;
@uiSelectActiveColor: #ced4de;
@uiSelectBackColor: #fff;
@uiSelectColorLabel: #7a7878;

.ui-select {
  position: relative;
  user-select: none;
  cursor: pointer;
  outline: none;
  width: 225px;
  margin-left: 23px;
//   height: 35px;
  &:focus {
    .current {
      border: 1px #ced4de solid;
      &.active {
        border-width: 1px 1px 0px 1px;
        border-color: #d25338;
        border-bottom: 1px solid #ced4de;
      }
    }
  }
  .current {
    background-color: #fff;
    border: 1px solid #ced4de;
    height: 100%;
    padding: 10px 10px;
    color: #162a47;
    font-size: 14px;
  }
  .container {
    color: #162a47;
    display: none;
    padding: 0;
    &.active {
      display: block;
      position: absolute;
      z-index: 1000;
      min-width: calc(~"100%");
      top: 100%;
      border: 1px #d25338 solid;
      border-width: 0px 1px 1px 1px;
      .item {
        padding: 7px 10px;
        background-color: @uiSelectBackColor;
        border-top: @uiSelectBorderColor;
        font-size: 14px;
        &.hover,
        &:hover {
          background-color: #f0f0f0;
        }
        &.active {
          background-color: #d25338;
          color: white;
        }
        &.hover.active,
        &:hover.active {
          background-color: #d25338;
        }
      }
    }
  }
}
</style>