<template>
<!-- центральная панелька -->
  <header class="header">
    <div class="header__text">
      <p class="text__cabinet">Кабиет</p>
      <p class="text__administrator">Администратор</p>
    </div>
    <div class="header__update">
      <div class="icon"><img src="@assets/img/bell.png" alt=""></div>
    </div>
    <div class="header__user-panel">
      <div class="header__user-photo" @click="changeProfile">
        <!-- <span class="icon-apteka-photo"></span> -->
        <img src="@assets/img/user.png" alt="" class="ico-image" />
      </div>
      <div class="header__user-text">
        <div class="user__name" @click="changeProfile" title="Войти в профиль">
          {{ userName }}
        </div>
        <div class="user" @click.stop="onLogout">
          <a href="#" title="Выход из учетной записи">ivanivanov</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class LayoutHeader extends Vue {
  userName = "";
  async created() {
  }

  changeProfile() {
    this.$router.push({ name: "profile" });
    this.$emit("changeProfile");
  }
  async onLogout() {
    
  }
}
</script>

<style lang="less">
header {
  height: 74px;
  background: #1B2B3A;
  display: flex;
  color: #fff;
  border-bottom:1px solid #BA8931;
  .header__text{
    margin-top: 19px;
    margin-left: 29px;
  }
  .text__cabinet{
    font-size: 13px;
    line-height: 15,83px;
    color: #BA8931;
  }
  .text__administrator{
    font-size: 16px;
    line-height: 19,49px;
    margin-top: 5px;
  }
  .header__update {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 30px;
    padding-left: 30px;
    border-right: 1px solid #31495F;
    cursor: pointer;
    .icon {
      width: 41px;
      height: 41px;
      border-radius: 50%;
      background: #13212E;
      display: flex;
      align-items: center;
      justify-content: center;
      color:  #13212E;
    }
  }
  .header__user-panel {
    padding-right: 30px;
    padding-left: 30px;
    min-width: 195px;
    display: flex;
    align-items: center;
    .header__user-photo {
      flex: 41px 0 0;
      width: 41px;
      height: 41px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0c3030;
      border-radius: 50%;
      margin-right: 14px;
      .ico-image {
        height: 100%;
        width: 100%;
        cursor: pointer;
      }
    }
    .header__user-text {
      overflow: hidden;
      a {
        color: #BA8931;
        text-decoration: none;
      }
      .user__name {
        color: #bac6da;
        cursor: pointer;
      }
    }
  }
}
</style>