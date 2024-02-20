import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Tech12</Link>
        <ul>
            <li>
                <Link to="/exams">Exams</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
        </ul>
    </nav>
}