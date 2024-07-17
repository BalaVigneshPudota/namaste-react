import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error!!!!!!!!!!!!</h1>
      <h2>Something went wrong here. Please try again after sometime</h2>
      <h2>{error.data}</h2>
    </div>
  );
};

export default Error;
