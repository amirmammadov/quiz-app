import "../styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*components*/
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
import Error from "./Error";
import { CheckUserExist } from "../helper/helper";

/*react router*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;