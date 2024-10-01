import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/root"
import Profil from "./pages/profil";
import Connexion from "./pages/connexion";
import NotFound from "./pages/not_found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        index: true,
        element: <Connexion />,
      },
      {
        path: "profile/:id",
        element: <Profil />,
      },
      {
        path: "NotFound",
        element: <NotFound />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
