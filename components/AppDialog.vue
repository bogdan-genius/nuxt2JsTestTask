<template>
  <div>
  <DarkOverlay :key="key" :shown="shown" @click="hide" />

  <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="onEnter"
      @leave="onLeave"
  >
    <div v-if="shown" ref="wrap" class="modal-wrapper" @mousedown="hide">
      <div
          v-bind="$attrs"
          ref="modal"
          class="modal"
          @mouseup.stop
          @mousedown.stop
      >
        <slot />

      </div>
    </div>
  </transition>
  </div>
</template>

<script lang="ts">
import gsap from "gsap";
import { mapMutations } from "vuex";
import {defineComponent} from "vue";

export default defineComponent({
  name: "Dialog",
  inheritAttrs: false,
  props: {
    title: { type: String, required: false },
    id: { type: String, default: "" },
    opened: { type: Boolean, default: false },
    size: {
      type: String,
      default: "lg",
    } as any
  },
  emits: ["hide", "back"],

  data() {
    return {
      shown: this.opened,
      key: Math.random()
    };
  },

  watch: {
    opened(status) {
      this.shown = status;
      // this.toggleOverlay(status);
    }
  },

  methods: {
    hide() {
      this.shown = false;
      this.$emit("hide");
    },

    beforeEnter(wrapper) {
      const modal = wrapper.children[0];
      gsap.set(modal, {
        y: 100,
        scale: 1.2,
        autoAlpha: 0
      });
    },

    onEnter(wrapper, done) {
      gsap.to(wrapper, {
        autoAlpha: 1,
        duration: 0.4
      });

      gsap.to(this.$refs.modal, {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 0.4,
        onComplete: done
      });
    },
    onLeave(wrapper, done) {
      const modal = wrapper.children[0];
      gsap.to(modal, {
        duration: 0.4,
        y: 100,
        scale: 1.2,
        autoAlpha: 0
      });

      gsap.to(wrapper, {
        alpha: 0,
        duration: 0.4,
        easing: "none",
        delay: 0.1,
        onComplete: done
      });
    },
  },
});
</script>

<style scoped>
.modal-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.modal{
  position: relative;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  pointer-events: auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>