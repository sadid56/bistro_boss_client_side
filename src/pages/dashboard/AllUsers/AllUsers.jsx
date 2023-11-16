import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ALlUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data : users = [],refetch} = useQuery({
        queryKey: ['users'],
         queryFn:async()=>{
            const res = await axiosSecure.get('/users')
            return res.data;
         }})
        //  console.log(users);
    const hanldeDelete = (id)=>{
        const proced = confirm('are you sure to delete?')
       if(proced){
        axiosSecure.delete(`/users/:${id}`)
        .then(res => {
            console.log(res.data);
            refetch()
        })
       }
    }

    const handleUpdateRol = (user) =>{
        const proced = confirm('are you sure to change role ?')
        if(proced){
            axiosSecure.patch(`/users/:${user}`)
            .then(res => {
                console.log(res.data);
                refetch()
            })
        }
    }
    return ( 
        <div className="max-w-3xl mx-auto">
            <SectionTitle heading={'How Many??'} title={"MANAGE ALL USERS"}/>

            <h3 className="text-4xl font-semibold mb-5">Total Users: {users?.length}</h3>

            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           
           {
            users.map((user, index) => <tr key={user._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                 {user?.name}
                </td>
                <td>
                  {user?.email}
                  <br />
                </td>
                <td>
                    {
                    user?.role === 'admin' ? 'admin' : <button onClick={()=>handleUpdateRol(user)}>role</button>
                    }
                    </td>
                <th>
                  <button onClick={()=>hanldeDelete(user?._id)} className="btn hover:bg-red-500 btn-outline btn-circle btn-sm text-red-600">X</button>
                </th>
              </tr>)
           }

            
         
          </tbody>
        
        </table>
      </div>
        </div>
     );
}
 
export default ALlUsers;