<template>
  <AuthLayout>
    <div class="header-actions">
      <div class="title">List license</div>
      <div class="title header-actions" style="margin-left: 2rem;">
        <a-button type="primary" @click="openModal(typeModalName.create, {})">
          Create new
        </a-button>
      </div>
    </div>
    <a-table
      :rowKey="(_, index) => index"
      :columns="columns"
      :data-source="listLicenses"
      :loading="loadingListLicenses"
      :pagination="pagination"
      @change="onTableChange"
      size="small"
    >
      <template slot="is_available" slot-scope="text, record">
        <span
          :style="
            `color: ${
              getTextAvailable(record.expireTime, record.is_available)[1]
            }`
          "
        >
          {{ getTextAvailable(record.expireTime, record.is_available)[0] }}
        </span>
      </template>
      <template slot="disable" slot-scope="text">
        <span>{{ text ? "True" : "False" }}</span>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-button
          type="link"
          @click="openModal(typeModalName.edit, record)"
          :disabled="!record.is_available"
        >
          Edit
        </a-button>
      </template>
    </a-table>
    <ModalLicense
      :loading="loading"
      :visible="visibleModal"
      :license="licensePropsModal"
      :title="typeModal === 'edit' ? 'Edit license' : 'Create license'"
      @handleOk="handleOk"
      @handleCancel="handleCancel"
    />
  </AuthLayout>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";
import ModalLicense from "@/components/ModalLicense";

const typeModalName = {
  edit: "EDIT",
  create: "CREATE"
};
const columns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Valid time",
    dataIndex: "valid_time"
  },
  {
    title: "Max created user",
    dataIndex: "max_created_user"
  },
  {
    title: "Max concurrent user",
    dataIndex: "max_concurrent_user"
  },
  {
    title: "Max created room",
    dataIndex: "max_created_room"
  },
  {
    title: "Max concurrent room",
    dataIndex: "max_concurrent_room"
  },
  {
    title: "Max capacity (GB)",
    dataIndex: "max_storage_capacity"
  },
  {
    title: "Available",
    dataIndex: "is_available",
    scopedSlots: { customRender: "is_available" }
  },
  {
    title: "Expired time",
    dataIndex: "expireTime"
  },
  {
    title: "Disable",
    dataIndex: "disable",
    scopedSlots: { customRender: "disable" }
  },
  {
    title: "operation",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" }
  }
];
export default {
  data() {
    return {
      listLicenses: null,
      loadingListLicenses: false,
      columns,
      visibleModal: false, // modal trigger
      loading: false, // modal action loading,
      typeModal: "", // 'edit' -> edit modal, 'create' -> create modal
      licensePropsModal: {},
      pagination: {
        current: 1,
        defaultCurrent: 1,
        total: 0,
        pageSize: 20
      },
      typeModalName
    };
  },
  components: {
    AuthLayout,
    ModalLicense
  },
  async created() {
    await this.getListLicense();
  },
  methods: {
    async onTableChange(pagination) {
      this.pagination.current = pagination.current;
      await this.getListLicense(pagination.current);
    },
    openModal(type, record) {
      this.visibleModal = true;
      this.typeModal = type;
      this.licensePropsModal = record;
    },
    async handleOk(params) {
      this.loading = true;
      if (this.typeModal === typeModalName.edit) {
        await this.handleUpdateLicense(params);
      } else if (this.typeModal === typeModalName.create) {
        await this.handleCreateLicense(params);
      }
      this.loading = false;
      this.visibleModal = false;
      await this.getListLicense();
    },
    handleCancel() {
      this.visibleModal = false;
    },
    getTextAvailable(expiredTime, available) {
      if (available) {
        return ["Available", "#38A169"];
      }
      const isExpired = new Date(expiredTime) > new Date();
      if (!available && isExpired) {
        return ["Used", "#D69E2E"];
      } else {
        return ["Expired", "#E53E3E"];
      }
    },
    async getListLicense(page) {
      this.loadingListLicenses = true;
      try {
        const listLicensesResponse = await this.$http.get(
          `/licenses?page=${page || 1}`
        );
        this.listLicenses = listLicensesResponse?.data?.licenses;
        this.pagination.pageSize = listLicensesResponse?.data?.perPage || 20;
        this.pagination.total = listLicensesResponse?.data?.total || 20;
      } catch (e) {
        this.$message.error(
          e?.response?.data?.error?.message || "Failed fetching data"
        );
      }
      this.loadingListLicenses = false;
    },
    async handleUpdateLicense(params) {
      if (!this.licensePropsModal?.id) {
        return;
      }
      try {
        await this.$http.patch(`/license/${this.licensePropsModal.id}`, params);
        this.$message.success("Updated license successfully!");
      } catch (e) {
        this.$message.error(
          e?.response?.data?.error?.message || "Updated license failed!"
        );
      }
    },
    async handleCreateLicense(params) {
      try {
        await this.$http.post("/license", params);
        this.$message.success("Create new license successfully!");
      } catch (e) {
        this.$message.error(
          e?.response?.data?.error?.message || "Create new license failed!"
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-actions {
  display: flex;
  align-items: center;
}
</style>
