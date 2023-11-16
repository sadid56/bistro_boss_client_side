import Cover from "../../Shared/Cover/Cover";
import banner from "../../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
// import OrderCards from "../../Shared/OrderCads/OrderCards";
import OrderTabs from "../../Shared/OrderCads/OrderTabs";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'desserts',  'drinks']
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessrt = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img={banner}
        cover_title={"our shop"}
        cover_desc={"Would you like to try a dish?"}
      />
      <div className="flex justify-center my-10 text-center">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTabs item={salad}></OrderTabs> 
          </TabPanel>
          <TabPanel>
            <OrderTabs item={pizza}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={soup}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={dessrt}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={offered}></OrderTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
