<template>
  <nav
    class="navbar is-dark is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <h1 class="navbar-item">
        {{ title }}
      </h1>

      <a
        @click="toggler"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-menu"
        ref="burger"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar-menu" class="navbar-menu" ref="menu">
      <div class="navbar-start">
        <!-- left align items -->
      </div>

      <div class="navbar-end">
        <!-- right align items-->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',

  data: () => ({
    title: 'AMAAC CALCULATOR'
  }),

  methods: {
    toggler() {
      this.$refs.burger.classList.toggle('is-active')
      this.$refs.menu.classList.toggle('is-active')
    },
    goAndClose(navigate) {
      navigate()
      this.toggler()
    }
  }
}
</script>
