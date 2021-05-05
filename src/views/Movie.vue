<template>
  <div>
    <el-card>
      <div id="movies">
        <ul>
          <li v-for="Panel in defalutPanelPropList" :key="Panel.id">
            <DefaultLiPanel :defaultPanelProp="Panel"
              :divClassStyle="classStyle.divClassStyle"
              :aClassStyle="classStyle.aClassStyle"
              :imgClassStyle="classStyle.imgClassStyle"
              :infoClassStyle="classStyle.infoClassStyle"></DefaultLiPanel>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
import DefaultLiPanel from '../components/panel/DefaultLiPanel.vue'
import { PanelEntity } from '../assets/js/panel.js'
export default {
  components: { DefaultLiPanel },
  name: 'Movie',
  data: function () {
    return {
      defalutPanelPropList: [
        new PanelEntity('1001', 'https://www.xiaohx.org/', '小浣熊', 'https://www.xiaohx.org/favicon.ico', '小浣熊主要用来下载视频'),
        new PanelEntity('1002', 'https://www.66s.cc/', '6v影视', 'https://www.66s.cc/favicon.ico', '6v影视可以在线看电影、电视剧等'),
        new PanelEntity('1003', 'https://www.bilibili.com/', 'B站', 'https://www.bilibili.com/favicon.ico', 'B站是多元化的强大视频网站'),
        new PanelEntity('1004', 'https://www.dytt89.com/', '电影天堂', 'https://www.dytt89.com/favicon.ico', '电影天堂主要用于下载视频资源')
      ],
      classStyle: {
        divClassStyle: 'default-divClassStyle',
        aClassStyle: 'default-aClassStyle',
        imgClassStyle: 'default-imgClassStyle',
        infoClassStyle: 'default-infoClassStyle'
      }
    }
  }
}
</script>

<style scoped>
#movies ul li {
  list-style-type: none;
  float: left;
}
#movies ul li div:hover {
  background-color: floralwhite;
  box-shadow: 6px 6px 5px #d6d0d0;
}
</style>
