<template>
    <!-- 遍历列表模板 -->
    <div>
      <ul>
        <li v-for="content in contents" :key="content.id">
          {{content.name}}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      required: true
    }
  }
}
</script>
