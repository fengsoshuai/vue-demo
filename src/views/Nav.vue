<template>
  <div id='nav'>
      <!--面包屑导航-->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>系统工具类</el-breadcrumb-item>
        <el-breadcrumb-item>常用网址</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card>
  <div>
       <ul>
        <li v-for="(site, index) in sites.data" :key="index">
          <a :href="site.router" target="_blank"><img :src="site.logo"><br>
          {{site.siteName}}</a>
          <div class="info-class">网站描述：{{site.info}}</div>
        </li>

        <li class="add-button" style="text-align:center">
          <el-button type="info" @click="dialogFormVisible = true">增加网站</el-button>
        </li>
      </ul>
  </div>

      </el-card>
      <!-- 增加网址的对话框 -->
      <el-dialog title="新增网址" :visible.sync="dialogFormVisible">
        <el-form :model="siteForm" :label-width="formLabelWidth">
          <el-form-item label="网站名称" :label-width="formLabelWidth">
            <el-input v-model="siteForm.siteName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="网站链接" :label-width="formLabelWidth">
            <el-input v-model="siteForm.router" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="网站描述" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="siteForm.info"></el-input>
          </el-form-item>
          <el-form-item label="网站类型" :label-width="formLabelWidth">
            <el-select v-model="siteForm.typeId" placeholder="请选择网站类型">
              <el-option v-for="(type, index) in types.data" :key="index" :label="type.typeName" :value="type.id"></el-option>
              <!-- <el-option label="搜索" value="1"></el-option>
              <el-option label="视频网站" value="2"></el-option>
              <el-option label="计算机学习" value="3"></el-option>
              <el-option label="图片" value="4"></el-option>
              <el-option label="导航" value="5"></el-option>
              <el-option label="小说网站" value="6"></el-option> -->
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit">确 定</el-button>
        </div>
      </el-dialog>

        <!-- 二维码 -->
      <div class="qrcode-class">
        <canvas id="canvas"></canvas>
      </div>
  </div>
</template>

<script>
// vue add axios 先增加插件，使用命令行操作
// 导入
import axios from 'axios'
import Vue from 'vue'
// 使用二维码插件
import QRCode from 'qrcode'
Vue.use(QRCode)

export default {
  name: 'Nav',
  data: function () {
    return {
      sites: {
        // { name: '百度', router: 'https://www.baidu.com/', logo: 'https://www.baidu.com/favicon.ico' },
        // { name: 'B站', router: 'https://www.bilibili.com/', logo: 'https://www.bilibili.com/favicon.ico' },
        // { name: 'CSDN', router: 'https://blog.csdn.net/', logo: 'https://blog.csdn.net/favicon.ico' },
        // { name: 'Github', router: 'https://github.com/', logo: 'https://github.com/favicon.ico' },
        // { name: '电影天堂', router: 'https://btbtt.us/', logo: 'https://btbtt.us/favicon.ico' }
        code: '',
        data: [],
        message: ''
      },
      types: {
        // { typeCode: '100001', typeName: '视频网站', id: '1' }
        code: '',
        data: [],
        message: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      siteForm: {
        siteName: '',
        router: '',
        typeId: '1',
        info: ''
      },
      queryInfo: {
        query: '',
        pageNum: 1,
        pageSize: 2
      },
      total: 10
    }
  },
  created () {
    this.initSiteList()
    this.initTypeList()
  },
  mounted () {
    this.showqrcode()
  },
  methods: {
    // 初始化网站列表
    initSiteList () {
      const _this = this
      // 发出请求：这里的 URL 是 SpringBoot项目的一个可用路径
      axios.get('http://localhost:8088/sites/').then(function (resp) {
        // 响应结果：将返回的数据赋值给 sites 这个变量
        _this.sites.data = resp.data.data
      })
    },
    // 初始化网站类型
    initTypeList () {
      const _this = this
      axios.get('http://localhost:8088/types/').then(function (resp) {
        // 响应结果：将返回的数据赋值给 types 这个变量
        _this.types.data = resp.data.data
      })
    },
    // 监听 pageSize 改变的事件
    handleSizeChange (newSize) {
      this.queryInfo.pageSize = newSize
      this.initSiteList()
    },
    // 监听页码值改变的事件
    handleCurrentChange (newPage) {
      this.queryInfo.pageNum = newPage
      this.initSiteList()
    },
    // 新增网址
    onSubmit () {
      const formData = JSON.stringify(this.siteForm)
      const _this = this
      axios({
        method: 'post',
        url: 'http://localhost:8088/sites/save',
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        data: formData
      }).then((res) => {
        if (res.data === 200) {
          // 提示增加成功
          this.$message({ message: '添加网站成功', type: 'success' })
          // 隐藏增加的模态框
          this.dialogFormVisible = false
          // 更新列表
          _this.initSiteList()
        }
      })
    },
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

<style scoped>
#nav ul li {
  list-style: none;
  background: #ccc;
  float: left;
  width: 17%;
  margin: 10px 10px;
  height: 200px;
  padding: 5px 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 4px;
}

#nav ul li img{
  width: 60px;
}
#nav ul li a {
  width: 100%;
}
.info-class {
  padding: 5px 5px;
  margin-top: 5px;
  font-size: 12px;
}
.add-button button {
  position: relative;
  top: 36%;
}
.qrcode-class {
  height: 150px;
  width: 150px;
  margin: 3px 3px;
}
</style>
