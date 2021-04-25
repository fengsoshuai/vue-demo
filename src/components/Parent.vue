<template>
    <div id="pa">
        <child :contents="myList"></child>
    </div>
</template>

<script>
import child from './Child.vue'
export default {
  name: 'Parent',
  components: {
    child
  },
  data () {
    return {}
  },
  props: {
    myList: {
      type: Array,
      required: true
    }
  }
}
</script>
