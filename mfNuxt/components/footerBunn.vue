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
        <font-awesome-icon icon="spinner" size="xs" />
        Org.nr. 922 878 889
        
      </p>
    </div>
  </div>
  <div class="column">
    <p class ="supportStor"><strong> <a href="#">support@mainly.no </a></strong></p>
  </div>
  <div class="column">

    <a href="https://facebook.com/mainly.no">
      <b-icon
      icon="facebook"
      size="is-large"
      />
    </a>

    <a href="https://instagram.com/mittfravaer">
      <b-icon
      icon="instagram"
      size="is-large"
      />
    </a>

<!--
     <font-awesome-icon 
    :icon="['fab', 'instagram']"
     size="5x"/>
-->

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
