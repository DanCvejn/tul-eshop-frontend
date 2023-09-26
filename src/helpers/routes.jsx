import { Layout } from "../components/structure/Layout";
import { HomePage } from "../pages/homepage/HomePage";

export const routes = [
  {
    name: "home",
    element: <Layout />,
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage title={'Přehled'} />,
      },
    ]
  }
]