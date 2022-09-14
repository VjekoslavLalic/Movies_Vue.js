<template>
  <div class="Piva">
    <h1>Naša piva</h1>
    <div class="pivamenu">
      <router-link class="routerlinkpiva" to="/svapiva">Sva piva</router-link>|
      <router-link class="routerlinkpiva" to="/stalnapiva">Stalna piva</router-link>|
      <router-link class="routerlinkpiva" to="/sezonskapiva">Sezonska piva</router-link>|
      <router-link class="routerlinkpiva" to="/fantompiva">Fantom piva</router-link>
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
    fetch("https://immense-waters-06232.herokuapp.com/svapiva")
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
  margin-top: 20px;
  color: white;
}
.pivamenu {
  margin-top: 20px;
  margin-bottom: 50px;
}

.routerlinkpiva {
  text-decoration: none;
}
.routerlinkpiva:link {
  padding: 30px;
  font-size: 22px;
  text-decoration: none;
}
.routerlinkpiva:visited {
  color: white;
  text-decoration: none;
}
.routerlinkpiva:hover {
  background-color: rgba(0, 0, 0, 0.001);
  text-decoration: none;
}

</style>