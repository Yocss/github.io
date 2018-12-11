<template>
  <section class="app-main">
    <transition name="fade-transform" mode="in-out">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>
