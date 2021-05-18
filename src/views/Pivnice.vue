<template>
  <div class="Pivnice">
    <div class="pivnicemenu">
      <a>Ilica</a> | <a>Fakin craft bar</a> | <a>Mali medo</a> |
      <a>Samoborska</a>
    </div>
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
    naziv: "Ilica",
    adresa: "ilica49",
    telefon: "01 4846 922",
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

PivniceCard;
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

