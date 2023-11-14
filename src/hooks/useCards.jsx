import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCards = () => {
const axiosSexure = useAxiosSecure()
const {user} = useAuth()
    //tan stack query
    const {refetch ,data : card = []} = useQuery({
        queryKey: ['card', user?.email],
        queryFn: async()=>{
            const res = await axiosSexure.get(`/cards?email=${user?.email}`)
            return res.data;
        }
    })
    return [card, refetch]
}
 
export default useCards;