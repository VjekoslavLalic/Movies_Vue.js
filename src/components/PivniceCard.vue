<template>
  <div class="PivovareCard">
    <div class="cardPivovare">
      <div class="infoCardPivovare">
        <h1>{{ info.naziv }}</h1>
        <div class="infoPivovare">
          <p>Adresa: {{ info.adresa }}</p>
          <p>Telefon: {{ info.telefon }}</p>
          <p>Radno vrijeme: {{ info.radnoVrijeme }}</p>
        </div>
      </div>
      <div class = imgpivovare>
        <img :src="info.img" />
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  props: ["info"],
  name: "PivniceCard",
};
</script>
<style>
.cardPivovare {
  display: flex;
  margin: 20px auto 20px auto;
  border: solid rgba(20, 17, 17, 0.64) 2px;
  padding: 0px;
  width: 800px;
  height: 300px;
  background-color: #2d0808;
  
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
.infoPivovare button {
  background-color: #390d0d;
  color: hsl(0, 0%, 72%);
  border: 2px solid rgba(20, 17, 17, 0.64);
  border-radius: 10px;
  width: 85px;
}
</style>
