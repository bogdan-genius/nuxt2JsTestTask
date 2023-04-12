<template>
  <div class="button">
    <button @click="$emit('click')">{{text}}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppButton",
  props: {
    text: {
      type: String,
      default: "Button"
    }
  },
  emits: {
    click: null
  }
})
</script>

<style scoped>
.button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.button button{
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 30px;
  font-size: 20px;
  cursor: pointer;
}
button:hover{
  background-color: #f5f5f5;
}
</style>