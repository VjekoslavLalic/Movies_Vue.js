<template>
  <div class="PivovareCard">
    <div class="cardPivovare">
      <div class="infoCardPivovare">
        <h1>{{ info.naziv }}</h1>
        <div class="infoPivovare">
          <p>Adresa: {{ info.adresa }}</p>
          <p>Telefon: {{ info.telefon }}</p>
          <p>Radno vrijeme: {{ info.radnoVrijeme }}</p>
          <button v-on:click="isHidden = !isHidden">Više</button>
          <router-link class = "rezervirajBTN" to="/rezervacije">Rezerviraj mjesto</router-link>
        </div>
      </div>
      <div class = imgpivovare>
        <img :src="info.img" />
      </div>
      
    </div>
   <div v-if="!isHidden" class="opisPivovare">
    <p>
      {{info.opis}}
    </p>
   </div>
  </div>
</template>
<script>
export default {
  props: ["info"],
  name: "PivniceCard",
  data(){
    return{
      isHidden: true,
    }
},
};
</script>
<style scroped>
.cardPivovare {
  display: flex;
  margin: 20px auto 0px auto;
  border: solid rgba(20, 17, 17, 0.64) 2px;
  padding: 0px;
  width: 800px;
  height: 300px;
  background-color: #2d0808;
  
}
.opisPivovare{
  background-color: #2d0808;
  padding: 0px;
  width: 800px;
  height: 150;
  margin: 0px auto 0px auto;
  text-align: left;
  padding: 10px;
}
.cardPivovare img {
  width: 100%;
  height: 100%;
}
.imgpivovare{
  width: 100%;
  height: 100%;
  margin-right: 0px;
}
.infoCardPivovare {
  width: 40%;
  text-align: left;
  margin: 10px 20px 190px 20px;
}
.infoCardPivovare h1{
  color:white;
}
.infoPivovare button {
  color: white;
  background-color: rgb(120, 48, 48);;
  padding: 6px;
  border-radius: 8px;
  width: 30%;
}
.rezervirajBTN{
  color: white;
  background-color: rgb(120, 48, 48);;
  padding: 10px;
  border-radius: 8px;
  width: 50%;
  margin-left: 2px;
  border: 2px solid black;
  
  
} 
</style>
