<template>
<div>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~assets/logo.svg" alt="MittFravær - Beregn fraværet ditt på sekunder">
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item>
        Lynrask utregning av udokumenter fravær
      </b-navbar-item>


      <b-navbar-item tag="router-link" :to="{ path: '/inspire' }" exact-active-class="is-active">
        inspire
      </b-navbar-item>

    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button class="button is-light" icon-left="fas fa-bug" tag="router-link" :to="{ path: '/inspire' }"
            exact-active-class="is-active">
            Rapporter en feil
          </b-button>
          <b-button class="button is-primary" icon-left="fas fa-info-circle" tag="router-link"
            :to="{ path: '/om-tjenesten' }" exact-active-class="is-active">
            Om tjenesten
          </b-button>
        </div>
      </b-navbar-item>
    </template>

  </b-navbar>

  <div class="defaultContainer">
    <nuxt />
  </div>

</div>
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
          title: 'Om Tjenesten',
          icon: 'lightbulb',
          to: { name: 'om-tjenesten' }
        }
      ]
    }
  }
}
</script>


<style scoped>
.defaultContainer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.navbar {
  border-bottom: rgba(29, 35, 48, .15) solid 1px;
}
.is-active {
  color:aquamarine;
}

</style>