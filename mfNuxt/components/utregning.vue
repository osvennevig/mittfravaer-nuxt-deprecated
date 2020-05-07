<template>
  <div id="app">
  <div class="utregningContainer">
    <section class="section">
      <div class="container">
        <div class="hero-body">
                  <h1 class="udokh1">Antall udokumenterte timer: {{ udok }}</h1>
                  <b-field>
                  <b-numberinput size="is-medium" v-model="udok" min="1">
                  </b-numberinput>
                  </b-field>

                  <h1 class="fagh1">Antall timer i faget i uken: {{ fag }}</h1>
                  <b-field>
                  <b-numberinput size="is-medium" v-model="fag" min="1">
                  </b-numberinput>
                  </b-field>

                  <h1 class="sumh1">{{ bmiCalculation }}</h1>
</div>
</div>
</section>

  </div>
  </div>
</template>

<script>

export default {
        data: function () {
        return {
          fag: 1,
          udok: 1,
        }
        },
        computed: {
          bmiCalculation: function() {
            var udok = parseInt(this.udok) * 100;
            var fag = parseInt(this.fag);
            var bmi = udok / (fag *38);
            
            if (bmi < 3) {
              return "Din prosent er Lav: " + bmi.toFixed(2) + " :-)";
            } else if (bmi >= 3 && bmi < 5) {
              return "Din prosent er Moderat: " + bmi.toFixed(2) + " :-/";
            } else if (bmi >= 5) {
              return "Din prosent er Høy: " + bmi.toFixed(2) + " :-(";
            }
            return "Juster på bryterne for å regne ut";
          }
        }
}
</script>

<style scoped>
.utregningContainer {
  background-color:#7442bb;
  color:#FFF;
}
.udokh1 {
  font-size: 1.2em;
}
.fagh1 {
  font-size: 1.2em;
  margin-top: 1em;
}
.sumh1 {
  font-size: 1.2em;
  font-weight: 600;
  margin-top: 1em;
}
</style>