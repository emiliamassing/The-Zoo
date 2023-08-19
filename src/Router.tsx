import { createBrowserRouter } from "react-router-dom";
import { AnimalOverview } from "./components/AnimalOverview";
import { MainContent } from "./components/MainContent";
import { StartPage } from "./components/StartPage";
import { NotFound } from "./components/NotFound";
import { PersonalAnimalPage } from "./components/PersonalAnimalPage";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainContent></MainContent>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <StartPage></StartPage>,
                index: true
            },
            {
                path: "/animals",
                element: <AnimalOverview></AnimalOverview>
            },
            {
                path: "/animals/:id",
                element: <PersonalAnimalPage></PersonalAnimalPage>
            },
        ]
    }    
]);