import axios from 'axios';

//vezan za konkretni backend
let Service = axios.create({
    baseURL: "http://localhost:3330",
    timeout: 1000
})
//vezan za pojedine rute
let posts = {

}
export { Service }