import axios from 'axios';

// instanca axios-a za potrebe Fipugram backenda
let Service = axios.create({
    baseURL: 'http://localhost:3330/',
    timeout: 1000
});

// naš objekt za sve pozive koji se dotiču `Post`ova
let Posts = {
    async create(data) {
        console.log('spremam na backend', data)
    },

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
