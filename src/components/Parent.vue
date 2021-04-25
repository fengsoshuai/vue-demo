<template>
    <div id="pa">
        <child :contents="myList" :isList="isList"></child>
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
    },
    isList: {
      type: Boolean,
      required: true
    }
  }
}
</script>
