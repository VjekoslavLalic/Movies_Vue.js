import axios from 'axios';

// instanca axios-a za potrebe Fipugram backenda
let Service = axios.create({
    baseURL: 'https://immense-waters-06232.herokuapp.com',
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

};

export { Service, Posts }; // exportamo Service za ručne pozive ili Posts za metode.
