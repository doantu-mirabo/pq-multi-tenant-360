<template>
  <div class="container">
    <a-row type="flex" justify="center" :gutter="30">
      <a-col :xs="24" :sm="16" :md="12" :lg="8">
        <div class="box">
          <h1>Sign in</h1>
          <div class="label">Tenant</div>
          <a-input placeholder="Tenant" size="large" />
          <div class="label">ID</div>
          <a-input placeholder="ID" size="large" />
          <div class="label">Password</div>
          <a-input-password placeholder="Password" size="large" />
          <a-button class="btn-sign-in" size="large" @click="handleSignIn">
            Sign in
          </a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleSignIn() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 120px 0 80px;
  .box {
    text-align: center;
    border-radius: 4px;
    padding: 32px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 0px 6px 2px rgba(0, 0, 0, 0.06);
    .btn-sign-in {
      margin-top: 2rem;
    }
  }
}
</style>
