<template>
  <div class="b-main">
    <router-link to="/second" class="b-main__hide-text-container"><div class="b-main__hide-text" :class="{_clicked:activeButton}" >Нажми сюда,что бы перейти к следующей анимации</div></router-link>
    <div class="b-main__button-container">
      <q-btn class="b-main__button" @click="clickButton" :class="{_clicked:activeButton}">Кликни тут</q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class PageIndex extends Vue {
  activeButton=false

  clickButton () {
    this.activeButton = !this.activeButton
  }
}

</script>
<style lang="stylus">
@import '../css/quasar.variables.styl'
.b-main
  background $bgMain
  width 100%
  height calc(100vh - 50px)
  z-index 10
  &__hide-text-container
    text-decoration none 
  &__hide-text
    width 100%
    display flex
    align-items center
    justify-content center
    font-weight 300
    opacity 0
    color white
    font-size 26px
    padding-top 70px
    transition opacity .6s ease, transform .6s ease
    &:hover
      transition opacity .6s ease, transform .6s ease
      transform scale(1.5)
    &._clicked
      opacity 1
      transition opacity 3.6s ease,transform .6s ease
  &__button-container
    width 100%
    height calc(100% - 50px)
    display flex
    align-items center
    justify-content center
  &__button
    width 200px
    background red
    margin 0 auto
    transition transform .6s ease
    &._clicked
      transform scale(1.5)
      animation clicketBut .8s

@keyframes clicketBut
  0%
    transform rotate(0deg)
  60%
    transform rotate(360deg)
  65%
    transform scale(1)
  95%
    transform scale(1.5)
</style>
