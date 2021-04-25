<template>
    <div>
      <Parent :myList="movieList"></Parent>
    </div>
</template>

<script>
import Parent from './Parent.vue'
export default {
  components: { Parent },
  name: 'Movie',
  data: function () {
    return {
      movieList: [
        { id: 1, name: 'movie1' },
        { id: 2, name: 'movie2' },
        { id: 3, name: 'movie3' }]
    }
  }
}
</script>
