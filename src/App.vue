<template>
  <div id="app">
    <clip-image @saveImage="saveImage" v-if="!isSave"></clip-image>
    <div class="resultBox" @click="change" v-else>
      <img :src="data" alt />
    </div>
  </div>
</template>

<script>
/* IMPORT CSS */
import "./assets/reset.min.css";
import "./assets/basic.less";

/* IMPORT COMPONENT */
import ClipImage from "./components/ClipImage.vue";
export default {
  data() {
    return {
      isSave: false,
      data: ""
    };
  },
  components: {
    ClipImage
  },
  methods: {
    saveImage(imageData) {
      console.log('imageData', imageData);
      this.isSave = true;
      this.data = imageData;
    },
    change() {
      this.isSave = false;
    }
  }
};
</script>

<style lang="less">
.resultBox {
  padding: 0.2rem;
}

.resultBox img {
  display: block;
  box-sizing: border-box;
  width: 7.1rem;
  height: 7.1rem;
  border: 0.02rem solid #ddd;
}
</style>