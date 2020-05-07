<template>
<div>
    <div class="heroTopp">
        <section class="section">
             <h1 class="titleBig">
               Rapporter en feil
             </h1>
             <h2 class="subtitleBig">
              Informasjon om rapportering
             </h2>
        </section>
    </div>
    <section class="section">
            <div class="container">
             <p class="subtitleLeft">
               MittFravær gjør det enklere å finne ut hvor mange prosent fravær man har i det enkelte faget. I tillegg til å beregne hvor mye fravær man kan ha før man når 10 prosenten.
Tjenesten er gratis å bruke, og er laget av kvitér UB ved Dahlske videregående skole. Den driftes nå av selskapet Mainly.
Reklamebannere er satt inn for å kunne finansiere produktet og drive med videreutvikling.
             </p>
            </div>
        </section>
        <footerBunn/>
</div>
</template>

<script>
import footerBunn from '~/components/footerBunn'

export default {
  name: 'Rapporter',

  components: {
    footerBunn,
  }
}
</script>


<style scoped>
.heroTopp {
    background-color: whitesmoke;
    padding: 1.5rem 1.5rem;
}
.titleBig {
  color: #7442BB;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.125;
  word-break: break-word;
  padding-bottom:5px;
}
.subtitleBig {
  color: #4a4a4a;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.25;
  word-break: break-word;
}

.subtitleLeft {
  text-align: left;
}
</style>