<template>
  <div class="Pivnice">
    <h1>Pivnice</h1>
    <pivnice-card
      v-for="(card, drac) in cardsPivnice"
      :key="drac"
      :info="card"
    />
  </div>
</template>

<script>
import PivniceCard from "../components/PivniceCard.vue";





let cards = []
let cardsPivnice = [];


export default {
  name: "Pivnice",
  data(){
    return{
      cardsPivnice,
    }
  },
  async mounted(){
    fetch("http://localhost:3330/pivnice")
    .then(r=>{
          return r.json()
    })
    .then(data => {
      console.log("PODACI SA BACKENDA", data)
      
      
      let data2 = data.map((element) => {
        return {
          img: element.img,
          naziv: element.nazivPivovare,
          adresa: element.adresa,
          telefon: element.telefon,
          radnoVrijeme: element.radnoVrijeme,
        }
      })
      console.log(data2)
      this.cardsPivnice = data2
})
},

  components: {
    PivniceCard,
  }
};
/*
async mounted() {
    fetch("http://localhost:3330/pivnice")
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        console.log("Podaci s backenda, pivnice", data);

        this.cardsPivnice = data.map((element) => {
          return {
          
            naziv: element.nazivPivovare,
            adresa: element.adresa,
            telefon: element.telefon,
            radnoVrijeme: element.radnoVrijeme
            
          };
          nazivPivovare: "Ilica",
            adresa: "Ilica 49",
            telefon: "01/4846-922",
            fax: "01 / 3646 - 559",
            radnoVrijeme: "10 - 24",
            opis:
          });
        
      });
      
  },
  */
</script>

<style>
.Pivnice {
  color: white;
}
.pivnicemenu {
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>

