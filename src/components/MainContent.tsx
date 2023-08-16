import { Outlet } from "react-router-dom";

export function MainContent() {
    return(
        <>
            <header>Header</header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>Footer</footer>
        </>  
    );
}