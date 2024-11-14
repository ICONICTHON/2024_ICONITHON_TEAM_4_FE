import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/mainPage";
import Signup from "./pages/signup"; 
import Mypage from "./pages/mypage/myPage";
import CompanyInfo from "./pages/company_info/company_inform";
import MyInfo from "./pages/mypage/myinfoPage";
import MyResume from "./pages/mypage/myresumePage";
import MyDuty from "./pages/mypage/mydutyPage";
import MyReservation from "./pages/mypage/myreservationPage";
import ForCompany from "./pages/For_Company/ForCompany";
import Login from "./pages/login/login";
import ForCompany_reservation from"./pages/For_Company/ForCompany_reservation";

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
  {
    path: "/myduty",
    element:<MyDuty />,
  },
  {
    path: "/myreservation",
    element:<MyReservation />,
  },
  {
    path:"/ForCompany",
    element:<ForCompany />,
  },
  {
    path:"/ComReservation",
    element:<ForCompany_reservation/>
  },
]);

export default router;
