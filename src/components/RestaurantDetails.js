import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const { resid } = useParams();
  console.log(resid);
  const [resDetails, setResDetails] = useState(null);

  useEffect(() => {
    console.log("Use Effect Called");
    const fetchedData = fetchResData(resid);
  }, []);
  const fetchResData = async (resid) => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" +
        resid
    );
    const jsondata = await data.json();
    console.log(
      "fetched data is " +
        JSON.stringify(jsondata?.data?.cards[2]?.card?.card?.info)
    );
    setResDetails(jsondata?.data?.cards[2]?.card?.card?.info);
  };
  if (resDetails == null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } = resDetails;
  return (
    <div className="resDetails-container">
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <ul>
        <li>{cuisines}</li>
      </ul>
    </div>
  );
};

export default RestaurantDetails;
