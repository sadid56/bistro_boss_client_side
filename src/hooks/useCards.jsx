import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCards = () => {
const axiosSecure = useAxiosSecure()
const {user} = useAuth()
    //tan stack query
    const {refetch ,data : card = []} = useQuery({
        queryKey: ['card', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/cards?email=${user?.email}`)
            return res.data;
        }
    })
    console.log(card);
    return [card, refetch]
}
 
export default useCards;