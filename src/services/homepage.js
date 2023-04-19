import axios from "axios"
export const getImgCarouselHome = () => {
    return axios.get(`/homepage?populate=*`)
}