
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()  //   console.log(menu);
  const handleDelete = async (item) => {
    const proces = confirm("Are you sure delete this item ?");
    if (proces) {
      const res = await axiosSecure.delete(`/menu/${item._id}`);
      console.log(res.data);
      if (res.data.acknowledged) {
        refetch()
        alert('deleted success!')
      }
    }
  };

  
  return (
    <div>
      <SectionTitle heading={"Hurry Up"} title={"manage all items"} />
      <div className="overflow-x-auto px-24">
        <h3 className="text-4xl font-semibold mb-5">
          Total Items : {menu.length}
        </h3>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>{item?.price}</td>
                <th>
                  <button onClick={()=>navigate(`/dashboard/update-items/${item?._id}`)} className="btn  text-green-600">Update</button>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn hover:bg-red-500 btn-outline btn-circle btn-sm text-red-600">
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
