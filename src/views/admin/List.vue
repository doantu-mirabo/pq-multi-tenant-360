<template>
  <AuthLayout>
    <div class="title">List admin</div>
    <a-table :columns="columns" :data-source="data" size="small" />
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
