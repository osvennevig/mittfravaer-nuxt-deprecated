<template>
  <div id="app">
  <div class="utregningContainer">
    <section class="section">
        <div class="hero-body">
      <div class="container">
           <div class="columns">
            
           <div class="column">
                  <div class="columnSum">
                      <h1 class="sumh1">Din prosent: <br>{{ bmiCalculation }}</h1>
                  </div>
           </div>

           <div class="column">
              <div class="columnUtreg">
        
                  <h1 class="udokh1">Antall udokumenterte timer: </h1>
                  <b-field>
                  <b-numberinput size="is-medium" v-model="udok" min="1">
                  </b-numberinput>
                  </b-field>

                  <h1 class="fagh1">Antall timer i faget i uken: </h1>
                  <b-field>
                  <b-numberinput size="is-medium" v-model="fag" min="1">
                  </b-numberinput>
                  </b-field>
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
  background-color:#7442bb;
  color:#FFF;
}
.udokh1 {
  font-size: 1.8em;
  font-weight: 500;
  color:#4a4a4a;
  text-align: left;
}
.fagh1 {
  font-size: 1.8em;
  font-weight: 500;
  margin-top: 1em;
  color:#4a4a4a;
  text-align: left;
}
.sumh1 {
  font-size: 3em;
  font-weight: 600;
  color:#FFF;
}

.columnUtreg {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: -0.75rem;
    padding: 20px;
}
.columnSum {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
    border-radius: 10px;
    margin-bottom: -0.75rem;
    padding: 20px;
    
}
</style>