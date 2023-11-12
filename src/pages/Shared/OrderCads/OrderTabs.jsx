import OrderCards from "./OrderCards";

/* eslint-disable react/prop-types */
const OrderTabs = ({item}) => {
    return (  
        <div className="grid grid-cols-3 gap-7 mt-10">
        {
            item.map(item => <OrderCards key={item._id} item={item}></OrderCards>)
        }
    </div>
     );
}
 
export default OrderTabs;