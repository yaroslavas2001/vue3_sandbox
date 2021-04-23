<template>
  <page-template name="Агенты / Пользователи" ref="Page-template">
    <!-- КНОПКА ОРАНЖЕВАЯ ДЛЯ ШАБЛОНА СТРАНИЦЫ -->
    <template #btn><button class="page__btn">Добавить</button> </template>


    <template #input
      ><ui-table-input @onFilterChanged="onFilterChanged"></ui-table-input
    ></template>
    <template #select> <ui-select v-model="a1" :items="selectListAll" /></template>
    <template #select1> <ui-select :items="selectListActive" /></template>


    <ui-table
      :items="usersToDisplay"
      templateColumns="100px 1fr 1fr 1fr 1fr min-content min-content"
    >
      <template #header>
        <ui-table-header-item v-for="item in headerList" :key="item">{{
          item
        }}</ui-table-header-item>
      </template>
      <template #body="data">
        <ui-table-body-item>#</ui-table-body-item>
        <ui-table-body-item>{{ data.item.login }}</ui-table-body-item>
        <ui-table-body-item>{{ data.item.name }}</ui-table-body-item>
        <ui-table-body-item>{{ data.item.type }}</ui-table-body-item>
        <ui-table-body-item>{{ data.item.boolean }}</ui-table-body-item>
        <ui-table-body-item
          ><button><img src="@assets/img/red.png" alt="" /></button
        ></ui-table-body-item>
        <ui-table-body-item
          ><button><img src="@assets/img/basket.png" alt="" /></button
        ></ui-table-body-item>
      </template>
    </ui-table>
    <!-- <content-block title="Список юзеров"> 
  <content-table>
    <template #filter>
      <ui-input v-model="filter.search"></ui-input>
    </template>
    <template #default="data" :filter="filter" :getDataFunc="getDataFunc">
      <ui-table-body-item>{{data.login}}</ui-table-body-item>
      <ui-table-body-item>{{data.name}}</ui-table-body-item>
      <ui-table-body-item>{{data.name}}</ui-table-body-item>
      <ui-table-body-item>{{data.name}}</ui-table-body-item>
    </template>
  </content-table>
  </content-block> -->

    <ui-pagination
      :size="pageSize"
      :count="totalCount"
      @onChange="onPaginationChanged"
    />
  </page-template>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UiTableInput from "@/views/components/ui-table/ui-table-input.vue";
import * as faker from "faker";
import moment from "moment";
// import UiTableComponent from "@views/components/ui-table/ui-table.vue";
interface IUser {
  login: string;
  name: string;
  type: string;
  boolean: boolean;
}
@Options({
  components: {
    UiTableInput,
    // UiTableComponent
  },
})
export default class AgentsPageComponent extends Vue {
  created() {
    this.initData();
  }
  headerList = ["#", "Логин", "ФИО", "Тип", "Состояние", "", ""];
  selectListAll =["Все","Почти все","Не все"]
  selectListActive = ["Активный", "Не активный"]
  // selectListAll = [
  //   {id: 1, text: 'Все'},
  //   {id: 2, text: 'Не все'},
  //   {id: 3, text: 'Почти все'},
  //   ];
  // a1: string = null; // 'Активный';
  // lala(data: string) {
  //   console.log('lala: ', data);
  //   this.a1 = data;
  // }
  // selectListActive = ["Активный", "Не активный"];
  // a2: string = null;
  search = "";
  allUsers: IUser[] = [];
  filteredUsers: IUser[] = [];
  currentPage = 1;
  pageSize = 10;
  initData() {
    for (var i = 0; i < 30; i++) {
      let dist = {
        login: faker.name.lastName(),
        name: faker.name.firstName(),
        type: faker.vehicle.type(),
        boolean: faker.random.boolean(),
      };
      this.allUsers.push(dist);
    }
    this.filteredUsers = this.allUsers.slice();
  }

  get usersToDisplay(): IUser[] {
    let from = (this.currentPage - 1) * this.pageSize;
    let to = from + this.pageSize;
    return this.filteredUsers.slice(from, to);
  }
  // {
  //   Coutn: 100110,
  //   Items: [1,2,3,32,4,124,]
  // }
  get totalCount(): number {
    return this.filteredUsers.length;
  }
  formatDate(date: Date) {
    return moment(date).format("DD.MM.YYYY");
  }
  // ловля события
  onFilterChanged(data: string) {
    //data для ui-table-input
    const s = data.toLowerCase();
    this.filteredUsers = this.allUsers.filter(
      (x) =>
        x.name.toLowerCase().includes(s) ||
        x.login.toLowerCase().includes(s) ||
        x.type.toLowerCase().includes(s) ||
        x.boolean.toString().includes(s)
      // this.formatDate(x.type).includes(s)
    );
  }
  onPaginationChanged(data: number) {
    this.currentPage = data;
  }
}
</script>
<style scoped>
</style>
