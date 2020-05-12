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

export default {
  head: {
    title: 'MittFravær - Lynrask utregning av udokumentert fravær',
    meta: [
      { hid: 'description', name: 'description', content: 'Beregn fraværet ditt på sekunder' }
    ],
    noscript: [
      { innerHTML: 'MittFravær gjør det enklere å finne ut hvor mange prosent fravær man har i det enkelte faget på VGS. I tillegg til å beregne hvor mye fravær man kan ha før man når 10-prosenten.', body: true }
    ],
    script: [
      { src: '/head.js' },
      // Supported since 1.0
      { src: '/body.js', body: true },
      { src: '/defer.js', defer: '' }
    ]
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
