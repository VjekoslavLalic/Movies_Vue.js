<template>
  <div class="Piva">
    <h1>Naša piva</h1>
    <div class="pivamenu">
      <router-link class="routerlink" to="/svapiva">Sva piva</router-link>|
      <router-link class="routerlink" to="/stalnapiva">Stalna piva</router-link>|
      <router-link class="routerlink" to="/sezonskapiva">Sezonska piva</router-link>
    </div>

    <pive-card v-for="(card, drac) in cardsPiva" :key="drac" :info="card" />
  </div>
</template>

<script>
import PiveCard from "../components/PiveCard.vue";

let cardsPiva = [];

export default {
  name: "Piva",
  data() {
    return {
      cardsPiva,
    };
  },
  async mounted(){
    fetch("http://localhost:3330/svapiva")
    .then(r=>{
          return r.json()
    })
    .then(data => {
      console.log("PODACI SA BACKENDA", data)
      
      
      let data2 = data.map((element) => {
        return {
          img: element.img,
          name: element.naziv,
          vrsta: element.vrstaPiva,
          abv: element.postotakAlkohola,
          ibu: element.gorcina,
          mj: element.uravnoteziteljSSK,
          opis: element.opis
        }
      })
      console.log(data2)
      this.cardsPiva = data2
})
},
  components: {
    PiveCard,
  },
};


</script>
<style>
.Piva {
  color: white;
}
.pivamenu {
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>