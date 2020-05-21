<template>
  <section class="section" id="app">
    <the-navbar />
    <div class="container" id="main">
      <router-view />
    </div>
  </section>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  components: {
    TheNavbar
  }
}
</script>

<style lang="sass">
#main
  padding-top: 52px

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983
</style>
