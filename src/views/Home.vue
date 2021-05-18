<template>
  <div class="home">
    <div class="zgradaPivMed">
      <img src="@/assets/pivovaramedvedgradhome.jpg" />
      <div class="naslovPivMed"><p>Pivovara Medvedgrad</p></div>
    </div>

    <div class="infoPivnice">
      <div class="leftDiv">
        <h2>PIVNICE</h2>
        <p>
          Provjerite radno vrijeme naših pivnica i mogućnosti preuzimanja i
          narudžbe hrane i piva za van.
        </p>
        <router-link class="toPivnice" to="/Pivnice">Provjeri</router-link>
      </div>
      <img src="@/assets/pivnice.jpg" />
    </div>

    <div class="infoPivnice">
      <img src="@/assets/obilazak.jpg" />
      <div class="leftDiv">
        <h2>OBILAZAK</h2>
        <p>
          Skupite ekipu i zavirite u najsretnije mjesto na svijetu – mjesto gdje
          se kuha pivo! Od ponedjeljka do petka od 10-18 sati, najave primamo na
          mail tour@pivovara-medvedgrad.hr
        </p>
      </div>
    </div>
    <div class="infoPivnice">
      <div class="leftDiv">
        <h2>MEDVEDGRAD FOUNDERBEAM</h2>
        <p>
          2017. započeli smo prikupljati sredstva za izgradnju nove, moderne
          pivovare crowdfunding kampanjom na Funderbeam platformi. Bila je ovo
          jedna od najuspješnijih kampanja ove platforme, u kojoj je sudjelovalo
          292 ulagača iz 26 zemalja svijeta.
        </p>
      </div>
      <iframe
        width="65%"
        height="100%"
        src="https://www.youtube.com/embed/MPDPskicGs8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style>
.home {
  color: white;
}
.zgradaPivMed {
  margin-top: 30px;
}
.zgradaPivMed img {
  width: 946px;
  height: 409px;
  border: 3px solid rgba(20, 17, 17, 0.64);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}
.naslovPivMed {
  border: 3px solid rgba(20, 17, 17, 0.64);
  width: 200px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: rgba(20, 17, 17, 0.64);
}
.naslovPivMed {
  font-size: 17px;
}
/* Div za card koji ima naslov tekst  router link provjeri slijeva i desno img */
.infoPivnice {
  display: flex;
  width: 700px;
  height: 250px;
  margin: 30px auto 30px auto;
  text-align: left;
  padding: 0px;
  background-color: #171616;
}
/* Lijevi div pod cardom sadrži naslov tekst i routerlink */
.leftDiv {
  margin-left: 15px;
  margin-top: 15px;
  margin-right: 15px;
  width: 35%;
}
/* router link klasa */
.toPivnice {
  text-decoration: none;
  background-color: #390d0d;
  color: hsl(0, 0%, 72%);
  border: 2px solid rgba(10, 9, 9, 0.932);
  border-radius: 10px;
  width: 300px;
  padding: 5px;
}
.infoPivnice img {
  width: 63%;
  height: 100%;
}
</style>
