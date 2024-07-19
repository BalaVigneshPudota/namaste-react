import { useEffect, useState } from "react";

const useRestuarantList = () => {
  const [resList, setResList] = useState([]);
  useEffect(() => {
    fetchResList();
  }, []);
  const fetchResList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return resList;
};

export default useRestuarantList;
