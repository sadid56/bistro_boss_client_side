/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const MenuItems = ({item}) => {
    const {name, recipe, image, price} = item;
    return ( 
        <div className="flex items-center gap-5">
            <img style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="" className="rounded-md w-[140px]" />
            <div>
                <h3 className="text-3xl font-semibold">{name}-------</h3>
                <p className="font-medium text-gray-500">{recipe}</p>
            </div>
            <p className="text-[#D99904] text-xl font-medium flex-1">${price}</p>
        </div>
     );
}
 
export default MenuItems;