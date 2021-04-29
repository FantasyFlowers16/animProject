<template>
  <div class="b-right " :class="{_open:openBlock}">
    <div class="b-right__open-btn" @click="clickButton"  :class="{_open:openBlock}"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class RightComponent extends Vue {
  openBlock=false

  clickButton () {
    this.openBlock = !this.openBlock
  }
}

</script>
<style lang="stylus">
@import '../../css/quasar.variables.styl'
.b-right
  position absolute
  background-color red
  width 50%
  height 100vh
  margin-left 100%
  transition margin-left .2s ease
  &._open
    margin-left calc(50% + 30px)
  &__open-btn
    cursor pointer
    position relative
    top 50%
    transition transform .2s ease
    width 30px
    left -30px
    height 60px
    //border-radius 70%
    border-top-left-radius 70%
    border-bottom-left-radius 70%
    background-color white
    opacity 0.5
    &:before
      content ''
      position absolute
      width 20px
      top 19px
      height 20px
      left 8px
      background: url('../../assets/icons/arrow.svg') 50% 50% no-repeat
    &._open
      &:before
        transform scale(-1, 1)
</style>
