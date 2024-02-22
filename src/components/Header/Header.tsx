import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
    return(<ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/checkout"}>Cart</Link></li>
        <li><a>Contact</a></li>
        <li><a>About</a></li>
      </ul>)
}

export default Header;