<template>
<footer class="footer">
  <div class="container">
    <div class="columns is-vcentered is-multiline" style="  justify-content: center;
  gap: 16px;
}">
      <div style="margin-bottom: 16px; margin-top: 16px;">
          <p>
            <strong>MittFravær</strong> av <a href="https://www.svennevigflaaten.no/">Svennevig & Flaaten</a>
          </p>
      </div>
      <!--
      <div class="column is-one-third">
        <p class="supportStor"><strong> <a href="mailto:hjelp@mainly.no">hjelp@mainly.no </a></strong></p>
      </div>
      -->
       <div style="margin-bottom: 16px; margin-top: 16px;">
          <a href="https://instagram.com/mittfravaer">
            <b-icon icon="instagram" size="is-medium" alt="Instagram" />
          </a>
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
  background-color:whitesmoke;
  padding-bottom: 3em;
}
.supportStor {
  font-size: 1.5em;
}
</style>
