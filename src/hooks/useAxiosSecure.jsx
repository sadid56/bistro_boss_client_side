import axios from "axios";

export const axiosSexure = axios.create({
    baseURL: 'http://localhost:8000'
})

const useAxiosSecure = () => {
    return axiosSexure;
}
 
export default useAxiosSecure;