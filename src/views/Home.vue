<template>
    <el-container style="height: 100%">
      <!-- 头部区域 -->
      <el-header>
        <div>
          <img class="logo" src="../assets/logo.png" alt="网址导航">
          <span>网址导航</span>
        </div>
      </el-header>
      <!-- 页面主体区域 -->
      <el-container>
        <!-- 左侧区域 -->
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <!--菜单折叠-->
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <el-menu
            background-color="#2E2E2E"
            text-color="#fff"
            active-text-color="#547fcc"
            unique-opened
            :collapse="isCollapse"
            :collapse-transition="false"
            router
            :default-active="activePath"
          >
            <!--1级菜单-->
            <el-submenu :index="menu.id + ''" v-for="menu in menuList" :key="menu.id">
              <!--1级菜单的模板-->
                <template slot="title">
                  <i :class="menu.icon"></i><span>{{menu.menuName}}</span>
                </template>
                <!--2级菜单-->
                <el-menu-item :index="'/' + submenu.path" v-for="submenu in menu.children" :key="submenu.id" @click="activeMenu('/' + submenu.path)">
                  <template slot="title"><i :class="submenu.icon"></i>
                    <span>{{submenu.menuName}}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 右侧内容主体 -->
        <el-main>
          <!--路由占位-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {
          id: 1,
          menuName: '视频类',
          path: null,
          order: 1,
          icon: 'el-icon-video-camera-solid',
          children: [
            {
              id: 104,
              menuName: '电影网址',
              path: 'Movie',
              order: 1,
              icon: 'el-icon-film',
              children: []
            },
            {
              id: 105,
              menuName: '电视网址',
              path: 'TV',
              order: 2,
              icon: 'el-icon-bell',
              children: []
            },
            {
              id: 106,
              menuName: '影视周边',
              path: 'Moviearound',
              order: 3,
              icon: 'el-icon-bell',
              children: []
            }
          ]
        },
        {
          id: 2,
          menuName: '阅读类',
          path: null,
          order: 2,
          icon: 'el-icon-reading',
          children: [
            {
              id: 204,
              menuName: '小说',
              path: 'Novel',
              order: 1,
              icon: 'el-icon-bell',
              children: []
            },
            {
              id: 205,
              menuName: '漫画',
              path: 'Caricature',
              order: 2,
              icon: 'el-icon-bell',
              children: []
            },
            {
              id: 206,
              menuName: '有声读物',
              path: 'Audiobooks',
              order: 3,
              icon: 'el-icon-bell',
              children: []
            },
            {
              id: 207,
              menuName: '杂志和其他类型',
              path: 'OtherBooks',
              order: 4,
              icon: 'el-icon-bell',
              children: []
            }
          ]
        },
        {
          id: 3,
          menuName: '音乐类',
          path: '',
          order: 3,
          icon: 'el-icon-headset',
          children: [
            {
              id: 301,
              menuName: '在线听歌',
              path: 'MusicOnline',
              order: 1,
              icon: 'el-icon-bell',
              children: []
            },
            {
              id: 302,
              menuName: '音乐下载',
              path: 'MusicDownload',
              order: 2,
              icon: 'el-icon-bell',
              children: []
            },
            {
              id: 303,
              menuName: '音乐MV',
              path: 'MV',
              order: 3,
              icon: 'el-icon-bell',
              children: []
            }
          ]
        },

        {
          id: 4,
          menuName: '图片素材',
          path: '',
          order: 4,
          icon: 'el-icon-picture',
          children: [
            {
              id: 401,
              menuName: '图片壁纸',
              path: '',
              order: 1,
              icon: 'el-icon-bell',
              children: []
            },
            {
              id: 402,
              menuName: '斗图表情',
              path: '',
              order: 2,
              icon: 'el-icon-bell',
              children: []
            }
          ]
        },
        {
          id: 5,
          menuName: '学习园地',
          path: '',
          order: 5,
          icon: 'el-icon-notebook-2',
          children: [
            {
              id: 501,
              menuName: '在线课程',
              path: '',
              order: 1,
              icon: 'el-icon-bell',
              children: []
            },
            {
              id: 502,
              menuName: '博客',
              path: '',
              order: 2,
              icon: 'el-icon-bell',
              children: []
            }
          ]
        },
        {
          id: 6,
          menuName: '系统工具类',
          path: '',
          order: 6,
          icon: 'el-icon-s-tools',
          children: [
            {
              id: 601,
              menuName: '常用网址',
              path: 'Nav',
              order: 1,
              icon: 'el-icon-s-home',
              children: []
            },
            {
              id: 602,
              menuName: '日历',
              path: 'Calendar',
              order: 2,
              icon: 'el-icon-date',
              children: []
            },
            {
              id: 603,
              menuName: '关于',
              path: 'about',
              order: 3,
              icon: 'el-icon-user',
              children: []
            }
          ]
        }
      ],
      meta: {
        msg: '获取菜单列表成功',
        status: 200
      },
      isCollapse: false,
      activePath: ''
    }
  },
  created () {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    // 动态获取菜单信息
    getMenuList () {

    },
    // 折叠菜单
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 链接激活状态
    activeMenu (path) {
      window.sessionStorage.setItem('activePath', path)
      this.activePath = path
    }
  }
}
</script>

<style lang="less" scoped>
  .logo {
    width: 40px;
  }
  .el-header{
    background-color: #2E2E2E;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 20px;
    > div {
      display: flex;
      align-items: center;
      span{
        margin-left: 15px;
      }
    }
  }
  .el-aside{
    background-color: #424242;
    .el-menu{
      border-right: none;
    }
  }
  .el-main{
    background-color: #fff;
  }
  .toggle-button{
    background-color: #424242;
    font-size: 10px;
    color: #fff;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.3em;
    cursor: pointer;
  }
</style>
