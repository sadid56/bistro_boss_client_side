import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCards from "../../../hooks/useCards";

/* eslint-disable react/prop-types */
const OrderCards = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const {user} = useAuth();
  const [, refetch] = useCards()
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSexure = useAxiosSecure()

  const handleAddCard = () =>{
    // console.log(item);
    if(user && user?.email){
      const cardItem = {
          menuId: _id,
          name,
          recipe,
          image,
          email: user?.email,
          price,
      }
      //sent data database
      axiosSexure.post('/cards', cardItem)
      .then(res => {
        if(res.data.acknowledged){
          alert('produst add success')
          // refetch card to upodate to item card count
          refetch()
        }
      })
      .catch(error => console.log(error.message))
    }
    else{
      alert('you are not logged it')
      navigate(location.pathname ? location?.pathname : '/login')
    }
  }
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white w-fit px-2 py-1 absolute right-7 top-2">
        $ {price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-start">{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={ handleAddCard} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black uppercase mb-10 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6  group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#111827] group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              ADD TO CARD
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCards;
