import axios from 'axios';
const API_URL = `https://api.coindesk.com/v1/bpi/currentprice.json`;

export default class APIService {
    
    constructor() {
    };
    getContacts() {
        const url = `${API_URL}`;
        return axios.get(url).then(response => response.data.bpi);
    }
    getContact(pk) {
        const url = `${API_URL}/api/contacts/${pk}`;
        return axios.get(url).then(response => response.data.bpi);
    }
    
}
