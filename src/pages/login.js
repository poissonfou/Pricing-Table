const axios = require('axios');
const path = require('path');

const localhost = "http://localhost:5555";

class renderLogin{
    render(){
        const get_path = path.resolve(__dirname, '..', '..', 'pages', 'login.html');
        const url = path.basename(get_path);
        axios.get(`${localhost}/login`)
        .then(response => axios.use(url))
        .catch(error => console.log(error))
    }
}

module.exports = new renderLogin();