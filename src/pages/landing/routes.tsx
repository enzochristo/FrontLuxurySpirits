import { App } from "@/App"; // ajuste se não usar alias
import {Landing} from "./Landing"


const landingRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true,element: <Landing/>,},
    ],
  },
];

export default landingRoutes;
