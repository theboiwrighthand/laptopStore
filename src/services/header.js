import axios from "axios"
export const getHeader = ()=>{
    return axios.get(`/menu-headers?populate[menuheader][populate][0]=link`)
}