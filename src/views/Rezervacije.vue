<template>
    <div class = "maindiv">
      <div class = "rezerviraj">
    <h1>REZERVIRAJ MJESTO</h1>
  </div>
  <div class="container">
  <form method="POST">
    <label>Ime:</label>
    <input v-model="ime" type="text" id="info" name="firstname" placeholder="Ime...">

    <label>Prezime:</label>
    <input v-model="prezime" type="text" id="info" name="lastname" placeholder="Prezime...">

    <label>Broj osoba: </label>
    <input v-model = "brojosoba" type="text" id="info" name="lastname" placeholder="Broj osoba...">

    <label for="country">Pivovara: </label>

    <select v-model="pivovara" id="info">
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
    <textarea v-model="napomena" id="info" name="subject" placeholder="Napomena..." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>
</div>
</template>
<script>
  import { Posts } from '@/services';


export default {
  name: "Rezervacije",
  data() {
        return {
            store,
            imageData: null,
            ime: '',
            prezime: '',
            brojosoba:'',
            pivovara: '',
            napomena: ''
        };
    },
  methods: {


    async postImage() {
            let post = {
                ime: this.ime,
                prezime: this.prezime,
                brojosoba: this.brojosoba,
                pivovara: this.pivovara,
                napomena: this.napomena,
            };
            let newpost = await Posts.add(post);
            console.log('Spremljeni post', newpost.data);
            this.$router.push({ name: 'Rezervacije' });
        },
  }
}


</script>
<style scoped>
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