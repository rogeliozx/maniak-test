import axios from 'axios';  

const clientAxios=axios.create({
    baseURL:'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master'
});

export default clientAxios;