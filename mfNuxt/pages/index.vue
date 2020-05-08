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
  name: 'Forsiden',

  components: {
    heroTopp,
    utregning,
    footerBunn,
    appInfo,
  }
}
</script>
