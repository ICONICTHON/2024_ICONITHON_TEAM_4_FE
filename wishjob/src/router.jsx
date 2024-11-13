import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/mainPage";
import Signup from "./pages/signup";
import Mypage from "./pages/myPage";
import CompanyInfo from "./pages/company_inform";
import MyInfo from "./pages/myinfoPage";
import MyResume from "./pages/myresumePage";
import Login from "./pages/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
  {
    path: "company_info",
    element: <CompanyInfo />,
  },
  {
    path: "/myinfo",
    element: <MyInfo />,
  },
  {
    path: "/myresume",
    element: <MyResume />,
  },
]);

export default router;
