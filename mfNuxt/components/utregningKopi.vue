<template>
  <div id="app">
    <div class="utregningContainer">
      <section class="sectionUtreg">
        <div class="hero-body-Utreg">
          <div class="container">
            <div class="columns is-mobile is-centered">
              <div class="column-desktop-only is-half">

                <div class="column">
                  <div class="columnSum">
                    <h1 class="sumh1"> 
                       <span style="font-weight: 700; font-size: .8em;"> Din prosent er: </span> <br>{{ bmiCalculation }}</h1>
                  </div>
                </div>

                <div class="column">
                  <div class="columnUtreg">

                    <h1 class="udokh1">Antall udokumenterte fraværstimer: </h1>
                    <b-field>
                      <b-numberinput size="is-medium" v-model="udok" min="1">
                      </b-numberinput>
                    </b-field>

                    <h1 class="fagh1">Antall timer i uken for gjeldende fag: </h1>
                    <b-field>
                      <b-numberinput size="is-medium" v-model="fag" min="1">
                      </b-numberinput>
                    </b-field>
                  </div>
                </div>
              </div>

            </div>
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
              return  bmi.toFixed(2) + " 😍🙌🏻";
            } else if (bmi >= 3 && bmi < 5) {
              return  bmi.toFixed(2) + " 🤨🥱";
            } else if (bmi >= 5) {
              return  bmi.toFixed(2) + " 🤬🤯";
            }
            return "Juster på bryterne for å regne ut";
          }
        }
}
</script>

<style scoped>
.utregningContainer {
  background-color: #7442bb;
  color: #FFF;
}

.udokh1 {
  font-size: 1.5em;
  font-weight: 500;
  color: #292929;
  text-align: left;
  margin-bottom: 10px;
}

.fagh1 {
  /*font-size: 25px;*/
  font-size: 1.5em;
  font-weight: 500;
  margin-top: 1em;
  color: #292929;
  text-align: left;
  margin-bottom: 10px;
}

.sumh1 {
  font-size: 2.8em;
  font-weight: 800;
  color: #FFF;
  line-height: 1.25;
}

.columnUtreg {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: -0.75rem;
  /* padding: 1.5em;*/
  padding: 2.5em;
}

.columnSum {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
  border-radius: 10px;
  margin-bottom: -0.75rem;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.sectionUtreg {
  padding: 3.5rem 1.5rem;
}

.hero-body-Utreg {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  padding: 1rem 1rem;
}

</style>