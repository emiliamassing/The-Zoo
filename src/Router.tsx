import { createBrowserRouter } from "react-router-dom";
import { MainContent } from "./components/MainContent";
import { AnimalOverview } from "./components/AnimalOverview";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainContent></MainContent>
    },
    {
        path: "/animals",
        element: <AnimalOverview></AnimalOverview>
    }
]);