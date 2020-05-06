<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                   src="~assets/logo.svg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                 <div class="buttons">
          <b-button class="button is-light" icon-left="fas fa-bug">
            Rapporter en feil
          </b-button>
          <b-button class="button is-primary" icon-left="fas fa-info-circle">
            Om tjenesten
          </b-button>
        </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>


<style scoped>
.navbar {
  border-bottom: rgba(29, 35, 48, .15) solid 1px;
}

</style>