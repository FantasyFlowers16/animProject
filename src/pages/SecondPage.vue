<template>
  <div class="b-second">
    <right-block @openBlock="checkOpenLeftBlock" :lookTree="lookTree"></right-block>
    <left-block @openBlock="checkOpenRightBlock" :lookTree="lookTree"></left-block>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import RightBlock from '../components/second/RightComponent.vue'
import LeftBlock from '../components/second/LeftComponent.vue'
const Pusher = require('pusher');
@Component({
  components: { RightBlock, LeftBlock }
})
export default class SecondPage extends Vue {
  lookTree=false
  leftOpen=false
  rightOpen=false
  channel=null
  pusher=null


  checkOpenLeftBlock (data:boolean) {
    this.leftOpen=data
    if (this.leftOpen && this.rightOpen) {
      this.lookTree=true
    }else this.lookTree=false
  }

  checkOpenRightBlock (data:boolean) {
    this.rightOpen=data
    if (this.leftOpen && this.rightOpen) {
      this.lookTree=true
    }else this.lookTree=false
  }
}

</script>
<style lang="stylus">
@import '../css/quasar.variables.styl'
.b-second
  background-color brown
  width 100%
  height 100vh
</style>
