import { Link } from "react-router-dom";

export function MenuBar() {
    return (
        <nav>
            <i className="fa-solid fa-otter"></i>
            <span>The Zoo</span>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/animals">Animal Overview</Link>
                </li>
            </ul>
        </nav>
    )
}