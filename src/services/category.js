import axios from "axios"
export const getCategoryBySlug = (slug)=>{
    return axios.get(`/categories/${slug}?populate=*`)
}