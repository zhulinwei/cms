<template>
  <el-row id="l-admin-sidebar" class="hidden-xs-only">
    <div class="l-admin-sidebar-header">
      <img :src="admin.image">
      <p class="title">{{ admin.name }} CMS</p>
      <p class="content">内容管理系统 </p>
    </div>
    <el-menu class="l-admin-sidebar-body" :unique-opened="true" @open="handleOpen" @close="handleClose">
      <div v-for="(menu, menuIndex) of menus" :key="menu.name">
        <!-- 一级菜单  -->
        <el-menu-item v-if="!menu.subMenus || menu.subMenus.length <1" :index="getMenuIndex(menuIndex)">
          <nuxt-link :to= "menu.url">
            <i class="fa" :class="menu.icon" aria-hidden="true"></i>
            <span>{{ menu.name }}</span>
          </nuxt-link>
        </el-menu-item>
        <!-- 二级菜单 -->
        <el-submenu v-else :index="getMenuIndex(menuIndex)">
          <template slot="title">
            <i class="fa" :class="menu.icon" aria-hidden="true"></i>
            <span>{{ menu.name }}</span>
          </template>
          <div v-for="(subMenu, subMenuIndex) of menu.subMenus" :key="subMenuIndex">
            <el-menu-item :index="getMenuIndex(menuIndex, subMenuIndex)">
              <nuxt-link :to= "subMenu.url">
                <i class="fa" :class="subMenu.icon" aria-hidden="true"></i>
                <span>{{ subMenu.name }}</span>
              </nuxt-link>
            </el-menu-item>
          </div>
        </el-submenu>
      </div>
    </el-menu>
  </el-row>
</template>
<script>
  import axios from 'axios';

  export default {
    created() {
      this.query(); 
    },

    data() {
      const admin = {
        "name": "Level.Z",
        "image": "http://image.51linwei.top/5b271e361f065f167e8fef8c"
      };
      let menus = [];
      return { admin, menus };
    },
    methods: {
      async query() {
        const menus = await axios.get('/bg/settings/menus/all');
        this.menus = menus.data;
      },
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      },
      getMenuIndex(menuIndex, subMenuIndex) {
        if (!subMenuIndex) return `${menuIndex}`;
        return `${menuIndex}-${subMenuIndex}`;
      }
    }
  }
</script>

<style>
  #l-admin-sidebar {
    /* position: fixed; */
    /* width: 20%; */
    min-width: 200px;
    /** height+position能让侧边栏的高度撑满这个屏幕 **/
    /* height: 100%; */
    min-height: 1000px;
    color: #fff;
    background-color: #4C3B2F;
    border-right: 0;
    z-index: 3000;
  }

  #l-admin-side.hidden-xs-only-row {
    width: 0px;
  }

  .l-admin-sidebar-header {
    color: #fff;
    height: 140px;
    vertical-align: middle;
    /* background-color: #4C3B2; */
    margin-bottom: 10px;
  }

  .l-admin-sidebar-header img {
    width: 60px;
    height: 60px;
    margin: 25px 0 10px 30px;
    border-radius: 30px;
  }

  .l-admin-sidebar-header .title,
  .l-admin-sidebar-header .content {
    padding: 5px 30px;
    font-size: 12px;
  }

  .l-admin-sidebar-body {
    border-right: 0;
  }

  .l-admin-sidebar-body .el-menu-item,
  .l-admin-sidebar-body .el-submenu__title {
    color: #fff;
    background-color: #4C3B2F;
  }

  .l-admin-sidebar-body .el-menu-item a {
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
  }

  .l-admin-sidebar-body .el-menu-item:hover {
    background-color: #37281E;
  }

  .l-admin-sidebar-body .el-menu-item:hover span {
    color: #F1AC59;
  }

  .l-admin-sidebar-body .el-menu-item.is-active {
    background-color: #37281E;
    color: #F1AC59;
  }

  .l-admin-sidebar-body i,
  .l-admin-sidebar-body .el-menu-item.is-active i {
    color: #fff;
    padding: 0 8px;
    font-size: 16px;
  }
</style>
