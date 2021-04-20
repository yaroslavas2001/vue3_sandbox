<template>
  <!-- боковое меню -->
  <div class="sidebar" :class="{ minimized: minimized }">
    <div class="logo">
      <div @click="toggleMinimize">
        <img alt="" src="@assets/img/logo.png" />
      </div>
      <div @click="goHome" class="log-text">ЕДИНАЯ РАСЧЕТНАЯ ПАЛАТА</div>
      <!-- стрелка для скрытия -->
      <!-- <div class="logo-btn" @click.stop="toggleMinimize">
        <img src="@assets/img/arrow-left.svg" alt="" srcset="" />
      </div> -->
    </div>
    <nav>
      <router-link
        class="menu-item"
        :exact-active-class="'active'"
        :to="{ name: 'agents' }"
      >
        <i class="icon icon-apteka-clipboard"></i>Агенты /
        Пользователи</router-link
      >
      <router-link
        class="menu-item"
        :exact-active-class="'active'"
        :to="{ name: 'objects' }"
      >
        <i class="icon icon-apteka-clipboard"></i>Объекты</router-link
      >
      <router-link
        class="menu-item"
        :exact-active-class="'active'"
        :to="{ name: 'meters_data' }"
      >
        <i class="icon icon-apteka-clipboard"></i>Показания
        счетчиков</router-link
      >
      <router-link
        class="menu-item"
        :exact-active-class="'active'"
        :to="{ name: 'bills' }"
      >
        <i class="icon icon-apteka-clipboard"></i>Счета</router-link
      >
      <router-link
        class="menu-item"
        :exact-active-class="'active'"
        :to="{ name: 'suppliers' }"
      >
        <i class="icon icon-apteka-clipboard"></i>Поставщики</router-link
      >
      <router-link
        class="menu-item"
        :exact-active-class="'active'"
        :to="{ name: 'payments' }"
      >
        <i class="icon icon-apteka-clipboard"></i>Платежи</router-link
      >
      <router-link
        class="menu-item"
        :exact-active-class="'active'"
        :to="{ name: 'documentation' }"
      >
        <i class="icon icon-apteka-clipboard"></i>Документы</router-link
      >
      <router-link
        class="menu-item"
        :exact-active-class="'active'"
        :to="{ name: 'reports' }"
      >
        <i class="icon icon-apteka-clipboard"></i>Отчеты</router-link
      >
      <router-link
        class="menu-item"
        :exact-active-class="'active'"
        :to="{ name: 'reference_books' }"
      >
        <i class="icon icon-apteka-clipboard"></i>Справочники</router-link
      >
      <router-link
        class="menu-item"
        :exact-active-class="'active'"
        :to="{ name: 'customization' }"
      >
        <i class="icon icon-apteka-clipboard"></i>Настройки</router-link
      >
    </nav>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
  components: {},
})
export default class LayoutSidebar extends Vue {
  minimized: boolean = false;
  activeArt = false;
  toggleMinimize() {
    this.minimized = !this.minimized;
  }
  // menu:menuItem[]=[
  //   new menuItem('Категории товаров','i1'),
  //   new menuItem('Категории товаров','i1'),
  //   new menuItem('Категории товаров','i1'),]
  created() {
    //console.log("FooterComponent created");
  }
  goHome() {
    this.$router.push({ name: "catalog" });
  }
}
</script>

<style lang="less" scoped>
.sidebar {
  background: #fff;
  max-width: 315px;
  width: 100%;
  transition: all 0.8s;
  .logo {
    height: 74px;
    background: #1b2b3a;
    border-right: 1px solid #31495f;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-bottom: 1px solid #ba8931;
    cursor: pointer;
    .log-text {
      color: #fff;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      min-width: 229px;
      font-family: Roboto Slab;
      text-transform: uppercase;
      margin-left: 10px;
      overflow: hidden;
    }
    .logo-btn {
      margin-left: auto;
      cursor: pointer;
      margin-right: 20px;
    }
  }
  &.minimized {
    width: 56px;
    min-width: 56px;
    overflow: hidden;
    .logo {
      // padding-left: 5px;
    }
    .sub-menu {
      transition: all 0.5s;
      margin-left: 0;
    }
  }
  .sub-menu {
    transition: all 0.5s;
    margin-left: 2rem;
  }
  // a {
  //   display: flex;
  //   align-items: center;
  //   // text-indent: 15px;
  //   padding: 10px 20px;
  //   height: 41px;
  //   color: #fff;
  //   transition: color 0.15s ease, background-color 0.15s ease,
  //     border-color 0.15s ease, box-shadow 0.15s ease,
  //     -webkit-box-shadow 0.15s ease;
  //   .icon {
  //     margin-right: 20px;
  //   }
  //   &:focus {
  //     outline: unset;
  //   }
  //   text-decoration: none;
  //   &:hover {
  //     background-color: #1c716f;
  //     border-right: 3px solid white;
  //     transition: color 0.15s ease, background-color 0.15s ease,
  //       border-color 0.15s ease, box-shadow 0.15s ease,
  //       -webkit-box-shadow 0.15s ease;
  //   }
  //   &.active {
  //     background: #1c716f;
  //     border-right: 3px solid white;
  //   }
  // }
  nav {
    margin-top: 24px;
    .menu-item {
      cursor: pointer;
      min-width: 285px;
      display: flex;
      align-items: center;
      // text-indent: 15px;
      padding: 10px 20px;
      height: 41px;
      color: #1b2b3a;
      transition: color 0.15s ease, background-color 0.15s ease,
        border-color 0.15s ease, box-shadow 0.15s ease,
        -webkit-box-shadow 0.15s ease;
      .icon {
        margin-right: 20px;
      }
      &:focus {
        outline: unset;
      }
      text-decoration: none;
      &:hover {
        background-color: #d25338;
        border-right: 3px solid #d25338;
        color: #1b2b3a;
        transition: color 0.15s ease, background-color 0.15s ease,
          border-color 0.15s ease, box-shadow 0.15s ease,
          -webkit-box-shadow 0.15s ease;
      }
      &.active {
        background: #f0f0f0;
        color: #1b2b3a;
        border-right: 3px solid #d25338;
        .icon {
          color: #d25338;
        }
      }
    }
    .sub {
      height: auto;
      display: block;
      .menu-item {
        margin-left: -22px;
      }
    }
  }
}
</style>