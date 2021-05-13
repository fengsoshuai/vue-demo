<template>
    <div :key="novelPanelProp.id" class="panel">
      <a :href="novelPanelProp.router" :title="novelPanelProp.info" target="_blank">
        <img :src="novelPanelProp.logo" class='logo'>
      </a>
      <div class="novel-name" @click="showNovelDetail(novelPanelProp.router)" @mouseover="drow = true">
        {{novelPanelProp.name}}
        <div class="downLogo"><a :href="novelPanelProp.download" target="_blank" title="下载"><i class="el-icon-download"></i></a></div>
      </div>
      <transition name="el-fade-in">
        <div class="logo-back" @mouseleave="drow = !drow" v-if="drow">
          <h6>{{novelPanelProp.name}}</h6>
          {{novelPanelProp.info}}
        </div>
      </transition>
    </div>
</template>

<script>
import { NovelEntity } from '../../assets/js/panel.js'

export default {
  data: function () {
    return {
      drow: false
    }
  },
  props: {
    novelPanelProp: {
      type: NovelEntity,
      required: true
    }
  },
  methods: {
    showNovelDetail (url) {
      console.log(url)
      this.drow = true
    }
  }

}
</script>

<style scoped>
.panel {
  width: 120px;
  height: 175px;
}
.panel a {
  text-decoration: none;
}
.novel-name {
  width: 120px;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  cursor:pointer;
  background-image: url('/img/novels/novel_title.png');
  color: #fff;
  font-size: 15px;
  height: 20px;
  padding-top: 4px;
  position: relative;
  float: left;
  top: -27px;
}

.novel-name:hover {
  font-weight: 800;
}

.logo {
  width: 120px;
  box-shadow:0px 0px 3px 2px #aaa;
}

.downLogo {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 5px;
  left: 3px;
  background-color: rgb(32, 189, 123);
  border-radius: 7px;
}
.downLogo:hover {
  border: 1px solid #fff;
}
.downLogo a {
  color: aliceblue;
}

.logo-back {
  width: 120px;
  height: 172px;
  position: relative;
  top: -175px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  padding: 5px;
  /** 怪异盒子 */
  box-sizing:border-box
}
</style>
