<template>
  <div class="wrapper">
    <el-menu class="aside" mode="vertical" background-color="#3508ee" text-color="#f0f2f7">
      <template v-for="item in menu">
        <el-menu-item v-if="!item.children" :key="item.path">
          {{ item.meta.title }}
        </el-menu-item>

        <div class="route-item" v-if="item.children && item.children.length > 0 && item.canRoute">
          <el-menu-item>
            {{ item.meta.title }}
          </el-menu-item>
          <div class="icon">
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>

        <el-submenu v-if="item.children && item.children.length > 0 && !item.canRoute" :index="item.path">
          <template #title>
            {{ item.meta.title }}
          </template>
          <template v-for="child in item.children">
            <el-menu-item :key="child.path">
              {{ child.meta.title }}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
    <main>
      这是主体
    </main>
  </div>
</template>

<script>
import menu from './components/menu'

export default {
  name: "App",
  data() {
    return {
      msg: "im Apaaap",
      menu,
    };
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}

.aside {
  width: 200px;
}

main {
  flex: 1;
}

.route-item {
  display: flex;
  transition: border-color .15s,background-color .15s,color .15s;
}
.route-item .el-menu-item {
  width: 80%;
}
.icon {
  font-size: 12px;
  color: #909399;
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 7px;
}
.icon:hover {
  background: rgb(42, 6, 190);
}
.el-menu-item:hover + .icon {
  background: rgb(42, 6, 190);
}
</style>
