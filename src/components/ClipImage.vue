<template>
  <div class="clipImageBox">
    <div class="canvasBox" >
      <canvas ref="canvas"></canvas>
      <div
        class="mark"></div>
    </div>

    <div class="buttonBox">
      <input type="file" accept="image/*" class="file" ref="file"/>
      <button>选择图片</button>
      <button>放大</button>
      <button>缩小</button>
      <button>保存图片</button>
    </div>
  </div>
</template>

<script>
export default {
  
};

/*
 *  1. 我们需要准备一些数据：画布的大小、MARK遮罩层的大小和位置、上传图片的大小和位置、是否显示MARK...
 *  2. 上传图片：选中图片，把其绘制到画布中
 *  3. 实现图片的拖拽Touch：重新绘制图片所在的位置
 *  4. 实现如图的方法和缩小：重新绘制图片的大小
 *  5. 保存图片的时候：把遮罩层选中的部分（像素）最后生成一张新的图片
 */
</script>

<style lang="less" scoped>
.clipImageBox {
  padding: 0.2rem;
}

.clipImageBox .canvasBox {
  position: relative;
  overflow: hidden;
}

.clipImageBox .canvasBox canvas {
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  width: 7.1rem;
  height: 7.1rem;
  border: 0.02rem solid #ddd;
}

.clipImageBox .canvasBox .mark {
  box-sizing: border-box;
  position: absolute;
  z-index: 20;
  width: 70%;
  height: 70%;
  border: 0.02rem dashed lightcoral;
  background: rgba(0, 0, 0, 0.2);
}

.clipImageBox .buttonBox .file {
  display: none;
}

.clipImageBox .buttonBox {
  margin-top: 0.3rem;
}

.clipImageBox .buttonBox button {
  margin-right: 0.2rem;
  padding: 0.2rem;
  border: none;
  font-size: 0.28rem;
  background: lightblue;
  cursor: pointer;
}
</style>