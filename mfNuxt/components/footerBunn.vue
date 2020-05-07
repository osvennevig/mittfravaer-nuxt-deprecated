<template>
<footer class="footer">
  <div class="container">
    <div class="columns is-vcentered is-multiline">
      <div class="column is-one-third">
        <div class="content has-text-centered">
          <p>
            <strong>MittFravær</strong> av <a href="https://mainly.no">Mainly</a>
            | Org.nr. 922 878 889
          </p>
        </div>
      </div>
      <div class="column is-one-third">
        <p class="supportStor"><strong> <a href="#">support@mainly.no </a></strong></p>
      </div>
      <div class="column is-one-third">
        <div class="column">

          <a href="https://facebook.com/mainly.no">
            <b-icon icon="facebook" size="is-large" />
          </a>

          <a href="https://instagram.com/mittfravaer">
            <b-icon icon="instagram" size="is-large" />
          </a>

        </div>
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
  /* margin-top: 40px; */
  background-color: #efefef;
  padding-bottom: 3em;
}
.supportStor {
  font-size: 2em;
}
</style>
