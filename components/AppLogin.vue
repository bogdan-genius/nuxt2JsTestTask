<template>
  <div class="container">
    <div class="login">
      <AppLogo />
      <AppInput placeholder="Email" type="email" v-model="email"  @update="email = $event" />
      <AppInput placeholder="Password" type="password" v-model="password" @update="password = $event" />
      <AppButton text="Login" @click="login"></AppButton>
      <div class="error-block" v-if="error">
        Something went wrong
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppLogin",
  data() {
      return {
        email: "",
        password: "",
        error: false,
    }
  },
  methods:{
    async login(){
      const result: boolean = await this.$store.dispatch('user/login', {email: this.email, password: this.password})
      if(!result) {
        this.error = true;
        return
      };
      await this.$router.push('/home');
    }
  }
});
</script>
<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  padding: 35px 40px 50px;
  background: #fff;
}
.login{
  width: 40%;
  border: 1px solid rgba(0,0,0,.11);
  box-shadow: 0 0 12px rgba(0,0,0,.25);
  border-radius: 15px;
}
.error-block{
  color: red;
  text-align: center;
  margin: 10px 0;
}
</style>