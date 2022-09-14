<template>
  <div class="home">
    <div class="zgradaPivMed">
      <img src="@/assets/pivovaramedvedgradhome.jpg" />
      <div class="naslovPivMed"><p>Pivovara Medvedgrad</p></div>
    </div>

    <h1>NAŠA PIVOVARA</h1>
    <h5>Tri desetljeća iskustva i ljubavi prema pivu utkano je u svaki dio naše pivovare</h5>
    <h6>Naša varionica potpuno je automatizirana i ima kapacitet kuhanja od 6 do 7 uvaraka odnosno 40.000 litara piva dnevno.</h6>


    <div class="infoPivnice">
      <div class="leftDiv">
        <h2>{{cardsOnama[0].naziv}}</h2>
        <p>
          {{cardsOnama[0].label}}
        </p>
        <button v-on:click="isHiddenVarionica = !isHiddenVarionica">Više</button>
      </div>
      <img :src="cardsOnama[0].img" />
    </div>
    <div v-if="!isHiddenVarionica" class="opis">
    <p>
      {{cardsOnama[0].opis}}
    </p>
   </div>
    
   <div class="infoPivnice">
      <img :src="cardsOnama[1].img" />
      <div class="leftDiv">
        <h2>{{cardsOnama[1].naziv}}</h2>
        <p>
          {{cardsOnama[1].label}}
        </p>
        <button v-on:click="isHiddenPodrum = !isHiddenPodrum">Više</button>
      </div>
    </div>
    <div v-if="!isHiddenPodrum" class="opis">
    <p>
      {{cardsOnama[1].opis}}
    </p>
   </div>

   <div class="infoPivnice">
      <div class="leftDiv">
        <h2>{{cardsOnama[2].naziv}}</h2>
        <p>
          {{cardsOnama[2].label}}
        </p>
        <button v-on:click="isHiddenPunjenje = !isHiddenPunjenje">Više</button>
      </div>
      <img :src="cardsOnama[2].img" />
    </div>
    <div v-if="!isHiddenPunjenje" class="opis">
    <p>
      {{cardsOnama[2].opis}}
    </p>
   </div>

   <div class="infoPivnice">
      <img :src="cardsOnama[3].img" />
      <div class="leftDiv">
        <h2>{{cardsOnama[3].naziv}}</h2>
        <p>
          {{cardsOnama[3].label}}
        </p>
        <button v-on:click="isHiddenKontrola= !isHiddenKontrola">Više</button>
      </div>
    </div>
    <div v-if="!isHiddenKontrola" class="opis">
    <p>
      {{cardsOnama[3].opis}}
    </p>
   </div>
   
   <div class="infoPivnice">
      <div class="leftDiv">
        <h2>{{cardsOnama[4].naziv}}</h2>
        <p>
          {{cardsOnama[4].label}}
        </p>
        <button v-on:click="isHiddenHladniLanac = !isHiddenHladniLanac">Više</button>
      </div>
      <img :src="cardsOnama[4].img" />
    </div>
    <div v-if="!isHiddenHladniLanac" class="opis">
    <p>
      {{cardsOnama[4].opis}}
    </p>
   </div>

  </div>
</template>

<script>
let cardsOnama = [];

export default {
  name: "Home",
  data() {
    return {
      isHiddenVarionica: true,
      isHiddenPodrum: true,
      isHiddenPunjenje: true,
      isHiddenKontrola: true,
      isHiddenHladniLanac: true,
      cardsOnama,
    };
  },
  async mounted(){
    fetch("https://immense-waters-06232.herokuapp.com")
    .then(r=>{
          return r.json()
    })
    .then(data => {
      console.log("PODACI SA BACKENDA", data)
      
      
      let data2 = data.map((element) => {
        return {
          img: element.img,
          naziv: element.naziv,
          label: element.label,
          opis: element.opis,
        }
      })
      console.log(data2)
      this.cardsOnama = data2
})
},
};
</script>
<style>
.home {
  color: white;
  padding-bottom: 200px;
}
.home h1{
  margin-top: 20px;
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
  margin: 30px auto 0px auto;
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
.infoPivnice button{
  background-color: #4f4d4d;
  width: 80px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
}
.opis{

  display: flex;
  width: 700px;
  margin: 0px auto 0px auto;
  text-align: left;
  padding: 10px;
  background-color: #171616;
}

</style>
