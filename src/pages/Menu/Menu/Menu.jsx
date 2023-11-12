import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopulerMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../../Shared/menuCategory/MenuCategory";
import dessert_bg from '../../../assets/menu/dessert-bg.jpeg'
import pizza_bg from '../../../assets/menu/pizza-bg.jpg'
import salad_bg from '../../../assets/menu/salad-bg.jpg'
import soup_bg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu()
    const dessrt = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return ( 
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={coverImg} cover_title={'our menu'} cover_desc={'Would you like to try a dish?'}/>

            <SectionTitle heading={"Don't miss"} title={"TODAY'S OFFER"}/>

            <MenuCategory item={offered} ></MenuCategory>

            <Cover img={dessert_bg} cover_title={'DESSERTS'} cover_desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>

            <MenuCategory item={dessrt} ></MenuCategory>

            <Cover img={pizza_bg} cover_title={'pizza'} cover_desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>

            <MenuCategory item={pizza} />

            <Cover img={salad_bg} cover_title={'salad'} cover_desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>

            <MenuCategory item={salad} />

            <Cover img={soup_bg} cover_title={'soup'} cover_desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>

            <MenuCategory item={soup} />
        </div>
     );
}
 
export default Menu;