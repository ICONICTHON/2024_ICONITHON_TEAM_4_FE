import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/mainPage";
import CompanyInfo from "./pages/company_inform";

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
    path: "company_info",
    element:<CompanyInfo />,
  }
]);

export default router;
