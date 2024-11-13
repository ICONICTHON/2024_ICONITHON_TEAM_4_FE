import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/mainPage";
import Signup from "./pages/signup"; 
import Mypage from "./pages/myPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/signup", 
    element: <Signup />,
  },
  {
    path: "/mypage",
    element: <Mypage />,
  },
]);

export default router;
