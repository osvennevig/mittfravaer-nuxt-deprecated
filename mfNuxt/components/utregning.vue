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
                  <div class="columnUtreg">

                    <h1 class="udokh1">Antall udokumenterte fraværstimer: </h1>
                    <b-field>
                      <b-numberinput alt="Antall udokumenterte fraværstimer:" size="is-medium" v-model="udok" min="1">
                      </b-numberinput>
                    </b-field>

                    <h1 class="fagh1">Antall timer i uken for gjeldende fag: </h1>
                    <b-field>
                      <b-numberinput alt="Antall timer i uken for gjeldende fag:" size="is-medium" v-model="fag" min="1">
                      </b-numberinput>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
 <p class="bd-notification is-primary">Kalkulatoren tar for seg ett helt år (høst + vår). <br>Derfor kan prosenten bli lavere enn den ofte vises i skolesystemene.</p>
        <!--    <div class="columns is-mobile is-centered">
              <div class="column-desktop-only is-half">
              </div>
              
               <div class="column">
                <div class="columnForklaring">
                    <h1 class="forklaringh1">Dette er en kort forklaring på at kalkulatoren regner ut basert på et helt år (to semestere) Derfor blir prosenten lavere.</h1>
                </div>
               </div>

              </div> -->

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
              return  bmi.toFixed(2) + " 😍🤓";
            } else if (bmi >= 3 && bmi < 5) {
              return  bmi.toFixed(2) + " 🤨🥱";
            } else if (bmi >= 5 && bmi < 7) {
              return  bmi.toFixed(2) + " 😫😩";
            } else if (bmi >= 7 && bmi < 9) {
              return  bmi.toFixed(2) + " 😭🥺";
            } else if (bmi >= 9 && bmi < 15) {
              return  bmi.toFixed(2) + " 😭🥺";
            } else if (bmi >= 15) {
              return  " 🤯 sorry as... Sonans?";
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
.forklaringh1 {
  font-size: 1.2em;
  font-weight: 500;
  color: #292929;
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.25;
}

.udokh1 {
  font-size: 1.5em;
  font-weight: 500;
  color: #292929;
  text-align: left;
  margin-bottom: 10px;
  line-height: 1.25;
}

.fagh1 {
  /*font-size: 25px;*/
  font-size: 1.5em;
  font-weight: 500;
  margin-top: 1em;
  color: #292929;
  text-align: left;
  margin-bottom: 10px;
  line-height: 1.25;
}

.sumh1 {
  font-size: 2.8em;
  font-weight: 800;
  color: #FFF;
  line-height: 1.25;
  margin-bottom: 10px;
}

.columnUtreg {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-bottom: -0.75rem;
  margin-top: -0.75rem;
  background-color: #fff;
  border-radius: 10px;
  
  /* padding: 1.5em;*/
  padding: 2.5em;
}

.columnForklaring {
  /*margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-bottom: -0.75rem;
  margin-top: -0.75rem;*/
  background-color: whitesmoke;
  border-radius: 10px;
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
  padding: 4rem 1.5rem;
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