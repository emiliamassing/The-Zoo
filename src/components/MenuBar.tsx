import { Link } from "react-router-dom";

export function MenuBar() {
    return (
        <nav>
            <i className="fa-solid fa-otter"></i>
            <span>The Zoo</span>
            <ul>
                <li>
                    <Link to="/">Start</Link>
                </li>
                <li>
                    <Link to="/animals">Djuröversikt</Link>
                </li>
            </ul>
        </nav>
    )
}