<template>
    <div>
      <heroTopp/>
      <footerBunn/>
    </div>
</template>

<script>
import Card from '~/components/Card'
import heroTopp from '~/components/heroTopp'
import footerBunn from '~/components/footerBunn'

export default {
  name: 'HomePage',

  components: {
    Card,
    heroTopp,
    footerBunn,
  }
}
</script>
