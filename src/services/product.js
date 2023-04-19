import axios from "axios";
export let getProductByCategory = (lastUrl,page = 1) => {
    return axios.get(`${lastUrl}&pagination[page]=${page}&pagination[pageSize]=4&sort[0]=updatedAt%3Adesc&populate=*`)
}
export const getProductBySlug = (slug)=>{
    return axios.get(`/products/${slug}`)
}