<template>
  <AuthLayout>
    <div class="title text-center">Create new tenant</div>
    <a-row type="flex" justify="center">
      <a-col :xs="24" :md="20" :lg="10">
        <form>
          <div class="label">Full name</div>
          <a-input placeholder="Username" size="large" />
          <div class="label">License plan</div>
          <a-select default-value="6" size="large" style="width: 100%;">
            <a-select-option value="6">
              6 months
            </a-select-option>
            <a-select-option value="12">
              12 months
            </a-select-option>
          </a-select>
          <div class="label">Description</div>
          <a-textarea allow-clear :rows="4" />
          <a-button size="large" class="btn-create">
            Create
          </a-button>
        </form>
      </a-col>
    </a-row>
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
      columns
    };
  },
  components: {
    AuthLayout
  }
};
</script>

<style lang="scss" scoped>
.btn-create {
  margin-top: 1.5rem;
}
</style>
