<template>
    <div>
      <Parent :myList="movieList" :isList="isList"></Parent>
    </div>
</template>

<script>
import Parent from './Parent.vue'
export default {
  components: { Parent },
  name: 'Movie',
  data: function () {
    return {
      movieList: [
        { name: '百度', router: 'https://www.baidu.com/', logo: 'https://www.baidu.com/favicon.ico' },
        { name: 'B站', router: 'https://www.bilibili.com/', logo: 'https://www.bilibili.com/favicon.ico' },
        { name: 'CSDN', router: 'https://blog.csdn.net/', logo: 'https://blog.csdn.net/favicon.ico' },
        { name: 'Github', router: 'https://github.com/', logo: 'https://github.com/favicon.ico' },
        { name: '电影天堂', router: 'https://btbtt.us/', logo: 'https://btbtt.us/favicon.ico' }
      ],
      isList: false
    }
  }
}
</script>
