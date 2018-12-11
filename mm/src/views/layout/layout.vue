<template>
  <div class="app-wrapper">
    <div class="app-main">
      <app-main/>
    </div>
  </div>
</template>

<script>
import AppMain from './components/app_main.vue'
export default {
  name: 'Layout',
  components: {
    AppMain
  }
}
</script>
