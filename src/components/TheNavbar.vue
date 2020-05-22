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
        <router-link :to="{ name: 'home' }" v-slot="{ href, navigate }">
          <a class="navbar-item" :href="href" @click="goAndClose(navigate)"
            >Inicio</a
          >
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Calculadoras
          </a>

          <div class="navbar-dropdown">
            <router-link
              :to="{ name: 'calculators.amaac' }"
              v-slot="{ href, navigate }"
            >
              <a class="navbar-item" :href="href" @click="goAndClose(navigate)"
                >Amaac</a
              >
            </router-link>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Generadores
          </a>

          <div class="navbar-dropdown">
            <router-link
              :to="{ name: 'generators.amaac' }"
              v-slot="{ href, navigate }"
            >
              <a class="navbar-item" :href="href" @click="goAndClose(navigate)"
                >Amaac</a
              >
            </router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <!-- navbar-items-->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',

  data: () => ({
    title: 'LAB TOOLS'
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
