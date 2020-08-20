<template>
    <div class="heroTopp">
        <section class="sectionUtreg">
             <h1 class="titleBig">
               Beregn fraværet ditt på sekunder.
             </h1>
             <h2 class="subtitleBig">
               Gjelder for høsten 2012 og våren 2021
             </h2>
             <div class="containerWarning">
             <b-message type="is-warning" has-icon>
               NB! Fraværsreglene er endret midlertidig frem til 1.november på grunn av Covid 19 situasjonen. <br><a href="https://www.vg.no/nyheter/innenriks/i/mRG0L4/fravaersregler-endres-egenmelding-og-melding-fra-foresatte-gir-gyldig-fravaer"><b>Les mer på VG</b></a>
            </b-message>
             </div>

        </section>
    </div>
</template>

<style scoped>
.heroTopp {
    background-color:rgb(255, 255, 255);
}
.sectionUtreg {
  padding: 3.5rem 1.5rem;
}
.titleBig {
  color: #7442BB;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.125;
  word-break: break-word;
  padding-bottom:5px;
}
.subtitleBig {
  color: #4a4a4a;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.25;
  word-break: break-word;
}
.containerWarning {
  max-width: 700px;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  padding-top: 1.5rem;
}
</style>