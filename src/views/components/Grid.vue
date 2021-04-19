<template>
<div class="grid">
  <div class="row">
    <div class="_cell">#</div>
    <div class="_cell">Логин</div>
    <div class="_cell">ФИО</div>
    <div class="_cell">Тип</div>
    <div class="_cell">Состояние</div>
    <div class="_cell"></div>
    <div class="_cell"></div>
  </div>
  <div class="row" v-for="item in Display" :key="item">
    <div class="cell">#</div>
    <div class="cell">{{ item.name }}</div>
    <div class="cell">{{ item.name }}</div>
    <div class="cell">{{ item.age }}</div>
    <div class="cell">{{ item.name }}</div>
    <!-- <div class="cell_avatar">
      <img :src="item.avatar" alt="" />
    </div> -->
    <button><img src="@assets/img/red.png" alt=""></button>
    <button><img src="@assets/img/basket.png" alt=""></button>
  </div>
  </div>
</template>
<script lang="ts">
import moment from "moment";
import { Options, Prop, Vue } from "vue-property-decorator";
interface IUser {
  name: string;
  data: Date;
  age: number;
  avatar: string;
}
@Options({
  name: "grid",
})
export default class Grid extends Vue {
  @Prop({ type: Array }) usersToDisplay!: IUser[];
  get Display(): IUser[] {
    return this.usersToDisplay;
  }
  formatDate(date: Date) {
    // return date;
    return moment(date).format("DD.MM.YYYY");
  }
}
</script>
<style lang="less">
.grid{

}
.row {
  display: grid;
  margin: 0;
  grid-template-columns: 100px 1fr 1fr 1fr 1fr 36px 36px;
}
._cell{
   padding: 9px 0px 9px 22px;
  height: 37px;
  border: 1px #ffffff solid;
  background-color: #e2e2e2;
}
.cell {
  background: #F3F3F3;
  padding: 9px 0px 9px 22px;
  height: 37px;
  border: 1px #ffffff solid;
}
</style>