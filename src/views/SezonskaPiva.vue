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
      fetch("http://localhost:3330/sezonskapiva")
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
  
  /*
  id
  :
  10001
  naziv
  :
  "Zlatni medvjed"
  vrstaPiva
  :
  "Pilsner"
  postotakAlkohola
  :
  4.4
  gorcina
  :
  22
  uravnoteziteljSSK
  :
  "1 - 12"
  opis
  
  cardsPiva = [
    {
      img: require("@/assets/Baltazar.jpg"),
      name: "Baltazar",
      vrsta: "Plemeniti pilsner",
      abv: "6,1%",
      ibu: "32",
      mj: "3",
    },
  
    {
      img: require("@/assets/Crnakraljica.jpg"),
      name: "Crna kraljica",
      vrsta: "Crni lager",
      abv: "4,8%",
      ibu: "20",
      mj: "1-12",
    },
    {
      img: require("@/assets/Zlatnimedved.jpg"),
      name: "Zlatni medvjed",
      vrsta: "Pilsner",
      abv: "4,4%",
      ibu: "22",
      mj: "1-12",
    },
  ];*/
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