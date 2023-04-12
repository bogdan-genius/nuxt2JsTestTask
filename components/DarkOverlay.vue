<template>
  <transition name="fade">
    <div
        v-if="isShow"
        :class="`dark-overlay ${shown ? 'shown' : ''}`"
    />
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import {defineComponent} from "vue";

export default defineComponent({
  name: "DarkOverlay",
  props: {
    shown: {
      type: Boolean,
      default: false
    },
    isInsert: { type: [Boolean, null], default: null }
  },

  data() {
    return {
      isShow: false,
      insert: this.isInsert !== null ? this.isInsert : false,
      scrollTop: 0
    };
  },
  watch: {
    shown(status) {
      this.isShow = status;
    }
  },

  methods: {
  }
});
</script>

<style>
.overlay-overflow {
  transform: translate3d(0, 0, 0);
  overflow: hidden;
}
.dark-overlay {
  background-color: rgba(#000, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  min-height: 100%;
  border-radius: inherit;
  z-index: 100;

  transform: translate(-50%, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
