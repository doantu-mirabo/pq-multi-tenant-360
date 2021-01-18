<template>
  <div class="container">
    <a-row type="flex" justify="center" :gutter="30">
      <a-col :xs="24" :sm="16" :md="12" :lg="8">
        <form @submit="handleSignIn">
          <div class="box">
            <h1>Sign in</h1>
            <div class="label">Username</div>
            <a-input
              v-model="username"
              value="username"
              placeholder="Username"
              size="large"
            />
            <div class="label">Password</div>
            <a-input-password
              v-model="password"
              value="password"
              placeholder="Password"
              size="large"
            />
            <a-button
              htmlType="submit"
              class="btn-sign-in"
              size="large"
              :loading="loading"
            >
              Sign in
            </a-button>
          </div>
        </form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { setToken } from "@/utils/cookies";

export default {
  data() {
    return {
      loading: false,
      password: "",
      username: ""
    };
  },
  methods: {
    async handleSignIn(e) {
      e.preventDefault();
      this.loading = true;
      if (!this.username || !this.password) {
        this.$message.error("Username and password are required!");
      }
      try {
        const params = {
          account: this.username,
          password: this.password
        };
        const response = await this.$http.post("/login", params);
        if (response?.data?.accessToken) {
          setToken(response.data.accessToken);
          this.$router.push("/");
        }
      } catch (e) {
        this.$message.error(
          e?.response?.data?.error?.message || "Login failed!"
        );
      }
      this.loading = false;
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
