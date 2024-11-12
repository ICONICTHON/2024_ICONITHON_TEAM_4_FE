import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/mainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/main",
    element: <Main />,
  },
]);

export default router;
