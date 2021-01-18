<template>
  <a-modal
    :dialog-style="{ top: '60px' }"
    :title="title"
    :visible="visible"
    :confirm-loading="loading"
    @ok="handleOk"
    @cancel="handleCancel"
    okText="Confirm"
  >
    <div class="label">License name</div>
    <a-input
      required
      v-model="name"
      :value="name"
      placeholder="License name"
      size="large"
    />
    <a-row type="flex" justify="center" :gutter="[24, 0]">
      <a-col :xs="24" :md="12">
        <div class="label">License's valid time (by month)</div>
        <a-input
          required
          v-model="valid_time"
          :value="valid_time"
          type="number"
          placeholder="License's valid time (by month)"
          size="large"
        />
      </a-col>
      <a-col :xs="24" :md="12">
        <div class="label">Max created users allowed</div>
        <a-input
          required
          v-model="max_created_user"
          :value="max_created_user"
          type="number"
          placeholder="Max created users allowed"
          size="large"
        />
      </a-col>
      <a-col :xs="24" :md="12">
        <div class="label">Max concurrent users allowed</div>
        <a-input
          required
          v-model="max_concurrent_user"
          :value="max_concurrent_user"
          type="number"
          placeholder="Max concurrent users allowed"
          size="large"
        />
      </a-col>
      <a-col :xs="24" :md="12">
        <div class="label">Max created rooms allowed</div>
        <a-input
          required
          v-model="max_created_room"
          :value="max_created_room"
          type="number"
          placeholder="Max created rooms allowed"
          size="large"
        />
      </a-col>
      <a-col :xs="24" :md="12">
        <div class="label">Max concurrent rooms allowed</div>
        <a-input
          required
          v-model="max_concurrent_room"
          :value="max_concurrent_room"
          type="number"
          placeholder="Max concurrent rooms allowed"
          size="large"
        />
      </a-col>
      <a-col :xs="24" :md="12">
        <div class="label">Max storage capacity allowed</div>
        <a-input
          required
          v-model="max_storage_capacity"
          :value="max_storage_capacity"
          type="number"
          step="0.01"
          placeholder="Max storage capacity allowed"
          size="large"
        />
      </a-col>
    </a-row>
  </a-modal>
</template>

<script>
export default {
  data() {
    return {
      name: this.license?.name || "",
      valid_time: this.license?.valid_time || 0,
      max_created_user: this.license?.max_created_user || 0,
      max_concurrent_user: this.license?.max_concurrent_user || 0,
      max_created_room: this.license?.max_created_room || 0,
      max_concurrent_room: this.license?.max_concurrent_room || 0,
      max_storage_capacity: this.license?.max_storage_capacity || 0
    };
  },
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    visible: {
      type: Boolean,
      required: true
    },
    license: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  watch: {
    license: {
      immediate: true,
      handler(val) {
        (this.name = val?.name || ""),
          (this.valid_time = val?.valid_time || 0),
          (this.max_created_user = val?.max_created_user || 0),
          (this.max_concurrent_user = val?.max_concurrent_user || 0),
          (this.max_created_room = val?.max_created_room || 0),
          (this.max_concurrent_room = val?.max_concurrent_room || 0),
          (this.max_storage_capacity = val?.max_storage_capacity || 0);
      }
    }
  },
  methods: {
    handleOk() {
      const params = {
        name: this.name,
        valid_time: this.valid_time,
        max_created_user: this.max_created_user,
        max_concurrent_user: this.max_concurrent_user,
        max_created_room: this.max_created_room,
        max_concurrent_room: this.max_concurrent_room,
        max_storage_capacity: this.max_storage_capacity
      };
      this.$emit("handleOk", params);
    },
    handleCancel() {
      this.$emit("handleCancel");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-create {
  margin-top: 1.5rem;
}
.label {
  margin-top: 14px;
  margin-bottom: 6px;
  font-size: 0.8rem;
}
</style>
