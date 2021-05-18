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
let cardsPivnice = [];

cardsPivnice = [
  {
    img: require("@/assets/Ilicaterasa.jpg"),
    naziv: "Ilica",
    adresa: "ilica49",
    telefon: "01 4846 922",
    radnoVrijeme: "10-24h",
  },
  {
    img: require("@/assets/Fakincraftbar.jpg"),
    naziv: "Fakin craft bar",
    adresa: "Vukovarska 68",
    telefon: "01 6293 377",
    radnoVrijeme: "7:30-24h",
  },
  {
    img: require("@/assets/Malimedo.jpg"),
    naziv: "Mali medo",
    adresa: "Tkalčićeva 36",
    telefon: "01 4929 613",
    radnoVrijeme: "10-24h",
  },
  {
    img: require("@/assets/Samoborska.jpg"),
    naziv: "Samoborska",
    adresa: "Samoborska cesta 217",
    telefon: "01 6293 377",
    radnoVrijeme: "10-24h",
  },
];
/* { img: "", naziv: "", adresa: "", telefon: "", radnoVrijeme: "" } */
export default {
  name: "Pivnice",
  data() {
    return {
      cardsPivnice,
    };
  },
  components: {
    PivniceCard,
  },
};
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

