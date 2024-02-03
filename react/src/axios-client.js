import axios from "axios";

const axiosClient = axios.create({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api`,
})

// axios interceptors : before sending request or after receiving response
axiosClient.interceptors.request.use((client) => {
    const token = localStorage.get('ACCESS_TOKEN')
    client.headers.Authorization = `Bearer ${token} `

    return client;
})

axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    const { response } = error;
    if (response.status == 401) {
        localStorage.removeItem('ACCESS_TOKEN')
    }

    throw error
})

export default axiosClient;