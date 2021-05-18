<template>
  <div class="PivniceCard">
    <div class="cardPivnica">
      <div class="infoCardPivnica">
        <h1>{{ info.naziv }}</h1>
        <div class="infoPivnice">
          <p>Adresa: {{ info.adresa }}</p>
          <p>Telefon: {{ info.telefon }}</p>
          <p>Radno vrijeme: {{ info.radnoVrijeme }}</p>
          <button>Više</button>
        </div>
      </div>
      <img :src="info.img" />
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
.cardPivnica {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: solid rgba(20, 17, 17, 0.64) 2px;
  padding: 0px;
  width: 650px;
}
.cardPivnica img {
  width: 380px;
  height: 156px;
  border: 3px solid rgba(20, 17, 17, 0.64);
  border-radius: 28px;
  margin-top: auto;
  margin-bottom: auto;
}
.infoCardPivnica {
  width: 35%;
  text-align: left;
  margin-left: 20px;
}
.infoPivnice button {
  background-color: #390d0d;
  color: hsl(0, 0%, 72%);
  border: 2px solid rgba(20, 17, 17, 0.64);
  border-radius: 10px;
  width: 85px;
}
</style>
