import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '05df1bc4356b46bab322c629b4f2292e'
    }
})