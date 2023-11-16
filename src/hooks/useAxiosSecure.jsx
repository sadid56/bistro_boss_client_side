import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSexure = axios.create({
    baseURL: 'http://localhost:8000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()

    axiosSexure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('request stop', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function(error){
        return Promise.reject(error)
    })

    // intercepts 403 and 401
    axios.interceptors.response.use(response => {
        return response;
    }, async(error) =>{

        const status = error.response.status;
        if(status === 401 || status === 403){

           await  logOut()
            

            navigate('/')
        }

        return Promise.reject(error)
    })
    return axiosSexure;
}
 
export default useAxiosSecure;