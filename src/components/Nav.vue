<template>
  <div id='nav'>
      <ul>
        <li v-for="(lab, index) in labels" :key="index">
          <img :src="lab.logo">
          <a :href="lab.router">{{lab.name}}</a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: function () {
    return {
      labels: [
        { name: '百度', router: 'https://www.baidu.com/', logo: 'https://www.baidu.com/favicon.ico' },
        { name: 'B站', router: 'https://www.bilibili.com/', logo: 'https://www.bilibili.com/favicon.ico' },
        { name: 'CSDN', router: 'https://blog.csdn.net/', logo: 'https://blog.csdn.net/favicon.ico' },
        { name: 'Github', router: 'https://github.com/', logo: 'https://github.com/favicon.ico' },
        { name: '电影天堂', router: 'https://btbtt.us/', logo: 'https://btbtt.us/favicon.ico' }
      ]
    }
  },
  props: {
  }
}
</script>

<style scoped>
#nav ul li {
  list-style: none;
  background: #ccc;
}
#nav ul li a {
  width: 100%;
}
</style>
