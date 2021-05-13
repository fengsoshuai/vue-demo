<template>
    <div>
      <el-card>
          <div id="novels">
            <ul>
              <li v-for="novel in novelPanelPropList" :key="novel.id">
                <NovelPanel :novelPanelProp="novel"></NovelPanel>
              </li>
            </ul>
          </div>
      </el-card>
    </div>
</template>

<script>
import NovelPanel from '../components/panel/NovelPanel.vue'
import { NovelEntity } from '../assets/js/panel.js'
export default {
  name: 'Novel',
  components: { NovelPanel },
  data: function () {
    return {
      novelPanelPropList: [
        new NovelEntity('1001', 'http://book.sbkk8.com/xiandai/jinyong/shendiaoxialv/', '神雕侠侣', '/img/novels/sdxl.jpg', '神雕侠侣是金庸写的一部讲述了一代传奇大侠杨过的爱恨情仇', '/txt/神雕侠侣.txt')
      ]
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>
