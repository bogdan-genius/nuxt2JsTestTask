<template>
  <div class="header">
    <div class="header-block">
      <div class="header-block__logo">
        <AppLogo />
      </div>
      <a class="header-block__item" @click="onLogin">Login</a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppHeader",
  methods: {
    onLogin(){
      this.$router.push("/login");
    }
  }
});

</script>
<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

}
.header-block {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}
.header-block__item{
  cursor: pointer;
}
</style>