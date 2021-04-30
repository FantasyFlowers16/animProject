<template>
  <div class="b-left" :class="{_open:openBlock}">
    <div class="b-left__tree"  :class="{_show:lookTree}"></div>
    <div class="b-left__open-btn" @click="clickButton"  :class="{_open:openBlock}"></div>
    <div class="b-left__wrapper-rope">
      <div class="b-left__rope-container">
        <div class="b-left__rope b-left__rope--ball" v-touch-swipe.mouse.bottom="pullRope" :class="{_pull:pull}" @click="pullRope"></div>
        <div class="b-left__text b-left__text--ball">кинуть мяч -></div>
      </div>
      <div class="b-left__rope-container">
        <div class="b-left__rope b-left__rope--stars" v-touch-swipe.mouse.bottom="pullRopeSnow" :class="{_pull:pullSnow}" @click="pullRopeSnow"></div>
        <div class="b-left__text b-left__text--stars">снегопад -></div>
      </div>
       <div class="b-left__rope-container">
        <div class="b-left__rope b-left__rope--auth" v-touch-swipe.mouse.bottom="pullRopeSnow" :class="{_pull:pullAuth}" @click="pullRopeAuth"></div>
        <div class="b-left__text b-left__text--auth">авторизация -></div>
      </div>
    </div>
      <Snowf
        v-if="snow"
        :amount="100"
        :size="8"
        :speed="1.5"
        :wind="1"
        :opacity="0.8"
        :swing="1"
        :image="null"
        :zIndex="null"
        :resize="true"
        color="#fff"
      />
        <div class="b-left__ball" :class="{_go:ballGo}"></div>
        <div class="b-left-auth" :class="{_hide:auth, _round:round}" >
          <form action="POST">
            <div class="b-left-auth__title">Авторизация</div>
            <div class="b-left-auth__round" @click="roundFormAuth"></div>
            <q-input class="b-left-auth__field--input" color="black" v-model="login" type="text" placeholder="Ваш логин"></q-input>
            <q-input class="b-left-auth__field--input" color="black" v-model="password" type="password" placeholder="Ваш пароль"></q-input>
            <q-btn color="" class="b-left-auth__btn full-width" > Войти</q-btn>
          </form>
      </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
//const { Snowf } = require('vue-snowf') 
import Snowf from 'vue-snowf' //eslint-disable-line

@Component({
  components: { Snowf }
})
export default class LeftComponent extends Vue {
  @Prop({ type: Boolean, required: false }) lookTree!: boolean
  openBlock=false
  pull=false
  ballGo=false
  snow=false
  pullSnow=false
  pullAuth=false
  round=false
  auth=true
  login=''
  password=''

  clickButton () {
    this.openBlock = !this.openBlock
    let status = true
    if(this.openBlock){
      status = true
    }
    else status = false
    this.$emit('openBlock', status)
  }

  pullRopeAuth () {
    this.pullAuth = true
    setTimeout(() => {
      this.pullAuth = false
    }, 500)
    this.auth = !this.auth
  }

  pullRopeSnow () {
    this.pullSnow = true
    setTimeout(() => {
      this.pullSnow = false
    }, 500)
    this.snow = !this.snow
  }
  roundFormAuth () {
    this.round = true
      setTimeout(() => {
        this.round = false
      }, 1300)
  }

  pullRope () {
    this.pull = true
    setTimeout(() => {
      this.pull = false
    }, 500)
    this.ballGo = true
    setTimeout(() => {
      this.ballGo = false
    }, 900)
  }
}

</script>
<style lang="stylus">
@import '../../css/quasar.variables.styl'
.b-left
  position absolute
  background-color #92ddea
  width 50%
  height 100vh
  margin-left -50%
  transition margin-left .2s ease
  &__tree
    right -2px
    position absolute
    background: url('../../assets/icons/tree.svg')  no-repeat
    background-size contain
    width 300px
    margin-top -100%
    height 100%
    transition margin-top .8s ease
    &._show
      margin-top 0
  &._open
    margin-left calc(0% - 30px)
  &__wrapper-rope
    display flex
    justify-content space-around
    overflow hidden
    position relative
    width auto
    min-height 230px
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
    cursor pointer
    margin-left 130px
    width 50px
    height 120px
    position relative
  &__rope
    z-index 1
    width 8px
    height 90px
    position absolute
    top -10px
    background black
    margin-top 0
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
      background #ffa5d8
    &._pull
      animation pulling .3s ease
  &__text
    bottom -80px
    position absolute
    top 121px
    display block
    left -120px
    color white
    font-size 25px
    font-weight 700
    transform rotate(-30deg)
    width 200px
    animation infinite textPulse .6s ease
    &--auth
      left -150px
    &--stars , &--ballб
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
  &-auth
    width 300px
    padding 20px
    border-radius 10px
    margin  0 auto
    transform translate(0%)
    margin-top 40px
    background-color #be9ddf
    box-shadow 0 0 10px rgba(0,0,0,0.5)
    transition transform .3s ease
    &__title
      font-size 18px
      font-weight bold
      color white
      margin-bottom 20px
    &__round
      width 20px
      height 20px
      position absolute
      background: url('../../assets/icons/round.svg') 50% 50% no-repeat
      right 10px
      top 20px
      cursor pointer
    &._round
      animation  round 1.3s ease
      &:hover
        animation infinite round 1.3s ease
    &__btn
      border-radius 7px
      font-weight bold
      margin-top 30px
      background-color #9579d1
    &__field
      &--input
        margin 10px 0
    &._hide
      transform translate(-200%)
@keyframes pulling
  0%
    top -10px
  50%
    top 0px
  100%
    top -10px

@keyframes goBall
  0%
    bottom 100%
  20%
    bottom 0%
  35%
    bottom 20%
    left calc(75% - 80px)
  40%
    bottom 0
    left calc(85% - 80px)
  60%
    bottom 15%
    left calc(90% - 80px)
  70%
    bottom 0%
    left calc(95% - 80px)
  90%
    bottom 10%
    left calc(98% - 80px)
  100%
    bottom 0
    left calc(100% - 80px)

@keyframes round
  0%
    transform scale(1)
    transform rotate(0deg)
  100%
    transform scale(1.2)
    transform rotate(360deg)
@keyframes textPulse
  0%
    color white
    transform rotate(-40deg)
  40%
    color #be9ddf
    transform rotate(-43deg)
  100%
    color white
    transform rotate(-40deg)
</style>
