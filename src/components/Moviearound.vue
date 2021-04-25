<template>
    <div>
      <Parent :myList="movieAroundList"></Parent>
    </div>
</template>

<script>
import Parent from './Parent.vue'
export default {
  components: { Parent },
  name: 'Movie',
  data: function () {
    return {
      movieAroundList: [
        { id: 1, name: 'movieAround1' },
        { id: 2, name: 'movieAround2' },
        { id: 3, name: 'movieAround3' }]
    }
  }
}
</script>
