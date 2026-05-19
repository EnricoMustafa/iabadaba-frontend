import { api } from "./api"

export const authServices = {
    login: async (email: string, password: string) => {
        const { data } = await api.post('/auth/login',{ email, password })
        localStorage.setItem('token', data.access_token)
        return data
    },

    register: (name: string, email: string, password: string) => {
        api.post('/auth/register', { name, email, password })
    }, 

    logout: () => {
        localStorage.removeItem('token')
    },
}