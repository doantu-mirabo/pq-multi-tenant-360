<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header
      class="header"
      style="display: flex; align-items: center; justify-content: space-between;"
    >
      <div>
        <div class="logo" />
      </div>
      <a-dropdown>
        <a-menu slot="overlay" class="ct-dropdown">
          <a-menu-item key="1">
            <span class="username">DoanTu</span>
          </a-menu-item>
          <a-menu-item key="2">サビース管理</a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3" @click="handleLogout">ログアウト</a-menu-item>
        </a-menu>
        <a-icon
          type="user"
          style="color: #fff; font-size: 24px; cursor: pointer;"
        />
      </a-dropdown>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
        width="200"
        style="background: #fff"
      >
        <a-menu
          theme="dark"
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="admin">
            <span slot="title">
              <a-icon type="team" />
              サービス管理
            </span>
            <a-menu-item key="admin-list">
              <router-link to="/admin/list">サービス管理者一覧</router-link>
            </a-menu-item>
            <a-menu-item key="admin-create">
              <router-link to="/admin/create">サービス管理者作成</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="tenant">
            <span slot="title">
              <a-icon type="customer-service" />
              テナント管理
            </span>
            <a-menu-item key="tenant-list">
              <router-link to="/tenant/list">テナント一覧</router-link>
            </a-menu-item>
            <a-menu-item key="tenant-create">
              <router-link to="/tenant/create">テナント作成</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="contact">
            <span slot="title">
              <a-icon type="file-text" />
              契約プラン管理
            </span>
            <a-menu-item key="contact-list">
              <router-link to="/contact/list">契約プラン一覧</router-link>
            </a-menu-item>
            <a-menu-item key="contact-create">
              <router-link to="/contact/create">契約プラン作成</router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0;">
          <a-breadcrumb-item v-for="(b, i) in listBreadcrumb" :key="i">
            {{ capitalizeFirstLetter(b) }}
          </a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: 'calc(100vh - 64px - 21px - 69px - 48px)',
            textAlign: 'center'
          }"
        >
          <slot />
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          Mirabo Design ©2019 Created by Mirabo
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      listBreadcrumb: []
    };
  },
  created() {
    let listBreadcrumbRoute = this.$route.path.split("/");
    listBreadcrumbRoute = [...new Set(listBreadcrumbRoute)];
    console.log({ listBreadcrumbRoute });
    listBreadcrumbRoute.forEach(b => {
      if (b) {
        this.listBreadcrumb.push(b);
      }
    });
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    handleLogout() {
      this.$router.push("/sign-in");
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
#components-layout-demo-top-side-2 {
  .logo {
    width: 122px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
}
.ct-dropdown {
  padding: 6px 12px;
  .username {
    color: $black;
    text-align: center;
    font-size: 1.25rem;
  }
}
</style>
