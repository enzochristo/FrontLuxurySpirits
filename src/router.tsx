import { createBrowserRouter } from "react-router-dom";
import { App } from "./App"; // importa o layout com Header/Footer
import { Landing } from "./pages/landing/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // agora sim o App entra como layout
    children: [
      {
        index: true, // mostra Landing quando acessa "/"
        element: <Landing />,
      },
    ],
  },
]);

export { router };
