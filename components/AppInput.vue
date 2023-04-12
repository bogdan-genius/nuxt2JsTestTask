<template>
  <div class="input">
    <input :type="type" :placeholder="placeholder" :required="required" v-bind="$attrs"
           ref="input" @input="$emit('update', $event.target.value)"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppInput",
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update"],
})
</script>

<style scoped>
.input{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.input input{
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 30px;
  font-size: 20px;
}
</style>