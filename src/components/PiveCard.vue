<template>
  <div class="PiveCard">
    <div class="cardPiva">
      <div class="cardImgPiva">
        <img :src="info.img" />
      </div>
      <div class="cardInfoPiva">
        <div class="imeIvrsta">
          <h1>{{ info.name }}</h1>
          <p>{{ info.vrsta }}</p>
          <button>Više</button>
        </div>
        <div class="infoPiva">
          <div class="info">
            <p>ABV</p>
            <p>{{ info.abv }}</p>
          </div>
          <div class="info">
            <p>IBU</p>
            <p>{{ info.ibu }}</p>
          </div>
          <div class="info">
            <p>MJ</p>
            <p>{{ info.mj }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "PiveCard",
};
</script>

<style>
/* Glavni div na cardu piva koji sadrži ostale div elemente */
.cardPiva {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: solid black 2px;
  padding: 0px;
  width: 650px;
}
/* Lijevi div koji se nalazi unutar cardPiva div elementa*/
.cardImgPiva img {
  height: 330px;
  padding: 0px;
  width: 100%;
}
/* Div unutar cardInfoPiva  koji sadrži info o pivu abv, ibu imj i sadrži jođ druga 3 div elementa */
.infoPiva {
  float: left;

  position: absolute;
  bottom: 10px;
  width: 50%;
  margin-left: 20px;
}
.info {
  float: left;
  border: solid black 1px;
  margin-left: auto;
  margin-right: auto;
  width: 33%;
}
.cardInfoPiva {
  position: relative;
  width: 100%;
}
.imeIvrsta {
  float: left;
  margin-left: 30px;
  text-align: left;
}
</style>