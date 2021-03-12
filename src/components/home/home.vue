<template>
<div class="home"> 
    <BContent :rows="rows"></BContent>
    <BNavSide :options="options" v-on:change="isShowMask"></BNavSide>
    <div class="wnd-mask" ref="mask" v-show="showMask"></div>
</div>
</template>
<script>
import BContent from 'components/content/BContent.vue'
import BNavSide from 'components/nav/BNavSide'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    BContent,
    BNavSide
  },
  mounted() {
    this.$store.dispatch('getContentRows')
  },
  data() {
    return {
      showMask: false
    }
  },
  watch: {
    options() {
      console.log('options 变化了')
    },
    items() {
      console.log('items 变化了')
    }
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'rows'
    ]),
    options() {
      let options = {
        offset: 100, //偏移的距离
        items: this.rows,
        offsetTop: 0 //距离顶部距离
      }
      return options
    }
  },
  methods: {
    isShowMask() {
      this.showMask = !this.showMask
    }
  }
}
</script>

<style>

</style>