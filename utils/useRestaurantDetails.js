import { useEffect, useState } from "react";

const useRestaurantDetails = (resid) => {
  const [resDetails, setResDetails] = useState(null);
  useEffect(() => {
    fetchResDetails(resid);
  }, []);
  const fetchResDetails = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" +
        resid
    );
    const json = await data.json();
    setResDetails(json.data.cards[2]?.card?.card?.info);
  };
  return resDetails;
};

export default useRestaurantDetails;
