
import { $host } from "./index";



export const fetchTypes = async () => {
    const { data } = await $host.get('api/category')
    return data
}


export const fetchHeroes = async (categoryId, limit) => {
    const { data } = await $host.get('api/hero', {
        params: {
            categoryId, limit
        }
    })
    return data
}

export const fetchOneHero = async (id) => {
    const { data } = await $host.get('api/hero/' + id)
    return data
}