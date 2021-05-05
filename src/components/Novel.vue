<template>
    <div>
      <DefaultLiPanel :data="dataList"></DefaultLiPanel>
    </div>
</template>

<script>
import DefaultLiPanel from './panel/DefaultLiPanel'
export default {
  components: { DefaultLiPanel },
  name: 'Novel',
  data: function () {
    return {
      dataList: [
        { id: 1, name: 'movieAround1' },
        { id: 2, name: 'movieAround2' },
        { id: 3, name: 'movieAround3' }]
    }
  }
}
</script>
