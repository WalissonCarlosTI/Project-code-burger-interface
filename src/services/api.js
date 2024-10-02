import axios from "axios"

const apiCodeBurger = axios.create({
    baseURL: "http://localhost:3001"
})

export default apiCodeBurger

// rodar front - yarn start