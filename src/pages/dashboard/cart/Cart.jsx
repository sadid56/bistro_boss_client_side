import { Helmet } from "react-helmet";
import useCards from "../../../hooks/useCards";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [card, refetch] = useCards();
  const axiosSecure  = useAxiosSecure()
  const totalPrice = card.reduce((prev, current) => prev + current.price, 0);

  const handleDelete = id =>{
    const proces = confirm('are you sure to delete ?')
    if(proces){
      axiosSecure.delete(`/cards/${id}`)
      .then(res => {
        if(res.data.acknowledged){
          alert('delete success')
          refetch()
        }
      })
    }
  }
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Carts</title>
      </Helmet>
      <SectionTitle heading={'My Cart'} title={'WANNA ADD MORE?'}/>
      <div className="flex justify-evenly">
        <h3 className="text-3xl font-bold">Total Order: {card.length}</h3>
        <h3 className="text-3zxl font-bold">Total Price:$ {totalPrice}</h3>
        <button className="btn">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           
           {
            card.map((item, index) => <tr key={item._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item?.name}
                  <br />
                </td>
                <td>$ {item?.price}</td>
                <th>
                  <button onClick={()=> handleDelete(item._id)} className="btn hover:bg-red-500 btn-outline btn-circle btn-sm text-red-600">X</button>
                </th>
              </tr>)
           }

            
         
          </tbody>
        
        </table>
      </div>
    </div>
  );
};

export default Cart;
