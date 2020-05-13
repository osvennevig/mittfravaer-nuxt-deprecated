<template>
  <div class="outer-container-error">
   <!-- <div class="back">
      <nuxt-link to="/">back to list</nuxt-link>
    </div> -->
    <h1 v-if="error.statusCode === 404">Innholdet du leter etter ser ut til å være flyttet.</h1>
     <h1 v-if="error.statusCode === 404">Du kan prøve å gå tilbake til forsiden for å bruke kalkulatoren.</h1>
    <h1 v-else>Prøv å gå tilbake til forsiden.</h1>
   <!-- <nuxt-link to="/" style="text-decoration: underline;">Tilbake til forsiden</nuxt-link> -->
    <br>
    <a href="https://xn--mittfravr-n3a.no/"> <b-button type="is-primary">Tilbake til forsiden</b-button></a>
    
  </div>
</template>

<script>
export default {
  props: ['error'],
  head () {
    return {
      title: 'MittFravær',
    }
  },
}
</script>


<style scoped>
.outer-container-error {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 0;
}
</style>