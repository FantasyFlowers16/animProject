<template>
  <div class="b-second">
    <right-block></right-block>
    <left-block></left-block>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import RightBlock from '../components/second/RightComponent.vue'
import LeftBlock from '../components/second/LeftComponent.vue'
@Component({
  components: { RightBlock, LeftBlock }
})
export default class SecondPage extends Vue {
  clickButton () {
    console.log(123)
  }
}

</script>
<style lang="stylus">
@import '../css/quasar.variables.styl'
.b-second
  background-color green
  width 100%
  height 100vh
</style>
