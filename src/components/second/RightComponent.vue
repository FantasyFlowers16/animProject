<template>
  <div class="b-right " :class="{_open:openBlock}">
    <div class="b-right__tree"  :class="{_show:lookTree}"></div>
    <q-btn @click="showSun"> солнце</q-btn>
      <div class="b-right__wrapper-rope">
        
      <!-- <div class="b-left__rope-container">
        <div class="b-left__rope b-left__rope--ball" v-touch-swipe.mouse.bottom="pullRope" :class="{_pull:pull}" @click="pullRope"></div>
        <div class="b-left__text b-left__text--ball">кинуть мяч -></div>
      </div> -->
      </div>
    <div class="b-right__sun" :class="{_show:sun}"></div>
    <div class="b-right__open-btn" @click="clickButton"  :class="{_open:openBlock}">
          </div>
    <div class="b-right-chat" :class="{_open:openChat}">
      <div class="b-right-chat__open" @click="openCloseChat">
        <div class="b-right-chat__open-title">чат</div>
      </div>
      <div class="b-right-chat__wrapper">
        <div class="b-right-chat__msg-assistent">{{autoMsg}}</div>

        <div v-for="item in myMsg">
            <div class="b-right-chat__msg">{{item.text}}</div>
        </div>
        
        <div class="b-right-chat__input-msg-container">
        <q-input bottom-slots v-model="message" label="Ваше сообщение" color=black class="b-right-chat__input-msg"   :dense="dense">
          <template v-slot:after>
            <q-btn round dense flat icon="send" @click="sendMsg"></q-btn>
          </template>
        </q-input>        
        </div>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class RightComponent extends Vue {
  @Prop({ type: Boolean, required: false }) lookTree!: boolean
  openBlock=false
  sun=false
  dense=false
  message=''
  myMsg=[]
  autoMsg='Здравствуйте,это ваш личный ассистент,задайте любой вопрос!'
  openChat=false

  sendMsg () {
      this.myMsg.push({text:this.message})
      this.message=''
  }

  clickButton () {
    this.openBlock = !this.openBlock
    let status = true
    if(this.openBlock){
      status = true
    }else status = false
    
    this.$emit('openBlock', status)
  }
  showSun () {
    this.sun=!this.sun
  }

  openCloseChat () {
    this.openChat=!this.openChat
  }
}

</script>
<style lang="stylus">
@import '../../css/quasar.variables.styl'
.b-right
  position absolute
  background-color #92ddea
  width 50%
  height 100vh
  margin-left 100%
  transition margin-left .2s ease
  &__sun
    position absolute
    width 90px
    height 90px
    background-color yellow
    top 40px
    right 80px
    border-radius 50%
    margin-right -100%
    transition margin-right .3s ease
    &._show
      margin-right 0
  &__tree
    left -2px
    position absolute
    background: url('../../assets/icons/tree.svg')  no-repeat
    background-size contain
    width 300px
    margin-top -100%
    transform scale(-1, 1)
    height 100%
    transition margin-top .8s ease
    &._show
      margin-top 0
  &._open
    margin-left calc(50% + 30px)
  &__open-btn
    cursor pointer
    position absolute
    top calc(50% - 30px)
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
  &-chat
    position absolute
    width 300px
    height 400px
    background-color #7eb8da
    bottom 0
    right -300px
    border-radius 10px
    margin-right 30px
    border 1px solid black
    transition right .3s ease
    &._open
      right 0
    &__open
      position absolute
      background-color red 
      width 30px
      height 80px
      top 10px
      left -30px
      cursor pointer
    &__open-title  
      transform rotate(-90deg)
      font-size 25px
      margin-top 20px
      color white
    &__wrapper
      width 100%
      height 100%
      position relative
    &__msg-assistent
      margin 12px
      padding 10px
      border-radius 10px
      background-color #c5ccff
      position relative
      &:before
        content ''
        position absolute
        width 10px
        height 10px
        transform rotate(45deg)
        left -4px
        top 14px
        background-color #c5ccff
        z-index 10
    &__msg
      margin 12px
      padding 10px
      border-radius 10px
      background-color #e5ccff
      position relative
      &:before
        content ''
        position absolute
        width 10px
        height 10px
        transform rotate(45deg)
        right -4px
        top 14px
        background-color #e5ccff
        z-index 10
    &__input-msg-container
      background-color #be9ddf
      width: 100%
      height: 50px
      position absolute
      bottom 10px
      border-radius 10px
      border 2px solid #9579d1
    &__input-msg
      margin 0 10px
      width calc(100% - 20px)
      bottom 5px
      color white
      font-size 20px
</style>
