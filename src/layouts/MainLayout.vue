<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <!-- <q-toolbar>
      </q-toolbar> -->
    </q-header>

    <q-page-container>
    <transition name="scale-slide">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </transition>
      <!-- <transition name="scale-slide">
        <router-view />
      </transition> -->
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { }
})
export default class MainLayout extends Vue {

}
</script>

<style lang="stylus">
@import '../css/quasar.variables.styl'
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.1);
}
</style>
