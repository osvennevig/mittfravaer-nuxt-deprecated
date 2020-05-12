<template>
<div>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~assets/logo.svg" alt="MittFravær - Beregn fraværet ditt på sekunder">
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item-s>
        Lynrask utregning av udokumenter fravær
      </b-navbar-item-s>
       <b-navbar-item-s>
        <b-tag type="is-success" outlined>Nytt design!</b-tag>
      </b-navbar-item-s>
            

    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <!--
            <b-button class="button is-light" icon-left="bug" tag="router-link" :to="{ path: '/rapporter' }"
            exact-active-class="is-active">
            Rapporter en feil
          </b-button>
          -->
          <b-button class="button is-primary" icon-left="alert-circle" tag="router-link"
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
  font-family: 'Work Sans', Avenir, Arial, sans-serif;
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
b-navbar-item-s {
  color: #4a4a4a;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  padding-top: 15px;
}

@media screen and (min-width: 1024px) {
.navbar-item img {
/*max-height: 1.75rem;*/
max-height: 2.10rem;
  }
}

@media screen and (max-width: 1024px) {
.navbar-item img {
/*max-height: 1.75rem;*/
max-height: 1.75rem;
  }
}

</style>