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
                <a href="https://www.freepik.com/free-photo/abstract-green-grunge-background_4037904.htm#query=dark%20green%20background&position=0&from_view=keyword&track=ais">Backround image by denamorado</a> on Freepik
            </footer>
        </>  
    );
}