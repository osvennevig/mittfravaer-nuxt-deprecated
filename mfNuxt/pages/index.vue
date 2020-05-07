<template>
    <div>
      <heroTopp/>
      <utregning/>
      <footerBunn/>
    </div>
</template>

<script>
import heroTopp from '~/components/heroTopp'
import footerBunn from '~/components/footerBunn'
import utregning from '~/components/utregning'

export default {
  name: 'HomePage',

  components: {
    heroTopp,
    utregning,
    footerBunn,
  }
}
</script>
