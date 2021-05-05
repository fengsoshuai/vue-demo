<template>
    <div :class="divClassStyle" :key="defaultPanelProp.id">
      <a :href="defaultPanelProp.router" :class="aClassStyle" target="_blank">
        <img :src="defaultPanelProp.logo" :class="imgClassStyle">&nbsp;&nbsp;{{defaultPanelProp.name}}
      </a>
      <div :class="infoClassStyle">{{defaultPanelProp.info}}</div>
    </div>
</template>

<script>
import { PanelEntity } from '../../assets/js/panel.js'
export default {
  data: function () {
    return {
    }
  },
  props: {
    defaultPanelProp: {
      type: PanelEntity,
      required: true
    },
    divClassStyle: {
      type: String,
      required: false,
      default: 'default-divClassStyle'
    },
    aClassStyle: {
      type: String,
      required: false,
      default: 'default-aClassStyle'
    },
    imgClassStyle: {
      type: String,
      required: false,
      default: 'default-imgClassStyle'
    },
    infoClassStyle: {
      type: String,
      required: false,
      default: 'default-infoClassStyle'
    }

  }
}

</script>

<style scoped>
.default-divClassStyle {
  border: 1px solid darkgrey;
  width: 200px;
  background-color: #CCC;
  border-radius: 7px;
  padding: 5px;
  box-shadow: 3px 3px 3px #b9b3b3;
  margin: 5px 5px;
}

.default-aClassStyle {
  text-decoration: none;
  display: inline-block;
  color: dimgray;
}
.default-aClassStyle:hover {
  color: rgb(79, 94, 179);
}
.default-imgClassStyle {
  height: 25px;
}
.default-infoClassStyle {
  font-size: 12px;
}
</style>
