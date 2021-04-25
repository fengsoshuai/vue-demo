<template>
    <!-- 遍历列表模板 -->
    <div>
      <el-card>
      <ul v-if="isList">
        <li v-for="content in contents" :key="content.id" :class="ulStyle">
          <a :href="content.router">{{content.name}}</a>
          <img :src="content.logo" :class="imgUlStyle">
        </li>
      </ul>
      <ul v-else-if="!isList" :class="li-style">
        <li v-for="content in contents" :key="content.id" :class="menuStyle">
          {{content.name}}
        </li>
      </ul>
      </el-card>
    </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      required: true
    },
    isList: {
      type: Boolean,
      required: true
    }
  },
  data: function () {
    return {
      ulStyle: 'defalut-li',
      menuStyle: 'menu-li'
    }
  }
}
</script>

<style scoped>
.defalut-li {
  list-style: none;
  background: #ccc;
  float: left;
  width: 18%;
  margin: 10px 10px;
  height: 200px;
  padding: 5px 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 4px;
}

.menu-li {
  color: #fff;
  list-style: none;
  margin: 10px 10px;
  background: rgb(87, 140, 201);
  height: 100px;
  width: 90%;
  padding: 5px 5px;
  box-shadow: 0 2px 4px rgba(75, 119, 177, 0.12), 0 0 6px rgba(102, 137, 202, 0.04);
  border-radius: 6px;
}
.imgUlStyle {
  width: 40px;
}
</style>
