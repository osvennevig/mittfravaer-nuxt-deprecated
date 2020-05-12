<template>
    <div class="appInfo">
      <section class="section">
        <div class="container">
          <div class="hero">

            <div class="columns is-vcentered">
              <div class="column is-half">
                <h1 class="titleBig">
                  Nå tilgjengelig som app for iPhone og Android.
                </h1>
                <h2 class="subtitleBigLeft">
                  Den nye MittFravær appen for iPhone lar deg holde oversikt over opptil 6 fag samtidig gjennom hele
                  semesteret. På Android kommer vi snart med en større oppdatering.
                </h2>
              <div class="appStoresBtnLeft">
                 <a href="https://apps.apple.com/no/app/mittfravær-beregn-fravær/id1495639218?l=nb"> <b-button style="background-color:#FF7052; color: #fff;" size="is-medium">Last ned fra App Store</b-button></a>
              </div>
              <div class="appStoresBtnLeft"> 
                 <a href="https://play.google.com/store/apps/details?id=com.mainly.mittfravaer"> <b-button style="background-color:#FF7052; color: #fff;" size="is-medium">Last ned fra Google Play</b-button></a>
              </div>
              </div>
              <div class="column is-half">
                <img class="appInfoIMG" src="~assets/MF-Android-ios.png" alt="MittFravær App"><img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<style scoped>
.appInfo {
    background-color:rgb(255, 255, 255);
    padding: 1rem 1rem;
}
.titleBig {
  color: #7442BB;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.125;
  word-break: break-word;
  padding-bottom:5px;
  text-align: left;
}
.subtitleBigLeft {
  color: #4a4a4a;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.25;
  word-break: break-word;
  text-align: left;
}
.appInfoIMG {
  max-height: 800px;
  width: auto;
}
@media (min-width: 1216px) {
.column {
padding-left: 50px;
padding-right: 50px;
}
}
.appStoresBtnLeft {
  padding-top: 15px;
  text-align: left;
}
</style>