<template>
    <div class="heroTopp">
        <section class="sectionUtreg">
             <h1 style="text-decoration: line-through;" class="titleBig">
               Beregn fraværet ditt på sekunder.
             </h1>
             <div class="containerWarning">
             <b-message type="is-error" has-icon>
              MittFravær ble utviklet av en ungdomsbedrift på Dahlske VGS i 2018/2019. På grunn av endringer i fraværsgrensen er det ikke lengre behov for tjenesten. <br><a href="/app"><b>Bruk fraværskalkulatoren (utdatert)</b></a>
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