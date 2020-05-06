<template>
  <section class="section">
    <div>
      <heroTopp/>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import heroTopp from '~/components/heroTopp'

export default {
  name: 'HomePage',

  components: {
    Card,
    heroTopp
  }
}
</script>
