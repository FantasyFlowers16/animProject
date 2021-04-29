<template>
  <div class="b-left" :class="{_open:openBlock}">
    <div class="b-left__open-btn" @click="clickButton"  :class="{_open:openBlock}"></div>
    <div class="b-left__wrapper">
      
      <div class="b-left__rope-container">
        <div class="b-left__rope b-left__rope--ball" v-touch-swipe.mouse.bottom="pullRope" :class="{_pull:pull}" @click="pullRope"></div>
        <div class="b-left__text b-left__text--ball">кинуть мяч -></div>
      </div>
      <div class="b-left__rope-container">
        <div class="b-left__rope b-left__rope--stars" v-touch-swipe.mouse.bottom="pullRope" :class="{_pull:pull}" @click="pullRopeStars"></div>
        <div class="b-left__text b-left__text--stars">звездопад -></div>
      </div>
      <div class="b-left__ball" :class="{_go:ballGo}"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Snow from 'vue-niege'

@Component({
  components: {Snow}
})
export default class LeftComponent extends Vue {
  openBlock=false
  pull=false
  ballGo=false

  clickButton () {
    this.openBlock = !this.openBlock
  }

  pullRopeStars () {

  }

  pullRope () {
    this.pull=true
    setTimeout(() => {
      this.pull = false
    },500)
    this.ballGo = true
    setTimeout(() => {
      this.ballGo = false
    },900)
  }
  
}

</script>
<style lang="stylus">
@import '../../css/quasar.variables.styl'
.b-left
  position absolute
  background-color #bd6d6d
  width 50%
  height 100vh
  margin-left -50%
  transition margin-left .2s ease
  &._open
    margin-left calc(0% - 30px)
  &__wrapper
    margin-left: 50px
    display flex
    overflow hidden
    position relative
    width 100%
    height 100%
  &__ball
    width 80px
    bottom 100%
    left 50%
    position absolute
    height 80px
    background: url('../../assets/ball.png') no-repeat
    background-size cover
    &._go
      top auto 
      animation goBall .9s ease
      bottom 0
  &__rope-container
    margin-left 130px
    width 50px
    height 120px
    position relative
  &__rope
    width 8px
    height 90px
    position absolute
    top -10px
    background black 
    margin-top 0
    cursor pointer
    &--ball
      left 30%
    &--stars
      left 40%
    &::before
      content ''
      position absolute
      width 12px
      left calc(0% - 2px)
      height 20px
      bottom 0
      background yellow
    &._pull
      animation pulling .5s ease
  &__text
    bottom -80px
    position absolute
    top 121px
    display block
    color white
    font-size 25px
    font-weight 700
    transform rotate(-30deg)
    width 200px
    animation infinite textPulse .6s ease
    &--stars , &--ball
      left -120px
  &__open-btn
    cursor pointer
    position absolute
    top calc(50% - 30px)
    transition transform .2s ease
    width 30px
    left 100%
    height 60px
    //border-radius 70%
    border-top-right-radius 70%
    border-bottom-right-radius 70%
    background-color white
    opacity 0.5
    &:before
      content ''
      position absolute
      width 20px
      top 19px
      height 20px
      left 2px
      transform scale(-1, 1)
      background: url('../../assets/icons/arrow.svg') 50% 50% no-repeat
    &._open
      &:before
        transform scale(1, 1)

@keyframes pulling
  0%
    top -10px
  40%
    top -25px
  100%
    top -10px

@keyframes goBall
  0%
    bottom 100%
  20%
    bottom 0%
  35%
    bottom 20%
    left 70%
  40%
    bottom 0 
    left 80%
  60%
    bottom 15%
    left 90%
  70%
    bottom 0%
    left 95%
  90%
    bottom 10%
    left 98%
  100%
    bottom 0
    left 100%

@keyframes textPulse
  0%
    color white
    transform rotate(-40deg)
  40%
    color #f9ff9b
    transform rotate(-43deg)
  100%
    color white
    transform rotate(-40deg)
</style>
