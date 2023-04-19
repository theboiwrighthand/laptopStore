import axios from "axios"
export const getBlogBySlug = (slug)=>{
    return axios.get(`/blogs/${slug}`)
}