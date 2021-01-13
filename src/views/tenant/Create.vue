<template>
  <AuthLayout>
    <div class="title text-center">Create new tenant</div>
    <a-row type="flex" justify="center">
      <a-col :xs="24" :md="20" :lg="10">
        <form>
          <div class="label">Username</div>
          <a-input placeholder="Username" size="large" />
          <div class="label">Full name</div>
          <a-input placeholder="Full name" size="large" />
          <div class="label">Email</div>
          <a-input placeholder="Email" size="large" />
          <div class="label">Password</div>
          <a-input-password placeholder="Password" size="large" />
          <div class="label">Re-password</div>
          <a-input-password placeholder="Re-password" size="large" />
          <div class="label">Memo</div>
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
