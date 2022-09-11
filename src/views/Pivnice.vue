<template>
  <div class="Pivnice">
    <h1>Pivnice</h1>
    <pivnice-card
      v-for="(card, drac) in cardsPivnice"
      :key="drac"
      :info="card"
    />
  <div class = "rezerviraj">
    <h1>REZERVIRAJ MJESTO</h1>
  </div>
  <div class="container">
  <form action="/action_page.php">
    <label>Ime:</label>
    <input type="text" id="info" name="firstname" placeholder="Ime...">

    <label>Prezime:</label>
    <input type="text" id="info" name="lastname" placeholder="Prezime...">

    <label>Broj osoba: </label>
    <input type="text" id="info" name="lastname" placeholder="Broj osoba...">

    <label for="country">Pivovara: </label>

    <select id="info">
      <option value="Ilica">Ilica</option>
      <option value="Mali Medo">Mali Medo</option>
      <option value="Fakin Craft Bar">Fakin Craft Bar</option>
      <option value="Samoborska">Samoborska</option>
    </select>

    <form>
      <label>Datum:</label><br>
      <input type="date" id="info" name="rezervacija">
    </form><br>

    <label for="subject">Napomena</label>
    <textarea id="info" name="subject" placeholder="Napomena..." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>
    
  </div>
</template>

<script>
import PivniceCard from "../components/PivniceCard.vue";





let cards = []
let cardsPivnice = [];


export default {
  name: "Pivnice",
  data(){
    return{
      cardsPivnice,
    }
  },
  async mounted(){
    fetch("http://localhost:3330/pivnice")
    .then(r=>{
          return r.json()
    })
    .then(data => {
      console.log("PODACI SA BACKENDA", data)
      
      
      let data2 = data.map((element) => {
        return {
          img: element.img,
          naziv: element.nazivPivovare,
          adresa: element.adresa,
          telefon: element.telefon,
          radnoVrijeme: element.radnoVrijeme,
        }
      })
      console.log(data2)
      this.cardsPivnice = data2
})
},

  components: {
    PivniceCard,
  }
};
/*
async mounted() {
    fetch("http://localhost:3330/pivnice")
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        console.log("Podaci s backenda, pivnice", data);

        this.cardsPivnice = data.map((element) => {
          return {
          
            naziv: element.nazivPivovare,
            adresa: element.adresa,
            telefon: element.telefon,
            radnoVrijeme: element.radnoVrijeme
            
          };
          nazivPivovare: "Ilica",
            adresa: "Ilica 49",
            telefon: "01/4846-922",
            fax: "01 / 3646 - 559",
            radnoVrijeme: "10 - 24",
            opis:
          });
        
      });
      
  },
  */
</script>

<style>
.Pivnice {
  color: white;
}
.pivnicemenu {
  margin-top: 20px;
  margin-bottom: 50px;
}
.rezerviraj{
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
  border: 3px solid rgb(46, 45, 45);
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  color: rgb(6, 6, 6)
}


input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid rgb(77, 75, 75);
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  
}
#info{
  background-color: rgb(179, 179, 179);
}
input[type=submit] {
  background-color: rgb(40, 34, 34);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  width: 600px;
  height: 100%;
  border-radius: 5px;
  background-color: rgb(66, 64, 64);
  padding: 20px;
  text-align: left;
}
</style>

