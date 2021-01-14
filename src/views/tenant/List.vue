<template>
  <AuthLayout>
    <div class="title">List tenant</div>
    <a-table :columns="columns" :data-source="data" size="small">
      <template slot="actions" slot-scope="_, record">
        <router-link :to="`/tenant/${record.id}`">Detail</router-link>
        <a-popconfirm title="Sure to delete?">
          <a href="javascript:;" style="color: #E53E3E; margin-left: 0.5rem">
            Delete
          </a>
        </a-popconfirm>
      </template>
    </a-table>
  </AuthLayout>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";

const columns = [
  {
    title: "ID",
    dataIndex: "id"
  },
  {
    title: "Tenant name",
    dataIndex: "name"
  },
  {
    title: "Max rooms",
    dataIndex: "maxRooms"
  },
  {
    title: "Max users",
    dataIndex: "maxUsers"
  },
  {
    title: "License",
    dataIndex: "license"
  },
  {
    title: "Actions",
    dataIndex: "actions",
    scopedSlots: { customRender: "actions" }
  }
];
const data = [
  {
    key: "1",
    id: "1",
    name: "tenant1",
    maxRooms: "2",
    maxUsers: "10",
    license: "license 1"
  },
  {
    key: "2",
    id: "2",
    name: "tenant2",
    maxRooms: "2",
    maxUsers: "10",
    license: "license 2"
  },
  {
    key: "3",
    id: "3",
    name: "tenant3",
    maxRooms: "2",
    maxUsers: "10",
    license: "license 3"
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
