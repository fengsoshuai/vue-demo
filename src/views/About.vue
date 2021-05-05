<template>
  <div class="about">
      <!-- 二维码 -->
      <div class="qrcode-class">
        <canvas id="canvas"></canvas>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
// 使用二维码插件
import QRCode from 'qrcode'
Vue.use(QRCode)

export default {
  name: 'about',
  mounted () {
    this.showqrcode()
  },
  methods: {
    // 展示二维码
    showqrcode () {
      const canvas = document.getElementById('canvas')
      QRCode.toCanvas(canvas, 'https://blog.csdn.net/FBB360JAVA', function (error) {
        if (error) {
          console.log(error)
        } else {
          // 成功
          // console.log('success！')
        }
      })
    }
  }
}
</script>
