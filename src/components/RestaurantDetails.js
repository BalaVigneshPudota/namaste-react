import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../../utils/useRestaurantDetails";

const RestaurantDetails = () => {
  const { resid } = useParams();
  console.log(resid);
  const resDetails = useRestaurantDetails(resid);
  console.log(resDetails);
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
