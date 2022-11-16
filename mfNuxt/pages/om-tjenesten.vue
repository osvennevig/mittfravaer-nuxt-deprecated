<template>
<div>
  <div class="heroTopp">
    <section class="section">
      <h1 class="titleBig">
        Om tjenesten
      </h1>

    </section>
  </div>
  <section class="section">
    <div class="container">
      <div class="containerLess">
        <div class="hero">


          <h2 class="subtitleBigLeft">
            MittFravær gjør det enklere å finne ut hvor mange prosent fravær man har i det enkelte faget. I tillegg til
            å beregne hvor mye fravær man kan ha før man når 10 prosenten.
            <br/>
            <br/>
            Tjenesten er gratis å bruke, og ble laget av kvitér UB ved Dahlske videregående skole i 2018-2019. Den driftes nå av
            selskapet Svennevig & Flaaten AS.
            <br/>
            <br/>
            NB! På grunn av endringer i fraværsgrensen under Covid var tjenesten utilgjengelig i en periode fra 2020-2022.
          </h2>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="titleBigQuote">
            “Vinneren har en svært brukervennlig og forståelig nettside. De viser en overlegen teknisk kompetanse og har
            et lekkert design. Vinneren får full score på samtlige kriterier, og vi legger spesielt merke til at det er
            blitt gjort en utrolig god jobb på søkemotoroptimalisering”
          </p>
          <p class="subtitle">
            Denne prisen ble delt ut av administrerende direktør Grete I. Nykkelmo i Ungt Entreprenørskap Norge.
          </p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              Les hele artikkelen hos <a
                href="https://www.gat.no/nyheter/sikret-seg-to-forste-og-to-tredjeplasser-under-nm/">Grimstad
                Adressetidende</a>
            </span>
          </p>
        </footer>
      </div>
      <section class="section">
      <div class="container">
    <div class="rows">
     
    <div style="display: flex; flex-direction: column; gap: 16px; flex-wrap: wrap;">
       <p class="subtitleBig">Andre lenker</p>
       <a class="button is-primary" href="https://www.nrk.no/sorlandet/vil-gi-bedre-fravaerskontroll-1.14305223" size="is-large">NRK Sørlandet - TV reportasje</a>
        <a class="button is-primary" href="https://radio.nrk.no/serie/marius/MYNF47010618/21-11-2018?fbclid=IwAR0Dk0xqfg-96TYUx2Kdyf2_5LGkNo-Qll6aMsPar7q21a2mHowjOrItoCY#t=1h59m42.36s" size="is-large">NRK P3 - Radio P3nyheter 16:00</a>
    </div>

      </div>
      </div>
</section>

    </div>
  </section>

  <footerBunn />
</div>
</template>

<script>
import footerBunn from '~/components/footerBunn'

import Vue from 'vue'
import { VuePlausible } from 'vue-plausible'

Vue.use(VuePlausible, {
  // see configuration section
  domain: 'xn--mittfravr-n3a.no',
  //enableAutoPageviews: true, 
  //enableAutoOutboundTracking: true,
  trackLocalhost: false

})

export default {
   head: {
    title: 'Om MittFravær',
    meta: [
      { hid: 'description', name: 'description', content: 'Beregn fraværet ditt på sekunder' }
    ],
    noscript: [
      { innerHTML: 'MittFravær gjør det enklere å finne ut hvor mange prosent fravær man har i det enkelte faget på VGS. I tillegg til å beregne hvor mye fravær man kan ha før man når 10-prosenten.', body: true }
    ],
    
  },
  name: 'om-tjenesten',

  components: {
    footerBunn,
  }
}
</script>


<style scoped>
.heroTopp {
    background-color: whitesmoke;
}
.card {
  border-radius: 8px;
  overflow: hidden;
}
.card-content {
  background-color: #7442BB;
}
.subtitle {
  color: whitesmoke;
  font-size: 1.2rem;
}
.titleBigQuote {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: break-word;
  padding-bottom:5px;
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
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.25;
  word-break: break-word;
}
.subtitleBigLeft {
  color: #4a4a4a;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  word-break: break-word;
  text-align: left;
  letter-spacing: -0.3px;
}

.subtitleLeft {
  text-align: left;
}

.containerLess {
  padding-bottom: 50px;
}
</style>