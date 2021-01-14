<template>
  <AuthLayout>
    <div class="text-left">
      <div class="title">
        Tenant
        <a-icon
          @click="() => (modalEditVisible = true)"
          type="edit"
          style="color: #3182CE; font-size: 1.5rem; cursor: pointer;"
        />
      </div>
      <div>ID: <span class="text-bold">2</span></div>
      <div>Name: <span class="text-bold">Tenant</span></div>
      <div>Contract Plan: <span class="text-bold">6 months</span></div>
      <br />
      <a-tabs default-active-key="1" style="font-size: 16px;">
        <a-tab-pane key="1" tab="Rooms">
          <div class="heading">List rooms</div>
          <a-table :columns="columns" :data-source="data" size="small" />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Owners" force-render>
          <div class="heading">List owners</div>
          <div style="text-align: right;">
            <router-link to="/admin/create">
              <a-button type="primary" style="margin-bottom: 1.5rem;">
                <a-icon type="plus" />Add new onwer
              </a-button>
            </router-link>
          </div>
          <a-table :columns="columns" :data-source="data" size="small" />
        </a-tab-pane>
      </a-tabs>
    </div>
    <a-modal
      v-model="modalEditVisible"
      title="Edit tenant"
      ok-text="Confirm"
      cancel-text="Cancel"
      @ok="() => (modalEditVisible = false)"
    >
      <div class="label">Name:</div>
      <a-input placeholder="Name" size="large" />
      <div class="label">Contract plan:</div>
      <a-select default-value="6" size="large" style="width: 100%;">
        <a-select-option value="6">
          6 months
        </a-select-option>
        <a-select-option value="12">
          12 months
        </a-select-option>
      </a-select>
      <br />
      <br />
      <br />
    </a-modal>
  </AuthLayout>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";

const columns = [
  {
    title: "Account",
    dataIndex: "account"
  },
  {
    title: "Full name",
    dataIndex: "fullname"
  },
  {
    title: "Email",
    dataIndex: "email"
  },
  {
    title: "Role",
    dataIndex: "role"
  },
  {
    title: "Status",
    dataIndex: "status"
  },
  {
    title: "Action",
    dataIndex: ""
  }
];
const data = [
  {
    key: "1",
    account: "doantu",
    fullname: "John Brown",
    role: "admin",
    email: "admin1@gmail.com",
    status: "Active"
  },
  {
    key: "2",
    account: "doantu",
    fullname: "John Brown",
    role: "admin",
    email: "admin1@gmail.com",
    status: "Active"
  },
  {
    key: "3",
    account: "doantu",
    fullname: "John Brown",
    role: "admin",
    email: "admin1@gmail.com",
    status: "Active"
  }
];
export default {
  data() {
    return {
      data,
      columns,
      modalEditVisible: false
    };
  },
  components: {
    AuthLayout
  }
};
</script>

<style lang="scss" scoped>
.heading {
  font-size: 18px;
  color: $black;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  font-weight: 600;
}
</style>
