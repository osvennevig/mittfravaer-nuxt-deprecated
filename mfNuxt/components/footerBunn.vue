<template>
<footer class="footer">
<div class="container">
  <div class="columns">
  <div class="column">
    <div class="content has-text-centered">
      <p>
        <strong>MittFravær</strong> av <a href="https://mainly.no">Mainly</a>
      </p>
      <p>
        Org.nr. 922 878 889
      </p>
    </div>
  </div>
  <div class="column">
    <p class ="supportStor"><strong> <a href="#">support@mainly.no </a></strong></p>
  </div>
  <div class="column">
    <b-icon
      pack="fab"
      icon="facebook"
      size="is-large">
    </b-icon>
    <b-icon
      pack="fab"
      icon="instagram"
      size="is-large">
    </b-icon>

  </div>
</div>
</div>

</footer>
</template>


<script>

export default {
  name: 'footerBunn',
}

</script>

<style scoped>

.footer {
  margin-top: 40px;
  background-color: #efefef;
  padding-bottom: 3em;
}
.supportStor {
  font-size: 2em;
}

</style>
