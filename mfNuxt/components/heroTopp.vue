<template>
    <div class="heroTopp">
        <section class="sectionUtreg">
             <h1 class="titleBig">
               Beregn fraværet ditt på sekunder.
             </h1>
             <h2 class="subtitleBig">
               Gjelder for <b>høsten 2022</b> og <b>våren 2023</b>
             </h2>
             <div class="containerWarning">
             <b-message type="is-success" >
               MittFravær er nå oppdatert for 2022-2023.<br><a href="https://www.udir.no/regelverk-og-tilsyn/skole-og-opplaring/saksbehandling/fravar/fravar-i-videregaende/"><b>Les mer om fraværsgrensen på UDIR</b></a>
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