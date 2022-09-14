import axios from 'axios';

// instanca axios-a za potrebe Fipugram backenda
let Service = axios.create({
    baseURL: 'https://immense-waters-06232.herokuapp.com/',
    timeout: 1000
});

// naš objekt za sve pozive koji se dotiču `Post`ova
let Posts = {
    async create(data) {
        let serverData = {
            ime: data.ime,
            prezime: data.prezime,
            datum: data.datum,
            brojOsoba: data.brojosoba,
            izborPivnice: data.pivovara,
            napomena: data.napomena,
            telefon: data.telefon,
            vrijemeRezervacije: data.vrijemeRezervacije
        }
        console.log('spremam na backend', data)
        await Service.post("/rezervacije", serverData)
        return
    },
    /*        ime: this.postIme,
              prezime: this.postPrezime,
              brojosoba: this.postBrojOsoba,
              pivovara: this.postPivovara,
              napomena: this.postNapomena,
              datum: this.postDatum*/
    /*
    async getAll() {

        let response = await Service.get('/rezervacije');
        let data = response.data
        data = data.map(doc => {
            return {
                ime: this.ime,
                prezime: this.prezime,
                brojosoba: this.brojosoba,
                pivovara: this.pivovara,
                napomena: this.napomena,
            }
        });
        return data;

    }
    */
};

export { Service, Posts }; // exportamo Service za ručne pozive ili Posts za metode.
