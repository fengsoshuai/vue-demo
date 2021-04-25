<template>
    <div>
      <Parent :myList="tvList"></Parent>
    </div>
</template>

<script>
import Parent from './Parent.vue'
export default {
  components: { Parent },
  name: 'Movie',
  data: function () {
    return {
      tvList: [
        { id: 1, name: 'tv1' },
        { id: 2, name: 'tv2' },
        { id: 3, name: 'tv3' }]
    }
  }
}
</script>
