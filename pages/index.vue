<template>
  <div class="container">
    <AppHeader />
    <div class="welcome">
      <span class="welcome-title">Welcome</span>
      <span class="welcome-desc">Login to see your profile</span>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>
<style scoped>
.container{
  width: 100%;
  height: 100%;
}
.welcome{
  font-size: 30px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #000;
  margin: 0 auto;
  text-align: center;
}
.welcome-title{
  display: block;
  margin-bottom: 10px;
}
.welcome-desc{
  display: block;
  font-size: 20px;
  font-weight: 400;
}
</style>