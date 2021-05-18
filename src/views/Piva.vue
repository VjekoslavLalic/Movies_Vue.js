<template>
  <div class="Piva">
    <div class="pivamenu">
      <a>Sva piva</a> | <a>Stalna piva</a> | <a>Sezonska piva</a> |
      <a>Hladno pivo</a>
    </div>

    <pive-card v-for="(card, drac) in cardsPiva" :key="drac" :info="card" />
  </div>
</template>

<script>
import PiveCard from "../components/PiveCard.vue";

let cardsPiva = [];
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
];
export default {
  name: "Piva",
  data() {
    return {
      cardsPiva,
    };
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