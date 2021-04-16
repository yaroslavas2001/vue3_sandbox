<template>
  <div class="sidebar" :class="{ minimized: minimized }">
    <div class="logo">
      <div @click="toggleMinimize">
        <img alt="" src="@assets/img/logo.svg" />
      </div>
      <div @click="goHome" class="log-text">поиск лекарств в Приднестровье</div>
      <div class="logo-btn" @click.stop="toggleMinimize">
        <img src="@assets/img/arrow-left.svg" alt="" srcset="" />
      </div>
    </div>
    <nav>
      <router-link
        class="menu-item"
        :exact-active-class="'active'"
        :to="{ name: 'catalog' }"
      >
        <i class="icon icon-apteka-clipboard"></i>Каталог товаров</router-link
      >
      <!-- <router-link
        class="menu-item"
        :exact-active-class="'active'"
        :to="{ name: 'change-password' }"
      >
        <i class="icon icon-key"></i> Сменить пароль
      </router-link> -->
    </nav>
    <!-- discount-cards
   slides
   articles
     promotions
       -->
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
  background: #23a4a2;
  max-width: 315px;
  width: 100%;

  transition: all 0.8s;
  .logo {
    height: 74px;
    background: #0f4d4c;
    border-right: 1px solid #176363;
    display: flex;
    align-items: center;
    padding-left: 10px;

    cursor: pointer;
    .log-text {
      color: #fff;
      min-width: 229px;
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
      color: #fff;
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
        background-color: #1c716f;
        border-right: 3px solid white;
        transition: color 0.15s ease, background-color 0.15s ease,
          border-color 0.15s ease, box-shadow 0.15s ease,
          -webkit-box-shadow 0.15s ease;
      }
      &.active {
        background: #1c716f;
        border-right: 3px solid white;
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