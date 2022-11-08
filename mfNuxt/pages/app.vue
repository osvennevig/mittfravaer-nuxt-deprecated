<template>
    <div>
      <heroTopp/>
      <utregning/>
      <appInfo/>
      <footerBunn/>
    </div>
</template>

<script>
import heroTopp from '~/components/heroTopp'
import footerBunn from '~/components/footerBunn'
import utregning from '~/components/utregning'
import appInfo from '~/components/appInfo'

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
    title: 'Fraværskalkulatoren - MittFravær',
    meta: [
      { hid: 'description', name: 'description', content: 'Lynrask utregning av udokumentert fravær' }
    ],
    noscript: [
      { innerHTML: 'MittFravær gjør det enklere å finne ut hvor mange prosent fravær man har i det enkelte faget på VGS. I tillegg til å beregne hvor mye fravær man kan ha før man når 10-prosenten.', body: true }
    ],
  },
  name: 'Forsiden',

  components: {
    heroTopp,
    utregning,
    footerBunn,
    appInfo,
  }
}
</script>
