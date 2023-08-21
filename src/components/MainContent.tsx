import { Outlet } from "react-router-dom";
import { MenuBar } from "./MenuBar";

export function MainContent() {
    return(
        <>
            <header><MenuBar></MenuBar></header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <span>Created in august 2023</span>
            </footer>
        </>  
    );
}